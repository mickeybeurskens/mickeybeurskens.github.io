# A Primer on Financial Independence

The dream of Financial Independence. No longer the exclusive realm of rulers, aristocracy or the elite, the common man can now also enjoy the benefits of being free of daily financial burden! No longer do we have to worry about food, shelter, clothing and the schooling of our children! Finally we have the means to spend time on the truly meaningful things in life, like pottery and sustainable gardening! At least, that seems to be the message when diving into the world of the independent and the early retired.  

Today I'd love to explore this idea with you all, mainly because I would like to know more myself. I believe the way we manage our finances have a huge impact on our quality of life. The central ideas in financial independence thinking are useful, even if you do not subscribe to all of them. So strap yourselves in, grab the lovely hot beverage of your choice, and join me as we journey through the land of FI.

(Note: I am a novice in this area. I am certainly not capable nor willing to give you financial advice. This is not financial advice. Please do not sue me; My parents' dog would miss me and it would be tough to explain the concept of jail to a canine.)

## Basic Concepts

FI revolves around one essential idea: Earn more than you spend, and then use that surplus to create an sufficient income that requires almost no time investment. Obvious perhaps, but it is crucial to realize that financial independence is only relevant when you are, indeed, constrained by your finances.

Say you're a high performing lawyer. You work 80 hours a week making unholy amounts of money, wear fancy suits and you spend your time making other people comb through lengthy documents. You are also quite miserable, and would love to spend your time creating lord of the rings figurines. However, your current spending pattern is as obscene as your working hours, so quitting does not feel like a possibility. In this case, you are financially dependent. 

The opposite goes for a Buddhist monk. He makes no money, but requires none either and is content. A monk is already independent, not only of finances but of many other mortal affairs. It is obvious then that financial independence is a highly personal affair. We cannot all live like a high paced career tiger nor leave all our earthly possessions behind. For most of us, we fall somewhere in between. The goal of financial independence then is to spend time more meaningfully. We are independent: Finances do not matter much for the decisions that we make.

"Alright, alright", I hear you thinking, "that's all well and good. I'm pretty sure I'd like to be FI. What now?"

Well, most of the material I have read center around three ideas:

- How to earn more.
- How to spend less.
- How to put the difference to work with the least amount of time investment necessary.

Understanding the basics of inflation is, in my humble opinion, crucial to understand why you should put your money to work. That is why we will spend some time thinking about that as well, before thinking about the basics of investments. Let us explore in more detail.

## Earning More

First is "earning more". Wouldn't we all like that? Usually there are usually good reason for people not to earn more than they already do. Barring a career switch to a better earning job, it's a great idea to learn to negotiate. I see this skill as being vastly under-rated. Particularly for salary negotiations the potential payoffs seem huge. I'd recommend "Never Split The Difference" by Chris Voss and "Influence" by Robert Cialdini for further reading. The most helpful thought for me in negotiation lately has probably been this: "If you cannot say no, you are not in a negotiation. You are a hostage." It pays to cultivate alternative plans and options if you can.

Side-hustles are also increasingly put forward as an option to increase income. I have no particular experience in that space, but a word of caution: It is easy to burn yourself out while pursuing more income. Remember, you are doing this to spend your time more freely, independent of your financial situation, and the alternative of becoming a Buddhist monk is quite challenging. Make a long term plan on how you will move from "more forced work" to "less forced work". 

It's also a great idea consider investments in your own skills and network as a way for growth. Becoming independent will likely take you some time. Investing in yourself now will accelerate your growth, even if it feels a bit slower right now. 

## Spending Less

Then there is "spending less". The ideas here seem endless: Cultivating your own food, learning basic repair skills and valuing the true costs of purchase against the lifetime of an item are all examples of the varied ways to tackle such a thing. For a whole array of different tips and techniques I can highly recommend the "[Mr Money Mustache](https://www.mrmoneymustache.com/)" blog and "[Early Retirement Extreme](http://earlyretirementextreme.com/)" by Jacob Lund Fisher (a true hidden gem). Central to the idea of spending less is learning which expenses are actually contributing to your goals meaningfully. Again, it all depends on your own goals.  Before you can understand that, you must generate insights into your current financial behavior. It is definitely true that you manage what you measure.

Personally I've tried a number of approaches, ranging from Excel to open source programs like [GNUCash](https://www.gnucash.org/). I made the mistake of wanting to automate everything before I even began. This has led to lots of "active procrastination" on my part, trying to perfect imports and formulas. Accounting by hand is quite doable and actually gives you great insights into the details of your situation. I would suggest learning to use accounting software, even if you have to pay a subscription fee or follow a course. It will help you establish good accounting habits. When you have all that up and running you can even use the data to make graphs! This is a great way to get more insight from all that data, and I highly recommend it. I would have never understood my own spending behavior to the extent I do otherwise. 

## Inflation And Why Investments Matter

Earning more and spending less would all be for naught if the difference is not put to work. Just having money in the bank is not necessarily a bad thing, but inflation will wipe out all your buying power if you're not careful! It's a devious little devil though. Since the amount of money stays the same it has been incredibly hard for me to get a true sense of the effect of inflation on my capital. I've had to repeat to myself over and over that my buying power actually decreases over time. I now simply picture a little demon stealing my money time I see my bank account. The current inflation levels are particularly scary though. Time for an example:

Barring extreme circumstances I think that, based [European inflation number](https://www.inflation.eu/en/inflation-rates/europe/historic-inflation/hicp-inflation-europe.aspx) over the pas 40 years, an average inflation of 2% is quite reasonable. Let's assume that stays fixed for our example.

Each year, your buying power would decrease by an inflation rate $i$ at 2%. That is roughly the same as saying that your "money becomes worth less" over that period by 2%. Say your starting amount is denoted $S$ as 100 euros. In a year $y$, the value would then decline by:
$$
\begin{split}
S*(1-i)^y = S_{y} \\
100*(1-0.02)^1 = 98 
\end{split}
$$
That does not seem too bad perhaps, but these effects tend to add up. It would perhaps be more insightful to see how much time it takes for the value of your money to be halved. Risking being slightly too technical, we can rewrite the equation and solve for the number of years $y$:
$$
\begin{split}
S*(1-i)^y = S_y \\
(1-i)^y = \frac{S_y}{S} \\
y*\log(1-i) = \log{\frac{S_y}{S}} \\
y = \frac{\log{S_y} - \log{S}}{\log(1-i)}
\end{split}
$$
Now we can fill in the same variables as last time, but instead of the number of years $y$ we fill in the ending amount $S_y$ at 50:
$$
\frac{\log{50} - \log{100}}{\log(0.98)} \approx 34 \\
$$
So in 34 years your money will buy you half the stuff it used to. Still not particularly scary. Let's plug in the current, way more extreme, 10 percent-ish inflation and see what happens:
$$
\frac{\log{50} - \log{100}}{\log(0.90)} \approx 6.5 \\
$$
Holy cricket! That's not a lot of time until my capital vanishes in thin air! Depending on the amount you have saved versus the amount you are earning, you might work full-time and still lose money. That is the terrible power of inflation. Luckily though, this power also applies to an increase in value! Time to see how we can combat the eery effect of inflation, and with a bit of skill and luck earn more than we lose!

## Putting Money To Work

So we'd like to put our money to work for us. The ways to invest money are endless, but some of the most well-known varieties include:

- Stocks
- Indexes and ETFs
- Real estate
- Bonds

Covering even one of those could fill a small library, so let me just say that the goal of all of these is similar: The investment should generate a return without our active involvement (unless your calling is that of an investment portfolio manager). This is possible because the investments are used, in principal, to generate returns in the future. We part with our money now, entrust it to some other entity that now has the cash to build a valuable project, and in return we receive interest over time. The reality is more subtle and complex, but it is this dynamic that is at the heart of an investment transaction. That is why money can "work for us". In actuality, it is always a person or a group of people that are working to generate that interest. A concept to keep in mind, as it is easily forgotten when jumping into the technical world of finance and investments.

As opposed to the effect of inflation, which "devalues" money, gaining interest has the potential to grow your wealth. There is an effect that we can use to maximize the rate at which we earn: Making use of compound interest. Compounding is simple in principle, but enormously powerful. You take the revenue generated from your investments and use it to invest more. Since people generally think linearly it's hard to get a feeling for the power of compounding from just the description. An example is in order.

We'll compare a similar non-compounding and compounding investment. The initial investment $S$ equals 100 euros. We have done our research, and have found an investment that will yield a yearly return $i$ of 4% every year. We will leave the money invested for 3, 10, 25 and 50 years, denoted by $y$. The only difference will be that for the compounding style of investing we will re-invest all the earnings back into the investment. We'll look at the different outcomes $S_y$ over time.

First the formula for compounding investments. It is actually the same as the inflation equation presented earlier, but the interest is now positive:
$$
S(1+i)^y = S_{y}
$$
For those of you that are interested, you can derive this formula using the sequence of steps below. Every year the gains get added to the starting amount of last year:
$$
\begin{split}
S_1 = S + Si \\
S_2 = S_1 + S_1i = S + Si + Si + Si^2 = S + 2Si + Si^2 \\
S_y = S + ySi + (y-1)Si^2 + ... + Si^y \\
S_y = S(1 + i)^{y}
\end{split}
$$
For non-compounding interest the formula looks like this:
$$
\begin{split}
S_1 = S + Si \\
S_2 = S + Si + Si = S + 2Si = S(1+2i) \\
S_y = S(1+yi)
\end{split}
$$
Since we have a number of scenarios I'll fill a table with the results:

|      | Non-Compound | Compound |
| ---- | ------------ | -------- |
| y=3  | 112          | 112.49   |
| y=10 | 140          | 148.02   |
| y=25 | 200          | 266.58   |
| y=50 | 300          | 710.67   |

Compounding makes a huge difference when your time horizon is long! In this example you would have doubled your money by re-investing the proceeds. The trick here is that this also works when the initial investment is high. Say we start with 50,000 instead of 100 euros. That would look like this:

|      | Non-Compound | Compound |
| ---- | ------------ | -------- |
| y=3  | 56,000       | 56,100   |
| y=10 | 70,000       | 74,000   |
| y=25 | 100,000      | 133,000  |
| y=50 | 150,000      | 350,000  |

Compounding can be a powerful ally in your fight to become financially independent. We have not yet looked at the scenario where would regularly invest more money, and I think I shall leave that for another day. 

If you have been inspired by the concept, I think you will also enjoy reading "Rich Dad, Poor Dad" by Robert Kiyosaki and "What I Learned Losing A Million Dollars" by Jim Paul. For my Dutch readers: Check out [Jong Beleggen, de podcast](https://jongbeleggendepodcast.nl/) for a great introduction to investing! You'll probably also find [the Boglehead movement](https://www.bogleheads.org/wiki/Getting_started) to be of interest. They use passive investing and compounding as the central force of their ideas on wealth management.  

I hope this has given you insight into why compounding matters. Used correctly it can serve as the basis of your financial independence! If your investment is high enough and fortune smiles, you could live off of your investments indefinitely! This is especially true if you have mastered the art of frugal living. It can free your time so you can do what is important, not merely urgent. I hope this post has given you some food for thought, and some leads to follow up on them! Best of luck, see you next post.

Mickey
