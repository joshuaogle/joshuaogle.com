---
title: Reusable jQuery Effects
date: 2010/11/01
tags: jquery
---
One of my favorite things about writing javascript is finding ways to write less of it. Javascript is one of those things that tends to build up and pretty soon your site is crawling under all the weight. There's a few things we can do to keep it lean.

That's what I like so much about [jQuery](http://jquery.com) (and other frameworks, but jQuery is my weapon of choice), it simplifies a lot of the common scripting that gets done.

By combining some clever selectors and an OOCSS-style pattern for naming conventions, we can make adding the most common jQuery effects really simple. For this example, I am using "id" attributes, because it makes the javascript a little simpler and I like reserving id's for javascript (this makes sure I don't remove one thinking it only affects styling, and also makes the script a bit faster). There are two parts here, a container and a toggle.

###Let's get started
First, give your container an id (anything you want), and then give your toggle the same id preceded by "toggle-".
Here's our HTML:

```html
<a id="toggle-pangolin" class="button">Fun Fact</a>
<div id="pangolin">
  Pangolins are the adorable offspring of a dragon and a tank.
</div>
```

```js
/* First we find all elements with an ID that starts with "toggle-" */
$("[id*=toggle-]").live("click",function() {

  /* Strip the "toggle-" from the id so we know what we're looking for */
  var container = $(this).attr("id").replace("toggle-","");

  /* Find the container and perform the effect */
  $("#"+container).toggle();

  /* Stop the browser from going anywhere */
  return false;

});
```

###A few more tricks
Now that's just a simple show/hide toggle, but what about something a little fancier? We can expand this a little more to make some toggles for slides and fades:

```js
/* Show/Hide Toggle */
$("[id*=toggle-]").live("click",function() {
  var container = $(this).attr("id").replace("toggle-","");
  $("#"+container).toggle();
  return false;
});

/* Slide Toggle */
$("[id*=slide-]").live("click",function() {
  var container = $(this).attr("id").replace("slide-","");
  $("#"+container).slideToggle();
  return false;
});

/* Fade Toggle */
$("[id*=fade-]").live("click",function() {
  var container = $(this).attr("id").replace("fade-","");
  if ($("#"+container).is(":visible")) {
    $("#"+container).fadeOut();
  } else {
    $("#"+container).fadeIn();
  }
  return false;
});
```

There are a few limitations, but nothing that has been a problem for me so far and I think it helps simplify things. Since we are using id's, that means only one toggle per container. Also, if we want to want to do something more sophisticated rather than a simple toggle, it has to be added as an "onClick" to the toggle, or else you're dealing with custom javascript (which is what you were going to have to do before this anyway).

I'd love to hear what you guys think, and especially any suggestions on how to make these simpler and/or better. Drop a comment below, or send a message over to <a href="http://twitter.com/joshuaogle">@joshuaogle</a> on Twitter.
