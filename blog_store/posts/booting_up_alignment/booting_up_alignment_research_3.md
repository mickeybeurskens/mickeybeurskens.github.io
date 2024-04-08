> Part of the [Alignment Research](/#/sequence/booting-up-alignment-research/) sequence.

Gaming the system. Looking for the loopholes. Squeezing out that extra bit of juice. 

You might have done it by studying the exam instead of mastering the knowledge in school, or exploited a bug in your favorite game. Yet it might surprise you that reinforcement learning agents often exhibit similar behavior. 

We will examine the theory and the practical implications of reward gaming and misspecification. How can we make sure the AI is rewarded not only for what we ask it to do, but for [what we intend it to do](https://mickey.coffee/#/genie-in-a-bottle)? Specifically, I’ll be summarizing [section 2 of the AI safety fundamentals course](https://course.aisafetyfundamentals.com/alignment?session=2). Some of this thinking applies to *any* agent, including the natural (human) ones. It seems that studying alignment also improves your knowledge of *humans*. Who would have guessed?

Before we begin though, I will leave you with these immortal words by our lord and messiah Brian, to give you strength and power in this public learning journey:

![Monty Python - You are all individuals](/blog_store/assets/booting_up_alignment/individuals.jpg)

## **Reward Misspecification And Instrumental Convergence**

- **[Specification gaming: the flip side of AI ingenuity](https://www.deepmind.com/blog/specification-gaming-the-flip-side-of-ai-ingenuity) by Victoria Krakovna, Jonathan Uesato, Vladimir Mikulik et al. (2020)**

  - Love the [list of specification gaming](https://docs.google.com/spreadsheets/d/e/2PACX-1vRPiprOaC3HsCf5Tuum8bRfzYUiKLRqJmbOoC-32JorNdfyTiRRsR7Ea5eWtvsWzuxo8bjOxCG84dAg/pubhtml) examples. Includes such gems as “Creatures exploited a collision detection bug to get free energy by clapping body parts together”. ~Technology.
  - A meditation on the difference between a stated goal and actual intention. I tried my hand at a similar argument through the [Genie In A Bottle](https://mickey.coffee/#/genie-in-a-bottle) story.
  - Notice that [humans are also agents that game systems](https://www.youtube.com/watch?v=GmUtltvUQX0) when they can. Where are the agents that do not exploit specification gaming?
  - Reward tampering seems like a serious problem for any capable agent. How many people have been done in because they got access to more money and power than they could handle, leading to fulfilled goals with huge collateral damage?
  - Worthwhile to read.

- **[Learning from Human Preferences](https://openai.com/blog/deep-reinforcement-learning-from-human-preferences/) by Paul Christiano, Alex Ray and Dario Amodei (2017)**

  - Builds intuition on reinforcement learning from human feedback in a short time. Ah, where are the times where back flips represented the state of the art?

- **[Learning to Summarize with Human Feedback](https://openai.com/blog/learning-to-summarize-with-human-feedback/) by Jeffrey Wu, Nisan Stiennon, Daniel Ziegler et al. (2020)**

  - More technical post on reward modeling for language models.
  - Interesting to see that optimizing the reward model they used for RLHF eventually made things worse. This seems to hint at the difficulty of modelling a good reward signal. Additionally, using a model for the reward signal speeds up training but makes it much harder to understand agent choice motivations.

- **[The alignment problem from a deep learning perspective](https://arxiv.org/abs/2209.00626) by Richard Ngo, Soeren Mindermann and Lawrence Chan (2022)**

  - The full paper contains an orientation on technical field of alignment. Worth reading but certainly advanced, so you might not get everything on a first pass. Also a longer read than 10 minutes. I will review the full paper here.
  - First paper I have seen that relates the safety argument directly to systems that work like the ones we have today. I think this makes the alignment argument less broad, but also much more compelling to solve in the short term.
  - Explores the concept of situational awareness and its implications to the policy of an agent and potential reward hacking. Interesting research on how some [agents can learn to behave differently when they are being observed.](https://arxiv.org/abs/1803.03453) Read “Learning to Play Dumb on the Test”.
  - Chapter 3.1 confirms my suspicion that it is dangerous to have a misaligned but incredibly competent middle manager in your company. Competence is not a plus if an agent is not aligned to your goals.
  - Builds intuition on “internal goal specifications” which I found insightful. This paper also explicitly states some core assumptions. I am a fan of this practice.
  - The problem increasingly begins to feels like “there are almost always loopholes to exploit in a given system, and the side effects of exploiting those loopholes can be terrible”. Obviously this is a massive over-simplification. I think this would be equally be a problem if one person would get overwhelming powers while all others are unable to oppose that person. We seem to rely on a tenuous peace, based on the fact that we can die if we piss others off sufficiently.
  - Chapter 5 contains an overview of alignment research directions, which might be worth reading if you have made it to this point. It also points to other survey papers.

- **[Optimal Policies Tend To Seek Power](https://neurips.cc/virtual/2021/poster/28400)** by Alex Turner, Logan Smith, Rohin Shah et al. (2021)

  - Video goes into why influence seeking behavior is a statistical consequence of most goals an agent can have in an environment. Formal evidence (but not proof in all scenarios) for instrumental convergence of autonomous agents.
  - Summarize well by “Keeping Options Open Tends To Be Optimal”. Certainly seem to apply entrepreneurship, as far as I have experienced. Also raises the suspicion of “Misalignment By Default”.
  - The argument seems to be that states with higher optionality, i.e. more options to reach other possibly valued states later on, is valuable over the set of different possible rewards we can give an agent. This checks out intuitively as far as I am concerned, and although the mathematics is a bit beyond me at this point, I would like to refer you to the book [Antifragile](https://en.wikipedia.org/wiki/Antifragile_(book)) by Nassim Taleb. It contains an elegant philosophical and practical argument for the power of optionality that I found extremely helpful in understanding this concept. It is worth noting that this argument ties in with uncertainty of goals (or uncertainty about environments, which fulfills an equivalent role). Under uncertainty, optionality is usually a very powerful way to make good choices, given that you can recognize those states where you should “exercise your option” and choose a favorable action.
  - The authors note themselves that this does not mean that superintelligent AI ****\*will\***** seek power. A few core assumptions can be disputed, like the difference between a superintelligent agent and an optimal one, and the assumption of full observability in the state space (knowing precisely how the entire world state is configured). My intuition tells me that more uncertainty makes optionality a better strategy, not a worse one, but I do not have mathematical proof along those lines.
  - The accompanying paper is much more math heavy than the other sources thus far.
  - Interesting future works mentioned at the end.

- **[What failure looks like](https://www.alignmentforum.org/posts/HBxe6wdjxK239zajf/what-failure-looks-like) by Paul Christiano (2019)**

  - Good alternative to reading “The alignment problem from a deep learning perspective” if you want to understand instrumental convergence. Also discusses outcomes which are likely and bad if we cannot solve reward specification/alignment sufficiently and in time.

- **[Inverse reinforcement learning example](https://www.youtube.com/watch?v=h7uGyBcIeII) by Udacity (2016)**

  - Guess the reward of various states given the choices you observe from an agent. Similar to guessing what might motivate another person to act like they do. This is the inverse of reinforcement learning in the sense that usually the reward (function) is known and actions are inferred.

- **[The easy goal inference problem is still hard](https://www.alignmentforum.org/s/4dHMdK5TLN6xcqtyc/p/h9DesGT3WT9u2k7Hr) by Paul Christiano (2018)**

  - A well written summary of the challenges facing inverse reinforcement learning. Contains suggestions for further exploration.

  And that is another section of the safety fundamentals in the books.

  # Noteworthy News

  During the UK AI Safety Summit multiple countries signed a declaration called the [Bletchley declaration](https://www.gov.uk/government/publications/ai-safety-summit-2023-the-bletchley-declaration/the-bletchley-declaration-by-countries-attending-the-ai-safety-summit-1-2-november-2023) with the intended purpose of using AI systems safely and productively. The focus seems to be on exploring the potential risks, mainly through miss use, but also through unintended consequences. It also acknowledges the rapid rate of development and change in the technology. Most European countries signed, as well as the US, China and the United Arab Emirates. “Signalling concern” remains cheap, but this seems like a proper step forward in thinking seriously about the consequences of AI deployment in society.

  President Joe Biden issued an executive order aimed at mitigating AI risk and simultaneously improving the position of the US in the AI space by easing visa requirements for AI experts. [Zvi has written a great summary](https://thezvi.substack.com/p/reactions-to-the-executive-order), and also a [more detailed commentary](https://thezvi.substack.com/p/on-the-executive-order) that I encourage you to read if you are interested.

  Also, OpenAI killed a 1000 LLM startups by announcing [PDF uploads in ChatGPT](https://twitter.com/AiBreakfast/status/1718635133908013489). To be honest, I personally wrapped up a full stack app for information search and question answering last week because I expected this to happen, but not quite so soon. I’ll open-source the code later when I get around to it. The next obvious steps to me seem integration into Office365 and setting up automated query flows with different data sources. Seems like this is progressing about as fast as OpenAI can reliably go.

  And that is it for another installment in Booting Up Alignment Research.