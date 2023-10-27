

> In the “Booting Up Alignment Research” sequence I show you how I learn about the field of AI alignment.
>
> I noticed that there are ample learning resources available, but that it remains hard to evaluate where to start and usefully spend time and effort. I hope documenting the steps can help you understand the field at lower cost or provide a good starting point. Welcome!

# Booting Up Alignment Research #2

Continuing with the [AI safety fundamentals course, part 1](https://course.aisafetyfundamentals.com/alignment?session=1). This part of the course is about the definition of Artificial General Intelligence and why it can pose serious risk. 

Many of the sources are only partial reading. A full reading would probably be insightful, but I feel the goal of this part of the course is to provide an overview. The additional material contains great extra reading too. There are “flashcards” available for each source if you would like to use those. I will limit myself to the core reading and will not use the flash-cards. It is not my goal to exactly reproduce material, but explore concepts in AI alignment. 

Before we start, it is worth realizing that the sources here are already significantly biased toward accepting AGI as existentially risky. As such I do not expect to find the ********************************strongest arguments against AGI risk******************************** to appear here. Evidence can be evaluated in and off itself, but the adversarial process helps. (AGI From First Principles discusses some genuine alternative options which were helpful.) Still I found most of the sources to again be of high quality. 

## Safety Fundamentals 1: **Artificial General Intelligence**

- **[Visualizing the deep learning revolution](https://medium.com/@richardcngo/visualizing-the-deep-learning-revolution-722098eb9c5) by Richard Ngo (2023)**
    - A primer on the recent pace of AI progress. Well worth reading. The progress of the past couple of years is absolutely staggering.
    - The final paragraph touches on worry about safety if this keeps going. Though the worries may be legitimate it is worth keeping in mind that the evidence in ******************************this particular post****************************** mostly points to the staggering rate of progress, not the risks of that progress. Worth keeping in mind.
- **[On the opportunities and risks of foundation models](https://arxiv.org/abs/2108.07258) by Bommasani (2022)**
    - Notice that you do not need to read the full paper for the course. It is 160 pages long. I will treat this as reference material for now.
    - The paper likes to juggle semantics. This might be a consequence of the huge scope of the subject matter. It seems to connect many different concepts and ideas. Probably a good paper to orient yourself, but it seems wise to be skeptical of the claims and definitions.
    - Tries to give a definition for “foundation models”. Seems fuzzy, badly defined and highly dependent on what we as humans consider “state of the art”. To be fair, this is hard to define. To be unfair, perhaps we should not be using such a catch-all term in a highly precise way.
    - Not a fan of the word “emergence”, as it often has a sort of mystical ring to it that explains everything. You can [replace it with the word “magic” without losing context]. For example, “the system shows emergent behavior” becomes “the system shows magical behavior”. My prediction of the system does not change by using the word. It gives no real extra information to improve my understanding. The danger here is that we consider something being “emergent” as some kind of explanation and then stop searching for answers. It is not an explanation and it predicts nothing other than “it does things we do not expect it to do”.
    - Although I appreciate the attempt to define and explain terms, there are some things that I consider heavily disputable. For example, the definition of “Deep Learning” ends with the sentence “Deep learning also reflected a further shift towards homogenization: rather than having bespoke feature engineering pipelines for each application, the same deep neural network architecture could be used for many applications.” Feature engineering is actually a huge part of most deep learning approaches, especially if you consider preprocessing data and the data collection itself. Additionally you can argue that the sheer amount of ways to build a “deep learning” algorithm shifts them away from “homogenization”, and that the new infrastructure necessary to handle all the data presents a host of novel challenges not present in previous machine learning techniques.
- **[Four Background Claims](https://intelligence.org/2015/07/24/four-background-claims/)** by Nate Soares (2015)
    - Written in 2015, well before transformer networks had been invented and most of the public AI discourse centered around the emergence of useful vision models.
    - Overview of some core claims that I believe many of the people taking alignment seriously can share. Also includes short counter positions and refutations, which feel like a genuine attempt at clarification instead of some kind of straw-manning. Explicitly addresses the importance of each claim.
    - Short, to the point and focused on the essentials of the arguments.
- **[AGI safety from first principles](https://www.alignmentforum.org/s/mzgtmmTKKn5MuCzFJ)** by Richard Ngo (2020)
    - It was worth it reading the entire sequence of posts for me, not just the first two chapters. Great introduction to some lines of thinking on AI alignment.
    - Touches on some of the same concerns as the previous two readings. Prefer this version over the Bommasani paper, because this is much less dense with jargon and more precise at the cost of a broad focus. The concepts are more understandable this way.
    - Based on a few key assumptions, which are explicitly mentioned.
    - Richard Ngo puts effort in being precise in his wording but concise in his posts. The resulting posts I have seen are all of good quality.
    - In further posts Richard offers several alternatives to how autonomous agents could function (i.e they can have deontological reasoning instead of instrumental reasoning). This felt refreshing to me, and helped me understand the extent and constraints of his arguments.
    - [On emergence and autonomy](https://www.alignmentforum.org/s/mzgtmmTKKn5MuCzFJ/p/bz5GdmCWj8o48726N): “My underlying argument is that agency is not just an emergent property of highly intelligent systems, but rather a set of capabilities which need to be developed during training, and which won’t arise without selection for it.”
    - [On alignment:](https://www.alignmentforum.org/s/mzgtmmTKKn5MuCzFJ/p/PvA2gFMAaHCHfMXrw) “Outer alignment is the problem of correctly evaluating AI behaviour; inner alignment is the problem of making the AI’s goals match those evaluations.”
- **[Why and how of scaling large language models](https://www.youtube.com/watch?v=qscouq3lo0s) by Nicholas Joseph (2022)**
    - Short enough to give this a go and learn about how AI models scale using current techniques, but contains some assumptions that now seem faulty. Also read [The Bitter Lesson,](http://www.incompleteideas.net/IncIdeas/BitterLesson.html) by Richard Sutton, on why compute scaling might be all that *******really******* matters for training AI.
    - One does not need accurate timelines to make a decision on whether we should slow down or pause necessarily. One argument along these lines is captured in a [quote by Connor Leahy](https://www.youtube.com/watch?v=52V5dOQVDy8): “There are two times to react to an exponential: Too early and too late.”
- **[Biological Anchors: A Trick That Might Or Might Not Work](https://astralcodexten.substack.com/p/biological-anchors-a-trick-that-might) by Scott Alexander (2022)**
    - A lot of speculative number juggling (which in all fairness is the point of the essay). Ends in widely varying estimates for when AGI could arrive. Again, I think it’s not necessary to predict *****when***** it might happen for us to make good decisions, but grant that a somewhat accurate estimate would be helpful in many ways.
- **[Future ML Systems Will Be Qualitatively Different](https://bounded-regret.ghost.io/future-ml-systems-will-be-qualitatively-different/)** by Jacob Steinhardt (2022)
    - “Emergence” as “unexpected consequences”, but now with some reasons why this should impact our judgement of AI systems. I think here the concept is usefully applied here as it pertains to decision making under uncertainty and risk.
- **[More Is Different for AI](https://bounded-regret.ghost.io/more-is-different-for-ai/) by Jacob Steinhardt (2022)**
    - Already knew this essay, which is written by the same author as the previous one. Explains a useful distinction between two patterns of thought he calls “The Engineering Approach” (empirical and drawn from observations) and the “Philosophical Approach” (limits, thought experiments and theorems). Short and insightful.
- **[Intelligence explosion: evidence and import](https://drive.google.com/file/d/1QxMuScnYvyq-XmxYeqBRHKz7cZoOosHr/view?usp=sharing) by Luke Muehlhauser and Anna Salamon (2012)**
    - Largely reiterates previous points, but provides a shorter overview.

Personal recommendation: The book Superintelligence by Nick Bostrom. I have heard some critiques from some alignment researchers, but I think it serves as an introduction for a more general audience. The introductory parable helps build intuition.

## News Corner

[The Boston Dynamics Spot robot can now talk](https://bostondynamics.com/blog/robots-that-can-chat/) like a British gentleman, which is also [shown on video.](https://twitter.com/Ilir_AI/status/1717800146870702296) Very funny while being totally unnerving. The image represented here is what we are barreling towards. It becomes downright cynical once you realize that Spot minis have been [used in a test by the New York Police Department to patrol streets](https://www.wired.com/story/nypd-spot-boston-dynamics-robot-dog/) for “surveillance”. Note that this is the second time. The first time in 2021 the robots were [removed early because of public outcry](https://www.nytimes.com/2021/04/28/nyregion/nypd-robot-dog-backlash.html). Call me crazy, but having a hunk of steel monitor my every move lest I dare violate the law only becomes marginally better if I am encouraged to “behave well” with a funny accent. We live in strange times.

[Rishi Sunak, prime minister of the United Kingdom, acknowledges the dangers of AI](https://twitter.com/10DowningStreet/status/1717458695838142507), even the existential ones, publicly and explicitly. I have not seen this done before. I do not like the quote: “And even in the most unlikely cases, humanity could lose control over AI completely”. According to many alignment researchers (though certainly not all) this is actually extremely likely. It does not become less likely because we either cannot imagine it, or do not like to imagine it. I do understand why it would be strategically advantageous to gingerly introduce the topic like this, as a statement from the prime minister of the UK would carry entirely different weight than it would from, for example, alignment researchers. It is good to see that the awareness of the risks and uncertainty in AI are reaching the highest levels of government. We should at least have a serious discussion instead of just assuming all will go well by default. It is good to see that they are trying to set a precedent of serious and courageous discourse without panic. I must say I did not expect as much.

[Scale seems to be all that is needed, yet again.](https://twitter.com/ylecun/status/1717676624865382901) I am not fully convinced of the argument yet, but this lessons seems to [recur again and again](http://www.incompleteideas.net/IncIdeas/BitterLesson.html). Short term improvement on AI through clever tricks, but long term breakthroughs because of much cheaper and more abundant computational resources. 

## Wrapping Up

And that’s it for this installment. Thank you for reading and take care.