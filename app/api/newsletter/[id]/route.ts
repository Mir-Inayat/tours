import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { NewsletterSubscription } from '../route';

// Path to our JSON file
const dataFilePath = path.join(process.cwd(), 'data', 'newsletter.json');

// Read subscriptions from file
const getSubscriptions = (): NewsletterSubscription[] => {
  if (!fs.existsSync(dataFilePath)) {
    return [];
  }
  
  const fileContent = fs.readFileSync(dataFilePath, 'utf8');
  return JSON.parse(fileContent);
};

// Write subscriptions to file
const saveSubscriptions = (subscriptions: NewsletterSubscription[]) => {
  fs.writeFileSync(dataFilePath, JSON.stringify(subscriptions, null, 2), 'utf8');
};

// DELETE handler to remove a subscription
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    
    const subscriptions = getSubscriptions();
    const subscriptionIndex = subscriptions.findIndex(sub => sub.id === id);
    
    if (subscriptionIndex === -1) {
      return NextResponse.json(
        { error: 'Subscription not found' },
        { status: 404 }
      );
    }
    
    // Remove subscription
    const removedSubscription = subscriptions.splice(subscriptionIndex, 1)[0];
    
    // Save updated subscriptions
    saveSubscriptions(subscriptions);
    
    return NextResponse.json({
      message: 'Subscription removed successfully',
      subscription: removedSubscription
    });
  } catch (error) {
    console.error('Error removing subscription:', error);
    return NextResponse.json(
      { error: 'Failed to remove subscription' },
      { status: 500 }
    );
  }
}

// PATCH handler to update a subscription (activate/deactivate)
export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    const updates = await request.json();
    
    const subscriptions = getSubscriptions();
    const subscriptionIndex = subscriptions.findIndex(sub => sub.id === id);
    
    if (subscriptionIndex === -1) {
      return NextResponse.json(
        { error: 'Subscription not found' },
        { status: 404 }
      );
    }
    
    // Update subscription
    subscriptions[subscriptionIndex] = {
      ...subscriptions[subscriptionIndex],
      ...updates
    };
    
    // Save updated subscriptions
    saveSubscriptions(subscriptions);
    
    return NextResponse.json({
      message: 'Subscription updated successfully',
      subscription: subscriptions[subscriptionIndex]
    });
  } catch (error) {
    console.error('Error updating subscription:', error);
    return NextResponse.json(
      { error: 'Failed to update subscription' },
      { status: 500 }
    );
  }
}