---
title: "On Markup and Layout"
date: "2017-03-14"
tags: ["Design"]
url: "https://robots.thoughtbot.com/on-markup-and-layout"
path: "on-markup-and-layout"
source: "thoughtbot"
source_icon: "source-thoughtbot.svg"
ogImage: {
  url: "https://images.thoughtbot.com/cp-design-for-the-web/Z9ceWhcOQxauO5ync0CB_layout-pieces.png"
}
summary: "Let’s talk a bit what makes designing for the web a unique challenge."
---

Let’s talk a bit what makes designing for the web a unique challenge.

One part of the challenge is simply how to display content on a screen. It should work in a variety of resolutions and physical dimensions, should respond appropriately to a tap or a mouse click, and it should relate to the user what affordances are available to them. A browser will render plain text just fine, but that’s never what we want, so we have to give it a little help. It needs to know how to apply our styles but also how each piece of content relates to another or to use modern browser features. Browsers are increasingly using markup to allow your app to tap into the operating system for things like geolocation and hardware acceleration.

_Semantics_ is the use of HTML tags for their meaning rather than their aesthetics. This is important from an organizational perspective and you might be surprised by how many navigational flaws can be fixed by being deliberate about how your content is organized. It’s also useful for making sure that your application is easily understood by both machines (such as Google’s bots) and people browsing without stylesheets, such as the visually impaired.

Most designers write their HTML and CSS at the same time, but one easy way to make sure that your markup has a proper structure is to write it without a stylesheet. This ends up looking more like a manuscript, with prominent headlines and not a lot of differentiation in the body copy.

![](https://images.thoughtbot.com/cp-design-for-the-web/Z9ceWhcOQxauO5ync0CB_layout-pieces.png "Hierarchy and Layout")

This gives us a nice baseline to start building our content from the inside out so that it is easy for users to navigate, for robots to parse, and for us to manage.
