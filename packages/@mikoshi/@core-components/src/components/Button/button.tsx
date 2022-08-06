import React, { FC } from 'react'
import { Button as MuiButton } from '@mui/material'

interface ButtonProps {
  onClick: () => void,
  color?: string,
  disableElevation?: boolean,
  size?: string,
  variant?: string,
  className?: string,
  children?: React.ReactNode
}

export const Button: FC<ButtonProps> = (props) => {
  // == Props ================================
  const {
    onClick,
    children,
    size = 'medium',
    disableElevation = false,
    variant = 'text',
    color = 'primary',
    className = ''
  } = props
  // == Hooks ================================

  // == Functions ============================

  // == Actions ==============================

  // == Template =============================
  return (
    <MuiButton
      className={`mikoshi-button ${className}`}
      onClick={onClick}
      color={color as any}
      variant={variant as any}
      disableElevation={disableElevation}
      size={size as any}
    >
      {children}
    </MuiButton>
  )
}