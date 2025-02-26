"use client";
import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { scamCases } from "@/data/scamCases";
import { pastGuidelines } from "@/data/pastGuidelines";
import dotenv from "dotenv";
dotenv.config();
import { FiArrowLeft, FiChevronDown, FiChevronUp } from "react-icons/fi";

// Define the departments
interface Department {
  name: string;
  description: string;
}

interface ScamCase {
  id: number;
  date: string;
  type: string;
  description: string;
}

interface PastGuidelinesProps {
  department: string;
  onBack: () => void;
}

const PastGuidelines: React.FC<PastGuidelinesProps> = ({
  department,
  onBack,
}) => {
  // Use `pastGuidelines` in PastGuidelines
  const departmentGuidelines = pastGuidelines.filter(
    (guide) => guide.department === department
  );
  const [expandedGuidelineId, setExpandedGuidelineId] = useState<number | null>(
    null
  );

  const toggleGuideline = (id: number) => {
    setExpandedGuidelineId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold mb-6">Past Guidelines</h1>
        <Button
          variant="outline"
          className="flex items-center gap-2"
          onClick={onBack}
        >
          <FiArrowLeft />
          Back
        </Button>
      </div>
      <div className="flex justify-end mt-6"></div>
      {departmentGuidelines.map((guideline) => (
        <div key={guideline.id} className="mb-4 border rounded shadow-sm">
          <div
            className="p-4 flex justify-between items-center cursor-pointer hover:bg-gray-200 transition"
            onClick={() => toggleGuideline(guideline.id)}
          >
            <div>
              <h2 className="text-lg font-semibold">{guideline.title}</h2>
              <p className="text-sm text-gray-500">Date: {guideline.date}</p>
            </div>
            {expandedGuidelineId === guideline.id ? (
              <FiChevronUp className="text-xl" />
            ) : (
              <FiChevronDown className="text-xl" />
            )}
          </div>

          {expandedGuidelineId === guideline.id && (
            <div className="p-4 bg-white">
              {/* Use the parseGuidelines function to render content */}
              {parseGuidelines(guideline.content)}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

const departments: Department[] = [
  {
    name: "IT",
    description:
      "Learn how to protect systems from vishing and smishing threats.",
  },
  {
    name: "HR",
    description:
      "Handle phishing attempts targeting employee records or recruitment.",
  },
  {
    name: "Sales",
    description: "Identify fake client communications and invoice scams.",
  },
  {
    name: "Finance",
    description: "Avoid fraudulent payment requests and phishing emails.",
  },
  {
    name: "Marketing",
    description: "Recognize fake partnership offers and social media phishing.",
  },
];

const parseGuidelines = (guidelines: string): JSX.Element[] => {
  const lines = guidelines.split("\n");
  const elements: JSX.Element[] = [];
  let currentList: string[] = [];
  let currentCodeBlock: string[] = [];
  let inCodeBlock = false;

  const flushList = (isOrdered: boolean) => {
    if (currentList.length > 0) {
      elements.push(
        isOrdered ? (
          <ol
            key={elements.length}
            className="list-decimal ml-6 break-words whitespace-pre-wrap"
          >
            {currentList.map((item, index) => (
              <li key={index}>{parseInlineFormatting(item)}</li>
            ))}
          </ol>
        ) : (
          <ul
            key={elements.length}
            className="list-disc ml-6 break-words whitespace-pre-wrap"
          >
            {currentList.map((item, index) => (
              <li key={index}>{parseInlineFormatting(item)}</li>
            ))}
          </ul>
        )
      );
      currentList = [];
    }
  };

  const flushCodeBlock = () => {
    if (currentCodeBlock.length > 0) {
      elements.push(
        <pre
          key={elements.length}
          className="bg-gray-100 p-4 rounded break-words whitespace-pre-wrap overflow-hidden"
        >
          {currentCodeBlock.join("\n")}
        </pre>
      );
      currentCodeBlock = [];
    }
  };

  const parseInlineFormatting = (text: string): JSX.Element => {
    const parts = text.split(/(\*\*.*?\*\*)/g); // Split by bold (**)
    return (
      <>
        {parts.map((part, index) =>
          part.startsWith("**") && part.endsWith("**") ? (
            <strong key={index}>{part.slice(2, -2)}</strong>
          ) : (
            part
          )
        )}
      </>
    );
  };

  lines.forEach((line, index) => {
    const trimmedLine = line.trim();

    if (trimmedLine.startsWith("```")) {
      if (inCodeBlock) {
        inCodeBlock = false;
        flushCodeBlock();
      } else {
        inCodeBlock = true;
      }
      return;
    }

    if (inCodeBlock) {
      currentCodeBlock.push(trimmedLine);
      return;
    }

    if (trimmedLine === "---") {
      flushList(false);
      elements.push(
        <hr key={elements.length} className="my-4 border-t border-gray-300" />
      );
    } else if (/^#{1,6}\s/.test(trimmedLine)) {
      flushList(false);
      const headingLevel = trimmedLine.match(/^#{1,6}/)?.[0].length || 1;
      elements.push(
        React.createElement(
          `h${headingLevel}`,
          {
            key: index,
            className: `font-bold mt-4 text-lg break-words whitespace-pre-wrap`,
          },
          parseInlineFormatting(trimmedLine.replace(/^#{1,6}\s*/, ""))
        )
      );
    } else if (/^\d+\.\s/.test(trimmedLine)) {
      currentList.push(trimmedLine.replace(/^\d+\.\s*/, ""));
    } else if (trimmedLine.startsWith("*")) {
      currentList.push(trimmedLine.replace(/^\*\s*/, ""));
    } else if (trimmedLine) {
      flushList(false);
      elements.push(
        <p key={index} className="mt-2 break-words whitespace-pre-wrap">
          {parseInlineFormatting(trimmedLine)}
        </p>
      );
    }
  });

  flushList(false);
  flushCodeBlock();

  return elements;
};

const callGeminiApi = async (prompt: string): Promise<string> => {
  const GEMINI_API_KEY = process.env.NEXT_PUBLIC_GEMINI_API_KEY; // Use environment variable for the API key
  const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`;
  console.log(GEMINI_API_KEY);

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [{ text: prompt }],
          },
        ],
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Error details:", errorData);
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }

    const data = await response.json();
    // Assuming you're expecting "candidates[0].content.parts[0].text"
    return (
      data.candidates[0]?.content.parts[0]?.text || "No response from API."
    );
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    throw error;
  }
};

// Mock history of scam cases
const mockScamCases: ScamCase[] = [
  {
    id: 1,
    date: "2023-01-15",
    type: "Attempt",
    description: "Phishing email pretending to be IT support.",
  },
  {
    id: 2,
    date: "2023-02-10",
    type: "Success",
    description:
      "Employee shared login credentials after a fake job offer email.",
  },
  {
    id: 3,
    date: "2023-03-05",
    type: "Mistake",
    description: "Unverified email link clicked by an HR representative.",
  },
  {
    id: 4,
    date: "2023-04-20",
    type: "Attempt",
    description: "Fake invoice sent to finance department.",
  },
  {
    id: 5,
    date: "2023-05-25",
    type: "Success",
    description:
      "Sensitive client information shared after social engineering attack.",
  },
];

// Prompt Page Component
interface PromptPageProps {
  department: string;
  onBack: () => void;
}

const PromptPage: React.FC<PromptPageProps> = ({ department, onBack }) => {
  const [filterText, setFilterText] = useState<string>("");
  const [customPrompt, setCustomPrompt] = useState<string>(""); // Custom prompt input
  const [selectedCase, setSelectedCase] = useState<number | null>(null);
  const [generatedGuide, setGeneratedGuide] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  // Filter scam cases based on department and search text
  const filteredScamCases = scamCases.filter(
    (scamCase) =>
      scamCase.department === department && // Filter by department
      (scamCase.type.toLowerCase().includes(filterText.toLowerCase()) ||
        scamCase.description.toLowerCase().includes(filterText.toLowerCase()) ||
        scamCase.date.includes(filterText))
  );

  const handleGenerateGuide = async () => {
    if (selectedCase === null) return;
    setIsGenerating(true);
    setGeneratedGuide(null);

    const selectedScamCase = mockScamCases.find(
      (scam) => scam.id === selectedCase
    );
    const prompt = `
      Generate a comprehensive guideline based on the following scam case details:

      1. **Scam Type**: ${selectedScamCase?.type}
      2. **Date of Incident**: ${selectedScamCase?.date}
      3. **Description**: ${selectedScamCase?.description}

      ### Instructions:
      - Include a detailed analysis of why this is a scam.
      - Provide specific recommendations for employees in the ${department} department to avoid similar scams in the future.
      - Ensure the output follows this structure:
        - **Case Summary**
        - **Why This is a Scam**
        - **Recommendations**

      Additional Context:
      ${customPrompt || "No additional context provided."}
    `;

    try {
      const apiResponse = await callGeminiApi(prompt);
      setGeneratedGuide(apiResponse);
    } catch (error) {
      console.error("Error fetching guide from Gemini API:", error);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">{department} Guidelines</h1>
        <Button
          variant="outline"
          className="flex items-center gap-2"
          onClick={onBack}
        >
          <FiArrowLeft />
          Back
        </Button>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Select a Scam Case</CardTitle>
          <CardDescription>
            Choose a past scam case to generate tailored guidelines for the{" "}
            <strong>{department}</strong> department.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <Input
              type="text"
              placeholder="Filter scam cases..."
              value={filterText}
              onChange={(e) => setFilterText(e.target.value)}
              className="mb-4"
            />
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Date</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead>Select</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredScamCases.map((scamCase) => (
                  <TableRow key={scamCase.id}>
                    <TableCell>{scamCase.date}</TableCell>
                    <TableCell>{scamCase.type}</TableCell>
                    <TableCell>{scamCase.description}</TableCell>
                    <TableCell>
                      <Button
                        variant={
                          selectedCase === scamCase.id ? "default" : "outline"
                        }
                        onClick={() => setSelectedCase(scamCase.id)}
                      >
                        {selectedCase === scamCase.id ? "Selected" : "Select"}
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <textarea
            placeholder="Include a custom prompt to guide the guideline generation..."
            value={customPrompt}
            onChange={(e) => setCustomPrompt(e.target.value)}
            className="w-full border p-2 rounded mb-4"
            rows={4}
          />

          <Button
            onClick={handleGenerateGuide}
            disabled={selectedCase === null || isGenerating}
          >
            {isGenerating ? "Generating..." : "Generate Guidelines"}
          </Button>
          {generatedGuide && (
            <div className="mt-4 p-4 border rounded bg-gray-50">
              <h3 className="text-lg font-semibold">Generated Guidelines</h3>
              {parseGuidelines(generatedGuide)}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

// Main App Component
const App: React.FC = () => {
  const [selectedDepartment, setSelectedDepartment] = useState<string | null>(
    null
  );
  const [selectedFeature, setSelectedFeature] = useState<string | null>(null);

  const HomePage = () => (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Employee Training</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {departments.map((department) => (
          <Card
            key={department.name}
            className="cursor-pointer hover:shadow-lg transition"
            onClick={() => setSelectedDepartment(department.name)}
          >
            <CardHeader>
              <CardTitle className="text-primary">{department.name}</CardTitle>
              <CardDescription>{department.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );

  const DepartmentOptions = () => (
    <div className="container mx-auto p-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
        <h2 className="text-2xl font-bold text-center mb-6">
          {selectedDepartment} Department
        </h2>
        <Button
          className="mt-6"
          variant="outline"
          onClick={() => {
            setSelectedDepartment(null);
            setSelectedFeature(null);
          }}
        >
          <FiArrowLeft />
          Back
        </Button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Card
          className="cursor-pointer hover:shadow-md transition"
          onClick={() => setSelectedFeature("viewPastGuidelines")}
        >
          <CardHeader>
            <CardTitle>View Past Guidelines</CardTitle>
            <CardDescription>
              Explore previously generated guidelines for this department.
            </CardDescription>
          </CardHeader>
        </Card>
        <Card
          className="cursor-pointer hover:shadow-md transition"
          onClick={() => setSelectedFeature("promptNewGuidebook")}
        >
          <CardHeader>
            <CardTitle>Prompt New Guidebook</CardTitle>
            <CardDescription>
              Generate a new guideline tailored to your department.
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {!selectedDepartment ? (
        <HomePage />
      ) : !selectedFeature ? (
        <DepartmentOptions />
      ) : selectedFeature === "viewPastGuidelines" ? (
        <PastGuidelines
          department={selectedDepartment}
          onBack={() => setSelectedFeature(null)}
        />
      ) : (
        <PromptPage
          department={selectedDepartment}
          onBack={() => setSelectedFeature(null)}
        />
      )}
    </div>
  );
};

export default App;
