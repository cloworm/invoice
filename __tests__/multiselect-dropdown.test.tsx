
import { render, screen, fireEvent } from '@testing-library/react'
import MultiSelectDropdown from '@/components/multiselect-dropdown'

it('Renders provided label', () => {
  const testLabel = 'Test Label'
  const options = ['Option A', 'Option B', 'Option C']
  /* eslint-disable no-empty-function */
  const callback = () => {}
  render(<MultiSelectDropdown label={testLabel} options={options} selected={[]} onChange={callback}  />)

  const label = screen.getByRole('heading', { level: 4 })
  expect(label).toHaveTextContent(testLabel)
})

it('Renders provided label', () => {
  const testLabel = 'Test Label'
  const options = ['Option A', 'Option B', 'Option C']
  const callback = () => {}
  render(<MultiSelectDropdown label={testLabel} options={options} selected={[]} onChange={callback}  />)

  fireEvent.mouseOver(screen.getByTestId('multiselect-dropdown'))
  const label = screen.getByLabelText('Option A')
  expect(label).toBeInTheDocument()
})

it('Checked options set as selected', () => {
  const testLabel = 'Test Label'
  const options = ['Option A', 'Option B', 'Option C']
  const selected = ['OPTION B']
  const callback = () => {}
  render(<MultiSelectDropdown label={testLabel} options={options} selected={selected} onChange={callback}  />)

  fireEvent.mouseOver(screen.getByTestId('multiselect-dropdown'))
  const checkboxA = screen.getByRole('checkbox', { name: 'Option A' })
  const checkboxB = screen.getByRole('checkbox', { name: 'Option B' })
  const checkboxC = screen.getByRole('checkbox', { name: 'Option C' })
  expect(checkboxA).not.toBeChecked()
  expect(checkboxB).toBeChecked()
  expect(checkboxC).not.toBeChecked()
})
