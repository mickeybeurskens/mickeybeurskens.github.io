+++
title = 'Detecting fruit using FastAI'
date = 2022-06-07
draft = false
+++

Have you ever wondered what that piece of fruit is you encountered during your walk through the woods? You could pick up a book or even use google to get your answer, but why bother when your problems can be solved with Artificial Intelligence? Yes that's right, I'll be over engineering the heck out of this problem and I'll take you along for the ride. Let's get to it.

## Recognizing The Problem
For now we have a clear goal in mind: 

> Create a fruit classification system for three common pieces of fruit. 
That means that the system needs to take in a picture and return the answer with a reasonable degree of certainty. For now we'll pick common forest fruits: Cherries, pears and oranges (you can always change the fruits yourself if you don't happen to like pears).

This all starts with data. And as with many problems in life the answer is "the internet". Let's use it to download some images first. Afterwards those images serve to train the model. For labels we'll trust the internet gods. May our search queries make enough sense to be useful.


```python
from PIL import Image
from fastai.vision.all import *
from fastai.vision.widgets import *
from pathlib import Path
image_path = Path("dataset")
```


```python
from bing_image_downloader import downloader
def download_fruit_images(query):
    downloader.download(
        query, 
        limit=100,
        output_dir=image_path,
        adult_filter_off=True,
        force_replace=False,
        timeout=60,
        verbose=False)
fruits = ["cherry", "pear", "orange"]
for fruit in fruits:
    download_fruit_images(fruit)
```

Each image type has it's own directory which makes life much easier down the line. Let's take a look at one of the images.


```python
im = Image.open(image_path/'cherry/Image_1.jpg')
im.to_thumb(128,128)
```

![Cherry](/essays/fruit_recognition/cherry.png)
    

Well that looks a lot like cherries if you ask me. It's likely that this dataset still contains unsuitable images. Rather then looking through all of them though, we can use the model later on to detect images with a low confidence. That way we do not have to look at every image explicitly to clean the dataset. It's much more resource efficient!

First we'll convert any `png` image to `jpg` to make sure we have a uniform file format.


```python
import os
filenames = get_image_files(image_path)
def replace_png(paths):
    for path in paths:
        if path.suffix == '.png':
            im = Image.open(path)
            rgb_im = im.convert('RGB')
            rgb_im.save(path.parent / (path.stem + '.jpg'))
            os.remove(path)
replace_png(filenames)
```

It's a good idea to check for corrupt images at this point. Let's see if all the files are there (we expect 300 of them) and if they are usable!


```python
filenames = get_image_files(image_path)
print(f"Number of images: {len(filenames)}")
failed = verify_images(filenames)
failed
```

    Number of images: 300
    
    (#0) []

Now to unlink the unlink failed data (if there is any). This makes it easier to apply this method to other data if the need arises. 


```python
failed.map(Path.unlink)
```


    (#0) []

## Data Handling

Alright, we've collected some data. Now we can gather the data in a [_fastai_ ](https://www.fast.ai) collection and apply some data augmentation before training our brand new recognition model. This requires us to define the structure of our dataset in something called `DataBlock`, and then load in in using `DataLoaders`. The beauty of `DataLoaders` is that it automatically handles the "train and validation split" for us. Check out the [fastai jupyter notebook](https://github.com/fastai/fastbook/blob/master/02_production.ipynb) on image recognition for more details on what is happening below!


```python
fruit = DataBlock(
    blocks=(ImageBlock, CategoryBlock),
    get_items=get_image_files,
    splitter=RandomSplitter(valid_pct=0.2, seed=125),
    get_y=parent_label,
    item_tfms=RandomResizedCrop(128, min_scale=0.5),
    batch_tfms=aug_transforms()
)
```


```python
data_loaders = fruit.dataloaders(image_path)
```


```python
data_loaders.valid.show_batch(max_n=10, nrows=2)
```


​    
![Validation batch](/essays/fruit_recognition/val_batch.png)
​    


We'll continue for now and return to the subject of data quality a bit later. For now let's train our model!

## Model Training

It is finally time to train the model! Again the _fastai_ library makes it a breeze to use pre-trained networks and retrain them for our own purposes. In this case we're going to recognize us some fruit.


```python
learner = vision_learner(data_loaders, resnet18, metrics=error_rate)
learner.fine_tune(4)
```

<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: left;">
      <th>epoch</th>
      <th>train_loss</th>
      <th>valid_loss</th>
      <th>error_rate</th>
      <th>time</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>0</td>
      <td>1.779194</td>
      <td>0.692922</td>
      <td>0.216667</td>
      <td>00:06</td>
    </tr>
  </tbody>
</table>

<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: left;">
      <th>epoch</th>
      <th>train_loss</th>
      <th>valid_loss</th>
      <th>error_rate</th>
      <th>time</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>0</td>
      <td>0.918271</td>
      <td>0.394905</td>
      <td>0.133333</td>
      <td>00:05</td>
    </tr>
    <tr>
      <td>1</td>
      <td>0.632222</td>
      <td>0.191317</td>
      <td>0.083333</td>
      <td>00:05</td>
    </tr>
    <tr>
      <td>2</td>
      <td>0.494863</td>
      <td>0.122231</td>
      <td>0.066667</td>
      <td>00:05</td>
    </tr>
    <tr>
      <td>3</td>
      <td>0.392467</td>
      <td>0.101128</td>
      <td>0.033333</td>
      <td>00:05</td>
    </tr>
  </tbody>
</table>


```python
interp = ClassificationInterpretation.from_learner(learner)
interp.plot_confusion_matrix()
```


![Confusion matrix](/essays/fruit_recognition/conf_matrix.png)
    


And there we are, a trained model! The diagonal shows all the correctly classifier images, so it's doing pretty well. Now is the time to revisit our earlier quarrel with data quality. Let's look at the images that produces the highest error in our training dataset. In this case our validation data only shows 2 incorrectly classified images. 


```python
interp.plot_top_losses(5, nrows=1)
```


![png](/essays/fruit_recognition/top_losses.png)
    


Apparently it's quite difficult to distinguish cherry blossom from oranges. Since classifying blossom is not exactly the point of this model we might continue to remove the offending images from the dataset. For now though I would call this model a succes! Now we only need to make it easier for users to interact with our model. Luckily _fastai_ provides! Let's upload a new cherry picture and see if our model classifies correctly.


```python
img = PILImage.create("cherry.jpg")
img.to_thumb(128, 128)
```


![png](/essays/fruit_recognition/cherry_final.png)
    


```python
pred,pred_idx,probs = learner.predict(img)
```

```python
lbl_pred = widgets.Label()
lbl_pred.value = f'Prediction: {pred}; Probability: {probs[pred_idx]:.04f}'
lbl_pred
```


    Label(value='Prediction: cherry; Probability: 0.9985')


It's definitely a cherry it seems! Thank you Over Engineering, we'll never have to wonder about fruit again. Now you can go ahead and play with the model and see how many pieces of fruit you can identify!