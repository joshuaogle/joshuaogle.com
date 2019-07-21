---
title: "Positioning Elements on the Web"
date: "04/04/2017"
tags: ["Design", "CSS"]
url: "https://robots.thoughtbot.com/positioning"
path: "positioning"
source: "thoughtbot"
source_icon: "source-thoughtbot.svg"
summary: "Choosing how to position an element in CSS is sometimes really a choice about what side effects are most acceptable."
---

Choosing how to position an element in CSS
is sometimes really a choice
about what side effects
are most acceptable.

Positioning layouts in CSS
was once a very daunting task,
and hacks like using tables
for the entire layout
were quite common.
Over the years,
the demand for better layout tools
has led to steadily better
support and techniques.
Today we have options,
and learning to manage
each of these techniques
is the key to creating complex layouts
that remain easy to change
and flexible enough
to handle multiple screen sizes.

## Floats

*Floats* are the most commonly used layout technique
in CSS,
but they can be frustrating
if you don’t know
how they affect their neighboring elements.
When you style an element with `float: left`,
the following elements will *reflow*.
The *document flow* is just the order
of the content
and how the elements arrange themselves
around each other.
If the floated element
does not have a set width,
it will collapse to the width of the contents.
If the following element
is narrower than the remaining space,
it will move to the right.
Keep in mind that elements set to `display: block`
will need to be given a set width
or they will remain on their own line.

You can prevent an element from reflowing
by giving it a `clear` property
in your stylesheet.
Options include `clear: both`,
`clear: left` (which will still allow reflowing
following elements with `float: right`),
and `clear: right` (which does the opposite).
You can also use `clear: none`
to override the default behavior.
This is the basic idea behind *grids*,
which we will cover in detail later,
along with how to use floats responsively.

