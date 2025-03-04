"use client";
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { month: "January", positive: 186, negative: 80 },
  { month: "February", positive: 105, negative: 200 },
  { month: "March", positive: 137, negative: 120 },
  { month: "April", positive: 73, negative: 190 },
  { month: "May", positive: 209, negative: 130 },
  { month: "June", positive: 114, negative: 140 },
  { month: "July", positive: 465, negative: 80 },
  { month: "August", positive: 205, negative: 100 },
  { month: "September", positive: 137, negative: 120 },
  { month: "October", positive: 73, negative: 290 },
  { month: "November", positive: 49, negative: 130 },
  { month: "December", positive: 114, negative: 140 },
];

const chartConfig = {
  positive: {
    label: "Positive",
    color: "hsla(140, 73%, 39%, 1)",
  },
  negative: {
    label: "Negative",
    color: "hsla(13, 100%, 47%, 1)",
  },
} satisfies ChartConfig;

const ReviewStatics = () => {
  return (
    <Card className="border-none shadow-[0px_4px_15px_rgba(255,69,58,0.15)]">
      <CardHeader>
        <CardTitle className="text-2xl pb-2">Review & Statistics</CardTitle>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <p className="h-4 w-4 rounded-full bg-red-500"></p>
            <h1>Negative Review</h1>
          </div>
          <div className="flex items-center gap-1">
            <p className="h-4 w-4 rounded-full bg-gray-500"></p>
            <h1>Positive Review</h1>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={chartData}
            // margin={{
            //   left: 6,
            //   right: 6,
            // }}
          >
            <CartesianGrid vertical={false} />
            <YAxis
              tickLine={false}
              axisLine={false}
              tickMargin={4}
              domain={[0, 600]}
            />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={4}
              tickFormatter={(value) => value.slice(0, 3)}
            />

            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dot" />}
            />

            <defs>
              <linearGradient
                id="gradient-negative"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop offset="0%" stopColor="#BFC5D1" stopOpacity="0.9" />
                <stop offset="50%" stopColor="#636F85" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#636F85" stopOpacity="0.2" />
              </linearGradient>
              <linearGradient
                id="gradient-positive"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop offset="0%" stopColor="#F13300" stopOpacity="0.9" />          
                <stop offset="30%" stopColor="#FFA899" stopOpacity="0.6" />       
                <stop offset="60%" stopColor="#FFD4C6" stopOpacity="0.4" />      
                <stop
                  offset="100%"
                  stopColor="#FFFFFF"
                  stopOpacity="0.2"
                />             
              </linearGradient>
            </defs>

            <Area
              dataKey="positive"
              type="natural"
              fill="url(#gradient-negative)"
              stroke="#636F85"
              strokeWidth={3}
              stackId="a"
            />
            <Area
              dataKey="negative"
              type="natural"
              fill="url(#gradient-positive)"
              stroke="#F13300"
              strokeWidth={3}
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export default ReviewStatics;
