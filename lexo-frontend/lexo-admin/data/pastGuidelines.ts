export interface PastGuideline {
  id: number;
  department: string;
  title: string;
  date: string;
  content: string;
}

export const pastGuidelines: PastGuideline[] = [
  {
    id: 1,
    department: "IT",
    title: "Guideline for IT Security",
    date: "2023-10-10",
    content: `
### Scam Case Report: Preventing IT Phishing Scams

Case Summary:  
On July 20, 2023, an employee in the IT department provided login credentials to a fake system maintenance alert. This led to unauthorized access attempts on internal systems.

---

### Why This is a Scam:

1. **Impersonation**:  
   - The scam email appeared to come from the organization's IT team, mimicking official communication styles.

2. **Urgency**:  
   - The email warned of immediate service suspension if login details were not provided.

3. **Lack of Verification**:  
   - The email link redirected to a malicious site that closely resembled the official company login page.

---

### Recommendations for IT Employees:

1. **Verify Sender Information**:  
   - Always verify the sender’s email address before responding to IT-related requests.

2. **Cross-Check Links**:  
   - Cross-check links by hovering over them to confirm authenticity.

3. **Report Suspicious IT Requests**:  
   - Train employees to report any suspicious IT requests immediately to the cybersecurity team.
`,
  },
  {
    id: 2,
    department: "HR",
    title: "Avoiding HR Scams",
    date: "2023-09-20",
    content: `
### Scam Case Report: Protecting Sensitive Recruitment Data

Case Summary:  
On March 18, 2023, an HR employee shared sensitive recruitment records with a fake recruiter.

---

### Why This is a Scam:

1. **Social Engineering**:  
   - The scammer impersonated a legitimate recruitment agency.

2. **Urgency**:  
   - The email requested immediate sharing of records to "meet a tight hiring deadline."

3. **Unverified Requests**:  
   - The recruiter’s email was not verified against trusted sources.

---

### Recommendations for HR Employees:

1. **Verify Recruitment-Related Requests**:  
   - Verify all recruitment-related requests by contacting the agency directly.

2. **Use Secure Channels**:  
   - Implement secure channels for sharing sensitive data, such as encrypted email services.

3. **Educate on Social Engineering**:  
   - Educate HR employees on social engineering tactics.
`,
  },
  {
    id: 3,
    department: "Finance",
    title: "Invoice Scam Prevention",
    date: "2023-08-15",
    content: `
### Scam Case Report: Fake Invoice Sent to Finance Department

Case ID: FIN-20230101  
Date Reported: January 15, 2023  

---

#### Scam Email:

From: Billing Department <accounts@trustedvendor.com>  
Subject: Overdue Payment Reminder - Invoice #INV-45219  

Email Content:
\`\`\`
Dear [Organization Name] Finance Team,

We hope this email finds you well. This is a gentle reminder that your payment for invoice #INV-45219, amounting to $12,350.00, is overdue by 10 days. Please remit the payment to the following bank account at your earliest convenience to avoid disruption to your account:

Bank Name: ABC Global Bank  
Account Number: 5678901234  
Routing Number: 987654321  
Invoice Copy: [Download Here](https://secure.trustedvendorportal.com/invoice-45219)

Should you have any questions or concerns regarding this invoice, do not hesitate to contact us directly at billing@trustedvendor.com or +1-555-123-4567.

Thank you for your prompt attention to this matter.

Best regards,  
[Actual Vendor Name] Billing Team
\`\`\`

---

### Why This is a Scam Email:

1. **Legitimate-Looking Email Address:**  
   - The email appears to come from a genuine vendor (\`accounts@trustedvendor.com\`) but is actually from a spoofed or fake domain designed to look authentic.

2. **Professional Formatting and Tone:**  
   - The email mimics the format, language, and structure of legitimate billing emails to appear convincing.

3. **Subtle Changes in Bank Details:**  
   - The provided bank account information is different from the actual vendor’s account records, making it harder to detect at a glance.

4. **Fraudulent Invoice Link:**  
   - The download link (\`https://secure.trustedvendorportal.com/invoice-45219\`) leads to a malicious site, potentially designed to harvest credentials or distribute malware.

5. **Fake Contact Information:**  
   - The phone number and email provided for support are not the vendor’s verified contact details.

6. **Use of Urgency:**  
   - The email pressures the recipient to act quickly to avoid disruption, bypassing standard verification protocols.

---

### Recommendations for Finance Employees:

1. **Verify Vendor Information:**  
   - Always confirm the sender’s email address and provided bank details with trusted records or through direct contact with the vendor.

2. **Inspect Links Before Clicking:**  
   - Hover over links to verify their destination. Use known vendor portals instead of clicking links in unsolicited emails.

3. **Be Wary of Unexpected Changes:**  
   - Treat any email requesting changes to payment methods, bank accounts, or invoices with suspicion.

4. **Cross-Check Payment Requests:**  
   - Confirm invoice details with the requesting department or vendor before processing payment.

5. **Report Suspicious Emails Immediately:**  
   - Notify the finance security team and escalate the email for investigation.

---

Prepared By: Finance Security Team  
Date: January 16, 2023
`,
  },
];
