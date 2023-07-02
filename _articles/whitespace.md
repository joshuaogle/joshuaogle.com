---
title: "Whitespace"
meta:
  date: "2017-03-14"
  url: "https://robots.thoughtbot.com/whitespace"
  source: "thoughtbot"
  source_icon: "source-thoughtbot.svg"
ogImage:
  url: "https://images.thoughtbot.com/cp-design-for-the-web/zhquLBEGRP68MT3w8oZh_elements-white-space-micro-small.png"
summary: "Whitespace is probably the most under-appreciated yet impactful part of a good design."
---

Whitespace (or _White space_) is probably the most under-appreciated yet impactful part of a good design. Whitespace refers to areas that aren’t the content of the design. That’s everything from the space around the layout, margins separating pieces of content, to the spaces between lines of text. In reading material, this space is often the white of the paper, but whitespace isn’t really about color at all. In art you will sometimes hear it called _negative space_, space that is not the subject of the artwork. Personally, I like this term better, but web design is descended from graphic and print design, so “whitespace” it is.

An app that doesn’t use it well feels cluttered and it is difficult to distinguish hierarchy and interactions. After talking for so long in previous chapters about how important content is, it may seem counter-intuitive to think of the space _between_ the content as being equally important. Whitespace tends to go unnoticed. After all, it is just “empty” space, right? However, once you see its effects it will be hard not to appreciate whitespace used well.

Whitespace happens on two different levels in a design, one at the layout level between large blocks of content, and at the much smaller level of text. While they work together to create a beautiful whole, these two different kinds of whitespace are managed very differently.

## Creating focus with Macro-whitespace

_Macro-whitespace_, you might guess from the name, is the larger of the levels that I mentioned. It creates breathing room between large elements to create hierarchy on the page, and generally making the page feel approachable. This is essential when [grouping like objects](https://robots.thoughtbot.com/form-and-space) because part of making elements feel related is pushing the surrounding elements away. You’re managing the space between objects, but in a weird way you are also managing time (feels powerful, doesn’t it?). Adjusting the space between elements controls the pacing of the page, which affects the user’s attention and experience of your application. When you give your content ample room your pages do get longer, and product owners will often fight against that. However, the result is that your content is faster and easier for your user to process.

One brand that consistently uses strong macro-whitespace is [Apple](http://apple.com). Product owners have been chasing after “the Apple look” for years, describing it as “clean” and “simple”. Some of their signature look comes from close attention to typography and great photography, but the real secret is whitespace. Apple is known for producing high quality, painstakingly designed products. That kind of branding requires a strict styleguide with design cues that serve as a signal to the kind of high-end customers that Apple wants to attract.

![Apple.com](https://images.thoughtbot.com/cp-design-for-the-web/rioTUswbSSC4PZBrq0Kv_elements-white-space-macro.png)

As you can see in the example above, Apple uses generous amounts of whitespace. This works together with the thin typeface and large font sizes to make sure that there isn’t too much information on the screen at once. This technique is pretty common in marketing pages, but Apple uses this technique almost everywhere, creating a unified brand that feels elegant and crafted.

Whitespace also creates [balance](https://robots.thoughtbot.com/balance). After all, centering an element could be thought of as adding whitespace to the sides. Making two sections symmetrical is often about managing the whitespace around those sections. Being aware of whitespace when composing your design will make balancing elements easier, and you may also [discover ways to use the negative space](https://photographylife.com/negative-space-in-photography) to your advantage.

## Improving readability with Micro-whitespace

The other end of the whitespace scale works very differently. On the small scale, you’re talking about the space between lines of text, or even between and within characters. As Mark Boulton describes it in [his excellent A List Apart article](http://alistapart.com/article/whitespace), this is “the itty-bitty stuff”. It’s the space between an icon and label, between an image and the surrounding text, and the space between paragraphs.

Here are two basic examples of the popular blog platform, [Medium](http://medium.com), with whitespace removed and with the original amount of whitespace:

![Medium, without space](https://images.thoughtbot.com/cp-design-for-the-web/zhquLBEGRP68MT3w8oZh_elements-white-space-micro-small.png)

Reducing whitespace and spacing between paragraphs makes it harder to read the lines of text. It’s difficult to separate the words when reading big paragraphs, and it can get frustrating pretty quickly.

![Medium, as intended](https://images.thoughtbot.com/cp-design-for-the-web/RRpWixsSdCNGZnl1LoBg_elements-white-space-micro-large.png)

Medium takes design seriously, which might account for their popularity. They’re doing a lot in the CSS with both macro and micro-whitespace. First of all, there is a `max-width` on the content, which on bigger screens will give ample breathing room on the sides and keep the lines of text at a comfortable length. When talking about whitespace and text, it is usually measured in _ems_, relating it to the size of the letters. Margins between paragraphs are rather large at about `1.5em`. The heavy lifting though is the `line-height`, which is set at a large (and very specific) `1.58em`. There has been a lot of discussion over the best line-height (also called _leading_), and researchers generally agree that somewhere between 1.5 and 2.0 is optimum, but designers often set theirs closer to 1.3. This probably sounds very nitpicky, but you’ll have to try for yourself to find the best amount for your project.

If you want to pick even more nits, Mark Boulton recounts in that same article the process that designer Erik Spiekermann used in [his redesign of the Economist](http://spiekermann.com/en/why-the-economist-is-thriving). Determined not to increase the number of pages in the magazine (and therefore printing cost), he turned his attention to redesigning the typeface itself! He made the typography thinner and added more whitespace in the anatomy of the letterforms. This meant they could get away with keeping the leading small and it still felt lighter and more comfortable. This is a great example of how tweaking whitespace in one detail can decrease the negative effects of the lack of it in others.

CSS gives us quite a bit of control over the minutiae of text, so take advantage of it to give special attention to the small details. Make these small building blocks build on or contrast with your macro-whitespace to guide your user through the experience. It does often go without conscious appreciation, but your users will thank you for it through the smiles on their faces and their return visits.
