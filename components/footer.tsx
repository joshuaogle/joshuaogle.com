import styles from '../styles/components/_footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className="section-title">
        Contact
      </div>

      <h2 className={styles.title}>
        You've got good taste, get in touch sometime
      </h2>

      <p>
        Say hi at <a href="mailto:joshua@joshuaogle.com">joshua@joshuaogle.com</a>.
        You can check out more of my work <a href="http://dribbble.com/joshuaogle">on Dribbble</a>&nbsp;
        and <a href="http://github.com/joshuaogle">on Github</a>,
        take a look at where I've worked <a href="http://linkedin.com/in/joshuaogle">on LinkedIn</a>,
        and see what I'm up to today <a href="http://twitter.com/joshuaogle">on Twitter</a>.
      </p>

      <div className={styles.copyright}>
        &copy; Joshua Ogle.&nbsp;
        <a href="https://www.youtube.com/watch?v=du6TW4fKOmk" target="_blank">This website updated by witches.</a>&nbsp;
        All rights reserved.
      </div>
    </footer>
  )
}

export default Footer


