import styles from '../styles/components/_consulting.module.css'
import LogoAmex from '../public/images/client-amex.svg'
import LogoATT from '../public/images/client-att.svg'
import LogoDollarShaveClub from '../public/images/client-dollarshaveclub.svg'
import LogoExpedia from '../public/images/client-expedia.svg'
import LogoSharespost from '../public/images/client-sharespost.svg'


const Consulting = () => {
  return (
    <section className={styles.container + ' centered'}>
      <div className={styles.copy}>
        <h2>Design consulting</h2>
        <p>
          I have led design projects from startups to big enterprise companies.
          No matter the size of the project, I believe in starting small, listening to what your users are telling you.
        </p>
      </div>

      <div className={styles.logos}>
        <LogoExpedia />
        <LogoDollarShaveClub />
        <LogoSharespost />
        <LogoAmex />
        <LogoATT />
      </div>
    </section>
  )
}

export default Consulting
