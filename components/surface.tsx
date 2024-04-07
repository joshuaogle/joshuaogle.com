import styles from '../styles/components/_surface.module.css'

type Props = {
  children: React.ReactNode;
}

const Surface = ({ children, props }: Props) => {
  return (
    <div className={styles.surface} {...props}>
      {children}
    </div>
  )
}

export default Surface;