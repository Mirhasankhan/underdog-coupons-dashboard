"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const CancelationRate = () => {
  const cancellationRate = [
    { month: "Jan", completed: 180, canceled: 20 },
    { month: "Feb", completed: 310, canceled: 30 },
    { month: "Mar", completed: 220, canceled: 30 },
    { month: "Apr", completed: 350, canceled: 50 },
    { month: "May", completed: 540, canceled: 60 },
  ];
  return (
    <div className="mb-6">
      {/* Cancellation Rate */}
      <Card>
        <CardHeader>
          <CardTitle>📉 Cancellation Rate</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={cancellationRate}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="completed" fill="#22c55e" name="Completed" />
              <Bar dataKey="canceled" fill="#ef4444" name="Canceled" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
};

export default CancelationRate;
