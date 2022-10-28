interface Props {
  bg: string
  color: string
  colorLight: string
  toolbarBg: string
  cardBg: string
  dropdownBg: string
  checkboxBg: string
  receiptBg: string
  receiptTotalBg: string
  secondaryButtonColor: string
  secondaryButtonBg: string
  secondaryButtonColorHover: string
  secondaryButtonBgHover: string
  tertiaryButtonColor: string
  tertiaryButtonBg: string
  tertiaryButtonColorHover: string
  tertiaryButtonBgHover: string
}

export interface Theme {
  theme: Props
}

export const lightTheme: Props = {
  bg: '#F8F8FB',
  color: '#0C0E16',
  colorLight: '#888Eb0',
  toolbarBg: '#373B53',
  cardBg: '#fff',
  dropdownBg: '#fff',
  checkboxBg: '#DFE3FA',
  receiptBg: '#F9FAFE',
  receiptTotalBg: '#373B53',
  secondaryButtonColor: '#7E88C3',
  secondaryButtonBg: '#F9FAFE',
  secondaryButtonColorHover: '#DFE3FA',
  secondaryButtonBgHover: '#7E88C3',
  tertiaryButtonColor: '#888Eb0',
  tertiaryButtonBg: '#373B53',
  tertiaryButtonColorHover: '#888EB0',
  tertiaryButtonBgHover: '#0C0E16'
}

export const darkTheme: Props = {
  bg: '#141625;',
  color: '#fff',
  colorLight: '#DFE3FA',
  toolbarBg: '#1E2139',
  cardBg: '#1E2139',
  dropdownBg: '#252945',
  checkboxBg: '#1E2139',
  receiptBg: '#252945',
  receiptTotalBg: '#0C0E16',
  secondaryButtonColor: '#252945',
  secondaryButtonBg: '#DFE3FA',
  secondaryButtonColorHover: '#fff',
  secondaryButtonBgHover: '#DFE3FA',
  tertiaryButtonColor: '#DFE3FA',
  tertiaryButtonBg: '#373B53',
  tertiaryButtonColorHover: '#DFE3FA',
  tertiaryButtonBgHover: '#1E2139'
}
