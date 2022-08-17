import React, { FC } from 'react'
import { IconButton as MuiIconButton, SxProps } from '@mui/material'
import { Color } from 'types/button'

interface IconButtonProps {
  onClick: () => void,
  sx?: SxProps,
  color?: Color,
  href?: string,
  target?: string,
  component?: string,
  className?: string,
  children?: React.ReactNode
}

type ButtonRef = React.ForwardedRef<HTMLButtonElement>

export const IconButton: FC<IconButtonProps> = React.forwardRef((props, ref: ButtonRef) => {
  // == Props ================================
  const {
    onClick,
    sx,
    color,
    component,
    children,
    className = '',
    ...otherProps
  } = props
  // == Hooks ================================

  // == Functions ============================

  // == Actions ==============================

  // == Template =============================
  return (
    <MuiIconButton
      className={`mikoshi-icon-button ${color} ${className}`}
      component={component as any}
      sx={sx}
      onClick={onClick}
      {...otherProps}
    >
      {children}
    </MuiIconButton>
  )
})