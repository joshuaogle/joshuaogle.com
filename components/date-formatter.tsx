import { parseISO, format } from 'date-fns'

type Props = {
  dateString: string
}

const DateFormatter = ({ dateString }: Props) => {
  const specificity = dateString.length > 4 ? 'LLL d, yyyy' : 'yyyy'
  const date = parseISO(dateString)
  const formattedDate = format(date, specificity)
  return <time dateTime={dateString}>{formattedDate}</time>
}

export default DateFormatter
