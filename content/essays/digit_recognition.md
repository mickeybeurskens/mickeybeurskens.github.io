+++
title = 'Custom Models And Loss Functions in FastAI'
date = 2022-06-20
draft = false
+++

Here we are again MNIST. It's been many moons since I last saw you. How have you been? Remember the time we struggled? Remember all the pure Python loops and crazy coding standards? I felt that is was high time to set the record straight. Let's do this one more time and do it right!

All sillyness aside it's nice to revisit old problems every now and again. It's been a long time since I first solved this problem and [learned about neural networks](http://neuralnetworksanddeeplearning.com/) in the process. Now we have new shiny tools like [fastai](https://docs.fast.ai/) to solve this problem in a jiffy. We'll also see how to implement a custom PyTorch model, create our own loss function and evaluate the performance to some degree. Go time.

## Problem Definition

To recapitulate: The challenge of the MNIST dataset is to recognize the handwritten digits contained in the dataset. In order to score well the model, trained on the _training_ data, must do well when evaluated on the _validation_ data. Both are included in the dataset. Let's first form a technical definition of this problem. 

Each image in the dataset is a 28 by 28 8-bit integer array. We would like to create a model that, given the input array, classifies the outcome as one of 10 possibilities: The numbers 0-9. We can _evaluate_ or model based on the accuracy of its predictions, meaning we simply look at the ratio of correct answers versus total answers. However, the model also needs a _loss function_ in order to properly update its parameters. It is crucial to think about this loss function first. If we cannot come up with one it won't matter how fancy _fastai_ is or how many GPUs we throw at the problem.

## Loss Function

Well now, let's think about a format that would help us create a proper loss function. Remember the properties of the loss function: The output needs to be lower the more accurate the answer is, and it should be nicely differentiable to be able to calculate gradients for our model parameters. 

The output of our model can generally be what we want it to be. In this case let's try an array of 10 numbers.


```python
from fastai.vision.all import *
import seaborn as sns
device_name = 'cuda'
# device_name = 'cpu'  # Change to CPU if you do not have a GPU available on your machine.
```


```python
model_output = Tensor([0.2, 0.1, 0, 0.4, 0.3, 0, 0, 0, 0, 0])
model_output.sum()
```




    tensor(1.)



By convention each element in this array corresponds to one of the categories we are trying to predict. The first entry indicates _0_ and the last one _9_. We're also making sure that the sum of all entries equals 1 and every entry is 0 or larger. This way the current output array gives us something akin to the probability our network assigns to every category for a single input image.

Now imagine that this "model_output" corresponds to the number _3_. We can construct a ground truth tensor like this:


```python
output_gt = Tensor([0, 0, 0, 1, 0, 0, 0, 0, 0, 0])
```

Now we're cooking with gas! This construction allows us to formulate a loss function! We'll take the absolute value of thedifference between the ground truth (i.e. label) and the output tensor. Then we take the mean of this new tensor. This creates a loss function that checks all our requirements:


```python
loss_tensor = torch.abs(model_output-output_gt)
loss_tensor
```




    tensor([0.2000, 0.1000, 0.0000, 0.6000, 0.3000, 0.0000, 0.0000, 0.0000, 0.0000,
            0.0000])




```python
loss = loss_tensor.mean()
loss
```




    tensor(0.1200)



To check if this works we can create a new output tensor that contains better predictions. Remember, the loss should be lower once we calculate it using out loss function. Let's put the loss in a function while we are at it.


```python
def mnist_loss(predictions, targets):
    return torch.abs(predictions-targets).mean()
```


```python
model_output_better = Tensor([0.2, 0.1, 0, 0.7, 0, 0, 0, 0, 0, 0])
mnist_loss(model_output_better, output_gt)
```




    tensor(0.0600)



This loss function can be used to train our model, great! In the process we have also defined the output format of our model. Luckely we thought about this up front. Let's also define a function to compute the accuracy of the model so we can evaluate model performance later.  


```python
def batch_accuracy(predictions, targets):
    correct = torch.argmax(predictions, dim=0) == torch.argmax(targets, dim=0)
    return correct.float().mean()

batch_accuracy(model_output_better, output_gt)
```




    tensor(1.)



Now we can focus on loading our data, setting up our model and configuring the training procedure. 

## Loading MNIST Data

The first step is loading the complete MNIST dataset with labels for both training and validation. The MNIST data is divided into a training and a test set. Thus we'll split up the data in the training directory into validation and training data. That way we can validate the model performance as we develop, and test the final performance on the test set. This process not only prevents model overfitting, but also protects us from our own biases during development by explicitly splitting validation and testing data.


```python
mnist_path = untar_data(URLs.MNIST)
mnist_path.ls()
```




    (#2) [Path('/home/bluegnome/.fastai/data/mnist_png/training'),Path('/home/bluegnome/.fastai/data/mnist_png/testing')]




```python
train_path = mnist_path/'training'
train_path.ls()
```




    (#10) [Path('/home/bluegnome/.fastai/data/mnist_png/training/5'),Path('/home/bluegnome/.fastai/data/mnist_png/training/6'),Path('/home/bluegnome/.fastai/data/mnist_png/training/1'),Path('/home/bluegnome/.fastai/data/mnist_png/training/7'),Path('/home/bluegnome/.fastai/data/mnist_png/training/8'),Path('/home/bluegnome/.fastai/data/mnist_png/training/2'),Path('/home/bluegnome/.fastai/data/mnist_png/training/4'),Path('/home/bluegnome/.fastai/data/mnist_png/training/3'),Path('/home/bluegnome/.fastai/data/mnist_png/training/0'),Path('/home/bluegnome/.fastai/data/mnist_png/training/9')]




```python
mnist = DataBlock(
    blocks=(ImageBlock(cls=PILImageBW), MultiCategoryBlock),
    get_items = get_image_files,
    splitter=RandomSplitter(valid_pct=0.2, seed=125),
    get_y=parent_label,
)
```

Here we have created a [fastai DataBlock](https://docs.fast.ai/data.block.html) object that loads the data and automatically creates a training and validation split for our data. It also automatically loads the labels by looking at the parent directory name of the image files (using `get_y=parent_label`).  


```python
data_loaders = mnist.dataloaders(train_path)
```


```python
data_loaders.train.show_batch()
```


​    
![png](/blog_store/assets/digit_recognition/handwritten_digits_20_0.png)
​    



```python
data_loaders.valid.show_batch()
```


​    
![png](/blog_store/assets/digit_recognition/handwritten_digits_21_0.png)
​    


So now we have loaded both the validation and the training data together with labels. Great! Let's have a look at the format of our data by retrieving a batch of training data from the data loader.


```python
train_loader = data_loaders.train
data_tuple = [d for d in train_loader]
data_tuple[0][0].shape, data_tuple[0][0].dtype, data_tuple[0][1].shape, data_tuple[0][1].dtype
```




    (torch.Size([64, 1, 28, 28]),
     torch.float32,
     torch.Size([64, 10]),
     torch.float32)




```python
test_labels = data_tuple[0][1][0:4]
test_labels
```




    TensorMultiCategory([[0., 0., 0., 0., 0., 0., 0., 0., 1., 0.],
            [1., 0., 0., 0., 0., 0., 0., 0., 0., 0.],
            [0., 0., 1., 0., 0., 0., 0., 0., 0., 0.],
            [0., 0., 0., 0., 0., 0., 0., 0., 1., 0.]], device='cuda:0')



Here we can see that the loader retrieves a batch of 64 samples at a time. Every sample has one colour channels, which is done by passing `ImageBlock(cls=PILImageBW)` to the `DataBlock` API. Label data is represented as a tensor of integers. Notice that the labels of our dataset are not in the format we need. Every category is an array with the properties as discussed during our loss function definition. This is called [one-hot encoding](https://www.google.com/search?client=firefox-b-d&q=one+hot+encoding), which fastai provides in the form of the `MultiCategoryBlock` in the `DataBlock` API. 

## Model Training

And now some magic. Let's define a simple model with two layers and sigmoid activation function and a Softmax layer to ensure the output array sums to 1. We'll use our previously defined loss function and [Stochastic Gradient Descent](https://pytorch.org/docs/stable/generated/torch.optim.SGD.html) to optimize our model. It's really basic network as far as vision architecture goes, but it's always good to set a baseline first and see if improvement is necessary from there. This is also a good moment to try creating a custom Torch model! We're going to use it here to reshape the image input into a single vector, before processing it with the previously mentioned layers.


```python
m = nn.Softmax(dim=0)
m(Tensor([2, 3, 4, 5, 6, 7]))
```




    tensor([0.0043, 0.0116, 0.0315, 0.0858, 0.2331, 0.6337])




```python
class MNISTModel(nn.Module):
    def __init__(self):
        super().__init__()

        self.sequential = nn.Sequential(
            nn.Linear(28*28, 100),
            nn.Sigmoid(),
            nn.Linear(100, 10),
            nn.Sigmoid(),
            nn.Softmax(dim=1),
        )
        
    def forward(self, x: torch.Tensor) -> torch.Tensor:
        x = TensorBase(torch.reshape(x, (-1, 28*28)))
        x = self.sequential(x)
        return x
```

Since the loss function cannot deal directly with `TensorMultiCategory` we need to typecast the input tensor `x` to `TensorBase` in `forward`. Since we now know the format of our output data we can also see that the loss and accuracy functions need to be tweaked to fit. 


```python
test_images = data_tuple[0][0][0:4]
reshaped_images = test_images.view((-1, 28*28))
reshaped_images
```




    TensorImageBW([[0., 0., 0.,  ..., 0., 0., 0.],
            [0., 0., 0.,  ..., 0., 0., 0.],
            [0., 0., 0.,  ..., 0., 0., 0.],
            [0., 0., 0.,  ..., 0., 0., 0.]], device='cuda:0')




```python
def mnist_loss(predictions, targets):
    return torch.abs(predictions-targets).sum(dim=1).mean()
```


```python
def batch_accuracy(predictions, targets):
    correct = torch.argmax(predictions, dim=1) == torch.argmax(targets, dim=1)
    return correct.float().mean()
```


```python
m = MNISTModel().to(device_name)
prds = m(test_images)
prds, prds.sum(dim=1)
mnist_loss(prds, test_labels), batch_accuracy(prds, test_labels)
```




    (TensorMultiCategory(1.7971, device='cuda:0', grad_fn=<AliasBackward0>),
     TensorMultiCategory(0., device='cuda:0'))



Yep, that worked. Now to train the model!


```python
learn = Learner(data_loaders, MNISTModel(), opt_func=SGD,
                loss_func=mnist_loss, metrics=batch_accuracy)
```


```python
lr = 1
learn.fit(10, lr)
```





<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: left;">
      <th>epoch</th>
      <th>train_loss</th>
      <th>valid_loss</th>
      <th>batch_accuracy</th>
      <th>time</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>0</td>
      <td>1.655758</td>
      <td>1.651210</td>
      <td>0.767417</td>
      <td>00:13</td>
    </tr>
    <tr>
      <td>1</td>
      <td>1.616473</td>
      <td>1.618342</td>
      <td>0.786167</td>
      <td>00:13</td>
    </tr>
    <tr>
      <td>2</td>
      <td>1.604758</td>
      <td>1.607979</td>
      <td>0.787083</td>
      <td>00:13</td>
    </tr>
    <tr>
      <td>3</td>
      <td>1.599679</td>
      <td>1.599422</td>
      <td>0.806083</td>
      <td>00:13</td>
    </tr>
    <tr>
      <td>4</td>
      <td>1.589731</td>
      <td>1.589816</td>
      <td>0.845833</td>
      <td>00:14</td>
    </tr>
    <tr>
      <td>5</td>
      <td>1.583133</td>
      <td>1.584165</td>
      <td>0.859417</td>
      <td>00:13</td>
    </tr>
    <tr>
      <td>6</td>
      <td>1.578634</td>
      <td>1.580221</td>
      <td>0.882833</td>
      <td>00:13</td>
    </tr>
    <tr>
      <td>7</td>
      <td>1.574622</td>
      <td>1.576233</td>
      <td>0.897833</td>
      <td>00:13</td>
    </tr>
    <tr>
      <td>8</td>
      <td>1.571188</td>
      <td>1.573462</td>
      <td>0.902333</td>
      <td>00:13</td>
    </tr>
    <tr>
      <td>9</td>
      <td>1.569816</td>
      <td>1.571527</td>
      <td>0.907000</td>
      <td>00:13</td>
    </tr>
  </tbody>
</table>


It seems to learn! Time to evaluate the results in a bit more detail. 

## Evaluating The Results

Let's get a sense of the most common mistakes first, and use the model results to refine our next training loop. The confusion matrix is a great place to start. Before all that though we should play a bit with our new model! Fun is important after all. 


```python
test_im = PILImageBW.create(mnist_path/"training/1/3811.png")
test_im.to_thumb(128, 128)
```




![png](/blog_store/assets/digit_recognition/handwritten_digits_39_0.png)
    




```python
out = learn.predict(test_im)
out[1].argmax()
```



    TensorBase(1)



It's a `1`! Perhaps trivial for us humans, but I'd say we can be proud of our electricity guzzling friend for concluding the same. Onwards to the confusion matrix. 

(Note: Excuse me for the following code. It is not elegant but it does the job. If you have a more elegant solution, feel free to hit me up through email!)


```python
val_data = [data for data in learn.dls.valid_ds]
print(val_data[0][0]), print(val_data[0][1])
```

    PILImageBW mode=L size=28x28
    TensorMultiCategory([1., 0., 0., 0., 0., 0., 0., 0., 0., 0.])





    (None, None)




```python
val_ims = [im for im, label in val_data]
val_labels = [label for im, label in val_data]
val_ims[0], val_labels[0]
```




    (PILImageBW mode=L size=28x28,
     TensorMultiCategory([1., 0., 0., 0., 0., 0., 0., 0., 0., 0.]))




```python
def conf_matrix(predictions, targets):
    conf_matrix = np.zeros((10, 10))
    for pred, tar in zip(predictions, targets):
        conf_matrix[pred.argmax()][tar.argmax()] += 1
    return conf_matrix
```


```python
n_validation_ims = 400
```


```python
with learn.no_bar(), learn.no_logging():
    val_preds = [learn.predict(im) for im in val_ims[:n_validation_ims]]
```


```python
val_preds = [prds for _, prds, _ in val_preds]
conf = conf_matrix(val_preds, val_labels[:n_validation_ims])
sns.heatmap(conf, annot=True)
```




    <AxesSubplot:>




​    
![png](/blog_store/assets/digit_recognition/handwritten_digits_47_1.png)
​    


Now we can evaluate the performance of our network. The errors seems too be nicely distributed! Since the classification accuracy is not great yet we can train the model some more until the validation loss does not drop anymore. (If the training loss drops but the validation loss increases it's a clear indication your model is over-fitting on the training data). Another option is to try some data augmentation or a different model architecture. For now though, this is where we leave off. I hope you enjoyed this post, see you in the next one!
