import DJDirectory from "@/components/pages/djs/DJDirectory";

export const metadata = {
  title: "Bläddra DJs | Stockholm.DJ",
  description: "Hitta och boka professionella DJs för ditt event i Stockholm. Välj bland våra erfarna DJs med olika specialiteter.",
};

export default function DJsPage() {
  return (
    <>
      <DJDirectory />
    </>
  );
}
