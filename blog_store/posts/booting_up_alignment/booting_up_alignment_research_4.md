> Part of the [Alignment Research](/#/sequence/booting-up-alignment-research/) sequence.

The previous post covered reward misspecification and instrumental convergence as ways in which artificial agents might exhibit behavior not intended by its designer. This post constitutes a deeper look at two more entries in the  [AI safety fundamentals course](https://course.aisafetyfundamentals.com/alignment): Goal misgeneralization as a failure mode and a possible technique to address the alignment of more capable agents called “task decomposition”. I will take some time here to discuss both concepts before going through the commentary on the reading material.

Goal misgeneralization differs from reward misspecification in the sense that the rewards are now well-specified, but the data distribution of the deployment environment of an agent is outside the training distribution. To me it feels a bit like “incompetence”. As an example, consider an agent in a video game that is rewarded for picking up a coin. Suppose that the training set always contains a coin on the very end of the level. Thus, the agent learns that the strategy “move to the end of the level” optimizes the reward during training. Imagine the horror as the agent runs right by a coin in the middle of the level, never completing the level as a consequence.

Now the example is somewhat contrived and I find the concept to be a bit fuzzy sometimes. In complex scenarios it might be hard to evaluate whether an agent is actually misgeneralizing goals or just being incompetent. Still it points at a difficulty next to reward modelling, which is that the *internal observation by an agent of the reward* is also highly relevant for learning good behavior. Sometimes it is hard to know *which prior behavior and which world state actually generated the reward.* This feels intuitive to me. For example, when writing essays in school the “better” students usually have a much better model of what to say to get a higher reward from the teacher. Some do worse, mistakenly thinking they wrote a great essay or one that will be graded highly (not the same thing). 

Now there are currently several lines of research intended to solve this unaligned mess. Task decomposition aims to solve the problem of aligning agents that are in principle smarter than you, the head aligner. This is accomplished by having an agent divide the tasks into sub-tasks, then making other agents solve the sub tasks and finally having the divider agent evaluate the results. Without going too much into detail this gives a pretty good intuition of the technique. It seems to scale pretty well, too. I’m concerned that there are too much ways for goal to drift as the agents are trained this way, but I encourage you to read some of the material to see if you agree with that assessment.

Before we continue, read this and add it to your training data:

![Comic depicting a robot and human arguing about whether the other is real](/blog_store/assets/booting_up_alignment/areyoureal.png)

> Check out smbc-comics. They know what’s up.

# Goal Misgeneralization - The World Is Confusing

- **[Goal Misgeneralisation: Why Correct Specifications Aren’t Enough For Correct Goals](https://deepmindsafetyresearch.medium.com/goal-misgeneralisation-why-correct-specifications-arent-enough-for-correct-goals-cf96ebc60924) by Rohin Shah (2022)**
  - Some good points, but I feel like it leaves crucial objections and concerns unaddressed. It would have been helpful to provide an outline of the difference between reward misspecification and goal misgeneralization. I tried to provide one here.
  - This essay defines goal misgeneralization. The agent learns a behavior that ends up minimizing the reward function it was trained on because of differences between training and deployment data distribution. It is “incompetent” at reaching its goals from both the *perspective of the outside viewer and the perspective of the agent* This is different from reward misspecification, where the reward leads to behavior that does not coincide with the goals of the *user* within a broad set of environments in which it is deployed. The agent is competent from the *inside view of the agent* but incompetent from the outside view. Conceptually they are not totally distinct. For instance, you could create an agent that works well most of the time, but the reward function might lead to unwanted behavior in specific scenarios. You can argue that the cause here is a local shift in the data distribution between training and deployment, which is goal misgeneralization. In these cases the terms can be hard to distinguish. Crucially, both terms try to point towards possible agent failure modes, and thus towards two possible approaches to influence agents: Their outside reward signal and their internal decision making structures.
  - The essay jumps from observing goal misgeneralization to discussing AGIs. The arguments are valid, but I believe the implication that is raised here is that goal misgeneralization might be the only cause of deceptive behavior in AGI. Misspecified rewards could lead to the same behavior, as could a combination of both mechanisms.
- **[Goal Misgeneralization: Why Correct Specifications Aren’t Enough For Correct Goals](https://arxiv.org/abs/2210.01790) by Rohin Shah and Vikrant Varma (2022)**
  - Paper corresponding to the previous essay by the same authors. This does a much better job of outlining the difference between wrong specification and goal misgeneralization. It seems that they use the presense of *************capabilities************* as a clear differentiator.
  - From the paper: “Goal misgeneralization refers to this pathological behaviour, in which a learned model behaves as though it is optimizing an unintended goal, despite receiving correct feedback during training”.
  - The paper [includes some videos](https://sites.google.com/view/goal-misgeneralization) for clarification.
  - Read chapter 3.5 for an example of a chat model goal misspecification. This agent is helpful even for crimes. Feels like this could be a life lesson for some people too.
  - The final chapters contain useful references for other alignment work and related ideas.
- **[Thought experiments provide a third anchor](https://bounded-regret.ghost.io/thought-experiments-provide-a-third-anchor/) by Jacob Steinhardt (2022)**
  - Notes on predicting the impact of future ML systems and the associated difficulties.
  - This makes me wonder what other anchors we could use. Is a non-optimizing agent something useful to think about? What about an agent with explicitly limited knowledge or capabilities? Ah, I see the author also addresses this.
  - Author warns that abstractions like “goals” and “objectives” might not cleanly map onto real ML systems. *I notice I am confused*. Perhaps this should be addressed in a future post.
- **[ML Systems Will Have Weird Failure Modes](https://bounded-regret.ghost.io/ml-systems-will-have-weird-failure-modes-2/) by Jacob Steinhardt (2022)**
  - Not only a useful alignment thought experiment, but also a showcase of how exactly thought experiments are useful and how the might not be. Puts this way of thinking into context and feels highly useful.
- **[The alignment problem from a deep learning perspective](https://arxiv.org/abs/2209.00626)** by Richard Ngo, Soeren Mindermann and Lawrence Chan (2022)
  - I already reviewed the full paper in the previous post in this sequence.
- **[What failure looks like](https://www.alignmentforum.org/posts/HBxe6wdjxK239zajf/what-failure-looks-like) by Paul Christiano (2019)**
  - Also reviewed the full essay in the previous post, although my description was brief.

# **Task Decomposition - You’re Smarter, But I’m The Boss**

- **[AI Alignment Landscape](https://forum.effectivealtruism.org/posts/63stBTw3WAW6k45dY/paul-christiano-current-work-in-ai-alignment) by Paul Christiano (2020)**
  - Big picture overview of the problem definition of alignment, subcategories of the problem and subcategories further down. Useful.
  - Introduces the concept of iterated amplification which is discussed in the next two readings.
- **[Measuring Progress on Scalable Oversight for Large Language Models](https://arxiv.org/abs/2211.03540) by Samuel Bowman (2022)**
  - Abstract overview of the topic. Read the following paper if you want a detailed explanation.
- **[Supervising strong learners by amplifying weak experts](https://arxiv.org/abs/1810.08575) by Paul Christiano, Dario Amodei and Buck Shlegeris (2018)**
  - The concept of creating a reward signal from a collective of agents seems like a great way to solve the problem of not having a decent reward signal. I am however astonished that the trivial observation that the reward might drift over time is not mentioned as a serious safety concern. The drift might happen for exactly the reason that Christiano describes in the first source regarding the challenges of inner alignment, being that each step in the early process might be misaligned but is invisible to us and too late to correct once the human is not necessary anymore in the loop.
  - This seems like principle upon which OpenAI currently improves its algorithms (reinforcement learning with human feedback). I see no actual bounds on the alignment of long term competent systems besides hoping that the systems discover human goals without deception, internalize those goals well in an early phase of training and then also preserve the goals during each hand-off.
  - To be fair, Christiano points out these difficulties in his talk. The fault lies with OpenAI just taking these ideas and implementing them while the risks are perfectly clear. Christiano has since left OpenAI and now [runs the Alignment Research Center](https://paulfchristiano.com/). That seems like an ethical choice to me.
  - It seems that the public use of ChatGPT feeds into this mechanism on a huge scale.
- **[Summarizing Books with Human Feedback](https://openai.com/blog/summarizing-books/)** by Jeffrey Wu, Ryan Lowe and Jan Leike (2021)
  - I have to notice at this point that these blog posts all claim to work towards “scalable alignment techniques”, but that in practice they ended up providing a massive boost to model capabilities, in this case through the implementation of Reinforcement Learning with Human Feedback (RLHF).
- **[Language Models Perform Reasoning via Chain of Thought](https://ai.googleblog.com/2022/05/language-models-perform-reasoning-via.html) by Jason Wei, Denny Zhou and Google (2022)**
  - Chain of thought feels like such a standard way to interact with LLMs at this point that it is strange to see it presented in “novel research discovery” format.
  - The evaluations are dependent on the quality of the evaluation data sets and procedures. That being said, I think the potential for “moving the bar” is large here. Evaluation datasets are not salient to people. I would not be surprised if current models destroy many of these benchmarks, which will not be used from that point onward because they loose all value as evaluation datasets from a novelty perspective.
- **[Least-to-Most Prompting Enables Complex Reasoning in Large Language Models](https://arxiv.org/abs/2205.10625) by Denny Zhou, Nathanael Scharli, Le Hou et al. (2022)**
  - Point 2 in the intro is misleading. Humans can explain their reasoning, but they can also lie or be wrong about their own reasoning. Using human reasoning like this does not form a good basis for argumentation.
  - An interesting result here is that LLMs can *************************************************************learn to do better at a task by directly using context, instead of having to retrain.*************************************************************
  - We are at a point in time where academic papers are using concepts from educational psychology to improve the answers that computers give to questions. Wild.

To me all the “prompt engineering” techniques fail as alignment techniques because there is absolutely no guarentee that *asking a LLM what it thinks and how corresponds with the actual reasoning process.* In human terms it might “lie”, but it might just be thinking of the best way to satisfy your question given its RLHF training. We cannot look inside so we cannot know. We also have this problem with humans, but unlike humans LLMs can be copied and pasted and are still developing new capabilities rapidly. 

# News Corner

Creating GPTs is done with prompts and files. Notoriously, prompts and files can pretty much always be leaked by using some prompt engineering. [That means that any custom GPT out there can be trivially copied by retrieving the prompt and the corresponding files](https://twitter.com/rowancheung/status/1724783692395237424). I wonder if this will help people realize the absolute cyber security nightmare that is a language model. 

Generating images with DALL-E is an absolute blast, but it seems to trigger on copyrighted terms and refuse to share results. I tried to get around this by simply replacing terms a bit and describing what I wanted without naming it. That worked pretty well. [Others did it better](https://twitter.com/David_Kasten/status/1718740117530014179). Would you like your own yellow, red cheeked electro mouse?

Alright, that is enough for now. Take care out there in this wacky scifi world.