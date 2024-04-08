> Part of the [Alignment Research](/#/sequence/booting-up-alignment-research/) sequence.

This sequence of posts might be interesting to you if you are drawn to the technicalities of Artificial Intelligence (AI) alignment or are worried about the existential risk (x-risk) that AI may pose. For those of you that are not familiar with these ideas, I should clarify what I mean by “alignment”. I consider alignment the encouraging of “good” behavior and limiting of “bad” behavior of autonomous agents. You will find that alignment is often discussed in the context of AI safety, where it might mean “aligning AI agents that are as smart, or smarter than, humans”.

There is much debate going on in the AI research world regarding how likely that is to happen, when it might happen and what the consequences might be. I personally think that we (humans) are not ready to face an intelligent agent on that level with out current (alignment) technology. I also think the range of default outcomes, where we do not take the challenge of aligning AI more seriously than we do now, is probably horrible and possibly world ending. This may sound dramatic or “out there”. Researchers with a much better track record than me like [Yann Lecun](https://en.wikipedia.org/wiki/Yann_LeCun), Chief AI Scientist at Meta (Facebook), certainly think I am wrong. Others like [Geoffrey Hinton](https://en.wikipedia.org/wiki/Geoffrey_Hinton), another titan of the field, sound the alarm (Hinton even quit his job at Google over this). 

To me then, it seems time to learn more about the issue. I do not like being motivated by fear, however useful it might be to bring pressing issues to our attention, and think a good response to a dangerous situation is probably a mix of courage, humor, serious thinking, patience and hard work. These sequences are written in that spirit. The [80000hours](https://80000hours.org/problem-profiles/artificial-intelligence/) website provides a good enough starting point for those of you that want to know more about why I consider alignment a challenge to be taken seriously.

![Untitled](/blog_store/assets/booting_up_alignment/1_1.png)

> Asking ChatGPT4-V October 19, 2023: “Why is this funny?”
>
> Answer: 
> “The comic plays on the misinterpretation of perspective, where one dinosaur mistakenly believes an object (meteor) is small because it's distant, implying ignorance of impending danger. The humor is further emphasized when the other dinosaur humorously questions monetary influence on the first dinosaur's opinion, only for it to be absurdly dismissed because dinosaurs don't have currency.”
>
> Nothing like explaining a joke to kill it. Notice that ChatGPT can read comics now.
>
> Visit [poorlydrawnlines](https://poorlydrawnlines.com/comic/concerned/) for more giggles.

I’ve been thinking about making an entry into the field but have not seen anyone else take the plunge publicly, although I have talked to people who got into the field without documenting the steps. It may be a useful thing to do, not least because writing about it will help my own understanding greatly.  

The format will probably change as we go. As a first attempt I want to present you with the resources I am using to learn and provide short commentary on the contents of each, so you can estimate their usefulness for your particular goals. I might occasionally go into detail about my own technical work, although I might choose to write a separate post if that is the case. I will also write a syllabus for each post with terms I think are relevant or interesting. I’ll also use the opportunity to serve you some quick news bits as I come across them. 

The structure this week:

1. ********************Data Input:******************** Progress in learning this week.
2. ************************************Talking The Talk (Syllabus):************************************ Overview of interesting concepts.
3. ******************************AI New Corner:****************************** Short overview of some interesting AI news.

## Data Input

I’ve been talking about AI alignment, but you will also notice the term AI safety. I consider alignment a more accurate term representing what I aim to do. Safety can be construed more broadly. Too broadly in my opinion, as nothing is truly ever safe. It is a helpful term to use when doing research though.

There are a few good resources to get a broad view of the field and start learning. Here are some I know of and can recommend. I will be following the AI Safety Fundamentals (yes, safety) course first to see where it goes.

- **[80000hours.org](https://80000hours.org/):** In their own words: “You have 80,000 hours in your career. This makes it your best opportunity to have a positive impact on the world.” Although I see value in starting small and building up from there, this grand statement makes sense to me. Also has lots of resources for planetary challenges not related to AI. Worth reading.
- **[AI Alignment Forum:](https://www.alignmentforum.org/)** “The Alignment Forum is a single online hub for researchers to discuss all ideas related to ensuring that transformatively powerful AIs are aligned with human values. Discussion ranges from technical models of agency to the strategic landscape, and everything in between.**”** Closely linked to the broader oriented [LessWrong](https://www.lesswrong.com/) forum (which I also like). Technical discussions. Check the “Library” here, specifically “[Leveling Up: advice & resources for junior alignment researchers](https://www.alignmentforum.org/s/mCkMrL9jyR94AAqwW)” to get started.
- **[AI Safety Fundamentals:](https://aisafetyfundamentals.com/)** Free courses on [AI alignment](https://course.aisafetyfundamentals.com/alignment) and [AI governance](https://course.aisafetyfundamentals.com/governance). You can follow the curriculum yourself, or apply to join a group with live sessions. I will be following the AI alignment course independently for now. You will notice that the course material consists in part of links to material freely available on the internet, which I think is an awesome way to learn and to use the internet. Just point to the best material.

### Safety Fundamentals 0: Core Resources

This week I finished the course content (excluding exercises and most extra reading) for module 0: “Introduction to Machine Learning”. I am already familiar with machine learning (I’ve worked in the field for a couple of years), but this was still great and I learned a thing or two about the basics! Can recommend skimming through if you have a similar background. If you have no machine learning knowledge, I suggest taking time to understand this part and also do some exercises. Seems like a necessary base to build on. I frequently “paused and thought”, which seemed to work better for understanding. 

- **[A short introduction to Machine Learning](https://www.alignmentforum.org/posts/qE73pqxAZmeACsAdF/a-short-introduction-to-machine-learning) by Richard Ngo.**
    - Incredibly helpful introduction as blog post. Introduces many relevant concepts at a high level. Taxonomy helps to distinguish related concepts. Short history for context.
    - Goes into the meaning of several concepts like supervised learning, unsupervised learning and reinforcement learning.
    - Don’t miss the plot at the end, hidden between the footnotes.
- **[But what is a neural network?](https://www.youtube.com/watch?v=aircAruvnKk) by 3Blue1Brown (2017)**
    - Incredible production quality for all three videos. Great to see the concepts in a different way from academic papers or static blogs.
    - Provides intuition first, theory later.
- **[Gradient descent, how neural networks learn](https://www.youtube.com/watch?v=IHZwWFHWa-w) by 3Blue1Brown (2017)**
    - Take a look at the [Kahn Academy multivariate calculus course](https://www.khanacademy.org/math/multivariable-calculus/multivariable-derivatives/gradient-and-directional-derivatives/v/gradient) for more background knowledge on the mathematics involved.
    - Also, [deeplearningandneuralnetworks.com](http://deeplearningandneuralnetworks.com) is awesome! From scratch implementation of neural network in python. Did this one summer years ago, and was incredible for understanding.
- **[What is backpropagation really doing?](https://www.youtube.com/watch?v=Ilg3gGewQ5U) by 3Blue1Brown (2021)**
    - Can recommend the [fourth part](https://www.youtube.com/watch?v=tIeHLnjs5U8&list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi&index=4) in this series as well for the more mathematically interested.
    - For more info and a different perspective, check the video “[Becoming A Backprop Ninja](https://www.youtube.com/watch?v=q8SA3rM6ckI)”  by Andrej Karpathy. Focus on implementation.
- **[Machine Learning for Humans, Part 2.1](https://medium.com/@v_maini/supervised-learning-740383a2feab) by Vishi Maini (2017)**
    - Did not read in detail. Seemed similar to the first post by Richard Ngo content wise, but the perspective might help people new to the concepts.
- **[What is self-supervised learning?](https://youtu.be/sJzuNAisXHA) by CodeBasics (2021)**
    - Short 5 minute video, but nothing new for me so I mostly skipped.
- **[Introduction to reinforcement learning](https://www.youtube.com/watch?v=TCCjZe0y4Qc&list=PLqYmG7hTraZDVH599EItlEWsUOsJbAodm) by Hado van Hasselt (2021)**
    - Entire lecture series by DeepMind and UCL.
    - Watched the first hour of the lecture. Great content overall, but there is some mathematical notation involved. For a first pass try to understand the concepts. Go back later to the mathematical notation if you’d like to learn to implement.
    - Good focus on difference between the ***********RL Problem*********** and the solutions like ***************Deep Learning.***************
- **[Transformers, explained: Understand the model behind GPT, BERT, and T5](https://www.youtube.com/watch?v=SZorAJ4I-sA) by Google (2021)**
    - Good video overview of transformers, although it is a bit light on the content at times. Good for those getting into the ML field.
    - Might be clearer if you know what RNNs are and do.
    - The bonus video goes in much more in-depth. Sometimes a bit hard to understand without the paper side-by-side, but that is not the fault of the video! Simply a hard concept to explain. Great resource, but beginners can skip this and come back later.

### Safety Fundamentals 0: Additional Resources

I already read a couple of the additional resources. These are not as easy to understand and are best viewed as avenues for further understanding. Most require a significant time investment to get through. In particular the ideas in “Spinning up deep RL”, which have been immensely helpful to me for my reinforcement learning related projects, took more time to learn to implement than the estimated time necessary for the entire “AI Safety Fundamentals” course.

- **[Spinning up deep RL: Part 1](https://spinningup.openai.com/en/latest/spinningup/rl_intro.html) by OpenAI (2018)**
- **[Spinning up deep RL: Part 2](https://spinningup.openai.com/en/latest/spinningup/rl_intro2.html) by OpenAI (2018)**
    - Both links provide a high quality in-depth resource to understand the reinforcement learning problem in more mathematical terms. Also provides a taxonomy of different models, a guide for how different models work and code to run the models. Will take some time to get through in detail (I have not read everything and have not tried all the models). Treasure trove of further reading. Also definitely read the section on “[Spinning Up As A Deep RL Researcher](https://spinningup.openai.com/en/latest/spinningup/spinningup.html)”, which is a great take on what it takes to do good research in general.

One of the best resources I have ever found on learning practical deep learning skills is the [FastAI course](https://course.fast.ai/) by Jeremy Howard et al. Going through the jupyter notebooks will probably give you a solid understanding of deep learning, given you already have coding skills. Otherwise, learn some basic python coding skills first. 

## Talking The Talk (Syllabus)

![Untitled](/blog_store/assets/booting_up_alignment/1_2.png)

> Credit [where credit is due.](https://xkcd.com/)
> 

| Term | Explanation |
| --- | --- |
| Autonomous Agents | An entity that can make decisions and act out those decisions in the world. |
| Alignment | Autonomous agents in a system are in alignment when they pursue the same ends and want the same actions to happen. The more two agents value the same state of the world, the more they are in alignment. Not being perfectly aligned means that one agent might take actions that are detrimental to the other. This happens in the world all the time. Misalignment becomes an existential threat for agent B once agent A can take actions that prevent agent B  from exercising control of the future world. This could happen through elimination of B, but could happen in other ways such as imprisonment of B.  |
| Artificial intelligence | Massively overloaded term these days, with many multiple uses. Can mean the counterpart to “natural intelligence”, or intelligent creatures formed through evolution. It can denote the field of study. Can also mean the specific techniques of “deep learning” used to solve tasks in the world. Sometimes this just means “machine learning” without “deep learning”, mostly in marketing and sales. There is currently a large debate on whether current algorithms are actually intelligent. This is why the terms Artificial General Intelligence and Artificial Super Intelligence exist, which we will explore in a future post hopefully. |
| Machine learning | The specific techniques that use data to create a model of some relationship in that data. |
| Deep learning | Using deep neural networks in machine learning. |
| Neural networks | A specific set of mathematical/software constructs that work “similar” to how neurons in a brain works. They often have many layers of “neurons” constituting a network, that activate based on an input signal from other neurons or the input. Deep neural networks are simply neural networks with “many” layers. That is significant, because you need some additional techniques to robustly train deep neural networks versus shallow ones. |
| Backpropagation | The technique used to efficiently update tunable parameters in a neural network. |
| Gradient descent | One of the techniques used to actually compute which update needs to be applied to a neural network. |
| Supervised learning | A setup where a machine learning algorithm is used to train a model that matches input data to output data. The output data used for learning is specifically labeled, such as labeling an image of a dog as dog images.  |
| Unsupervised learning | Similar to supervised learning, but no explicit labeling has taken place. Heuristics are instead applied to find structure in the data, such as context data in text or distance in points on a graph.  |
| Reinforcement learning | A setup where a state of a system is evaluated, and a reward is assigned. The system is then trained to do more “positive” things (high reward) and less “negative” things (no/negative reward). A sufficient analogy is training a pet. |
| Transformers | A type of neural network structure or architecture.  |

For a broader overview of machine learning terms you can use this resource from the extra course material: ****[Machine Learning Glossary](https://developers.google.com/machine-learning/glossary) by Google (2017).**

## AI News Corner

[ChatGPT can now reason to give you directions](https://twitter.com/AISafetyMemes/status/1714250333117972532). Not sure how robust this is, so you are welcome to check this and share results. If true than this is further along than I thought. Just adding modalities such as images might be enough to significantly enhance capabilities:

> “Hey GPT4-V, this is what’s in front of me. Let’s step by step find the nearest supermarket using only logical reasoning.”
> 
> 
> Yes, that’s right - GPT4 was able to figure out how to direct a guy, step by step, to the nearest supermarket just by looking at a photo of a street, then using logical reasoning - piecing together clues from the tiny details in the roads, the signs, the cars.
> 

[Google DeepMind has released a huge robotics ML dataset.](https://www.deepmind.com/blog/scaling-up-learning-across-many-different-robot-types) They claim to achieve up to 3 times higher performance in learned robotics tasks when the robot has been trained on data from “multiple bodies”. The data is open for other researchers too. Here is a quote:

> Today, we are launching a [new set of resources for general-purpose robotics learning](https://arxiv.org/abs/2310.08864)  across different robot types, or embodiments. Together with partners 
from 33 academic labs we have pooled data from 22 different robot types 
to create the Open X-Embodiment dataset. We've also released RT-1-X, a 
robotics transformer (RT) model derived from [RT-1](https://blog.research.google/2022/12/rt-1-robotics-transformer-for-real.html) and trained on our dataset, that shows skills transfer across many robot embodiments.


Here is Nassim Taleb, whose work is absolutely phenomenal and worth reading (Black Swan and Antifragile are probably most known), in an [interview at the Dickey Center for International Understanding at Dartmouth](https://youtu.be/mVCxfrSMnMQ?feature=shared&t=3012) talking about why he is “not worried about AI”. Good practice to expose yourself to many different arguments, especially if someone makes them who has likely spent time really thinking on the topic.

Interesting point about getting the most mediocre assistant possible because of the way it is trained. Interesting counter point being that “giving directions” as mentioned earlier seemed pretty general regardless. It could be that the most efficient compressed representation in a neural network of all the “mediocrity” comes down to a pretty accurate model of the world. Not sure about this, and definitely not as sure as Taleb seems to be. Any insight is welcome here. I still estimate the likelihood of generalization from the data high.

## That’s All, Folks

And that is it for the first “Booting Up Alignment Research”. Feedback is welcome. Thanks for reading. See you next time and take care.