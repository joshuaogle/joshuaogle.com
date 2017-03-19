import React from 'react';
import {Link} from 'react-router';
import './style.sass';

class Footer extends React.Component {
  render() {
    return (
      <footer className="site-footer">
        <section>
          <div className="section-title">
            You've got good taste
          </div>

          <h2>
            Let's work together
          </h2>

          <p>
            For work inquiries, email me at <a href="mailto:joshua@joshuaogle.com" className="link-email">joshua@joshuaogle.com</a>
          </p>

          <p>
            You can also check out more of my work <a href="http://dribbble.com/joshuaogle" className="link-dribbble">on Dribbble</a>&nbsp;
            and <a href="http://github.com/joshuaogle" className="link-github">on Github</a>,
            take a look at where I've worked <a href="http://linkedin.com/in/joshuaogle" className="link-linkedin">on LinkedIn</a>,
            and see what I'm up to today <a href="http://twitter.com/joshuaogle" className="link-twitter">on Twitter</a>.
          </p>

          <p className="copyright">
            &copy; Joshua Ogle.&nbsp;
           <a href="https://www.youtube.com/watch?v=du6TW4fKOmk" target="_blank">This website updated by witches.</a>&nbsp;
           All rights reserved.
          </p>
        </section>
      </footer>
    );
  }
}

export default Footer;
