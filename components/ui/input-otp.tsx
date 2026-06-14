"use client"

import * as React from "react"
import { OTPInput, OTPInputContext } from "input-otp"
import { DashIcon } from "@radix-ui/react-icons"

const InputOTP = React.forwardRef<
  React.ElementRef<typeof OTPInput>,
  React.ComponentPropsWithoutRef<typeof OTPInput>
>(({ className, containerClassName, ...props }, ref) => (
  <OTPInput
    ref={ref}
    containerClassName={`flex items-center gap-2 has-[:disabled]:opacity-50 ${containerClassName || ''}`}
    className={`disabled:cursor-not-allowed ${className || ''}`}
    {...props}
  />
))
InputOTP.displayName = "InputOTP"

const InputOTPGroup = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={`flex items-center gap-2 ${className || ''}`} {...props} />
))
InputOTPGroup.displayName = "InputOTPGroup"

const InputOTPSlot = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { index: number }
>(({ index, className, ...props }, ref) => {
  const inputContext = React.useContext(OTPInputContext)
  const { char, hasFocusBin, isActive } = inputContext.slots[index]

  return (
    <div
      ref={ref}
      className={`relative h-10 w-10 text-center text-sm font-medium transition-all border border-input rounded-md flex items-center justify-center ${
        isActive && "z-10 ring-2 ring-ring ring-offset-background"
      } ${
        hasFocusBin && "ring-2 ring-ring ring-offset-background"
      } ${className || ''}`}
      {...props}
    >
      {char}
    </div>
  )
})
InputOTPSlot.displayName = "InputOTPSlot"

const InputOTPSeparator = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ ...props }, ref) => (
  <div ref={ref} role="separator" {...props}>
    <DashIcon />
  </div>
))
InputOTPSeparator.displayName = "InputOTPSeparator"

export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator }
