type Props = {
  children?: React.ReactNode
}

const Page = ({ children }: Props) => {
  return (
    <main className="page">
      {children}
    </main>
  )
}

export default Page
