import React from 'react';
import {Link} from 'react-router';

import CaseStudy from '../CaseStudy';
import Example from '../../../components/Example';
import Phone from '../../../components/Phone';

class KitMathCaseStudy extends React.Component {
  render() {
    return (
      <CaseStudy introProps={this.props}>
        <section>
          <Example
            image="case-studies/kitmath-congrats.svg"
            caption="Albert Einstein stops by to give some encouragement"
          />
        </section>

        <section>
          <div className="section-title">
            The Challenge
          </div>
          <h2>
            Too cool for school
          </h2>
          <p>
            Let's face it: most kids don't like school. The lessons are repetitive.
            The kids that need help often don't get it, and the kids that understand the assignment are often bored.
            It doesn't help that we talk about subjects like math, history, and science as if they're boring and stuffy.
          </p>
          <p>
            <mark>Kids are smart</mark>. They pick up on these messages, both subtle and explicit,
            and think of education as a chore they have to do so they can move on to something more fun.
            No big surprise here, but I've always been a nerd.
            I especially loved Mister Wizard and Captain Planet, Cosmos and EPCOT.
            I like educatonal entertainment that doesn't talk down to kids, but instead empowers them.
            We have big problems here on Earth, but I believe we can solve them by setting up future generations for success.
          </p>

          <figure>
            <img src="/source/images/case-studies/kitmath-northstar.svg" />
          </figure>

          <p>
            <mark>A project always goes better when you've got a "North Star" to center your conversation around</mark>, and that is ours.
          </p>
        </section>

        <section>
          <div className="section-title">
            The Solution
          </div>
          <h2>
            It's a small world
          </h2>

          <p>
            We first defined a simple mission: <mark>Make learning exciting again</mark>.
            If you talk to people who are into a specific subject, they talk about heroes in their field like they know them.
            They're old friends. They get excited about their lives and what they discovered.
            They see themselves in these heroes, and scary things seem doable.
            So if we can introduce those heroes that way from the beginning we might just keep things from seeming scary in the first place.
            We want to introduce kids to these heroes as aspirational figures, with a little biography and what they contributed.
            It's also very important to us to recognize the diversity behind these fields so every child can find someone they identify with.
          </p>

          <Example
            image="case-studies/kitmath-characters.png"
            caption="Early sketch of our fun-loving cast of characters"
          />

          <p>
            We started out with a mini Product Design Sprint.
            I'd learned a lot about adapting the Design Sprint while working at thoughtbot
            and since we had already spent some time talking about our goals, a two-day Design Sprint was just enough to get started.
            After a day of brainstorming and sketching, we were really excited that things were starting to make sense.
            Another day of creating wireframes and making tough decisions and we knew we really had something.
          </p>

          <Example
            image="case-studies/kitmath-pds.jpg"
            caption="Sketching every possible approach"
          />

          <p>
            Cute Illustrations. Check. Simple and fun. Check.
            The next part is harder. Flash Cards are nothing new, but we know a lot more now about how they work.
            <mark>The science of learning has come a long way the last few years.</mark>
            With techniques like <a href="https://en.wikipedia.org/wiki/Spaced_repetition" target="_new">spaced repetition</a> and the <a href="https://en.wikipedia.org/wiki/Leitner_system">Leitner system</a>, we can make memorization both fast and fun.
            Ideally the user won't even know this is how the system works.
            It will helpfully bring up the items you need the most help with, while occasionally slipping in ones that you already mastered to make sure it stays that way.
          </p>

          <Example
            image="case-studies/kitmath-wires.png"
            caption="The basic structure of the app captured early in the Design Sprint"
          />

          <p>
            We're still heavy into the development of this app, but I wanted to go ahead and show off what we've done so far.
            I'll update this case study as we get closer to launch.
            I'm especially proud of the screens below, showing the Collections card stacks and the individual problem screen.
            We wanted to make sure it's easy to dive right in and start practicing, while also giving you little things to look at along the way.
            Our mascot Kit will appear on these screens as well, serving as your buddy on your learning adventure.
            The "heroes" will show up at the beginning of a new collection, providing encouragement and letting you learn a little about those that came before you.
          </p>
        </section>

        <div className="inset inset--phone">
          <section>
            <figure style={{textAlign: "center"}}>
              <div className="case-study-phone" style={{"display": "inline-block"}}>
                <img src="/source/images/case-studies/kitmath-index.png" style={{"display": "inline-block"}} />
              </div>
              &nbsp;&nbsp;&nbsp;
              <div className="case-study-phone" style={{"display": "inline-block"}}>
                <img src="/source/images/case-studies/kitmath-problem.png" style={{"display": "inline-block"}} />
              </div>
              <figcaption>
                A simple interface for problems, with scenery to keep things fun
              </figcaption>
            </figure>
          </section>
        </div>

        <section>
          <p>
            This has been a great project to show off my illustration talents while learning a lot about animation and character design.
            The reactions so far have been very reassuring and I can't wait to see it released.
          </p>
        </section>

        <section>
          <div className="section-title">
            So what's next?
          </div>
          <h2>
            Staying Foxy
          </h2>

          <p>
            The business model is also something we thought a lot about.
            Kids apps are typically free, but games marketed for kids often rely on in-app purchases, which gets into moral questions we'd rather avoid.
            We plan to provide this app for free because we think we've got something bigger to build toward.
            Future apps will cost money, but a math app is a great introduction.
            <mark>We hope that this approach will get people as excited as we are</mark> and they will want to branch out into new subjects with us.
          </p>

          <figure>
            <img src="/source/images/case-studies/kitmath-logo.svg" />
          </figure>

          <p>
            Kit Math will hit the App Store soon, but we're not stopping there.
            We think this approach to learning is well suited to a large number of subjects, especially ones that kids dread in school.
            School programs are always looking for applications that help engage kids, and getting into real classrooms would be an amazing step once we've rounded out the subjects.
            We want to make the world a smaller place, to build up the next generation of explorers.
            It's ambitious, I know, but we've got big problems to solve.
          </p>
        </section>
      </CaseStudy>
    );
  }
}

KitMathCaseStudy.defaultProps = {
  title: "Kit Math",
  date: "2017/05/01",
  shortName: "kitmath",
  role: "Design",
  time: "In Progress",
  team: "1 Designer, 2 Developers",
  background: "case-study-bg-kitmath.png",
  icon: "case-study-logo-kit.svg",
  client: "Husk",
  intro: "I've been making products for years, but rarely get to work on something that truly makes the world a better place. \
    That's why I was really excited to work on a mobile app with people who are on a mission to use their powers for good and make apps that make a difference. \
    And they're starting with making education fun.",
  thumbnail: "/source/images/case-studies/kitmath-index.png"
}

export default KitMathCaseStudy;
