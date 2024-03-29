import Image from 'next/image'
import TimelineCard from './timeline-card'
import styles from '../styles/components/_timeline-item.module.css'

interface CaseStudy {
  summary: object;
  href: string;
}

type Props = {
  title: string;
  icon: string;
  company: string;
  role: string;
  when: string;
  caseStudies: CaseStudy[];
  children: React.ReactNode;
}

const TimelineItem = ({ title, icon, company, role, caseStudies, children }: Props) => {
  return (
    <div className={styles.itemContainer}>
      <div className={styles.textContainer}>
        <h3 className={styles.title}>
          {title}
        </h3>
        <small className={styles.subtitle}>
          <Image
            src={icon}
            alt={company}
            height="20"
            width="20"
            className={styles.icon}
          />
          {company} • {role}
        </small>
        <p>
          {children}
        </p>
      </div>

      {caseStudies && (
        <div className={styles.cardContainer}>
          {caseStudies.map((study, index) => (
            <TimelineCard
              key={index}
              summary={study.summary}
              href={study.href}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default TimelineItem;
