export interface DailySmishingData {
    date: string;
    fakeJobPosts: number;
    lotteryScams: number;
    bankAccountIssues: number;
  }
  
  export interface HourlySmishingData {
    hour: string;
    fakeJobPosts: number;
    lotteryScams: number;
    bankAccountIssues: number;
  }
  
  export interface ConfidenceData {
    sms: string;
    jobPostConfidence: string;
    lotteryConfidence: string;
    bankIssueConfidence: string;
  }
  
  // Mock data for daily smishing data by state
  export const mockDailySmishingData: Record<string, DailySmishingData[]> = {
    Johor: [
      { date: "2023-12-01", fakeJobPosts: 12, lotteryScams: 8, bankAccountIssues: 15 },
      { date: "2023-12-02", fakeJobPosts: 15, lotteryScams: 10, bankAccountIssues: 18 },
      { date: "2023-12-03", fakeJobPosts: 10, lotteryScams: 7, bankAccountIssues: 12 },
      { date: "2023-12-04", fakeJobPosts: 14, lotteryScams: 9, bankAccountIssues: 16 },
      { date: "2023-12-05", fakeJobPosts: 11, lotteryScams: 6, bankAccountIssues: 14 },
    ],
    Kedah: [
      { date: "2023-12-01", fakeJobPosts: 10, lotteryScams: 5, bankAccountIssues: 12 },
      { date: "2023-12-02", fakeJobPosts: 14, lotteryScams: 9, bankAccountIssues: 15 },
      { date: "2023-12-03", fakeJobPosts: 11, lotteryScams: 6, bankAccountIssues: 13 },
      { date: "2023-12-04", fakeJobPosts: 15, lotteryScams: 8, bankAccountIssues: 17 },
      { date: "2023-12-05", fakeJobPosts: 13, lotteryScams: 7, bankAccountIssues: 14 },
    ],
    Penang: [
      { date: "2023-12-01", fakeJobPosts: 8, lotteryScams: 4, bankAccountIssues: 10 },
      { date: "2023-12-02", fakeJobPosts: 12, lotteryScams: 5, bankAccountIssues: 13 },
      { date: "2023-12-03", fakeJobPosts: 9, lotteryScams: 6, bankAccountIssues: 11 },
      { date: "2023-12-04", fakeJobPosts: 14, lotteryScams: 7, bankAccountIssues: 15 },
      { date: "2023-12-05", fakeJobPosts: 10, lotteryScams: 5, bankAccountIssues: 12 },
    ],
  };
  
  // Mock data for hourly smishing data by date
  export const mockHourlyData: Record<string, HourlySmishingData[]> = {
    "2023-12-01": Array.from({ length: 24 }, (_, i) => ({
      hour: `${i}:00`,
      fakeJobPosts: Math.floor(Math.random() * 5),
      lotteryScams: Math.floor(Math.random() * 4),
      bankAccountIssues: Math.floor(Math.random() * 6),
    })),
    "2023-12-02": Array.from({ length: 24 }, (_, i) => ({
      hour: `${i}:00`,
      fakeJobPosts: Math.floor(Math.random() * 5),
      lotteryScams: Math.floor(Math.random() * 4),
      bankAccountIssues: Math.floor(Math.random() * 6),
    })),
    "2023-12-03": Array.from({ length: 24 }, (_, i) => ({
      hour: `${i}:00`,
      fakeJobPosts: Math.floor(Math.random() * 5),
      lotteryScams: Math.floor(Math.random() * 4),
      bankAccountIssues: Math.floor(Math.random() * 6),
    })),
    "2023-12-04": Array.from({ length: 24 }, (_, i) => ({
      hour: `${i}:00`,
      fakeJobPosts: Math.floor(Math.random() * 5),
      lotteryScams: Math.floor(Math.random() * 4),
      bankAccountIssues: Math.floor(Math.random() * 6),
    })),
    "2023-12-05": Array.from({ length: 24 }, (_, i) => ({
      hour: `${i}:00`,
      fakeJobPosts: Math.floor(Math.random() * 5),
      lotteryScams: Math.floor(Math.random() * 4),
      bankAccountIssues: Math.floor(Math.random() * 6),
    })),
  };
  
  // Mock data for confidence analysis by state
  export const mockConfidenceData: Record<string, ConfidenceData[]> = {
    Johor: Array.from({ length: 10 }, (_, i) => ({
      sms: `Sample SMS ${i + 1}`,
      jobPostConfidence: (Math.random() * 100).toFixed(2),
      lotteryConfidence: (Math.random() * 100).toFixed(2),
      bankIssueConfidence: (Math.random() * 100).toFixed(2),
    })),
    Kedah: Array.from({ length: 10 }, (_, i) => ({
      sms: `Sample SMS ${i + 1}`,
      jobPostConfidence: (Math.random() * 100).toFixed(2),
      lotteryConfidence: (Math.random() * 100).toFixed(2),
      bankIssueConfidence: (Math.random() * 100).toFixed(2),
    })),
    Penang: Array.from({ length: 10 }, (_, i) => ({
      sms: `Sample SMS ${i + 1}`,
      jobPostConfidence: (Math.random() * 100).toFixed(2),
      lotteryConfidence: (Math.random() * 100).toFixed(2),
      bankIssueConfidence: (Math.random() * 100).toFixed(2),
    })),
  };
  