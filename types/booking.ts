export interface Booking {
    id: string;
    name: string;
    email?: string; // Make email optional with the ? symbol
    phone: string;
    from: string;
    to: string;
    date: string;
    passengers: string;
    vehicleType: string;
    message?: string;
    sourcePage?: string;
    status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
    createdAt: string;
    updatedAt: string;
}