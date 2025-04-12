import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

// Define the data structure
interface FormSubmission {
  id: string;
  type: 'contact' | 'booking' | 'quote';
  name: string;
  email: string;
  phone: string;
  message: string;
  service?: string;
  fromDate?: string;
  toDate?: string;
  date: string;
  status: 'new' | 'processed';
}

// Path to our JSON file
const dataFilePath = path.join(process.cwd(), 'data', 'submissions.json');

// Ensure the data directory exists
const ensureDataDirExists = () => {
  const dataDir = path.join(process.cwd(), 'data');
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }
};

// Read submissions from file
const getSubmissions = (): FormSubmission[] => {
  ensureDataDirExists();
  
  if (!fs.existsSync(dataFilePath)) {
    // If file doesn't exist, create it with empty array
    fs.writeFileSync(dataFilePath, JSON.stringify([], null, 2), 'utf8');
    return [];
  }
  
  const fileContent = fs.readFileSync(dataFilePath, 'utf8');
  return JSON.parse(fileContent);
};

// Write submissions to file
const saveSubmissions = (submissions: FormSubmission[]) => {
  ensureDataDirExists();
  fs.writeFileSync(dataFilePath, JSON.stringify(submissions, null, 2), 'utf8');
};

// GET handler to retrieve all submissions
export async function GET() {
  try {
    const submissions = getSubmissions();
    return NextResponse.json(submissions);
  } catch (error) {
    console.error('Error fetching submissions:', error);
    return NextResponse.json(
      { error: 'Failed to fetch submissions' },
      { status: 500 }
    );
  }
}

// POST handler to add a new submission
export async function POST(request: NextRequest) {
  try {
    const submission = await request.json();
    
    // Validate submission data
    if (!submission.name || !submission.email || !submission.message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }
    
    // Add timestamp and ID
    const newSubmission: FormSubmission = {
      ...submission,
      id: Date.now().toString(),
      date: new Date().toISOString(),
      status: 'new'
    };
    
    // Get existing submissions
    const submissions = getSubmissions();
    
    // Add new submission
    submissions.unshift(newSubmission);
    
    // Save updated submissions
    saveSubmissions(submissions);
    
    return NextResponse.json(
      { message: 'Submission added successfully', submission: newSubmission },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error adding submission:', error);
    return NextResponse.json(
      { error: 'Failed to add submission' },
      { status: 500 }
    );
  }
}

// PATCH handler to update a submission
export async function PATCH(request: NextRequest) {
  try {
    const { id, status } = await request.json();
    
    if (!id || !status) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }
    
    // Get existing submissions
    const submissions = getSubmissions();
    
    // Find and update the submission
    const submissionIndex = submissions.findIndex(sub => sub.id === id);
    
    if (submissionIndex === -1) {
      return NextResponse.json(
        { error: 'Submission not found' },
        { status: 404 }
      );
    }
    
    submissions[submissionIndex].status = status;
    
    // Save updated submissions
    saveSubmissions(submissions);
    
    return NextResponse.json(
      { message: 'Submission updated successfully', submission: submissions[submissionIndex] }
    );
  } catch (error) {
    console.error('Error updating submission:', error);
    return NextResponse.json(
      { error: 'Failed to update submission' },
      { status: 500 }
    );
  }
}