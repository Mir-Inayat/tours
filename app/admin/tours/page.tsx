"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

// Mock data for tours
const initialTours = [
  { id: 1, name: "Delhi to Jaipur", price: "₹2,500", duration: "2 Days", status: "Active" },
  { id: 2, name: "Noida to Agra", price: "₹1,800", duration: "1 Day", status: "Active" },
  { id: 3, name: "Weekend Shimla Trip", price: "₹8,500", duration: "3 Days", status: "Active" },
  { id: 4, name: "Corporate Manali Retreat", price: "₹15,000", duration: "5 Days", status: "Inactive" },
  { id: 5, name: "Ghaziabad to Haridwar", price: "₹3,200", duration: "2 Days", status: "Active" },
];

export default function ToursPage() {
  const [tours, setTours] = useState(initialTours);
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  
  const [newTour, setNewTour] = useState({
    name: "",
    price: "",
    duration: "",
    description: "",
  });

  const handleAddTour = () => {
    const tour = {
      id: tours.length + 1,
      name: newTour.name,
      price: newTour.price,
      duration: newTour.duration,
      status: "Active",
    };
    
    setTours([...tours, tour]);
    setNewTour({ name: "", price: "", duration: "", description: "" });
    setIsAddDialogOpen(false);
  };

  const handleDeleteTour = (id: number) => {
    setTours(tours.filter(tour => tour.id !== id));
  };

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-3xl font-bold">Manage Tours</h1>
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-blue-500 hover:bg-blue-600">Add New Tour</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Tour</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div>
                <label className="mb-2 block text-sm font-medium">Tour Name</label>
                <Input 
                  value={newTour.name}
                  onChange={(e) => setNewTour({...newTour, name: e.target.value})}
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium">Price</label>
                <Input 
                  value={newTour.price}
                  onChange={(e) => setNewTour({...newTour, price: e.target.value})}
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium">Duration</label>
                <Input 
                  value={newTour.duration}
                  onChange={(e) => setNewTour({...newTour, duration: e.target.value})}
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium">Description</label>
                <Textarea 
                  value={newTour.description}
                  onChange={(e) => setNewTour({...newTour, description: e.target.value})}
                />
              </div>
            </div>
            <Button onClick={handleAddTour} className="bg-blue-500 hover:bg-blue-600">Add Tour</Button>
          </DialogContent>
        </Dialog>
      </div>
      
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Tour Name</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Duration</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tours.map((tour) => (
            <TableRow key={tour.id}>
              <TableCell>{tour.id}</TableCell>
              <TableCell>{tour.name}</TableCell>
              <TableCell>{tour.price}</TableCell>
              <TableCell>{tour.duration}</TableCell>
              <TableCell>
                <span className={`rounded-full px-2 py-1 text-xs ${
                  tour.status === "Active" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                }`}>
                  {tour.status}
                </span>
              </TableCell>
              <TableCell>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm">Edit</Button>
                  <Button 
                    variant="destructive" 
                    size="sm"
                    onClick={() => handleDeleteTour(tour.id)}
                  >
                    Delete
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}