import { render, screen } from '@testing-library/react'
import FormattedCurrency from '@/components/formatted-currency'

describe('FormattedCurrency', () => {
  it('formats a number value as GBP currency', () => {
    const amount = 1590.2;
    render(<FormattedCurrency currency={amount} />)

    // const currency = screen.getByRole('generic')
    const currency = screen.getByTestId('currency').textContent;

    expect(currency).toStrictEqual('£1,590.20')
  })

  it('formats integer values to have two decimal points', () => {
    const amount = 1234;
    render(<FormattedCurrency currency={amount} />)

    // const currency = screen.getByRole('generic')
    const currency = screen.getByTestId('currency').textContent;

    expect(currency).toStrictEqual('£1,234.00')
  })
})
