"use client"

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart, Bar } from 'recharts'
// import { Button } from '@/components/ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'

// Mock data for charts
const vishingData = [
  { name: 'Jan', attempts: 65, success: 28 },
  { name: 'Feb', attempts: 59, success: 25 },
  { name: 'Mar', attempts: 80, success: 36 },
  { name: 'Apr', attempts: 81, success: 32 },
  { name: 'May', attempts: 56, success: 21 },
  { name: 'Jun', attempts: 55, success: 23 },
  { name: 'Jul', attempts: 40, success: 17 },
]

const employeeData = [
  { name: 'Monday', vulnerable: 4, resistant: 12 },
  { name: 'Tuesday', vulnerable: 3, resistant: 8 },
  { name: 'Wednesday', vulnerable: 7, resistant: 5 },
  { name: 'Thursday', vulnerable: 2, resistant: 10 },
  { name: 'Friday', vulnerable: 5, resistant: 7 },
  { name: 'Saturday', vulnerable: 5, resistant: 7 },
  { name: 'Sunday', vulnerable: 5, resistant: 7 },
]

// Mock data for vishing history
const vishingHistory = [
  { id: 1, date: '2023-07-15', employee: 'John Doe', department: 'IT', result: 'Resistant' },
  { id: 2, date: '2023-07-14', employee: 'Jane Smith', department: 'HR', result: 'Vulnerable' },
  { id: 3, date: '2023-07-13', employee: 'Mike Johnson', department: 'Sales', result: 'Resistant' },
  { id: 4, date: '2023-07-12', employee: 'Emily Brown', department: 'Finance', result: 'Resistant' },
  { id: 5, date: '2023-07-11', employee: 'Chris Lee', department: 'Marketing', result: 'Vulnerable' },
]

export default function DashboardPage() {
  const [timeRange, setTimeRange] = useState('7d')

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <div className="flex items-center space-x-4">
          <Select value={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select time range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7d">Last 7 days</SelectItem>
              <SelectItem value="30d">Last 30 days</SelectItem>
              <SelectItem value="90d">Last 90 days</SelectItem>
            </SelectContent>
          </Select>
          {/* <Button>Generate Report</Button> */}
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Lexo Reports Summary</CardTitle>
            <CardDescription>idk what to put here lol XD</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={vishingData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="attempts" stroke="#8884d8" />
                <Line type="monotone" dataKey="success" stroke="#82ca9d" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Total Force used F=ma (N)</CardTitle>
            <CardDescription>idk what to put here lol XD</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={employeeData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="vulnerable" fill="#8884d8" />
                <Bar dataKey="resistant" fill="#82ca9d" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>User Assessment</CardTitle>
          <CardDescription>History of Risk Assessments</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Employee</TableHead>
                {/* <TableHead>Department</TableHead> */}
                <TableHead>Result</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {vishingHistory.map((attempt) => (
                <TableRow key={attempt.id}>
                  <TableCell>{attempt.date}</TableCell>
                  <TableCell>{attempt.employee}</TableCell>
                  {/* <TableCell>{attempt.department}</TableCell> */}
                  <TableCell>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      attempt.result === 'Resistant' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }`}>
                      {attempt.result}
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
