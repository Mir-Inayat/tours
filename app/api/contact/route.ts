import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

// Define the data structure
export interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  service?: string;
  fromDate?: string;
  toDate?: string;
  date: string;
  status: 'new' | 'read' | 'replied' | 'archived';
}

// Path to our JSON file
const dataFilePath = path.join(process.cwd(), 'data', 'contactSubmissions.json');

// Ensure the data directory exists
const ensureDataDirExists = () => {
  const dataDir = path.join(process.cwd(), 'data');
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }
};

// Read submissions from file
const getContactSubmissions = (): ContactSubmission[] => {
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
const saveContactSubmissions = (submissions: ContactSubmission[]) => {
  ensureDataDirExists();
  fs.writeFileSync(dataFilePath, JSON.stringify(submissions, null, 2), 'utf8');
};

// GET handler to retrieve all submissions
export async function GET() {
  try {
    const submissions = getContactSubmissions();
    return NextResponse.json(submissions);
  } catch (error) {
    console.error('Error fetching contact submissions:', error);
    return NextResponse.json(
      { error: 'Failed to fetch contact submissions' },
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
    const newSubmission: ContactSubmission = {
      ...submission,
      id: Date.now().toString(),
      date: new Date().toISOString(),
      status: 'new'
    };
    
    // Get existing submissions
    const submissions = getContactSubmissions();
    
    // Add new submission
    submissions.unshift(newSubmission);
    
    // Save updated submissions
    saveContactSubmissions(submissions);
    
    return NextResponse.json(
      { message: 'Contact form submitted successfully', submission: newSubmission },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error adding contact submission:', error);
    return NextResponse.json(
      { error: 'Failed to submit contact form' },
      { status: 500 }
    );
  }
}