Because floated children
will cause their parent elements to collapse,
you will find yourself tempted
to create new elements
just to add `clear: both`
and prevent this behavior.
While that does work,
we want to keep our markup semantic
so this should be done
just using CSS if possible.
By using an `::after` pseudo-element,
you can create a *[clearfix](http://cssmojo.com/latest_new_clearfix_so_far)*:

<pre>
<code>
<span class="nc">.container</span><span class="nd">::after</span> <span class="p">{</span>
  <span class="nl">clear</span><span class="p">:</span> <span class="nb">both</span><span class="p">;</span>
  <span class="nl">content</span><span class="p">:</span> <span class="s1">""</span><span class="p">;</span>
  <span class="nl">display</span><span class="p">:</span> <span class="n">table</span><span class="p">;</span>
<span class="p">}</span>
</code>
</pre>

Using a preprocessor like [Bourbon](http://bourbon.io)
makes it easy to add this
as a Sass mixin:

<pre>
<code>
<span class="nc">.container</span> <span class="p">{</span>
  <span class="err">@include</span> <span class="err">clearfix;</span>
<span class="p">}</span>
</code>
</pre>

Floats work best for large containers,
but may not work so well
for text elements
since it will be difficult to align.
You may find that
using `display: inline-block`
is better for these situations.

## Position CSS Property

*Positioning* gives us
a completely different layout method.
The default value is `static`,
and makes the element behave normally.

Using `position: relative`
lets you specify an offset with
`top`, `bottom`, `left`, and `right`.

<pre>
<code>
<span class="nc">.logo</span> <span class="p">{</span>
  <span class="nl">position</span><span class="p">:</span> <span class="nb">relative</span><span class="p">;</span>
  <span class="nl">left</span><span class="p">:</span> <span class="m">1em</span><span class="p">;</span>
  <span class="nl">top</span><span class="p">:</span> <span class="m">1em</span><span class="p">;</span>
<span class="p">}</span>
</code>
</pre>

This can be useful
to do a simple offset
without using something like `margin`,
but it becomes really powerful
when containing a child
with `position: absolute`.
*Absolute positioning* bases the elements position
relative to the nearest parent element
that has `position: relative` set.
If it can’t find one,
it will be relative to the document.

<pre>
<code>
<span class="nc">.hero</span> <span class="p">{</span>
  <span class="nl">position</span><span class="p">:</span> <span class="nb">relative</span><span class="p">;</span>
<span class="p">}</span>

<span class="nc">.hero-icon</span> <span class="p">{</span>
  <span class="nl">position</span><span class="p">:</span> <span class="nb">absolute</span><span class="p">;</span>
  <span class="nl">left</span><span class="p">:</span> <span class="m">20px</span><span class="p">;</span>
  <span class="nl">top</span><span class="p">:</span> <span class="m">10%</span><span class="p">;</span>
<span class="p">}</span>
</code>
</pre>

![](https://images.thoughtbot.com/cp-design-for-the-web/zG7dmAAqSkK24vFr81Gg_layout-absolute.png)

Absolute positioning should not be used
to layout columns of content.
Because the elements are removed
form the document flow,
that means every time
you add content to one section,
you may have to adjust the sizes
of other sections by hand,
and it makes responsive design
much more of a hassle
than it needs to be.
Reserve absolute positioning
for getting those small design elements
exactly where you want them to be.
As a general rule,
if an element can be simply positioned
using floats or a change to the `display` styles,
it is probably best
to avoid absolute positioning.

Something that can be very useful
but stumps a lot of beginners
is centering elements
with absolute positioning.
If your element has a set size,
it’s just a matter of offsetting using margins.
Let’s take the last example
but center the icon both horizontally and vertically.
To center an element using absolute positioning,
just follow these steps:

1. Add `left: 50%` to the element
  that you want to center.
  You will notice that this
  aligns the left edge
  of the child element
  with the 50% line
  of the parent.
2. Add a negative left margin
  that is equal
  to half the width
  of the element.
  This moves us back
  onto the halfway mark.
3. Next, we’ll do a similar process
  for the vertical axis.
  Add `top: 50%` to the child
4. And then add a negative top margin
  equal to half its height.

![](https://images.thoughtbot.com/cp-design-for-the-web/5xLlVkZRSxCPvMySHnYg_layout-absolute-center.png)

This means that even though
the container may change sizes,
the centered element will stay
right where we want it.
The resulting CSS
should look something like this:

<pre>
<code>
<span class="nc">.container</span> <span class="p">{</span>
  <span class="nl">position</span><span class="p">:</span> <span class="nb">relative</span><span class="p">;</span>
<span class="p">}</span>

<span class="nc">.centered-element</span> <span class="p">{</span>
  <span class="nl">height</span><span class="p">:</span> <span class="m">100px</span><span class="p">;</span>
  <span class="nl">width</span><span class="p">:</span> <span class="m">100px</span><span class="p">;</span>
  <span class="nl">position</span><span class="p">:</span> <span class="nb">absolute</span><span class="p">;</span>
  <span class="nl">left</span><span class="p">:</span> <span class="m">50%</span><span class="p">;</span>
  <span class="nl">margin-left</span><span class="p">:</span> <span class="m">-50px</span><span class="p">;</span>
  <span class="nl">top</span><span class="p">:</span> <span class="m">50%</span><span class="p">;</span>
  <span class="nl">margin-top</span><span class="p">:</span> <span class="m">-50px</span><span class="p">;</span>
<span class="p">}</span>
</code>
</pre>

*Fixed positioning* works like `absolute`,
but is always relative to the viewport
rather than the document
and will remain in place when the user scrolls.
This can make your app
feel more like a native application,
with a fixed header or side navigation,
or for [any element](http://www.google.com/design/spec/components/buttons-floating-action-button.html) you want to keep
in easy reach.
Like absolute positioning,
fixed elements will be removed
from the document flow,
so you may need to add padding
on an element beneath them
to make sure your other content
will still be visible.

*Sticky positioning* is the newest of the group,
and doesn’t have good enough [browser support](http://caniuse.com/#feat=css-sticky)
to suggest using it.
There are some [great articles](http://updates.html5rocks.com/2012/08/Stick-your-landings-position-sticky-lands-in-WebKit)
on how to go about using it,
as well as [javascript alternatives](https://github.com/garand/sticky).
This shouldn’t be confused with
the ever-popular *[sticky footer](http://ryanfait.com/html5-sticky-footer)* technique,
which also deserves a special mention.

The position property gives us the advantage
of being able to specify the
*z-index* of our elements.
If we go back to our metaphor
of seeing elements as pieces of paper,
setting the `z-index` property
allows us to specify
whether our paper is above or below
the other pieces.
A higher number will appear above,
and a higher number will appear below.
You can also use a negative number,
which may make the element appear
behind the parent
(or even behind the document entirely!).
This can lead to a sort of arms race
with higher and higher numbers
to ensure an element always sits on top.
This can get pretty unmanageable
and it is better to use positioning
and z-indexes conservatively.

## Flexbox

A good way to handle elements
of variable sizes is to use
the new *flexbox* properties
introduced in CSS3.1.
This gives us a lot more options
to control layout
and has solved
some of the long-standing problems in CSS.
[Browser support](http://caniuse.com/#feat=flexbox) is good,
and with [a polyfill](http://flexiejs.com) or fallback
to get Internet Explorer up to speed,
it’s ready for production usage.

I said that we weren’t
going to talk about
how CSS works, but
flexbox is still new
and unfortunately the syntax is very confusing.
Flexbox is such a powerful tool
and replaces so many
other hacky solutions,
so it is worth taking the time
to understand how to use it.

Let’s jump in.
Here is how to set up
an element to use flexbox.

<pre>
<code>
<span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"container"</span><span class="nt">&gt;</span>
  <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"item"</span><span class="nt">&gt;&lt;/div&gt;</span>
  <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"item"</span><span class="nt">&gt;&lt;/div&gt;</span>
  <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"item"</span><span class="nt">&gt;&lt;/div&gt;</span>
  <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"item"</span><span class="nt">&gt;&lt;/div&gt;</span>
<span class="nt">&lt;/div&gt;</span>
</code>
</pre>

<pre>
<code>
<span class="nc">.container</span> <span class="p">{</span>
  <span class="nl">display</span><span class="p">:</span> <span class="n">flex</span><span class="p">;</span>
  <span class="nl">flex-direction</span><span class="p">:</span> <span class="n">row</span><span class="p">;</span>
<span class="p">}</span>
</code>
</pre>

Setting the container to `display: flex`
simply lets the browser know
that we intend the children
to use flexbox for their layout.
Then we add `flex-direction: row` to the children
to align them horizontally,
and by default they will be the same width
unless they have a width set.

* * *

*Flex-direction* allows you to specify
whether your elements should be arranged
vertically or horizontally.
By default,
the value will be `row`,
which simply arranges you items
horizontally.
You can also use `column`
to switch to a vertical orientation.

<pre>
<code>
<span class="nc">.container</span> <span class="p">{</span>
  <span class="nl">display</span><span class="p">:</span> <span class="n">flex</span><span class="p">;</span>
  <span class="nl">flex-direction</span><span class="p">:</span> <span class="n">row</span><span class="p">;</span>
<span class="p">}</span>
</code>
</pre>

![](https://images.thoughtbot.com/cp-design-for-the-web/MwnTUG5TBaJHUM7hnMaw_layout-flex-direction.png)

Keep in mind that using `column` may
affect how the other flexbox properties
look on your items,
and for simplicity
we will mostly be talking
about horizontal items
because that is by far
the most common use-case,
but keep in mind
that this other direction option does exist.

* * *

*Flex-wrap* defines whether elements
should be forced to fit
in a single line
(`no-wrap`, the default behavior)
or allowed to maintain
their normal size with `wrap`.
Most of the time
you will want the default behavior,
but overriding this property
will let you use flexbox’s
other properties
without affecting the widths.

<pre>
<code>
<span class="nc">.container</span> <span class="p">{</span>
  <span class="nl">display</span><span class="p">:</span> <span class="n">flex</span><span class="p">;</span>
  <span class="nl">flex-wrap</span><span class="p">:</span> <span class="n">wrap</span><span class="p">;</span>
<span class="p">}</span>
</code>
</pre>

![](https://images.thoughtbot.com/cp-design-for-the-web/Flonm9P5TgSzWVtiqFyR_layout-flex-wrap.png)

When set to `no-wrap`,
elements will still be
sized proportional to each other.
For instance,
imagine items in a list
are set to be `100px` wide,
except for the last one
which is `200px`.
The items will resize
to fit the container,
but the last item
will still be twice as wide
as the others.

* * *

*Justify-content* determines
how to space your content
in your row or column.
The default value is `flex-start`,
which will left align your items.
Naturally, we also have `flex-end`
to right align the items
and `center` to center them.
Things get more interesting
with `space-between`,
which give equal spacing
between items but not on the ends,
while `space-around` gives equal
spacing to the ends as well.

<pre>
<code>
<span class="nc">.container</span> <span class="p">{</span>
  <span class="nl">display</span><span class="p">:</span> <span class="n">flex</span><span class="p">;</span>
  <span class="nl">justify-content</span><span class="p">:</span> <span class="nb">center</span><span class="p">;</span>
<span class="p">}</span>
</code>
</pre>

![](https://images.thoughtbot.com/cp-design-for-the-web/rJPfdQBaR1toJmmH87ao_layout-justify-content.png)

This is best used when
the items have set widths
(or have reached their maximum widths).

This can be really helpful
when lining up your flexbox items
to your grid,
without relying on things like floats.

* * *

*Align-content* is similar to `justify-content`,
but controls where the items are
on the cross axis.
I say “other” because
when you are using `flex-direction: row`,
then `align-items` is controlling
the vertical alignment,
but when you are using `flex-direction: column`,
it’s the other way around.

You can align the items
to the baseline of the text
within each item by using
`baseline`.
There is also an option
to make each item
span from one end of the axis
to the other with `stretch`.

<pre>
<code>
<span class="nc">.container</span> <span class="p">{</span>
  <span class="nl">display</span><span class="p">:</span> <span class="n">flex</span><span class="p">;</span>
  <span class="nl">align-items</span><span class="p">:</span> <span class="nb">center</span><span class="p">;</span>
<span class="p">}</span>
</code>
</pre>

![](https://images.thoughtbot.com/cp-design-for-the-web/SOtxyVsFR5uFGQAps9wW_layout-align-content.png)

We can use `align-items: stretch`
to solve the “equal height columns” problem
that has plagued CSS layouts
since the beginning.
You can also set both `justify-content`
and `align-items` to `center`
to center your items
in the middle of your container,
which is really helpful for things
like hero areas and splash pages.

There are several more properties
that are used less often but
that you might find useful.

* * *

*Align-items* affects lines of content
and where they should be
within their container.
You can see below
that the items in each line
maintain their normal heights
(unless you are using `stretch`).

<pre>
<code>
<span class="nc">.container</span> <span class="p">{</span>
  <span class="nl">display</span><span class="p">:</span> <span class="n">flex</span><span class="p">;</span>
  <span class="nl">align-content</span><span class="p">:</span> <span class="n">stretch</span><span class="p">;</span>
<span class="p">}</span>
</code>
</pre>

![](https://images.thoughtbot.com/cp-design-for-the-web/9IoOcGARiqjCjtCGARkw_layout-align-items.png)

* * *

There are also a number
of flexbox properties
for the items in the container.
These are quite a bit
easier to understand
than the parent properties
and luckily,
there is a useful shorthand
that we can use to make this easier.

  .list-item {
    flex: <flex-grow> <flex-shrink> <flex-basis>;
  }

*   `flex-grow: <integer>` :
This provides another way
to give your flex items
different widths.
If you set all of your child elements
to `flex-grow: 1`,
but set the last child
to `flex-grow: 2`,
it will be twice as wide
as its siblings.
*   `flex-shrink: <number>` :
Determines how the element
will shrink when the container
is not wide enough
for the items to maintain
their natural width.
If the last element
is set to `flex-shrink: 2`
while its siblings
are set to `flex-shrink: 1`,
it will shrink twice as much
as its siblings.
*   `flex-basis: <size>` :
What we should consider
to the be natural size
of the item.
This can be thought of
as the “breakpoint”
at which the grow and shink properties
are triggered.

*Order* controls the order
in which the item
appears in the container.
Negative numbers are accepted
and will appear before
what would normally
be the first element.

*Align-self* has all of the same options
as `align-items`,
but lets you control
how individual elements
are aligned.
For instance,
the siblings may be set
to `flex-start`,
but you can chose an item
to set to `flex-end`.

You probably won’t be using all
of these together,
but such a monstrosity would look like this:

<pre>
<code>
<span class="nc">.container</span> <span class="p">{</span>
  <span class="nl">align-items</span><span class="p">:</span> <span class="n">flex-start</span><span class="p">;</span>
  <span class="nl">display</span><span class="p">:</span> <span class="n">flex</span><span class="p">;</span>
  <span class="nl">height</span><span class="p">:</span> <span class="m">40em</span><span class="p">;</span>
<span class="p">}</span>

<span class="nc">.item</span> <span class="p">{</span>
  <span class="nl">flex</span><span class="p">:</span> <span class="m">1</span> <span class="m">1</span> <span class="m">2em</span><span class="p">;</span>
<span class="p">}</span>

<span class="nc">.item</span><span class="nd">:nth-child</span><span class="o">(</span><span class="nt">3</span><span class="o">)</span> <span class="p">{</span>
  <span class="nl">align-self</span><span class="p">:</span> <span class="n">flex-end</span><span class="p">;</span>
  <span class="nl">flex</span><span class="p">:</span> <span class="m">2</span> <span class="m">10</span> <span class="m">5em</span><span class="p">;</span>
  <span class="nl">order</span><span class="p">:</span> <span class="m">-1</span><span class="p">;</span>
<span class="p">}</span>
</code>
</pre>

* * *

Flexbox can be a hard thing
to wrap your head around,
especially if you are used to
the quirks of traditional CSS layouts.
Site like [Codepen](http://codepen.io)
are a good way to learn
is just to experiment
and see what you can come up with.

If you aren’t sure
how you would use flexbox
in a real-world application,
[Solved by Flexbox](http://philipwalton.github.io/solved-by-flexbox) is a great resource
put together by Mozilla
that features a lot of great practical ideas.
