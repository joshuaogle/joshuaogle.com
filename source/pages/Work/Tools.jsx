import React from 'react';
import './tools.sass';

class Tools extends React.Component {
  render() {
    return (
      <section>
        <div className="section-title">Tools</div>
        <h2>What I use</h2>

        <ul className="tools-list">
          <li>
            <h3>Product Design Sprints</h3>
            <p>
              I learned and refined the Product Design Sprint ("PDS") while at thoughtbot,
              and it is by far my favorite research tool to use.
              Three days of discussion and sketching culminate in building a prototype and getting real user feedback.
              It's the perfect way to test an idea quickly before investing too much.
            </p>
          </li>
          <li>
            <h3>Paper</h3>
            <p>
              Don't underestimate what a quick sketching session can do.
              Most of my ideas start on paper before getting to pixel or code.
              I often sketch out lots of iterations of an idea before settling on one or two to start persuing, saving me from chasing dead ends.
            </p>
          </li>
          <li>
            <h3>Sketch / Illustrator</h3>
            <p>
              The best design tool to have come out in the last few years,
              Sketch is where a huge amount of my work gets done.
              Occasionally though, you need something with more control,
              so I rely on Illustrator to handle complex illustrations or icon work.
            </p>
          </li>
          <li>
            <h3>Photoshop</h3>
            <p>
              Although there have been a lot of new vector apps lately,
              nothing comes close to rivaling Photoshop for image editing.
              I don't do a lot of graphic design,
              but Photoshop will always be able to get the job done when I need it.
            </p>
          </li>
          <li>
            <h3>InVision</h3>
            <p>
              I use InVision for most of my user tests,
              but I think it is often overlooked for simple feedback.
              The web is interactive and sometimes static images just aren't enough,
              so clickable prototypes are the best way to test ideas.
            </p>
          </li>
          <li>
            <h3>HTML/CSS/Sass</h3>
            <p>
              I believe in a design process that is fast and iterative,
              and for some features it's best to see them in action in their native habitat.
              It's important for designers to understand their medium,
              and I think that's where my years of development experience is invaluable.
            </p>
          </li>
          <li>
            <h3>React/Ember</h3>
            <p>
              JavaScript is becoming an increasing part of how we use the web.
              React is everywhere these days (even powering this site), and is useful for projects large and small.
              For personal projects though, I usually reach for Ember for its emphasis on conventions and stability.
            </p>
          </li>
          <li>
            <h3>Ruby/Elixir</h3>
            <p>
              I'm not afraid to push into new territory.
              I worked at consultancies specializing in Ruby on Rails for most of my career
              and am more than handy on the front-end of a Rails app.
              Lately though I've been learning Elixir for some small projects and love it.
            </p>
          </li>
        </ul>
      </section>
    );
  }
}

export default Tools;
