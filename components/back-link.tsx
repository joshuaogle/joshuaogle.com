'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeftIcon } from '@heroicons/react/24/solid'
import styles from '../styles/components/_header.module.css'

const BackLink = () => {
  const pathname = usePathname()
  if (pathname === "/") {
    return null
  }

  return (
    <Link href="/" className={styles.backButton}>
      <ArrowLeftIcon className={styles.backIcon}/>
    </Link>
  )
}

export default BackLink
