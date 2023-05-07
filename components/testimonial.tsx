import styles from '../styles/components/_testimonial.module.css'

const Testimonial = () => {
  return (
    <section className={styles.container}>
      <div className="section-title">
        They've got nice things to say
      </div>

      <blockquote className={styles.card}>
        <p>
          Joshua has the uncanny ability to execute and ship successful design. I am consistently amazed at his breadth and depth of design knowledge. He's also one of the rare designers with the skills and ability to cross over to development while still remaining an expert in design.
          <small className={styles.author}>
            Kyle Fielder, Chief Design Officer at
            <img
              src="images/source-thoughtbot.svg"
              className={styles.icon}
              alt="thoughtbot"
            />
            thoughtbot
          </small>
        </p>
      </blockquote>
    </section>
  )
}

export default Testimonial