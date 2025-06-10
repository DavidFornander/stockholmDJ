import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/global/ui/timeline";

export default function TimelineDemo() {
  const data = [
    {
    title: "Privatfester och bröllop",
      content: (
        <div>
          <h2 className="text-3xl text-white font-bold mb-4"> Mängder av privatfester </h2>
          <p className=" dark:text-neutral-200 text-base font-normal mb-8">
          Riddarhuset | Skeppsholmen | Sällskapet | Junibacken | Med fler...
          
          (100+ Privatfester och bröllop)
          </p>
          <div>
            <Image
              src="/assets/guide/Tidslinje.webp"
              alt="Södra Teatern"
              title="Södra Teatern"
              width={500}
              height={500}
              priority
              className="grayscale rounded-lg object-cover aspect-square w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Stureplan",
      content: (
        <div>
          <h2 className="text-3xl text-white font-bold mb-4">På Stureplan har vi levererat energifyllda DJ-set på några av Stockholms mest exklusiva klubbar.</h2>
          <p className=" dark:text-neutral-200 text-base font-normal mb-8">
          Atrium | Sturekompagniet | Hells | S1 | Berns
          </p>
          <div>
            <Image
              src="/assets/guide/Tidslinje.webp"
              alt="Södra Teatern"
              title="Södra Teatern"
              width={500}
              height={500}
              priority
              className="grayscale rounded-lg object-cover aspect-square w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Södra teatern",
      content: (
        <div>
          <h2 className="text-3xl text-white font-bold mb-4">Inte ett fan av Stureplan? Då kan jag glatt meddela att vi även spelat på många andra klubbar och barer</h2>
          <p className=" dark:text-neutral-200 text-base font-normal mb-8">
            Södra Teatern | Snaps | Patricia | Djurgårdsbron
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
      title: "Sammarbete med Steve Angello",
      content: (
        <div>
          <h2 className="text-3xl text-white font-bold mb-4">
            Platoon DJs X Steve Angello
          </h2>
          <p className=" dark:text-neutral-200 text-base font-normal mb-8">
            Vi var otroligt glada över att kunna avslöja vårt samarbete med den
            legendariska Steve Angello, medlem av den ikoniska Swedish House
            Mafia, och hans monumentala skivbolag, SIZE Records, som firade sitt
            20-årsjubileum i år
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
      title: "Nobelefterfesten 2023",
      content: (
        <div>
          <h2 className="text-3xl text-white font-bold mb-4">
            Café Opera DJ Challenge
          </h2>
          <p className=" dark:text-neutral-200 text-base font-normal mb-8">
            Platoon DJs tog hem 2:a platsen på Café Opera DJ Challenge 2017! Med
            en uppvisning av både teknik och kreativitet, imponerade vi på både
            juryn och publiken. Den här framgången är ett bevis på vårt hårda
            arbete och vår passion för musik. Tack till alla som stöttade oss—vi
            hade inte klarat det utan er!
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
      title: "Nobelefterfesten 2024",
      content: (
        <div>
          <h2 className="text-3xl text-white font-bold mb-4">Kravallen</h2>
          <p className=" dark:text-neutral-200 text-base font-normal mb-8">
            Platoon DJs debuterade för första gången på Kravallen på KTH! Med en
            energifylld setlist och en engagerad publik, blev kvällen snabbt en
            succé. Vi tog med oss våra unika beats och rytmer, och responsen
            från dansgolvet var inget mindre än elektrisk. Det här var en natt
            vi sent kommer att glömma, och vi hoppas att alla som var där kände
            samma magi!
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
