import { Mail } from "lucide-react";
import Image from "next/image"; // Import Image from next/image

import { Avatar } from "@/components/global/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/global/ui/card";

interface TeamMember {
  name: string;
  position: string;
  description: string;
  avatarUrl: string;
  email: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Ivan Soltani",
    position: "Bokningsansvarig",
    description:
      "Ansvarar för alla bokningsärenden och säkerställer en smidig kundupplevelse.",
    avatarUrl:
      "https://utfs.io/a/yvegegpc2k/V1Gok5KrkEqoT5g8VzuycaLVAdZovQkRX20MSWl1xmr4bDKp",
    email: "bokning@stockholm.dj",
  },
  {
    name: "Elin Pukite",
    position: "Ordförande",
    description:
      "Leder styrelsens arbete, representerar och driver föreningen framåt.",
    avatarUrl:
      "https://utfs.io/a/yvegegpc2k/V1Gok5KrkEqoVHpGntKrkEqod4GfFw91XKhALY7WJalvVx2e",
    email: "ordf@stockholm.dj",
  },
  {
    name: "Olle Strand",
    position: "Ekonomiansvarig",
    description: "Hanterar och övervakar föreningens ekonomi.",
    avatarUrl:
      "https://utfs.io/a/yvegegpc2k/V1Gok5KrkEqoRglEBUyshcxUij3dzYSpob6BLaQGIFg0W2HN",
    email: "ekonomi@stockholm.dj",
  },
];

export default function Component() {
  return (
    <section className="px-8 lg:px-32 mb-16">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-center dark:text-white">
          Styrelsen
        </h2>
        <p className="text-sm text-muted-foreground mb-8 text-center">
          Vi som ansvarar för att leda föreningen
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              className="flex flex-col justify-center items-center text-center"
            >
              <CardHeader className="flex flex-col items-center justify-center">
                <Avatar className="w-24 h-24 mb-4 relative">
                  {" "}
                  {/* Make Avatar wrapper relative */}
                  {/* Replace AvatarImage with Image */}
                  <Image
                    src={member.avatarUrl}
                    alt={member.name}
                    className="w-full h-full object-cover" // Ensure the image covers the avatar container
                    width={96} // Set width and height to match Avatar size
                    height={96}
                    loading="lazy"
                  />
                  {/* <AvatarFallback>
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback> */}
                </Avatar>
                <CardTitle className="text-xl font-semibold">
                  {member.position}
                </CardTitle>
                <p className="text-sm text-muted-foreground">{member.name}</p>
                <a
                  href={`mailto:${member.email}`}
                  className="text-sm text-primary hover:underline mt-1 flex items-center"
                >
                  <Mail className="w-4 h-4 mr-1" />
                  {member.email}
                </a>
              </CardHeader>
              <CardContent>
                <p className="text-sm">{member.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
