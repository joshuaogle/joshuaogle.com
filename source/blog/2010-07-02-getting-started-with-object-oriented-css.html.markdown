---
title: Getting started with Object Oriented CSS
author: Joshua Ogle
date: 2010-07-02
tags: css, oocss, object oriented css
---

A few months ago, a Performance Engineer at Yahoo! named Nicole Sullivan (who also goes by the name &#8216;Stubbornella') made a big splash talking about Object Oriented CSS. The basic idea is to keep CSS classes as reusable as possible and apply them to elements using multiple classes as a way to mix and match to create the style and structure that you need.
I'd like to be clear that OOCSS isn&#8217;t for most projects. It&#8217;s only going to be hugely beneficial for sites that have a lot of modular content, such as widgets, and if taken too far it can lead to headaches and go against what most would consider proper markup. So as with most things, keep it simple.  We&#8217;ll get into some alternatives and caveats later.

##Nicole Sullivan's introduction to OOCSS
<div class="embed-container">
  <iframe src="http://www.slideshare.net/slideshow/embed_code/990405" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" allowfullscreen></iframe>
</div>
The slides form her talk are [on Slideshare](http://www.slideshare.net/stubbornella/object-oriented-css), and she has written a [blog post on OOCSS](http://www.stubbornella.org/content/2009/02/28/object-oriented-css-grids-on-github) that explains the subject in much better detail. Oh, and make sure you checkout (a little Git humor for ya) her [demo repository on Github](http://github.com/stubbornella/oocss).

##The basics
####Separate container and content
If you are familiar with [960.gs](http://960.gs) then you already have a head start on this concept. If not, head over and read up on that before you get started here. Your grid controls the width of your objects, and the content controls the height. You should avoid setting explicit widths and heights on your elements wherever possible. Not only because we want our objects and classes to be reusable, but your content could (and probably will) change.

####Separate Structure and Style
Nicole recommends separating your CSS that controls the layout of the page from the styles (backgrounds, text colors, borders, drop shadows etc). This is one thing that is rarely done on small sites that can be easy to overlook, but is pretty crucial to building really pluggable classes. We're all used to writing widths, font colors, margins and backgrounds all in the same place. *Trust the grid* as much as possible, and try to let your Headline tags determine your font sizes. On wimgo, we even went so far as to keep structure and style on two different stylesheets. This could theoretically lead to toggling the &#8216;style&#8217; stylesheet for different themes, but mostly it makes sticking to these rules really easy. I haven&#8217;t done it on this site, but it&#8217;s something to consider. Let&#8217;s take a look at an example of what that might look like.

<div class="code-title">structure.css</div>
```css
.mod { display: block; }
```

<div class="code-title">And now for the HTML</div>
```html
<div class="mod">
   <div class="inner">
     <div class="hd">.mod (the default)</div>
     <div class="bd">bd</div>
     <div class="ft">ft</div>
   </div>
</div>
```

<h3>Mix and match styles</h3>
<div class="examples">
  <div class="quarter f-left">
    <div class="mod">
      <div class="inner">
        <div class="hd">.mod (the default)</div>
        <div class="bd">bd</div>
        <div class="ft">ft</div>
      </div>
    </div>
  </div>
  <div class="quarter f-left">
    <div class="mod">
      <div class="inner">
        <div class="hd bg1">.mod, with .hd.bg1</div>
        <div class="bd">.bd</div>
        <div class="ft bg1">.ft.bg1</div>
      </div>
    </div>
  </div>
  <div class="quarter f-left">
    <div class="mod rounded">
      <div class="inner">
        <div class="hd bg2">.mod.rounded, with .hd.bg2</div>
        <div class="bd">.bd</div>
        <div class="ft">.ft</div>
      </div>
    </div>
  </div>
  <div class="quarter f-left">
    <div class="mod rounded">
      <div class="inner">
        <div class="hd bg2">.mod.rounded, with .hd.bg2</div>
        <div class="bd">.bd</div>
        <div class="ft">.ft</div>
      </div>
    </div>
  </div>
</div>

<div class="code-title">structure.css</div>
```css
.quarter { width: 25%; }
.mod .hd, .mod .bd, .mod .ft {
   padding: 3px;
}
.mod {
   overflow: hidden;
   margin-bottom: 20px;
}
```

<div class="code-title">style.css</div>
```css
.mod {
   font-size: 11px;
   background: #fff;
   text-shadow: none;
}
.rounded {
   -webkit-border-radius: 3px;  -moz-border-radius: 3px; border-radius: 3px;
}
.rounded .hd {
   -webkit-border-top-left-radius: 3px;  -moz-border-radius-topleft: 3px; border-radius-topleft: 3px;
   -webkit-border-top-right-radius: 3px;  -moz-border-radius-topright: 3px; border-radius-topright: 3px;
}
.rounded .ft {
   -webkit-border-bottom-left-radius: 3px;  -moz-border-radius-bottomleft: 3px; border-radius-bottomleft: 3px;
   -webkit-border-bottom-right-radius: 3px;  -moz-border-radius-bottomright: 3px; border-radius-bottomright: 3px;
}
.bg1 {
   background-color: #888;
   color: #fff;
}
.bg2 {
   background-color: #62A3CA;
   color: #fff;
}
```
<style type='text/css'>
.examples { margin: 0 0 3em; overflow: hidden; }
.quarter { float: left; width: 21%; margin: 0 2%; }
.mod .hd, .mod .bd, .mod .ft { padding: 3px; }
.mod { overflow: hidden; font-size: 11px; background: #fff; text-shadow: none; margin-bottom: 20px; }
.rounded { -webkit-border-radius: 5px; -moz-border-radius: 5px; border-radius: 5px; }
.rounded .hd { -webkit-border-top-left-radius: 5px;  -moz-border-radius-topleft: 5px; border-radius-topleft: 5px; -webkit-border-top-right-radius: 5px;  -moz-border-radius-topright: 5px; border-radius-topright: 5px; }
.rounded .ft { -webkit-border-bottom-left-radius: 5px;  -moz-border-radius-bottomleft: 5px; border-radius-bottomleft: 5px; -webkit-border-bottom-right-radius: 5px;  -moz-border-radius-bottomright: 5px; border-radius-bottomright: 5px; }
.bg1 { background-color: #888; color: #fff; }
.bg2 { background-color: #62A3CA; color: #fff; }
</style>

<div class="code-title">And now the HTML</div>
```html
<div class="quarter f-left">
  <div class="mod">
    <div class="inner">
      <div class="hd">.mod (the default)</div>
      <div class="bd">bd</div>
      <div class="ft">ft</div>
    </div>
  </div>
</div>
<div class="quarter f-left">
  <div class="mod">
    <div class="inner">
      <div class="hd bg1">.mod, with .hd.bg1</div>
      <div class="bd">.bd</div>
      <div class="ft bg1">.ft.bg1</div>
    </div>
  </div>
</div>
<div class="quarter f-left">
  <div class="mod rounded">
    <div class="inner">
      <div class="hd bg2">.mod.rounded, with .hd.bg2</div>
      <div class="bd">.bd</div>
      <div class="ft">.ft</div>
    </div>
  </div>
</div>
<div class="quarter f-left">
  <div class="mod rounded">
    <div class="inner">
      <div class="hd bg2">.mod.rounded, with .hd.bg2</div>
      <div class="bd">.bd</div>
      <div class="ft">.ft</div>
    </div>
  </div>
</div>
```

Looking around any of Yahoo's sites is a great way to get some good ideas on how best (and how not) to mix styles.

###A note on text styles
Nicole recommends using your headline tags (H1, H2, et cetera) to set the font-size of your text. In theory, if your H2 really is more important than your H3 then it should also reflect that in your visual hierarchy. Things can get a bit tricky here when SEO disagrees with usability, but it's worked out well for us. Another thing to consider is using classes for your text colors. Use your styleguide to create classes like &#8216;color1, color2, color3&#8242; or &#8216;color-primary, color-link, color-highlight&#8217; (that way you don&#8217;t have to change our class names if you change colors later) and your blocks of code can be plugged into another section. Just change the headline tag and color class to match the new area and you&#8217;re done in a matter of seconds.

You'll still have non-object stuff, and that's okay too, but you will be amazed by how much of the code that you write every day fits into this model.

