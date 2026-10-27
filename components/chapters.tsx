import styles from '../styles/components/_chapters.module.css'

type Props = {
  // Each chapter's section id and its name
  chapters: { id: string, label: string }[]
}

// A one-line contents list for a case study with several projects, so a skimmer sees at
// once that there's more than one, and can jump to either
const Chapters = ({ chapters }: Props) => {
  return (
    <nav className={styles.chapters} aria-label="In this case study">
      <span className="label">In this case study</span>
      <ol>
        {chapters.map(({ id, label }) => (
          <li key={id}><a href={`#${id}`}>{label}</a></li>
        ))}
      </ol>
    </nav>
  )
}

export default Chapters
