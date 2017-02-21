import React from 'react';
import {Link} from 'react-router';
import './style.sass';

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <section>
          <div className="section-title">
            You've got good taste
          </div>

          <h2>
            Let's work together
          </h2>

          <p>
            For work inquiries, email me at <Link to="mailto:joshua@joshuaogle.com" className="link-email">joshua@joshuaogle.com</Link>
          </p>

          <p>
            You can also check out more of my work <Link to="http://dribbble.com/joshuaogle" className="link-dribbble">on Dribbble</Link>&nbsp;
            and <Link to="http://github.com/joshuaogle" className="link-github">on Github</Link>,
            take a look at where I've worked <Link to="http://linkedin.com/in/joshuaogle" className="link-linkedin">on LinkedIn</Link>,
            and see what I'm up to today <Link to="http://twitter.com/joshuaogle" className="link-twitter">on Twitter</Link>.
          </p>
        </section>

        <p className="copyright">
          &copy; Joshua Ogle.&nbsp;
         <Link to="https://www.youtube.com/watch?v=du6TW4fKOmk" target="_blank">This website updated by witches.</Link>&nbsp;
         All rights reserved.
        </p>
      </footer>
    );
  }
}

export default Footer;
