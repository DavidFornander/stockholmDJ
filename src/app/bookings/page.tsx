import BookingManagement from "@/components/pages/bookings/BookingManagement";

export const metadata = {
  title: "Hantera Bokning | Stockholm.DJ",
  description: "Hantera dina DJ-bokningar, se kommande events och uppdatera booking-detaljer",
};

export default function BookingManagementPage() {
  return <BookingManagement />;
}
