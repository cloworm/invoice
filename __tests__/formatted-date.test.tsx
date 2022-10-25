
import { render, screen } from '@testing-library/react'
import FormattedDate from '@/components/formatted-date'

it('formats a date string into DD MMM YYYY format', () => {
  const input = '01/09/1990'
  render(<FormattedDate date={input} />)

  const date = screen.getByTestId('date').textContent

  expect(date).toStrictEqual('9 Jan 1990')
})
