import React from 'react';
import './style.sass';

class Branding extends React.Component {
  render() {
    return (
      <section className="branding">
        <div className="section-title">Identity Design</div>
        <h2>How your product says hello</h2>
        <p>
          I don't consider myself a brand designer, but from time to time a project needs an identity and I get to flex my illustration muscles.
          What I love about branding is it lets you establish the voice of a product in the most fundamental way that you can.
          The entire user experience benefits from having a brand and image that work well together, and <mark>a brand that keeps real usage and interaction in mind will be that much more effective</mark>.
        </p>

        <ul className="animate">
          <li className="brand armada">
            Armada.svg
            <div className="brand-label">
              Armada Telematics
              <time className="year">2014</time>
            </div>
          </li>
          <li className="brand wifiguru">
            Wifiguru.svg
            <div className="brand-label">
              Wifi Guru
              <time className="year">2016</time>
            </div>
          </li>
          <li className="brand brightbit">
            Brightbit.svg
            <div className="brand-label">
              Brightbit
              <time className="year">2013</time>
            </div>
          </li>
          <li className="brand proteus">
            Proteus.svg
            <div className="brand-label">
              Proteus
              <time className="year">2015</time>
            </div>
          </li>
          <li className="brand sheriff">
            Sheriff.svg
            <div className="brand-label">
              Sheriff Signs
              <time className="year">2015</time>
            </div>
          </li>
          <li className="brand gemini">
            Gemini.svg
            <div className="brand-label">
              Thunder Plains Conference
              <time className="year">2013</time>
            </div>
          </li>
          <li className="brand skyhelm">
            Skyhelm.svg
            <div className="brand-label">
              Skyhelm Technology
              <time className="year">2015</time>
            </div>
          </li>
        </ul>
      </section>
    );
  }
}

export default Branding;
