import { parseISO, format } from 'date-fns'

type Props = {
  dateString: string
}

const DateFormatter = ({ dateString }: Props) => {
  const date = parseISO(dateString)
  const formattedDate = format(date, 'LLL d, yyyy')
  return <time dateTime={dateString}>{formattedDate}</time>
}

export default DateFormatter
