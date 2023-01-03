import { memo } from "react"
import styles from "./Button.module.css"

interface ButtonProps {
  children: React.ReactNode
  onClick?: () => void
  type?: "button" | "submit" | "reset"
  disabled?: boolean
  primary?: boolean
  secondary?: boolean
  tertiary?: boolean
  danger?: boolean
  small?: boolean
  large?: boolean
  fullWidth?: boolean
  className?: string
}

export const Button = memo(
  ({
    children,
    onClick,
    type = "button",
    disabled = false,
    primary = true,
    secondary = false,
    tertiary = false,
    danger = false,
    small = false,
    large = false,
    fullWidth = false,
    className,
  }: ButtonProps) => {
    let buttonClass = styles.button

    if (primary) {
      buttonClass += ` ${styles.primary}`
    }
    if (secondary) {
      buttonClass += ` ${styles.secondary}`
    }
    if (tertiary) {
      buttonClass += ` ${styles.tertiary}`
    }
    if (danger) {
      buttonClass += ` ${styles.danger}`
    }
    if (small) {
      buttonClass += ` ${styles.small}`
    }
    if (large) {
      buttonClass += ` ${styles.large}`
    }
    if (fullWidth) {
      buttonClass += ` ${styles.fullWidth}`
    }
    if (className) {
      buttonClass += ` ${className}`
    }

    console.log("Button component will not rerendered again because of useCallback and memo")

    return (
      <button
        type={type}
        onClick={onClick}
        disabled={disabled}
        className={buttonClass}
      >
        {children}
      </button>
    )
  }
)