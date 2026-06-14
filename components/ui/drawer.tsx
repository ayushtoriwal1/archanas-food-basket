"use client"

import * as React from "react"
import * as DrawerPrimitive from "@radix-ui/react-dialog"
import { Drawer as DrawerContent } from "vaul"

const Drawer = ({
  shouldScaleBackground = true,
  ...props
}: React.ComponentProps<typeof DrawerContent>) => (
  <DrawerContent
    shouldScaleBackground={shouldScaleBackground}
    {...props}
  />
)
Drawer.displayName = "Drawer"

const DrawerTrigger = DrawerPrimitive.Trigger

const DrawerPortal = DrawerPrimitive.Portal

const DrawerClose = DrawerPrimitive.Close

const DrawerOverlay = React.forwardRef<
  React.ElementRef<typeof DrawerContent.Overlay>,
  React.ComponentPropsWithoutRef<typeof DrawerContent.Overlay>
>(({ className, ...props }, ref) => (
  <DrawerContent.Overlay
    ref={ref}
    className={`fixed inset-0 z-50 bg-background/80 backdrop-blur-sm ${className || ''}`}
    {...props}
  />
))
DrawerOverlay.displayName = DrawerContent.Overlay.displayName

const DrawerContent = React.forwardRef<
  React.ElementRef<typeof DrawerContent.Content>,
  React.ComponentPropsWithoutRef<typeof DrawerContent.Content>
>(({ className, children, ...props }, ref) => (
  <DrawerPortal>
    <DrawerOverlay />
    <DrawerContent.Content
      ref={ref}
      className={`fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border border-slate-200 bg-white ${className || ''}`}
      {...props}
    >
      <div className="mx-auto mt-4 h-2 w-[100px] rounded-full bg-muted" />
      {children}
    </DrawerContent.Content>
  </DrawerPortal>
))
DrawerContent.displayName = "DrawerContent"

const DrawerHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={`grid gap-1.5 p-4 text-center sm:text-left ${className || ''}`}
    {...props}
  />
)
DrawerHeader.displayName = "DrawerHeader"

const DrawerFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={`mt-auto flex flex-col gap-2 p-4 ${className || ''}`}
    {...props}
  />
)
DrawerFooter.displayName = "DrawerFooter"

const DrawerTitle = React.forwardRef<
  React.ElementRef<typeof DrawerContent.Title>,
  React.ComponentPropsWithoutRef<typeof DrawerContent.Title>
>(({ className, ...props }, ref) => (
  <DrawerContent.Title
    ref={ref}
    className={`text-lg font-semibold leading-none tracking-tight ${className || ''}`}
    {...props}
  />
))
DrawerTitle.displayName = DrawerContent.Title.displayName

const DrawerDescription = React.forwardRef<
  React.ElementRef<typeof DrawerContent.Description>,
  React.ComponentPropsWithoutRef<typeof DrawerContent.Description>
>(({ className, ...props }, ref) => (
  <DrawerContent.Description
    ref={ref}
    className={`text-sm text-muted-foreground ${className || ''}`}
    {...props}
  />
))
DrawerDescription.displayName = DrawerContent.Description.displayName

export {
  Drawer,
  DrawerPortal,
  DrawerOverlay,
  DrawerTrigger,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
}
