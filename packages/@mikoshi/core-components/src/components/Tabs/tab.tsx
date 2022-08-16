import React, { FC } from 'react'
import { Tab as MuiTab } from '@mui/material'

interface TabProps {
  icon?: string | React.ReactElement,
  component?: any,
  to?: any,
  label?: React.ReactNode,
  disabled?: boolean,
  value?: any,
  disableRipple?: boolean,
  wrapped?: boolean,
  onClick?: () => void,
  className?: string
}

export const Tab: FC<TabProps> = React.forwardRef((props, ref) => {
  // == Props ================================
  const {
    label,
    icon,
    onClick,
    value,
    component,
    to,
    disabled = false,
    wrapped = false,
    disableRipple = false,
    className = ''
  } = props

  // == Hooks ================================

  // == Functions ============================

  // == Actions ==============================

  // == Template =============================
  return (
    <MuiTab
      className={`mikoshi-tab ${className}`}
      value={value}
      disabled={disabled}
      icon={icon}
      label={label}
      wrapped={wrapped}
      disableRipple={disableRipple}
      component={component}
      to={to}
      onClick={onClick}
    />
  )
})
