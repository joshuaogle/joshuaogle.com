import OnThisPage from '@/components/on-this-page'

// Every case study gets the On this page pill, which reads its sections from the page
export default function WorkLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <OnThisPage />
    </>
  )
}
