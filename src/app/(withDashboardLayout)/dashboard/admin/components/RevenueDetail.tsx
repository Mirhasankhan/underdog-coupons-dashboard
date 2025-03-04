"use client";

import { TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
const chartData = [
  { month: "January", bookings: 186, revenue: 80 },
  { month: "February", bookings: 305, revenue: 200 },
  { month: "March", bookings: 237, revenue: 120 },
  { month: "April", bookings: 73, revenue: 190 },
  { month: "May", bookings: 209, revenue: 130 },
  { month: "June", bookings: 214, revenue: 140 },
  { month: "July", bookings: 186, revenue: 80 },
  { month: "August", bookings: 305, revenue: 200 },
  { month: "September", bookings: 237, revenue: 120 },
  { month: "October", bookings: 73, revenue: 190 },
  { month: "November", bookings: 209, revenue: 130 },
  { month: "December", bookings: 214, revenue: 140 },
];

const chartConfig = {
  desktop: {
    label: "Bookings",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Revenue",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

const RevenueDetails = () => {
  return (
    <div className="my-6">
      <Card>
        <CardHeader>
          <CardTitle>Bar Chart - Multiple</CardTitle>
          <CardDescription>January - June 2024</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig}>
            <BarChart accessibilityLayer data={chartData}>
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="month"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
                tickFormatter={(value) => value.slice(0, 3)}
              />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent indicator="dashed" />}
              />
              <Bar dataKey="bookings" fill="var(--color-desktop)" radius={4} />
              <Bar dataKey="revenue" fill="var(--color-mobile)" radius={4} />
            </BarChart>
          </ChartContainer>
        </CardContent>
        <CardFooter className="flex-col items-start gap-2 text-sm">
          <div className="flex gap-2 font-medium leading-none">
            Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
          </div>
          <div className="leading-none text-muted-foreground">
            Showing total visitors for the last 6 months
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default RevenueDetails;
