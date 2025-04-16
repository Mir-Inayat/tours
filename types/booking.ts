export interface Booking {
  id: string;
  name: string;
  email: string;
  phone: string;
  from: string;
  to: string;
  date: string;
  passengers: string;
  vehicleType: string;
  message?: string;
  sourcePage: string; // Add this field
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  createdAt: string;
  updatedAt: string;
}