export interface ScamCase {
  id: number;
  date: string;
  type: string;
  description: string;
  department: string; // New field for department
}

export const scamCases: ScamCase[] = [
  // IT Department
  { id: 1, date: "2023-06-12", type: "Attempt", description: "Phishing email pretending to be IT admin asking for software updates.", department: "IT" },
  { id: 2, date: "2023-07-20", type: "Success", description: "Employee provided login credentials to a fake system maintenance alert.", department: "IT" },
  { id: 3, date: "2023-08-05", type: "Mistake", description: "Unauthorized access attempt via a malicious email attachment.", department: "IT" },
  { id: 4, date: "2023-09-01", type: "Attempt", description: "Fake security alert requesting users to change passwords on a phishing site.", department: "IT" },
  { id: 5, date: "2023-10-10", type: "Attempt", description: "Scammer impersonated IT support to gain access to a shared drive.", department: "IT" },

  // HR Department
  { id: 6, date: "2023-03-18", type: "Success", description: "Employee shared sensitive recruitment records with a fake recruiter.", department: "HR" },
  { id: 7, date: "2023-04-01", type: "Mistake", description: "HR staff clicked on a phishing link in a fake job application email.", department: "HR" },
  { id: 8, date: "2023-05-15", type: "Attempt", description: "Scammer impersonated a high-profile candidate requesting private records.", department: "HR" },
  { id: 9, date: "2023-06-30", type: "Success", description: "Payroll data leaked after a phishing email claiming to be from the bank.", department: "HR" },
  { id: 10, date: "2023-08-22", type: "Attempt", description: "Fake compliance training email requested employee data updates.", department: "HR" },

  // Finance Department
  { id: 11, date: "2023-03-22", type: "Attempt", description: "Fake invoice claiming overdue payment.", department: "Finance" },
  { id: 12, date: "2023-04-12", type: "Success", description: "Employee paid a fraudulent invoice.", department: "Finance" },
  { id: 13, date: "2023-05-25", type: "Mistake", description: "Clicked on a phishing link in a fake vendor payment email.", department: "Finance" },
  { id: 14, date: "2023-06-15", type: "Attempt", description: "Fake refund notification email with a malicious link.", department: "Finance" },
  { id: 15, date: "2023-07-18", type: "Success", description: "Scammer accessed internal financial systems using stolen credentials.", department: "Finance" },

  // Sales Department
  { id: 16, date: "2023-02-10", type: "Success", description: "Sales representative shared confidential client data in response to a phishing email.", department: "Sales" },
  { id: 17, date: "2023-04-14", type: "Mistake", description: "Sales staff clicked on a fake partnership proposal link.", department: "Sales" },
  { id: 18, date: "2023-05-01", type: "Attempt", description: "Scammer impersonated a customer to request payment details.", department: "Sales" },
  { id: 19, date: "2023-06-18", type: "Success", description: "Fraudulent purchase request sent to a sales representative.", department: "Sales" },
  { id: 20, date: "2023-07-25", type: "Attempt", description: "Scammer impersonated a supplier to gain access to pricing details.", department: "Sales" },

  { id: 21, date: "2023-06-12", type: "Attempt", description: "Phishing email pretending to be IT admin asking for software updates.", department: "Marketing" },
  { id: 22, date: "2023-07-20", type: "Success", description: "Employee provided login credentials to a fake system maintenance alert.", department: "Marketing" },
  { id: 23, date: "2023-08-05", type: "Mistake", description: "Unauthorized access attempt via a malicious email attachment.", department: "Marketing" },
  { id: 24, date: "2023-09-01", type: "Attempt", description: "Fake security alert requesting users to change passwords on a phishing site.", department: "Marketing" },
  { id: 25, date: "2023-10-10", type: "Attempt", description: "Scammer impersonated IT support to gain access to a shared drive.", department: "Marketing" },
];
