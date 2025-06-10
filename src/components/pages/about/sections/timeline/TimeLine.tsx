import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/global/ui/timeline";

export default function TimelineDemo() {
  const data = [
    {
    title: "Steg 1",
      content: (
        <div>
          <h2 className="text-3xl text-white font-bold mb-4"> Välj lokal </h2>
          <p className=" dark:text-neutral-200 text-base font-normal mb-8">
          Innan ni bokar en DJ är det viktigt att ni har en lokal att hålla festen i. Vi har spelat på många olika lokaler och kan självklart hjälpa er att hitta rätt.
          </p>
          <div>
            <Image
              src="/assets/guide/Lokal.jpeg"
              alt="Södra Teatern"
              title="Södra Teatern"
              width={500}
              height={300}
              priority
              className=" rounded-lg object-cover aspect-square w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Steg 2",
      content: (
        <div>
          <h2 className="text-3xl text-white font-bold mb-4">Gör en tidsplan</h2>
          <p className=" dark:text-neutral-200 text-base font-normal mb-8">
          Hur länge vill ni att DJn ska spela? Vi tycker själva att 4 timmar är en bra tid för en fest. 3 timmar kan kännas lite kort. 
          Speciellt ifall middagen drar över, vilket den ofta gör. Medan 5 timmar kan kännas lite väl långt ifall allt är i fas. 
          Men vi anpassar oss självklart efter era önskemål.
          </p>
          <div>
            <Image
              src="/assets/guide/Tidslinje.webp"
              alt="Södra Teatern"
              title="Södra Teatern"
              width={500}
              height={500}
              priority
              className=" rounded-lg object-cover aspect-square w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Steg 3",
      content: (
        <div>
          <h2 className="text-3xl text-white font-bold mb-4"> ...</h2>
          <p className=" dark:text-neutral-200 text-base font-normal mb-8">
            ... 
          </p>
          <div>
            <Image
              src="/assets/guide/Tidslinje.webp"
              alt="Fyre Festival"
              title="Fyre Festival"
              width={500}
              height={500}
              loading="lazy"
              className="grayscale rounded-lg object-cover aspect-square w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Steg 4",
      content: (
        <div>
          <h2 className="text-3xl text-white font-bold mb-4">
            ....
          </h2>
          <p className=" dark:text-neutral-200 text-base font-normal mb-8">
            ....
          </p>
          <div>
            <Image
              src="/assets/guide/Tidslinje.webp"
              alt="Steve Angello X Platoon"
              title="Steve Angello X Platoon"
              width={500}
              height={500}
              loading="lazy"
              className="grayscale rounded-lg object-cover aspect-square w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Steg 5",
      content: (
        <div>
          <h2 className="text-3xl text-white font-bold mb-4">
            ...
          </h2>
          <p className=" dark:text-neutral-200 text-base font-normal mb-8">
            ...
          </p>
          <div>
            <Image
              src="/assets/guide/Tidslinje.webp"
              alt="Café Opera DJ Challenge"
              title="Café Opera DJ Challenge"
              width={500}
              height={500}
              loading="lazy"
              className="grayscale rounded-lg object-cover aspect-square w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Steg 6",
      content: (
        <div>
          <h2 className="text-3xl text-white font-bold mb-4">...</h2>
          <p className=" dark:text-neutral-200 text-base font-normal mb-8">
            ...
          </p>
          <div>
            <Image
              src="/assets/guide/Tidslinje.webp"
              alt="Kravallen"
              title="Kravallen"
              width={500}
              height={500}
              loading="lazy"
              className="grayscale rounded-lg object-cover aspect-square w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    }
  ];
  return (
    <section className="px-8 lg:px-32 py-16 bg-white dark:bg-black">
      <div className="w-full justify-center flex">
        <Timeline data={data} />
      </div>
    </section>
  );
}
