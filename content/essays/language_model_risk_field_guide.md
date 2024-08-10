+++
title = 'Language Model Risk Field Guide'
date = 2023-03-15
draft = false
+++

*This post is co-authored by Mickey Beurskens and Carlo Lepelaars.  It has been cross-posted on both [Mickey’s website](https://mickey.coffee) and [Carlo’s Medium profile](https://medium.com/@carlolepelaars). More on the authors below.*

Medicine becomes poison when applied incorrectly. In order to distinguish the two, mankind has diligently worked to both name and classify the risks of medicine since ancient times. Since we would like for large language models to remain mostly a medicine, we decided to attempt the composition of a common parlance and classification for large language model risk. Welcome, connoisseur of the dark arts, to our incomplete attempt at discussing the large language model shadow side. You will be treated to an exotic range of creative mayhem in the world of large language models, including but certainly not limited to:

- **********************************************************Misuse and misunderstandings.**********************************************************
- **************************Malicious use.**************************
- ************************************************Implementation mistakes.************************************************
- **************************************************************************Accessibility, availability and bias**************************************************************************.
- ****************************************The ongoing discussion on existential risk****************************************.

We are both excited by the amazing possibilities of generative AI, and concerned by the potential for a lot of accidents and malicious mayhem. Here we strive for a balanced view that focuses on risk while staying away from fear and mania. We would be honored if this could serve as your AI risk field guide. Now onward to discuss the first topic: The common misunderstandings arriving from the use of Large Language Models. 

# It Quacks Like A Duck

Language models make stuff up. This is fairly noticeable once you have worked with them sufficiently, especially if you discussed your particular expertise with one. It should not be taken for granted that every user realizes that though. This can cause a lot of trouble in high stakes situations, like law.  [Simon Willison compiled a great collection](https://simonwillison.net/2023/May/27/lawyer-chatgpt/) of unintended consequences in legal cases through over reliance on ChatGPT. In particular, [lawyers in a US federal case](https://www.forbes.com/sites/mattnovak/2023/05/27/lawyer-uses-chatgpt-in-federal-court-and-it-goes-horribly-wrong/) got into big trouble for submitting a filing that cited at least six cases that did not exist. The lawyer stated that he thought ChatGPT was a search engine. As you might imagine, the judge involved in the case was not at all pleased.

Sometimes we get bombarded with so many impressive LLM output that it looks as if they can do everything with the right prompt. In reality language models are often brittle when it comes to challenging tasks or topics with little training data. Amazing short term improvements not withstanding it seems for example that language models are poor calculators, which is not at all intuitive to lay people that are conversing with a machine that “responds like a human would”. Other challenging activities include “physics based reasoning”, “data interpretation” and “picking a random option”. Not at all intuitive if you handle ChatGPT like you would a person. 

In our experience users also struggle to understand the dynamics and policies surrounding data shared with language model providers, specifically to OpenAI. Most are unaware that their data can be used to train the next generation of models. Lay people seem to be unaware that since the data is used in training, the next model can likely share that data with others if prompted correctly. Even technical professionals struggle with the security implications sometimes, as showcased in the notorious [Samsung leak](https://mashable.com/article/samsung-chatgpt-leak-leads-to-employee-ban). It is not necessary for a single person to share all the information after all. If multiple people in the same department all share shards of information, then sooner or later ChatGPT can put together the pieces.

And so we add the following guidelines to our field guide:

1. Language models make stuff up, and do so convincingly. Always check the answers you receive.
2. Language models are not human. They come with answers in a different way humans do, and have different strengths and weaknesses in the language domain.
3. Data shared with a network is data lost to the users of that network. Often, data shared with the network is data lost to the operators of a network. Check the data policy of your language model provider, and then be careful regardless.

Next on our list we will explore the creative havoc that can be generated by a motivated homo sapiens.

# Generative Malice

With the rise of new generative capabilities we will increasingly need to become better at discerning truth from falsehoods. You could argue that Photoshop already fills the “fake information” niche nicely. The point here is not that generated content has to be perfect to have real world effects, but that the capability to trick people is accessible to a much wider user base. In May a tweet of a [fake explosion](https://www.nytimes.com/2023/05/23/business/ai-picture-stock-market.html) at the US Pentagon caused a stock market crash. Luckily this particular incident did not have an impact much beyond the markets, yet someone probably made a lot of money nonetheless. It will become only harder to know what is true, and we can expect both “truth brokers” and “fake detection technology” to proliferate as a result.

Increasing the creativity level a bit, combining generative models and personal information significantly increases the reach and scale of targeted scamming campaigns. Take spearphishing for example, the practice of sending personalized malicious e-mails in order to trick a specific person or organization into thinking its legitimate. Instruction-based language models like ChatGPT seem especially good at crafting spearphising e-mails, which allows malicious actors to create more persuasive texts and save time on setting up large-scale campaigns. Including advanced text2speech systems potentially allow for highly effective large scale malicious campaigns through voice phishing.

Much of the time legitimate message craft is not straightforward to distinguish from phishing. On the bright side, language models also allows for development of more advanced classification systems that can detect whether an incoming e-mail is malicious or not. It is a cat and mouse game where offense and defense both improve as more capable models become available.

Besides content generation, the practice of Open Source Intelligence (OSINT) can also “benefit” from generative modelling. In OSINT the goal is to gather as much information as possible from publicly available sources. Traditionally, tools like [Bing visual search](https://www.bing.com/visualsearch) are used to track someones location from images posted online. Another example is [Shodan](https://www.shodan.io/) which is used to search for accessible devices and open ports on the Internet. Not only are language models trained on large swats of open data, potentially making them retain information that is just one correct question away from being revealed, they can also be integrated with traditional search engines to make them much more efficient. OSINT capabilities will only increase as more modalities like images get integrated in generative models. 

It is worth mentioning that OSINT tools are also used to locate criminals or to protect people by obfuscating information that is found with OSINT. In the hands of a creative criminal it becomes a dangerous tool indeed.

Thus, we add to our risk field guide:

1. The easier it becomes to generate content, the harder it becomes to see what is true. Uncovering truth from fiction will become even more valuable.
2. Malicious content can be both of much higher quality and more targeted as generative AI improves.
3. Publicly available data will be more accessible because generative AI helps with search.
4. Data embedded in generative AI might contain sensitive personal data.

# The Stuff AI Is Made Off

It is easy to forget these days that AIs are engineering systems composed of data, software and hardware infrastructure. That infrastructure is fallible, which is why application security standards like the [OWASP Top 10](https://owasp.org/www-project-top-ten/) exist. But these are probably not sufficient. AI is weird after all, and the unpredictable stochastic nature of generative AI gives rise to a host of novel vulnerabilities. 

To start with, large language models can output large pieces of unstructured texts. This is similar to the way humans interact with software systems sometimes, and the models can be manipulated to do the same thing a malicious or manipulative user might do. Therefore we think large language models are vulnerable to the same weaknesses and should be treated with the same level of strictness as actual users. It is essential to sanitize large language model output, before passing it further along into the technology stack. Many attacks against language models are executed through prompt injection. By manipulating the prompt, you manipulate the model output. That is why sanitizing input could help to harden security, although this often comes at the cost of flexibility or usefulness. 

It is trivial to see how giving large language models direct access to [terminals, internet requests or code execution](https://openai.com/blog/chatgpt-plugins) could be misused, even though the corresponding benefits might be huge. For instance, ChatGPT can no longer generate images through markdown, which patches a vulnerability where [data could be leaked without user intervention](https://systemweakness.com/new-prompt-injection-attack-on-chatgpt-web-version-ef717492c5c2) through a standard HTML GET request. This does not even touch on the possibility that the language model infrastructure might be based on vulnerable or outdated components, which might open any part of the language model use up to exploitation. We should probably assume all input and outputs can leak, either through hacks on company databases, [faulty caching](https://www.cshub.com/data/news/openai-confirms-chatgpt-data-breach), or [man-in-the-middle attacks](https://en.wikipedia.org/wiki/Man-in-the-middle_attack) on LLM apps. Even with encrypted input there is a risk that the encryption is not well implemented or that the type encryption can be cracked as new algorithmic and computer hardware innovations are developed.

An so to update our risk guide:

1. AI models are built on top of infrastructure that might be vulnerable. Do not assume your data is safe because the language model works well.
2. Language models can usually be influenced to generate the same text output a malicious user might produce. That is why sanitation of inputs and outputs is appropriate in most cases.
3. Giving language models access to code execution and other system critical functions opens up a whole host of exploits that are hard to predict beforehand.

# More Equal Than The Others

In the end, for most people on the green marble, AI is not about how to build it but about how to apply it. Heck, most engineers dealing with AI will never train a model for production. Most users will use a model trained and hosted by some other organization. This includes commercial organizations, but also the open source community and potentially even governments. As the capability of models increases, it will likely increase all kinds of inequality between those that have access to the models and those who do not. This could become a significant social cost over time. For example, currently nearly everyone can have access to the internet in some way. Imagine what would happen if that were not the case. If generative AI is of the same order of magnitude as the internet, we should strive for the benefits to be distributed broadly to prevent serious social harm.

Say the wave continues, AI gets adopted into many products that are widely available, and we become more accustomed to those products over time. If we make our critical infrastructure dependent on AI, we should make sure that it is also available when we need it. If handled improperly, AI could easily become a single point of failure in many engineering systems. The risk here is compounded because we do not have much experience in AI deployment in general. A tricky task indeed.

Given that all these things go well, or well enough, massive amounts of high quality data will likely still be necessary to train performant AI models. A risk factor then is the supply of such data, and we are both introducing negative economic incentives as well as mixing in model output in the data we use to train. 

As high quality content generation becomes easier it will become harder for people who specialize in that discipline to make money generating that content. They will either start to use AI, or perhaps move to different activities, but it remains highly likely that much of the new content on the internet will contain some form of generated content in the near future. To the degree that we need new and diverse data to train models that might have a severe impact on model training. We are curious to see what will happen once we establish a loop where the generated output of one model will be used to train another. Will outputs drift? Or will our selection pressure of the best models mitigate this effect. Will models be able to generate their own training data at some point? They just might if they have the ability to perform experiments themselves. Who knows for sure? We sure don’t.

To sum up our observations here:

1. To the degree that AI models will improve capabilities of its users, inequality between those with access and those without will surely rise.
2. Once we base our infrastructure on AI models redundancy becomes more important. Single points of failure in AI models would have more impact as time goes on.
3. We are applying pressure to remove from the market exactly those people that generate the high quality content we need to train models.
4. AI models will start using more and more of the data they output in their training. We cannot say for sure what this will do, but it is worth noting that significant drift and bias might occur over time.

# I Am Not Crazy; My Reality Is Just Different From Yours

We left the most contentious of topics for last: Existential risk through AI. Opinions here differ ******wildly******. We will content ourselves here with an overview, and leave a more in depth discussion on the topic for later. For now it is enough to know that the discussions exist, and that they are heated.

First the risk perspective. There is no end to the amount of media articles comparing AI to the terminator, but believe it or not there is also some serious thinking and critical discussion on the topic. Eliezer Yudkowski is probably one of the most vehement critics of AI. He is mostly known for his extensive work on existential risk caused by AI. This work, and the work of many others, can be found on the [LessWrong](https://www.lesswrong.com/posts/oM9pEezyCb4dCsuKq/pausing-ai-developments-isn-t-enough-we-need-to-shut-it-all-1) forums. Nick Bostrom also published a well known book on the topic called [Superintelligence: Paths, Dangers, Strategies](https://en.wikipedia.org/wiki/Superintelligence:_Paths,_Dangers,_Strategies).

One of the main worries, as far as we understand the topic, is the scenario of an AI Singularity. In this scenario an AI is built that is able to rapidly improve itself. The worry is that we will not be able to steer such an AI sufficiently to keep us safe, and even that we will not see it coming if it happens.

A common critique on Yudkowski is that his approach is alarmist and deeply pessimistic. In contrast, this interview with [Lex Fridman and Max Tegmark](https://www.youtube.com/watch?v=VcVfceTsD0A) gives a more positive perspective while retaining the view that AI can cause significant existential risk.

On the other hand there are many prominent people in the field that find the view of existential risk either absurd, or perhaps so low as to not be worth the fuss. Many focus on the immense promise of AI in solving some of our greatest challenges. [Yann Lecun](https://twitter.com/ylecun/status/1651458069187133441) has been especially vocal about this topic. So have [Marc Andreessen](https://a16z.com/2023/06/06/ai-will-save-the-world/) and [Andrew Ng](https://www.linkedin.com/posts/andrewyng_the-call-for-a-6-month-moratorium-on-making-activity-7046909992645394432-s7_X/). 

Since this essay is on risk, we are very likely biased to see more risk than the average person. Still, this should provide a good starting point for a discussion on long term risk. It also helps to separate this kind of risk from the more short-term ones that we treated earlier. It makes the discussion more focused and helps in creating some common ground for discussion.

To update our field guide:

1. The possibility of an AI Singularity that we cannot control, and possibly cannot even see coming.

# All Together Now

Well now, that was quite the essay. Just for the sake of convenience we shall sum all the field guide entries together:

1. Language models make stuff up, and do so convincingly. Always check the answers you receive.
2. Language models are not human. They come with answers in a different way humans do, and have different strengths and weaknesses in the language domain.
3. Data shared with a network is data lost to the users of that network. Often, data shared with the network is data lost to the operators of a network. Check the data policy of your language model provider, and then be careful regardless.
4. The easier it becomes to generate content, the harder it becomes to see what is true. Uncovering truth from fiction will become even more valuable.
5. Malicious content can be both of much higher quality and more targeted as generative AI improves.
6. Publicly available data will be more accessible because generative AI helps with search.
7. Data embedded in generative AI might contain sensitive personal data.
8. AI models are built on top of infrastructure that might be vulnerable. Do not assume your data is safe because the language model works well.
9. Language models can usually be influenced to generate the same text output a malicious user might produce. That is why sanitation of inputs and outputs is appropriate in most cases.
10. Giving language models access to code execution and other system critical functions opens up a whole host of exploits that are hard to predict.
11. To the degree that AI models will improve capabilities of its users, inequality between those with access and those without will surely rise.
12. Once we base our infrastructure on AI models redundancy becomes more important. Single points of failure in AI models will have more impact as time goes on.
13. We are applying pressure to remove from the market exactly those people that generate the high quality content we need to train models.
14. AI models will start using more and more of the data they output in their training. We cannot say for sure what this will do, but it is worth noting that significant drift and bias might occur over time.
15. The possibility of an AI Singularity that we cannot control, and possibly cannot even see coming.

We are aware that this list is neither complete nor fully categorized. Yet as is the case in all of science, every little building block helps to create the whole. If this overview gives you a more comprehensive mental framework and a shared vocabulary to start discussing these challenges with others, we will be more than satisfied. Thank you for sticking with us throughout this post, dear fellow explorer of the shadow side, and we hope you will join us again in the future,  

### On The Writers

[Mickey Beurskens](https://mickey.coffee) is an AI engineer and entrepreneur from the Netherlands. He is currently building Forge Fire, a generative AI company with a focus on AI safety. He also like speaking and writing on various topics, including artificial intelligence.

[Company Website](https://forgefire.dev/) | [Linkedin](https://www.linkedin.com/in/mickey-beurskens/) | [Twitter](https://twitter.com/mickeybeurskens) | [Github](https://github.com/mickeybeurskens)

[Carlo Lepelaars](https://carlolepelaars.nl/) is a machine learning engineer from the Netherlands. He is currently working at [CrowdCent](https://crowdcent.com/) to build quantitative value investing strategies with machine learning and large language models.

[Website](https://carlolepelaars.nl/) | [Linkedin](https://www.linkedin.com/in/carlolepelaars/) | [Twitter](https://twitter.com/carlolepelaars) | [Kaggle](https://www.kaggle.com/carlolepelaars) | [Github](https://github.com/CarloLepelaars) | [Mastodon](https://mastodon.social/@carlolepelaars)