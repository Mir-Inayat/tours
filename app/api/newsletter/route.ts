import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';

// Define the data structure
export interface NewsletterSubscription {
  id: string;
  email: string;
  date: string;
  active: boolean;
}

// Path to our JSON file
const dataFilePath = path.join(process.cwd(), 'data', 'newsletter.json');

// Ensure the data directory exists
const ensureDataDirExists = () => {
  const dataDir = path.join(process.cwd(), 'data');
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }
};

// Read subscriptions from file
const getSubscriptions = (): NewsletterSubscription[] => {
  ensureDataDirExists();
  
  if (!fs.existsSync(dataFilePath)) {
    // If file doesn't exist, create it with empty array
    fs.writeFileSync(dataFilePath, JSON.stringify([], null, 2), 'utf8');
    return [];
  }
  
  const fileContent = fs.readFileSync(dataFilePath, 'utf8');
  return JSON.parse(fileContent);
};

// Write subscriptions to file
const saveSubscriptions = (subscriptions: NewsletterSubscription[]) => {
  ensureDataDirExists();
  fs.writeFileSync(dataFilePath, JSON.stringify(subscriptions, null, 2), 'utf8');
};

// GET handler to retrieve all subscriptions
export async function GET() {
  try {
    const subscriptions = getSubscriptions();
    return NextResponse.json(subscriptions);
  } catch (error) {
    console.error('Error fetching newsletter subscriptions:', error);
    return NextResponse.json(
      { error: 'Failed to fetch newsletter subscriptions' },
      { status: 500 }
    );
  }
}

// POST handler to add a new subscription
export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();
    
    // Validate email
    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }
    
    // Get existing subscriptions
    const subscriptions = getSubscriptions();
    
    // Check if email already exists
    const existingSubscription = subscriptions.find(
      sub => sub.email.toLowerCase() === email.toLowerCase()
    );
    
    if (existingSubscription) {
      if (existingSubscription.active) {
        return NextResponse.json(
          { message: 'Email already subscribed', subscription: existingSubscription },
          { status: 200 }
        );
      } else {
        // Reactivate the subscription
        existingSubscription.active = true;
        saveSubscriptions(subscriptions);
        
        return NextResponse.json(
          { message: 'Subscription reactivated', subscription: existingSubscription },
          { status: 200 }
        );
      }
    }
    
    // Add new subscription
    const newSubscription: NewsletterSubscription = {
      id: uuidv4(),
      email,
      date: new Date().toISOString(),
      active: true
    };
    
    subscriptions.unshift(newSubscription);
    
    // Save updated subscriptions
    saveSubscriptions(subscriptions);
    
    return NextResponse.json(
      { message: 'Successfully subscribed to newsletter', subscription: newSubscription },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error adding newsletter subscription:', error);
    return NextResponse.json(
      { error: 'Failed to subscribe to newsletter' },
      { status: 500 }
    );
  }
}