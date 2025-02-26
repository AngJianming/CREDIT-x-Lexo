// types.ts
export interface DailyScamData {
    date: string;
    deepfake: number;
    human: number;
  }
  
  export interface HourlyScamData {
    hour: string;
    deepfake: number;
    human: number;
  }
  
  export interface ConfidenceData {
    audio: string;
    deepfakeConfidence: string;
    scamConfidence: string;
  }
  

// Mock data for daily scam data by state
export const mockDailyScamData: Record<string, DailyScamData[]> = {
  Johor: [
    { date: "2023-12-01", deepfake: 20, human: 15 },
    { date: "2023-12-02", deepfake: 25, human: 20 },
    { date: "2023-12-03", deepfake: 18, human: 12 },
    { date: "2023-12-04", deepfake: 24, human: 14 },
    { date: "2023-12-05", deepfake: 21, human: 13 },
  ],
  Kedah: [
    { date: "2023-12-01", deepfake: 22, human: 14 },
    { date: "2023-12-02", deepfake: 30, human: 16 },
    { date: "2023-12-03", deepfake: 19, human: 13 },
    { date: "2023-12-04", deepfake: 26, human: 18 },
    { date: "2023-12-05", deepfake: 20, human: 12 },
  ],
  Penang: [
    { date: "2023-12-01", deepfake: 18, human: 15 },
    { date: "2023-12-02", deepfake: 20, human: 18 },
    { date: "2023-12-03", deepfake: 22, human: 19 },
    { date: "2023-12-04", deepfake: 25, human: 17 },
    { date: "2023-12-05", deepfake: 23, human: 16 },
  ],
};

// Mock data for hourly scam data by date
export const mockHourlyData: Record<string, HourlyScamData[]> = {
  "2023-12-01": Array.from({ length: 24 }, (_, i) => ({
    hour: `${i}:00`,
    deepfake: Math.floor(Math.random() * 10),
    human: Math.floor(Math.random() * 10),
  })),
  "2023-12-02": Array.from({ length: 24 }, (_, i) => ({
    hour: `${i}:00`,
    deepfake: Math.floor(Math.random() * 10),
    human: Math.floor(Math.random() * 10),
  })),
  "2023-12-03": Array.from({ length: 24 }, (_, i) => ({
    hour: `${i}:00`,
    deepfake: Math.floor(Math.random() * 10),
    human: Math.floor(Math.random() * 10),
  })),
  "2023-12-04": Array.from({ length: 24 }, (_, i) => ({
    hour: `${i}:00`,
    deepfake: Math.floor(Math.random() * 10),
    human: Math.floor(Math.random() * 10),
  })),
  "2023-12-05": Array.from({ length: 24 }, (_, i) => ({
    hour: `${i}:00`,
    deepfake: Math.floor(Math.random() * 10),
    human: Math.floor(Math.random() * 10),
  })),
};

// Mock data for confidence analysis by state
export const mockConfidenceData: Record<string, ConfidenceData[]> = {
  Johor: Array.from({ length: 10 }, (_, i) => ({
    audio: `Sample audio ${i + 1}`,
    deepfakeConfidence: (Math.random() * 100).toFixed(2),
    scamConfidence: (Math.random() * 100).toFixed(2),
  })),
  Kedah: Array.from({ length: 10 }, (_, i) => ({
    audio: `Sample audio ${i + 1}`,
    deepfakeConfidence: (Math.random() * 100).toFixed(2),
    scamConfidence: (Math.random() * 100).toFixed(2),
  })),
  Penang: Array.from({ length: 10 }, (_, i) => ({
    audio: `Sample audio ${i + 1}`,
    deepfakeConfidence: (Math.random() * 100).toFixed(2),
    scamConfidence: (Math.random() * 100).toFixed(2),
  })),
};
