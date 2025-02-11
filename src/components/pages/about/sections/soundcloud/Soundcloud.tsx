"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";

// Dynamicly load this import
const ReactPlayer = dynamic(() => import("react-player/soundcloud"), {
  ssr: false,
});

export default function SoundcloudPlayer() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section className="mb-16 px-8 sm:px-6 lg:px-8 py-12 w-full">
      <div className="mx-auto max-w-3xl container">
        <Link href="https://soundcloud.com/platoon-djs" passHref>
          <h2 className="mb-4 font-bold text-3xl text-center sm:text-4xl group">
            {/* Hover effect on text */}
            <span className="group-hover:text-platoon-orange transition-colors duration-300">
              Soundcloud
            </span>
          </h2>
        </Link>

        <p className="mb-8 text-center text-muted-foreground text-sm">
          Våra mixar och mashups
        </p>
        <div className="bg-white shadow-lg shadow-muted-foreground mb-8 p-1 rounded-lg">
          <div className="rounded-md aspect-w-16 aspect-h-9 h-[150px] overflow-hidden">
            {isClient ? (
              <ReactPlayer
                url="https://soundcloud.com/platoon-djs/tp1-mixen-2024-platoon-djs"
                width="100%"
                height="100%"
              />
            ) : (
              <Skeleton className="rounded-md w-full h-full" />
            )}
          </div>
        </div>
        <div className="bg-white shadow-lg shadow-muted-foreground mb-8 p-1 rounded-lg">
          <div className="rounded-md aspect-w-16 aspect-h-9 h-[150px] overflow-hidden">
            {isClient ? (
              <ReactPlayer
                url="https://soundcloud.com/platoon-djs/valborgsmixen-2024-platoon-djs"
                width="100%"
                height="100%"
              />
            ) : (
              <Skeleton className="rounded-md w-full h-full" />
            )}
          </div>
        </div>
        <div className="bg-white shadow-lg shadow-muted-foreground p-1 rounded-lg">
          <div className="rounded-md aspect-w-16 aspect-h-9 h-[150px] overflow-hidden">
            {isClient ? (
              <ReactPlayer
                url="https://soundcloud.com/platoon-djs/one-x-samma-gamla-vanliga-x-hall-om-mig-platoon-djs-mashup"
                width="100%"
                height="100%"
              />
            ) : (
              <Skeleton className="rounded-md w-full h-full" />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
