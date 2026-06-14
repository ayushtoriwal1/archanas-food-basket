"use client"

import * as React from "react"
import * as RechartsPrimitive from "recharts"
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons"

const COLORS = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "#8884D8",
  "#82CA9D",
]

type ChartConfig = {
  [k in string]: {
    label?: React.ReactNode
    icon?: React.ReactNode
  } & ({
    color?: string
    theme?: {
      light?: string
      dark?: string
    }
  } | {
    color?: never
    theme?: never
  })
}

type ChartContextProps = {
  config: ChartConfig
}

const ChartContext = React.createContext<ChartContextProps | null>(null)

function useChart() {
  const context = React.useContext(ChartContext)
  if (!context) {
    throw new Error("useChart must be used within a <ChartContainer />");
  }
  return context
}

const ChartContainer = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { config: ChartConfig; children: React.ReactNode }
>(({ id, className, children, config, ...props }, ref) => {
  const uniqueId = React.useId()
  const chartId = `chart-${id || uniqueId.replace(/:/g, '')}`

  return (
    <ChartContext.Provider value={{ config }}>
      <div
        ref={ref}
        id={chartId}
        className={`flex aspect-video justify-center text-xs ${className || ''}`}
        {...props}
      >
        <style
          dangerouslySetInnerHTML={{
            __html: `
              #${chartId} {
                --color-1: ${config[Object.keys(config)[0]]?.color || COLORS[0]};
              }
            `,
          }}
        />
        {children}
      </div>
    </ChartContext.Provider>
  )
})
ChartContainer.displayName = "ChartContainer"

const ChartStyle = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> &
    Pick<RechartsPrimitive.ResponsiveContainerProps, "width" | "height">
>(({ id, className, ...props }, ref) => (
  <RechartsPrimitive.ResponsiveContainer
    width="100%"
    height={350}
    ref={ref}
    className={className}
    {...props}
  />
))
ChartStyle.displayName = "ChartStyle"

const ChartTooltip = RechartsPrimitive.Tooltip
const ChartLegend = RechartsPrimitive.Legend
const ChartTooltipContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<typeof RechartsPrimitive.Tooltip> & {
    hideLabel?: boolean
    hideNameKey?: boolean
    indicator?: "line" | "dot" | "dashed"
    nameKey?: string
    labelKey?: string
  }
>(({ active, payload, label, hideLabel, hideNameKey, indicator, nameKey, labelKey }, ref) => {
  const { config } = useChart()

  const tooltipLabel = React.useMemo(() => {
    if (hideLabel || !payload || payload.length === 0) {
      return null
    }

    const item = payload[0]
    const key = `${labelKey || item.dataKey || item.name || "value"}`
    const itemConfig = config[key as keyof typeof config]

    return itemConfig?.label || key
  }, [config, hideLabel, labelKey, payload])

  return (
    <div className="rounded-lg border border-slate-200 bg-white p-2 shadow-md">
      {!hideLabel && tooltipLabel ? (
        <div className="text-sm font-medium text-slate-900">{tooltipLabel}</div>
      ) : null}
      {payload && payload.length ? (
        <div className="mt-2 space-y-1">
          {payload.map((item, index) => {
            const key = `${nameKey || item.dataKey || item.name || "value"}`
            const itemConfig = config[key as keyof typeof config]
            const indicatorColor =
              item.color || itemConfig?.color || "#000"

            return (
              <div
                key={`${item.dataKey}-${index}`}
                className="flex items-center gap-2 text-sm"
              >
                <div
                  className={`h-2 w-2 rounded-full bg-[${indicatorColor}]`}
                  style={{
                    backgroundColor: indicatorColor,
                  }}
                />
                {!hideNameKey && (
                  <span className="text-slate-600">
                    {itemConfig?.label || item.name}
                  </span>
                )}
                <span className="font-medium text-slate-900">
                  {item.value}
                </span>
              </div>
            )
          })}
        </div>
      ) : null}
    </div>
  )
})
ChartTooltipContent.displayName = "ChartTooltipContent"

export {
  ChartContainer,
  ChartStyle,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  useChart,
}
