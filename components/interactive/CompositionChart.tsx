"use client"

import { TrendingUp } from "lucide-react"
import { Label, Pie, PieChart, Sector } from "recharts"
import { PieSectorDataItem } from "recharts/types/polar/Pie"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
// const chartData = [
//   { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
//   { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
//   { browser: "firefox", visitors: 187, fill: "var(--color-firefox)" },
//   { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
//   { browser: "other", visitors: 90, fill: "var(--color-other)" },
// ]
// const chartConfig = {
//   visitors: {
//     label: "Visitors",
//   },
//   chrome: {
//     label: "Chrome",
//     color: "hsl(var(--chart-1))",
//   },
//   safari: {
//     label: "Safari",
//     color: "hsl(var(--chart-2))",
//   },
//   firefox: {
//     label: "Firefox",
//     color: "hsl(var(--chart-3))",
//   },
//   edge: {
//     label: "Edge",
//     color: "hsl(var(--chart-4))",
//   },
//   other: {
//     label: "Other",
//     color: "hsl(var(--chart-5))",
//   },
// } satisfies ChartConfig
const chartData = [
  { ingredient: "Multani Mitti", percentage: 60, fill: "var(--color-multani_mitti)" },
  { ingredient: "Sandalwood Powder", percentage: 10, fill: "var(--color-sandalwood_powder)" },
  { ingredient: "Turmeric", percentage: 10, fill: "var(--color-turmeric)" },
  { ingredient: "Rose Water", percentage: 15, fill: "var(--color-rose_water)" },
  { ingredient: "Aloe Vera Extract", percentage: 5, fill: "var(--color-aloe_vera_extract)" },
];

const chartConfig = {
  percentage: {
    label: "Composition (%)",
  },
  multani_mitti: {
    label: "Multani Mitti",
    color: "hsl(var(--chart-1))",
  },
  sandalwood_powder: {
    label: "Sandalwood Powder",
    color: "hsl(var(--chart-2))",
  },
  turmeric: {
    label: "Turmeric",
    color: "hsl(var(--chart-3))",
  },
  rose_water: {
    label: "Rose Water",
    color: "hsl(var(--chart-4))",
  },
  aloe_vera_extract: {
    label: "Aloe Vera Extract",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig;


export function CompositionChart() {
  return (
    <Card className="flex flex-col rounded-3xl border border-stone-200/50 h-full">
      <CardHeader className="items-center pb-0">
        <CardTitle>Elemental Composition</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0 px-0 ">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="percentage"
              nameKey="ingredient"
              innerRadius={60}
              strokeWidth={5}
              activeIndex={0}
              activeShape={({
                outerRadius = 0,
                ...props
              }: PieSectorDataItem) => (
                <Sector {...props} outerRadius={outerRadius + 10} />
              )}
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          Precision-crafted ratios for optimal efficacy
        </div>
      </CardFooter>
    </Card>
  )
}
