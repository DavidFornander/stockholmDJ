// Metadata export (this will run on the server)
export const metadata = {
  title: "Stockholm.DJ | Launching Soon",
  description: "Vi lanserar snart vår nya DJ-tjänst för Stockholms musikscen.",
};

// Import the client component
import LaunchingSoonClient from "@/components/pages/launch/LaunchingSoonClient";

// Server component that renders the client component
export default function LaunchingSoonPage() {
  return <LaunchingSoonClient />;
}
