"use client";

import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import { ChartData, ChartOptions } from "chart.js";
import "chart.js/auto";
import {
  mockDailyScamData,
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
//   deepfake: number;
//   human: number;
// }

// Type for confidence data
interface ConfidenceData {
  audio: string;
  deepfakeConfidence: string;
  scamConfidence: string;
}

const states = Object.keys(mockDailyScamData);

export default function VishingPage() {
  const [selectedState, setSelectedState] = useState<string>(states[0]);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  // const [hourlyData, setHourlyData] = useState<HourlyScamData[]>([]);
  const [chartData, setChartData] = useState<ChartData<"bar"> | null>(null);
  const [confidenceData, setConfidenceData] = useState<ConfidenceData[]>([]);

  // Update data when state or date changes
  useEffect(() => {
    if (!selectedDate) {
      // Daily view
      const dailyData = mockDailyScamData[selectedState] || [];
      setChartData({
        labels: dailyData.map((d) => d.date),
        datasets: [
          {
            label: "Deepfake Voice Scams",
            data: dailyData.map((d) => d.deepfake),
            backgroundColor: "rgba(75, 192, 192, 0.6)",
            borderColor: "rgba(75, 192, 192, 1)",
            stack: "scams",
          },
          {
            label: "Real Human Scam Calls",
            data: dailyData.map((d) => d.human),
            backgroundColor: "rgba(255, 99, 132, 0.6)",
            borderColor: "rgba(255, 99, 132, 1)",
            stack: "scams",
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
            label: "Deepfake Voice Scams",
            data: hourlyDataForDate.map((d) => d.deepfake),
            backgroundColor: "rgba(75, 192, 192, 0.6)",
            borderColor: "rgba(75, 192, 192, 1)",
          },
          {
            label: "Real Human Scam Calls",
            data: hourlyDataForDate.map((d) => d.human),
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
          text: "Number of Scams",
        },
      },
    },
    onClick: (_, elements) => {
      if (!selectedDate && elements.length > 0) {
        // Drill down into hourly data
        const clickedIndex = elements[0].index;
        const clickedDate =
          mockDailyScamData[selectedState][clickedIndex]?.date;
        setSelectedDate(clickedDate);
      }
    },
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Vishing Scams Analysis</h1>

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
            ? `Hourly Scam Distribution for ${selectedDate}`
            : `Daily Scam Distribution (${selectedState})`}
        </h2>
        {chartData && <Bar data={chartData} options={chartOptions} />}
      </div>

      {/* Confidence Table */}
      <Card>
        <CardHeader>
          <CardTitle>Scam Confidence Analysis</CardTitle>
          <CardDescription>
            Detailed analysis of deepfake and scam confidence levels
          </CardDescription>
        </CardHeader>
        <CardContent>
          {/* Summary Section with Progress Bars */}
          <div className="mb-4 space-y-4">
            {/* Average Deepfake Confidence */}
            <div>
              <p className="text-sm font-semibold mb-1">
                Average Deepfake Confidence
              </p>
              <div className="flex items-center">
                <div className="w-full bg-gray-200 rounded-full h-4 mr-2">
                  <div
                    className="bg-blue-500 h-4 rounded-full"
                    style={{
                      width: `${
                        confidenceData.length > 0
                          ? (
                              confidenceData.reduce(
                                (sum, d) =>
                                  sum + parseFloat(d.deepfakeConfidence),
                                0
                              ) / confidenceData.length
                            ).toFixed(2)
                          : 0
                      }%`,
                    }}
                  ></div>
                </div>
                <span className="text-sm font-semibold">
                  {confidenceData.length > 0
                    ? (
                        confidenceData.reduce(
                          (sum, d) => sum + parseFloat(d.deepfakeConfidence),
                          0
                        ) / confidenceData.length
                      ).toFixed(2)
                    : 0}
                  %
                </span>
              </div>
            </div>

            {/* Average Scam Confidence */}
            <div>
              <p className="text-sm font-semibold mb-1">
                Average Scam Confidence
              </p>
              <div className="flex items-center">
                <div className="w-full bg-gray-200 rounded-full h-4 mr-2">
                  <div
                    className="bg-red-500 h-4 rounded-full"
                    style={{
                      width: `${
                        confidenceData.length > 0
                          ? (
                              confidenceData.reduce(
                                (sum, d) => sum + parseFloat(d.scamConfidence),
                                0
                              ) / confidenceData.length
                            ).toFixed(2)
                          : 0
                      }%`,
                    }}
                  ></div>
                </div>
                <span className="text-sm font-semibold">
                  {confidenceData.length > 0
                    ? (
                        confidenceData.reduce(
                          (sum, d) => sum + parseFloat(d.scamConfidence),
                          0
                        ) / confidenceData.length
                      ).toFixed(2)
                    : 0}
                  %
                </span>
              </div>
            </div>

            {/* Highest Deepfake Confidence */}
            <div>
              <p className="text-sm font-semibold mb-1">
                Highest Deepfake Confidence
              </p>
              <div className="flex items-center">
                <div className="w-full bg-gray-200 rounded-full h-4 mr-2">
                  <div
                    className="bg-blue-500 h-4 rounded-full"
                    style={{
                      width: `${
                        confidenceData.length > 0
                          ? Math.max(
                              ...confidenceData.map((d) =>
                                parseFloat(d.deepfakeConfidence)
                              )
                            ).toFixed(2)
                          : 0
                      }%`,
                    }}
                  ></div>
                </div>
                <span className="text-sm font-semibold">
                  {confidenceData.length > 0
                    ? Math.max(
                        ...confidenceData.map((d) =>
                          parseFloat(d.deepfakeConfidence)
                        )
                      ).toFixed(2)
                    : 0}
                  %
                </span>
              </div>
            </div>

            {/* Highest Scam Confidence */}
            <div>
              <p className="text-sm font-semibold mb-1">
                Highest Scam Confidence
              </p>
              <div className="flex items-center">
                <div className="w-full bg-gray-200 rounded-full h-4 mr-2">
                  <div
                    className="bg-red-500 h-4 rounded-full"
                    style={{
                      width: `${
                        confidenceData.length > 0
                          ? Math.max(
                              ...confidenceData.map((d) =>
                                parseFloat(d.scamConfidence)
                              )
                            ).toFixed(2)
                          : 0
                      }%`,
                    }}
                  ></div>
                </div>
                <span className="text-sm font-semibold">
                  {confidenceData.length > 0
                    ? Math.max(
                        ...confidenceData.map((d) =>
                          parseFloat(d.scamConfidence)
                        )
                      ).toFixed(2)
                    : 0}
                  %
                </span>
              </div>
            </div>
          </div>

          {/* Detailed Table */}
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Audio Transcript</TableHead>
                <TableHead>Deepfake Confidence (%)</TableHead>
                <TableHead>Scam Confidence (%)</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {confidenceData.length > 0 ? (
                confidenceData.map((data, index) => (
                  <TableRow key={index}>
                    <TableCell>{data.audio}</TableCell>
                    <TableCell>{data.deepfakeConfidence}</TableCell>
                    <TableCell>{data.scamConfidence}</TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={3} className="text-center">
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
