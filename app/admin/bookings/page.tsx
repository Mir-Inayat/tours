import { getBookings } from "@/lib/bookings";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { formatDate } from "@/lib/utils";
import { BookingActions } from "@/components/admin/booking-actions";
import { MapPin, CalendarIcon, Users } from "lucide-react";

export default async function BookingsPage() {
  const bookings = await getBookings();
  
  return (
    <div className="container mx-auto py-6">
      <h1 className="text-2xl font-bold mb-6">Bookings Management</h1>
      
      <div className="overflow-x-auto rounded-lg border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[80px]">ID</TableHead>
              <TableHead className="min-w-[120px]">Name</TableHead>
              <TableHead className="hidden sm:table-cell min-w-[180px]">Contact</TableHead>
              <TableHead className="hidden md:table-cell min-w-[200px]">Trip Details</TableHead>
              <TableHead className="hidden lg:table-cell min-w-[180px]">Date & Passengers</TableHead>
              <TableHead className="hidden xl:table-cell min-w-[150px]">Source</TableHead>
              <TableHead className="min-w-[100px]">Status</TableHead>
              <TableHead className="hidden md:table-cell min-w-[120px]">Created</TableHead>
              <TableHead className="w-[80px]">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {bookings.length === 0 ? (
              <TableRow>
                <TableCell colSpan={9} className="text-center py-8 text-gray-500">
                  No bookings found
                </TableCell>
              </TableRow>
            ) : (
              bookings.map((booking) => (
                <TableRow key={booking.id}>
                  <TableCell className="font-mono text-xs">{booking.id.slice(0, 8)}</TableCell>
                  <TableCell>{booking.name}</TableCell>
                  <TableCell className="hidden sm:table-cell">
                    <div className="truncate max-w-[180px]">{booking.email || "No email"}</div>
                    <div className="text-sm text-gray-500">{booking.phone}</div>
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1 text-gray-500 flex-shrink-0" />
                      <span className="truncate max-w-[150px]">{booking.from}</span>
                    </div>
                    <div className="flex items-center mt-1">
                      <MapPin className="h-4 w-4 mr-1 text-gray-500 flex-shrink-0" />
                      <span className="truncate max-w-[150px]">{booking.to}</span>
                    </div>
                  </TableCell>
                  <TableCell className="hidden lg:table-cell">
                    <div className="flex items-center">
                      <CalendarIcon className="h-4 w-4 mr-1 text-gray-500 flex-shrink-0" />
                      <span>{formatDate(booking.date)}</span>
                    </div>
                    <div className="flex items-center mt-1">
                      <Users className="h-4 w-4 mr-1 text-gray-500 flex-shrink-0" />
                      <span>{booking.passengers} passengers</span>
                    </div>
                  </TableCell>
                  <TableCell className="hidden xl:table-cell">
                    <Badge variant="outline" className="bg-gray-100">
                      {formatSourcePage(booking.sourcePage || "Unknown")}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <StatusBadge status={booking.status} />
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    {formatDate(booking.createdAt)}
                  </TableCell>
                  <TableCell>
                    <BookingActions booking={booking} />
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

// Helper function to format the source page path into something more readable
function formatSourcePage(path: string): string {
  if (!path) return "Unknown";
  
  // Remove leading slash
  let formattedPath = path.startsWith('/') ? path.substring(1) : path;
  
  // Handle root path
  if (formattedPath === '') return "Homepage";
  
  // Handle specific pages
  if (formattedPath.startsWith('blog/')) {
    const blogSlug = formattedPath.replace('blog/', '');
    return `Blog: ${blogSlug}`;
  }
  
  if (formattedPath.startsWith('service')) {
    const serviceName = formattedPath.replace('service', '');
    
    const serviceMap: Record<string, string> = {
      'bus': 'Bus Hire',
      'localtaxi': 'Local Taxi',
      'out': 'Outstation Taxi',
      'CorporateCab': 'Corporate Travel',
      'Tempo': 'Tempo Traveller',
      'SchoolCollege': 'School/College Transport',
      'cabForevents': 'Cab Services for Events'
    };
    
    return serviceMap[serviceName] || `Service: ${serviceName}`;
  }
  
  if (formattedPath.startsWith('fleet')) {
    const fleetName = formattedPath.replace('fleet', '');
    
    const fleetMap: Record<string, string> = {
      'ertiga': 'Maruti Suzuki Ertiga',
      'nova': 'Toyota Innova',
      'crysta': 'Toyota Innova Crysta',
      'swift': 'Maruti Suzuki Swift Dzire',
      'sumo': 'Tata Sumo Gold',
      'tempo': 'Force Tempo Traveller',
      'etios': 'Toyota Etios',
      'volvo': 'Volvo Buses'
    };
    
    return fleetMap[fleetName] || `Fleet: ${fleetName}`;
  }
  
  return formattedPath
    .split('/')
    .map(segment => 
      segment.charAt(0).toUpperCase() + segment.slice(1)
    )
    .join(' › ');
}

// Status badge component
function StatusBadge({ status }: { status: string }) {
  let color;
  switch (status) {
    case 'confirmed':
      color = 'bg-green-100 text-green-800';
      break;
    case 'completed':
      color = 'bg-blue-100 text-blue-800';
      break;
    case 'cancelled':
      color = 'bg-red-100 text-red-800';
      break;
    default:
      color = 'bg-yellow-100 text-yellow-800';
  }
  
  return (
    <Badge className={`${color} capitalize`}>
      {status}
    </Badge>
  );
}