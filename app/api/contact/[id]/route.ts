import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { ContactSubmission } from '../route';

// Path to our JSON file
const dataFilePath = path.join(process.cwd(), 'data', 'contactSubmissions.json');

// Read submissions from file
const getContactSubmissions = (): ContactSubmission[] => {
  if (!fs.existsSync(dataFilePath)) {
    return [];
  }
  
  const fileContent = fs.readFileSync(dataFilePath, 'utf8');
  return JSON.parse(fileContent);
};

// Write submissions to file
const saveContactSubmissions = (submissions: ContactSubmission[]) => {
  fs.writeFileSync(dataFilePath, JSON.stringify(submissions, null, 2), 'utf8');
};

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    // params is already resolved, we can use it directly
    const contactId = params.id;
    
    const submissions = getContactSubmissions();
    const submission = submissions.find(sub => sub.id === contactId);
    
    if (!submission) {
      return NextResponse.json(
        { error: 'Contact submission not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json(submission);
  } catch (error) {
    console.error('Error fetching contact submission:', error);
    return NextResponse.json(
      { error: 'Failed to fetch contact submission' },
      { status: 500 }
    );
  }
}

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    // params is already resolved, we can use it directly
    const contactId = params.id;
    const updates = await request.json();
    
    const submissions = getContactSubmissions();
    const submissionIndex = submissions.findIndex(sub => sub.id === contactId);
    
    if (submissionIndex === -1) {
      return NextResponse.json(
        { error: 'Contact submission not found' },
        { status: 404 }
      );
    }
    
    // Update submission
    submissions[submissionIndex] = {
      ...submissions[submissionIndex],
      ...updates
    };
    
    // Save updated submissions
    saveContactSubmissions(submissions);
    
    return NextResponse.json({
      message: 'Contact submission updated successfully',
      submission: submissions[submissionIndex]
    });
  } catch (error) {
    console.error('Error updating contact submission:', error);
    return NextResponse.json(
      { error: 'Failed to update contact submission' },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    // params is already resolved, we can use it directly
    const contactId = params.id;
    
    const submissions = getContactSubmissions();
    const submissionIndex = submissions.findIndex(sub => sub.id === contactId);
    
    if (submissionIndex === -1) {
      return NextResponse.json(
        { error: 'Contact submission not found' },
        { status: 404 }
      );
    }
    
    // Remove submission
    const removedSubmission = submissions.splice(submissionIndex, 1)[0];
    
    // Save updated submissions
    saveContactSubmissions(submissions);
    
    return NextResponse.json({
      message: 'Contact submission deleted successfully',
      submission: removedSubmission
    });
  } catch (error) {
    console.error('Error deleting contact submission:', error);
    return NextResponse.json(
      { error: 'Failed to delete contact submission' },
      { status: 500 }
    );
  }
}