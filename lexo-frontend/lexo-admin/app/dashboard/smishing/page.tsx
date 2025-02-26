"use client";

import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import { ChartData, ChartOptions } from "chart.js";
import "chart.js/auto";
import {
  mockDailySmishingData,
  mockHourlyData,
  mockConfidenceData,
} from "./mockData";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

// Type for hourly scam data
// interface HourlyScamData {
//   hour: string;
//   fakeJobPosts: number;
//   lotteryScams: number;
//   bankAccountIssues: number;
// }

// Type for confidence data
interface ConfidenceData {
  sms: string;
  jobPostConfidence: string;
  lotteryConfidence: string;
  bankIssueConfidence: string;
}

const states = Object.keys(mockDailySmishingData);

export default function SmishingPage() {
  const [selectedState, setSelectedState] = useState<string>(states[0]);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  // const [hourlyData, setHourlyData] = useState<HourlyScamData[]>([]);
  const [chartData, setChartData] = useState<ChartData<"bar"> | null>(null);
  const [confidenceData, setConfidenceData] = useState<ConfidenceData[]>([]);

  // Update data when state or date changes
  useEffect(() => {
    if (!selectedDate) {
      // Daily view
      const dailyData = mockDailySmishingData[selectedState] || [];
      setChartData({
        labels: dailyData.map((d) => d.date),
        datasets: [
          {
            label: "Fake Job Posts",
            data: dailyData.map((d) => d.fakeJobPosts),
            backgroundColor: "rgba(75, 192, 192, 0.6)",
            borderColor: "rgba(75, 192, 192, 1)",
            stack: "smishing",
          },
          {
            label: "Lottery Scams",
            data: dailyData.map((d) => d.lotteryScams),
            backgroundColor: "rgba(255, 206, 86, 0.6)",
            borderColor: "rgba(255, 206, 86, 1)",
            stack: "smishing",
          },
          {
            label: "Bank Account Issues",
            data: dailyData.map((d) => d.bankAccountIssues),
            backgroundColor: "rgba(255, 99, 132, 0.6)",
            borderColor: "rgba(255, 99, 132, 1)",
            stack: "smishing",
          },
        ],
      });
      setConfidenceData(mockConfidenceData[selectedState] || []);
    } else {
      // Hourly view
      const hourlyDataForDate = mockHourlyData[selectedDate] || [];
      // setHourlyData(hourlyDataForDate);
      setChartData({
        labels: hourlyDataForDate.map((d) => d.hour),
        datasets: [
          {
            label: "Fake Job Posts",
            data: hourlyDataForDate.map((d) => d.fakeJobPosts),
            backgroundColor: "rgba(75, 192, 192, 0.6)",
            borderColor: "rgba(75, 192, 192, 1)",
          },
          {
            label: "Lottery Scams",
            data: hourlyDataForDate.map((d) => d.lotteryScams),
            backgroundColor: "rgba(255, 206, 86, 0.6)",
            borderColor: "rgba(255, 206, 86, 1)",
          },
          {
            label: "Bank Account Issues",
            data: hourlyDataForDate.map((d) => d.bankAccountIssues),
            backgroundColor: "rgba(255, 99, 132, 0.6)",
            borderColor: "rgba(255, 99, 132, 1)",
          },
        ],
      });
      setConfidenceData(mockConfidenceData[selectedState] || []);
    }
  }, [selectedState, selectedDate]);

  // Chart options with drill-down functionality
  const chartOptions: ChartOptions<"bar"> = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: selectedDate ? "Hours" : "Dates",
        },
      },
      y: {
        title: {
          display: true,
          text: "Number of Smishing Scams",
        },
      },
    },
    onClick: (_, elements) => {
      if (!selectedDate && elements.length > 0) {
        // Drill down into hourly data
        const clickedIndex = elements[0].index;
        const clickedDate =
          mockDailySmishingData[selectedState][clickedIndex]?.date;
        setSelectedDate(clickedDate);
      }
    },
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Smishing Scams Analysis</h1>

      {/* State Selector */}
      <div className="flex items-center space-x-4 mb-6">
        <label htmlFor="state-selector" className="block text-lg font-medium">
          Select State:
        </label>
        <select
          id="state-selector"
          value={selectedState}
          onChange={(e) => setSelectedState(e.target.value)}
          className="p-2 border rounded"
        >
          {states.map((state) => (
            <option key={state} value={state}>
              {state}
            </option>
          ))}
        </select>
        {selectedDate && (
          <button
            onClick={() => setSelectedDate(null)}
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Back to Daily View
          </button>
        )}
      </div>

      {/* Chart */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-4">
          {selectedDate
            ? `Hourly Smishing Scam Distribution for ${selectedDate}`
            : `Daily Smishing Scam Distribution (${selectedState})`}
        </h2>
        {chartData && <Bar data={chartData} options={chartOptions} />}
      </div>

      {/* Confidence Table */}
      <Card>
        <CardHeader>
          <CardTitle>Smishing Confidence Analysis</CardTitle>
          <CardDescription>
            Detailed analysis of smishing confidence levels by category
          </CardDescription>
        </CardHeader>
        <CardContent>
          {/* Detailed Table */}
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>SMS Content</TableHead>
                <TableHead>Fake Job Post Confidence (%)</TableHead>
                <TableHead>Lottery Scam Confidence (%)</TableHead>
                <TableHead>Bank Issue Confidence (%)</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {confidenceData.length > 0 ? (
                confidenceData.map((data, index) => (
                  <TableRow key={index}>
                    <TableCell>{data.sms}</TableCell>
                    <TableCell>{data.jobPostConfidence}</TableCell>
                    <TableCell>{data.lotteryConfidence}</TableCell>
                    <TableCell>{data.bankIssueConfidence}</TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={4} className="text-center">
                    No confidence data available.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
