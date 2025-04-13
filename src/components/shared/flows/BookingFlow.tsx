"use client";
import React, { useState, useRef, useCallback, useEffect } from "react";
import dynamic from "next/dynamic";

// Define an interface for the model viewer element
interface ModelViewerElement extends HTMLElement {
  model: {
    getMaterialByName: (name: string) => {
      setAlphaMode: (mode: string) => void;
      pbrMetallicRoughness: {
        baseColorFactor: number[];
        setBaseColorFactor: (color: number[]) => void;
      };
    } | null;
  };
  hasLoaded: boolean;
}

// Dynamically import ModelViewer to ensure client-only rendering.
const ModelViewer = dynamic(() => import("@/components/shared/3d/ModelViewer"), {
  ssr: false,
});

const BookingFlow: React.FC = () => {
  // Base price for your service or product
  const basePrice = 5000; // Adjust as needed

  // Options for each category with separate costs
  const speakerOptions = [
    { name: "Ljud finns i lokalen", cost: 0 },
    { name: "2x 15' toppar", cost: 1000 },
    { name: "2x 15' toppar + 1x 18' sub", cost: 2000 },
    { name: "2x 15' toppar + 2x 18' sub", cost: 4000 },
  ];

  const djTableOptions = [
    { name: "Finns i lokalen", cost: 0 },
    { name: "Humpter B3 (Svart)", cost: 2000 },
    { name: "Humpter B3 (Vit)", cost: 2500 },
  ];

  const playerOptions = [
    { name: "Digital", cost: 0 },
    { name: "Vinyl", cost: 2000 },
  ];

  const microphoneOptions = [
    { name: "Nej, tack", cost: 0 },
    { name: "Trådad", cost: 500 },
    { name: "Trådlös", cost: 1000 },
    { name: "Trådlös (2st)", cost: 1500 },
  ];

  // Options for additional items
  const uplightingOptions = [
    { name: "Nej, tack", cost: 0 },
    { name: "Ja, tack", cost: 1000 },
  ];

  const strobeOptions = [
    { name: "Nej, tack", cost: 0 },
    { name: "Ja, tack", cost: 500 },
  ];

  const ljuspelareOptions = [
    { name: "Nej, tack", cost: 0 },
    { name: "Ja, tack", cost: 1500 },
  ];

  const rokmaskinOptions = [
    { name: "Nej, tack", cost: 0 },
    { name: "Ja, tack", cost: 800 },
  ];

  const projektorOptions = [
    { name: "Nej, tack", cost: 0 },
    { name: "Ja, tack", cost: 1200 },
  ];

  const photoBoothOptions = [
    { name: "Nej, tack", cost: 0 },
    { name: "Ja, tack", cost: 2000 },
  ];

  const saxofonistOptions = [
    { name: "Nej, tack", cost: 0 },
    { name: "Ja, tack", cost: 3000 },
  ];

  // State variables for selected options
  const [speaker, setSpeaker] = useState(speakerOptions[0]);
  const [djTable, setDjTable] = useState(djTableOptions[0]);
  const [player, setPlayer] = useState(playerOptions[0]);
  const [microphone, setMicrophone] = useState(microphoneOptions[0]);
  const [uplighting, setUplighting] = useState(uplightingOptions[0]);
  const [strobe, setStrobe] = useState(strobeOptions[0]);
  const [ljuspelare, setLjuspelare] = useState(ljuspelareOptions[0]);
  const [rokmaskin, setRokmaskin] = useState(rokmaskinOptions[0]);
  const [projektor, setProjektor] = useState(projektorOptions[0]);
  const [photoBooth, setPhotoBooth] = useState(photoBoothOptions[0]);
  const [saxofonist, setSaxofonist] = useState(saxofonistOptions[0]);

  // Calculate total cost
  const totalCost =
    basePrice +
    speaker.cost +
    djTable.cost +
    player.cost +
    microphone.cost +
    uplighting.cost +
    strobe.cost +
    ljuspelare.cost +
    rokmaskin.cost +
    projektor.cost +
    photoBooth.cost +
    saxofonist.cost;

  // Inline DjSetup code:
  const modelRef = useRef<ModelViewerElement | null>(null);

  const updateSceneVisibility = useCallback(() => {
    console.log("Updating scene visibility...");
    console.log("Speaker option selected:", speaker.name);
    console.log("DJ Table option selected:", djTable.name);
    console.log("Uplighting option selected:", uplighting.name);
    const modelElement = modelRef.current;
    console.log("Model ref:", modelElement);

    // Access the underlying Three.js model via the model-viewer API.
    const threeModel = modelElement?.model;
    if (!threeModel) {
      console.log("Three.js model is not available yet.");
      return;
    }
    console.log("Three.js model available:", threeModel);
    console.log(threeModel);
    

    // Toggle speaker material opacity.
    const speakerMaterial = threeModel.getMaterialByName("evolve50");
    if (speakerMaterial) {
      speakerMaterial.setAlphaMode("BLEND");
      const pbr = speakerMaterial.pbrMetallicRoughness;
      const baseColor = [...pbr.baseColorFactor];
      baseColor[3] = speaker.name === "Ljud finns i lokalen" ? 0 : 1;
      pbr.setBaseColorFactor(baseColor);
      console.log("Updated speaker material opacity to:", baseColor[3]);
    } else {
      console.log("Speaker material 'evolve50' not found in model!");
    }

    // Toggle DJ table material opacity.
    const djTableMaterial = threeModel.getMaterialByName("dj_table");
    if (djTableMaterial) {
      djTableMaterial.setAlphaMode("BLEND");
      const pbr = djTableMaterial.pbrMetallicRoughness;
      const baseColor = [...pbr.baseColorFactor];
      baseColor[3] = djTable.name === "Finns i lokalen" ? 0 : 1;
      pbr.setBaseColorFactor(baseColor);
      console.log("Updated DJ table material opacity to:", baseColor[3]);
    } else {
      console.log("DJ table material 'dj_table' not found in model!");
    }

    // Toggle uplighting material opacity.
    const uplightingMaterial = threeModel.getMaterialByName("uplighting");
    if (uplightingMaterial) {
      uplightingMaterial.setAlphaMode("BLEND");
      const pbr = uplightingMaterial.pbrMetallicRoughness;
      const baseColor = [...pbr.baseColorFactor];
      baseColor[3] = uplighting.name === "Nej, tack" ? 0 : 1;
      pbr.setBaseColorFactor(baseColor);
      console.log("Updated uplighting material opacity to:", baseColor[3]);
    } else {
      console.log("Uplighting material 'uplighting' not found in model!");
    }
  }, [speaker, djTable, uplighting]);

  useEffect(() => {
    const modelElement = modelRef.current;
    if (!modelElement) return;

    const handleLoad = () => {
      console.log("Model loaded, updating scene visibility...");
      updateSceneVisibility();
    };

    // Check for the load event provided by model-viewer.
    if (modelElement.hasLoaded) {
      handleLoad();
    } else {
      modelElement.addEventListener("load", handleLoad);
    }

    return () => {
      modelElement.removeEventListener("load", handleLoad);
    };
  }, [updateSceneVisibility]);

  useEffect(() => {
    updateSceneVisibility();
  }, [speaker, djTable, uplighting, updateSceneVisibility]);

  // Helper function for option buttons to reduce repetition
  const renderOptionButtons = (
    options: { name: string; cost: number }[],
    selectedOption: { name: string; cost: number },
    setOption: React.Dispatch<
      React.SetStateAction<{ name: string; cost: number }>
    >
  ) => {
    return options.map((option) => {
      const costDifference = option.cost - selectedOption.cost;
      let displayCost = "";
      if (option.name === selectedOption.name) {
        displayCost = "";
      } else if (costDifference > 0) {
        displayCost = `+ ${costDifference} kr`;
      } else if (costDifference < 0) {
        displayCost = `- ${Math.abs(costDifference)} kr`;
      }
      return (
        <button
          key={option.name}
          onClick={() => setOption(option)}
          className={`block w-full text-left px-4 py-3 border rounded-lg ${
            selectedOption.name === option.name
              ? "border-blue-500"
              : "border-gray-300"
          }`}
        >
          <div className="flex justify-between">
            <span>{option.name}</span>
            <span>{displayCost}</span>
          </div>
        </button>
      );
    });
  };

  return (
    <div className="showcase-container flex flex-col md:flex-row min-h-screen">
      {/* Left Card (3D Model Viewer Inlined) */}
      <div className="md:w-1/3 w-full p-4">
        <div className="md:sticky top-4">
          <div className="card bg-white shadow-lg rounded-lg p-4 h-[400px] max-w-md mx-auto">
            <ModelViewer
              ref={modelRef}
              src="/assets/models/ev50_table.glb"
              alt="3D model for DJ Setup"
              cameraControls
              shadowIntensity="1"
              touchAction="pan-y"
            />
          </div>
        </div>
      </div>

      {/* Scrolling Content */}
      <div className="scrolling-content md:w-2/3 w-full p-4">
        {/* Right Form Section */}
        <div className="flex-1 mt-6 md:mt-0">
          <h2 className="text-2xl font-semibold text-gray-800">
            Välj din setup
          </h2>
          <p className="text-gray-500 mt-2">
            Här kan du välja din setup för ditt event
          </p>

          {/* Speaker Section */}
          <div className="mt-6">
            <h3 className="text-lg font-medium text-gray-700">Högtalare</h3>
            <p className="text-sm text-gray-500">
              Vilka högtalare är rätt för dig?
            </p>
            <div className="space-y-2 mt-3">
              {renderOptionButtons(speakerOptions, speaker, setSpeaker)}
            </div>
          </div>

          {/* DJ Table Section */}
          <div className="mt-6">
            <h3 className="text-lg font-medium text-gray-700">DJ Bord</h3>
            <p className="text-sm text-gray-500">
              Vilket DJ-bord är rätt för dig?
            </p>
            <div className="space-y-2 mt-3">
              {renderOptionButtons(djTableOptions, djTable, setDjTable)}
            </div>
          </div>
          
          {/* Player Section */}
          <div className="mt-6">
            <h3 className="text-lg font-medium text-gray-700">Spelare</h3>
            <p className="text-sm text-gray-500">
              Vilken typ av spelare önskas?
            </p>
            <div className="space-y-2 mt-3">
              {renderOptionButtons(playerOptions, player, setPlayer)}
            </div>
          </div>

          {/* Microphone Section */}
          <div className="mt-6">
            <h3 className="text-lg font-medium text-gray-700">Mikrofon</h3>
            <p className="text-sm text-gray-500">
              Behöver du mikrofon för ditt event?
            </p>
            <div className="space-y-2 mt-3">
              {renderOptionButtons(microphoneOptions, microphone, setMicrophone)}
            </div>
          </div>

          {/* Uplighting Section */}
          <div className="mt-6">
            <h3 className="text-lg font-medium text-gray-700">Uplighting</h3>
            <p className="text-sm text-gray-500">
              Vill du ha uplighting för ditt event?
            </p>
            <div className="space-y-2 mt-3">
              {renderOptionButtons(uplightingOptions, uplighting, setUplighting)}
            </div>
          </div>

          {/* Strobe Section */}
          <div className="mt-6">
            <h3 className="text-lg font-medium text-gray-700">Stroboskop</h3>
            <p className="text-sm text-gray-500">
              Vill du ha stroboskop för ditt event?
            </p>
            <div className="space-y-2 mt-3">
              {renderOptionButtons(strobeOptions, strobe, setStrobe)}
            </div>
          </div>

          {/* Ljuspelare Section */}
          <div className="mt-6">
            <h3 className="text-lg font-medium text-gray-700">Ljuspelare</h3>
            <p className="text-sm text-gray-500">
              Vill du ha ljuspelare för ditt event?
            </p>
            <div className="space-y-2 mt-3">
              {renderOptionButtons(ljuspelareOptions, ljuspelare, setLjuspelare)}
            </div>
          </div>

          {/* Rökmaskin Section */}
          <div className="mt-6">
            <h3 className="text-lg font-medium text-gray-700">Rökmaskin</h3>
            <p className="text-sm text-gray-500">
              Önskas rökmaskin till eventet?
            </p>
            <div className="space-y-2 mt-3">
              {renderOptionButtons(rokmaskinOptions, rokmaskin, setRokmaskin)}
            </div>
          </div>

          {/* Projektor Section */}
          <div className="mt-6">
            <h3 className="text-lg font-medium text-gray-700">Projektor</h3>
            <p className="text-sm text-gray-500">
              Vill du ha projektor för ditt event?
            </p>
            <div className="space-y-2 mt-3">
              {renderOptionButtons(projektorOptions, projektor, setProjektor)}
            </div>
          </div>

          {/* Photo Booth Section */}
          <div className="mt-6">
            <h3 className="text-lg font-medium text-gray-700">Photo Booth</h3>
            <p className="text-sm text-gray-500">
              Önskas photo booth för att föreviga minnena?
            </p>
            <div className="space-y-2 mt-3">
              {renderOptionButtons(photoBoothOptions, photoBooth, setPhotoBooth)}
            </div>
          </div>

          {/* Saxofonist Section */}
          <div className="mt-6">
            <h3 className="text-lg font-medium text-gray-700">Saxofonist</h3>
            <p className="text-sm text-gray-500">
              Vill du ha en saxofonist till ditt event?
            </p>
            <div className="space-y-2 mt-3">
              {renderOptionButtons(saxofonistOptions, saxofonist, setSaxofonist)}
            </div>
          </div>

          {/* Total Cost */}
          <div className="mt-6 text-center">
            <h3 className="text-xl font-semibold">Totalpris: {totalCost} kr</h3>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 mt-4">
              Finalisera din konfiguration
            </button>
          </div>
        </div>
      </div>

      {/* Floating Footer */}
      <footer className="fixed bottom-0 left-0 w-full bg-black border-t border-gray-200 z-50">
        <div className="max-w-screen-xl mx-auto px-4 py-4 flex justify-between items-center">
          <span className="text-xl font-semibold">Totalpris: {totalCost} kr</span>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700">
            Finalisera din konfiguration
          </button>
        </div>
      </footer>
    </div>
  );
};

export default BookingFlow;
