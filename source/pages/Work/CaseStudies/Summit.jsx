import React from 'react';
import {Link} from 'react-router';

import CaseStudy from './CaseStudy';
import Phone from './Phone';

class SummitCaseStudy extends React.Component {
  render() {
    return (
      <CaseStudy introProps={this.props}>
        <section>
          <div className="section-title">
            Background
          </div>
          <p>
            Every year, <a href="http://thoughtbot.com" target="_new">thoughtbot</a> assembles the entire team from all of its offices to celebrate the year and get to know the other people you may not have seen in person yet.
            In 2015, it was Denver's turn and we were excited to greet our friends from around the world.
            <mark>Denver has a lot of great things to offer</mark>, but many of those visiting were in town for the first time and we wanted to share some of our favorite spots with them.
            Besides our favorite coffee spots and restaurants, we also wanted to warn our friends about drinking at altitude.
            And because it was Denver shortly after legalized recreational marijuana, we wanted to include some tips so no one had a bad time.
          </p>
          <p>
            Since we had both iPhone and Android users, I suggested we use <a href="http://ionic.io" target="_new">Ionic</a> so we could support them both.
            I had an idea that we could use this framework to help speed up development and it meant we should be able to build it without the help from a back-end developer.
          </p>

          <Phone
            image="summit-map.png"
            caption="Easily see what is around you with helpful icons"
          />
        </section>

        <section>
          <div className="section-title">
            The Challenge
          </div>
          <h2>
            A secret project
          </h2>
          <p>
            We weren't just welcoming random strangers, we knew most of the people coming and wanted to give our guide a personal touch.
            <mark>It was also going to be a surprise.</mark>
            We had no official time to spend on the project, so after <a href="https://robots.thoughtbot.com/design-spiking" target="_new">a very short Design Sprint</a>, we decided to work with just myself and another designer.
          </p>
        </section>

        <section>
          <div className="section-title">
            The Solution
          </div>
          <h2>
            A personal guide
          </h2>
          <p>
            Andrew Cohen did a fantastic job with the visual design, and I would do the front-end development and design the interactions.
            I had done some small fun projects with Ionic before and knew I could work quickly with such a simple app.
          </p>

          <div className="split-layout">
            <div className="split-primary">
              <p>
                The main view is the map, which shows the thoughtbot office and the locations of our picks so that they could easily find something fun nearby.
                When the user taps on an icon it brings up a card with the name of the place and the hours of operation.
                The best part though is that it also has the picture of a Denver team member and why they recommended that place.
              </p>
            </div>

            <div className="split-secondary">
              <p>
                <img src="/source/images/case-studies/summit-popover.png" className="case-study-example" />
              </p>
            </div>
          </div>

          <p>
            If you want to find something specific, the guide has several categories: Restaurants, Coffeeshops, Bars &amp; Breweries, Dispensaries, Local Goods, Activites, and Neighborhoods &amp; Parks.
            We asked each person on the Denver team to make a few recommendations from these categories, along with why they loved it or recommended menu items.
            These were stored in a JSON file, so we didn't even need a database and it could be passed directly into the Javascript for the maps and lists.
            Ionic made this extremely simple, and this was the key reason that development was fairly trivial.
          </p>

          <Phone
            image="summit-categories.png"
            caption="Looking for something specific? We've broken down our picks into categories"
          />

          <p>
            The other pages are simple information, but we hoped they would make things run smoothly.
            The schedule meant that everyone would have a list of activities in their pocket.
            It would have been nice to have notifications for events if we had had more time, but this was already more than the other summits had done.
            In the end, we only used about four days worth of time between both design and development.
          </p>

          <figure style={{textAlign: "center"}}>
            <div className="case-study-phone" style={{"display": "inline-block"}}>
              <img src="/source/images/case-studies/summit-schedule.png" style={{"display": "inline-block"}} />
            </div>
            &nbsp;&nbsp;&nbsp;
            <div className="case-study-phone" style={{"display": "inline-block"}}>
              <img src="/source/images/case-studies/summit-warnings.png" style={{"display": "inline-block"}} />
            </div>
            <figcaption>
              A handy schedule and helpful tips, right in your pocket
            </figcaption>
          </figure>
        </section>

        <section>
          <div className="section-title">
            In Summary
          </div>
          <h2>
            A warm welcome
          </h2>

          <p>
            The reaction was overwhelmingly positive.
            Summits are always busy, but we heard several happy stories about people that found time to visit our favorite spots.
            The health warnings also made sure that there weren't any incidents with either alcohol or marijuana, which feels like a success by itself.
            Overall, it was well worth the evenings and weekends we spent on it, and it came together very well.
            &nbsp;<a href="http://summit-guide-2015.herokuapp.com" target="_new">Check it out in your browser</a> to get an idea for your next visit to Denver.
          </p>
        </section>
      </CaseStudy>
    );
  }
}

SummitCaseStudy.defaultProps = {
  title: "Summit Guide",
  date: "2015/08/15",
  shortName: "summit",
  role: "Hybrid Mobile App Development",
  time: "1 month",
  team: "1 Designer, 1 Developer",
  background: "case-study-bg-summit.png",
  icon: "case-study-logo-thoughtbot.svg"
}

export default SummitCaseStudy;
