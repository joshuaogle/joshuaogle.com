import React from 'react';

import Exercise from './index';
import Example from '../../components/Example';
import Phone from '../../components/Phone';

class Netkix extends React.Component {
  render() {
    return (
      <Exercise introProps={this.props}>
        <section>
          <div className="section-title">
            The Challenge
          </div>
          <h2>
            Nice kicks, with Netkix
          </h2>
          <p>
            (Okay, it's a cheesy name but I couldn't resist.)
            <mark>We live in the internet age, so why settle for boring shoes?</mark>
            Netkix is a brand new company wanting to revolutionize how shoes are sold for both casual wearers and streetwear addicts.
            Their mission is to provide people with a way to create custom color sneakers to go with any style or outfit.
            So far they only have some small shoe companies on board, but they are hoping to boost those companies' sales while creating loyal customers around these unique shoes that their friends won't have.
          </p>

          <p>
            They need enough branding to get off the ground, but want to focus mainly on the user experience and getting the product in front of users so they can start to use their feedback to make the company something they'll love.
          </p>

          <p>
            I have a lot of experience running <a href="https://robots.thoughtbot.com/the-product-design-sprint" target="_new">Product Design Sprints</a>, which I think are a perfect fit for starting a new product, realigning your design, or adding a new feature.
            The Sprint gives us a framework with one day of research and information sharing, two days of sketching and decision-making, one day to create a prototype, and one final day for testing.
            My favorite thing about it is that you can scale it up or down and pick from a toolbox of exercises depending on what you need.
          </p>
        </section>

        <div className="inset inset--desktop">
          <section>
            <Example
              image="exercises/netkix-brand.png"
              caption="I came up with a quick Netkix brand to frame the design"
            />
          </section>
        </div>

        <section>
          <div className="section-title">
            Research
          </div>
          <h2>
            Good designers borrow
          </h2>

          <p>
            I'd love to say that great designs just materialize out of thin air, but they don't.
            They come from a lot of research and critique.
            There are some big names that have already gone through building a similar product, so we should find out what they're doing right and what they're not.
            The important thing is those opportunities do exist and I'm sure <mark>we can do better.</mark>
          </p>

          <p>
            Nike and Adidas both have very popular shoe customizers.
            They already have established cults of followers, so their experience is largely around reinforcing brand loyalty and presenting the users with "stories" to pull those emotional triggers.
          </p>

          <figure>
            <img src="/source/images/exercises/netkix-research.png" />
            <figcaption>Research into how Nike and Adidas do shoe customization</figcaption>
          </figure>

          <p>
            I think this is a great strategy for them, but we're not there yet.
            <mark>I believe we should focus on a great customization experience and sharing your creatinos with friends.</mark>
            We'll want to ask our testers if these are their most important features.
            We'll do this by asking them about whether they would be interesting in sharing with friends and seeing their friends' shoes, and letting them explore these features in the app.
          </p>

          <p>
            Another product that I think provides a great experience not too far removed from what we're doing here is Warby Parker.
            They do a good job of showcasing their glasses through very simple pages and clear copy that is reassuring and instructive.
          </p>
        </section>

        <section>
          <div className="section-title">
            Personas
          </div>
          <h2>
            Two needs, one solution
          </h2>
          <p>
            The footwear industry is a lot bigger than most people think, <a href="http://www.statisticbrain.com/footwear-industry-statistics/" target="_new">around $52 billion</a>, and athletic shoes make up more than 30% of that number.
            And it's an industry that is still growing, doubling in just the last 20 years.
            Most sales are still done in brick-and-mortar stores, but online retail is taking up a bigger and bigger slice of that pie.
          </p>

          <p>
            Coming in to test some of our assumptions and provide feedback which is crucial for this stage of our company are Michelle and Mike.
            They represent the two very different sides of our potential customers, which we think are pretty evenly split between casual purchasers and streetwear afficionados.
            We want to make sure we are serving both sides of the market, so they're here to give us some insight.
            <mark>The end of the Product Design Sprint is a day of user testing</mark>, which is perfect for making sure we're on the right track.
          </p>
        </section>

        <div className="inset inset--desktop">
          <section>
            <figure className="netkix-personas">
              <div className="case-study-example">
                <div className="netkix-personas-number">
                  Persona 1
                </div>
                <h3>
                  Michelle
                </h3>
                <p>
                  She doesn't care much about fashion, but likes to coordinate her workout clothes.
                  She will probably only buy one or two pair of sneakers over the next few years, so she wants them to be special.
                </p>
                <img src="/source/images/exercises/netkix-persona-casual.png" />
              </div>
              <div className="case-study-example">
                <div className="netkix-personas-number">
                  Persona 2
                </div>
                <h3>
                  Mike
                </h3>
                <p>
                  He has been into streetwear for a few years and loves that he can customize his look.
                  He will likely buy 3-10 pairs of sneakers over the next two years.
                </p>
                <img src="/source/images/exercises/netkix-persona-serious.png" />
              </div>
            </figure>
            <figcaption>These personas are loosely based on two real people I interviewed with some basic questions</figcaption>
          </section>
        </div>

        <section>
          <p>
            We'll invite them to come test our prototype that we came up with during our Product Design Sprint.
            Specifically, we're looking to find out the answers to a few questions:
          </p>

          <ul>
            <li>
              <strong>Are custom colors on sneakers something that appeals to you, and why?</strong>&nbsp;
              For our examples we already know they're in the market for custom sneakers, but finding out why will help us with marketing and may help focus on specific features.
            </li>
            <li>
              <strong>How likely are you to share your creations with friends?</strong>
            </li>
            <li>
              <strong>Are you interested in what your friends come up with?</strong>
            </li>
            <li>
              <strong>If a sneaker cost $120 for a predesigned version, how much more might you pay to have one styled by you?</strong>&nbsp;
              We plan to charge $5-20 more for customization, but we aren't sure where in that range is best.
            </li>
            <li>
              <strong>Are there other pieces of clothing you wish you could customize?</strong>&nbsp;
              We're just doing shoes for now, but maybe other kinds of workout clothing could still work under this brand without as much competition.
            </li>
          </ul>
        </section>

        <section>
          <div className="section-title">
            Wireframes
          </div>
          <h2>
            Straight to the point
          </h2>
          <p>
            The Nike and Adidas experiences are largely built around marketing.
            They have a large following that has a lot of brand loyalty, but Netkix isn't quite there yet.
            We're going to focus on letting people create the shoe that they want, without getting in the way.
            One of the assumptions that we will want to test is whether this approach is well received by the "sneakerhead" crowd and we will be able to establish ourselves as a brand that gets them, or whether they have loyalty to popular brands that is tougher to crack.
          </p>

          <Example
            image="exercises/netkix-wires.png"
            caption="Better organization is a better experience"
          />

          <p>
            The Customizer widget is the heart of the product, but how you get there is important.
            On the home page, we should have some marketing that makes it clear we understand they want to craft their own style.
            It would be great to have some examples of people who have made great looking shoes along with their outfits and what they use them for.
            Things like running and soccer, but also just going out on the town and being the envy of your friends.
            From there, we will want to showcase the shoes, perhaps organized by function.
          </p>

          <p>
            The shoe pages should have great photos of shoes that they can see from every angle, along with a clearly marked price and a review rating.
            Our main focus is creating great looking shoes, but people still care about comfort.
            Once they hae selected their canvas, the real fun begins.
          </p>
        </section>

        <section>
          <div className="section-title">
            Experience
          </div>
          <h2>
            A painter's palette
          </h2>
          <p>
            Let's focus on just the customizatino step.
            This part of the product is all about empowering users to create just the right style without getting in their way.
          </p>
        </section>

        <div className="inset inset--desktop netkix-widgets">
          <section>
            <Example
              image="exercises/netkix-widget.png"
              caption="Netkix shoe customization experience in two flavors, desktop and mobile"
            />
            <div className="netkix-widget-mobile">
              <Phone
                image="exercises/netkix-widget-mobile.png"
              />
            </div>
          </section>
        </div>

        <section>
          <p>
            By using the entire screen, we can let the user get to work without having to scroll or skip through steps.
            We give most of the screen to the show with great photos to let the user see every side.
            The app design should take back seat to their weird and wonderful design, so we're going with white and light gray so we don't influence their decisions.
            The left sidebar lets them click through different parts of the shoe and <mark>a slide-out drawer gives them a wide palette of colors</mark> arranged by popularity (we might implement sorting by hue later).
            Using these industry terms may get confusing, so we may want to create little previews next to the names, but I also think half the fun is just clicking around and experimenting so it might not be an issue.
            We should know pretty quickly when observing the testers.
          </p>

          <p>
            Right next to the "Add to Cart" button are links to Share and Save.
            If the user wants to save, they can name this shoe and it will be saved to their profile.
            This name will also show up if they share the shoe with friends.
            Sharing uses a unique URL that contains the shoe and color information, so we don't need to generate and store a bunch of similar designs.
            I think <mark>we can also use OpenGraph to show a preview of the shoe when linking on social media</mark>, which should really help with engagement.
          </p>
        </section>

        <section>
          <div className="section-title">
            Summary
          </div>
          <h2>
            A new player has entered the game
          </h2>
          <p>
            I think focusing on the joy of creating custom color combinations and sharing with friends will help Netkix establish themselves among their larger competitors.
            We're excited about how user testing went and are looking forward to more rounds after we've launched and are able to combine that research with analytics.
            <mark>You've got to balance user research with a clear vision and a willingness to learn your market</mark>.
            If we celebrate both the amazing and weird creations, showcase the unique customers we have and how they love their shoes, and support the sport and streetwear communities authentically, I think we've got a great chance to grow something special.
          </p>
        </section>
      </Exercise>
    );
  }
}

Netkix.defaultProps = {
  title: "Netkix",
  subtitle: "Shoe Customization Design Exercise",
  date: "2017/06/12",
  shortName: "netkix"
}

export default Netkix;
