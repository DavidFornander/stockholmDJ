"use client";
import React from "react";
import { useState } from "react";
import DjSetup from "@/components/shared/3d/DjSetup";


const StickyShowcase = () => {
  // Base price for your service or product
  const basePrice = 5000; // Adjust this value as needed

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

  // Define options for the additional items
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
  // Remove these unused state variables:
  // const [strobe, setStrobe] = useState(strobeOptions[0]);
  // const [ljuspelare, setLjuspelare] = useState(ljuspelareOptions[0]);
  // const [rokmaskin, setRokmaskin] = useState(rokmaskinOptions[0]);
  // const [projektor, setProjektor] = useState(projektorOptions[0]);
  // const [photoBooth, setPhotoBooth] = useState(photoBoothOptions[0]);
  // const [saxofonist, setSaxofonist] = useState(saxofonistOptions[0]);

  // Keep the needed options for calculation
  const strobe = strobeOptions[0];
  const ljuspelare = ljuspelareOptions[0];
  const rokmaskin = rokmaskinOptions[0];
  const projektor = projektorOptions[0];
  const photoBooth = photoBoothOptions[0];
  const saxofonist = saxofonistOptions[0];

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

  return (
    <div className="showcase-container flex flex-col md:flex-row min-h-screen">
      {/* Left Card */}
      <div className="md:w-1/3 w-full p-4">
        <div className="md:sticky top-4">
          <div className="card bg-white shadow-lg rounded-lg p-4 h-[400px] max-w-md mx-auto">
            <DjSetup
              speaker={speaker}
              djTable={djTable}
              uplighting={uplighting}
              // pass additional options as needed
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
              {speakerOptions.map((option) => {
                const costDifference = option.cost - speaker.cost;
                let displayCost = "";

                if (option.name === speaker.name) {
                  displayCost = ""; // Selected option
                } else if (costDifference > 0) {
                  displayCost = `+ ${costDifference} kr`;
                } else if (costDifference < 0) {
                  displayCost = `- ${Math.abs(costDifference)} kr`;
                  // Or use `- ${Math.abs(costDifference)} kr` if preferred
                }

                return (
                  <button
                    key={option.name}
                    onClick={() => setSpeaker(option)}
                    className={`block w-full text-left px-4 py-3 border rounded-lg ${
                      speaker.name === option.name
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
              })}
            </div>
          </div>

          {/* Repeat similar sections for DJ Table, Player, Microphone, etc. */}

          {/* DJ Table Section */}
          <div className="mt-6">
            <h3 className="text-lg font-medium text-gray-700">DJ Bord</h3>
            <p className="text-sm text-gray-500">
              Vilket DJ-bord är rätt för dig?
            </p>
            <div className="space-y-2 mt-3">
              {djTableOptions.map((option) => {
                const costDifference = option.cost - djTable.cost;
                let displayCost = "";

                if (option.name === djTable.name) {
                  displayCost = "";
                } else if (costDifference > 0) {
                  displayCost = `+ ${costDifference} kr`;
                } else if (costDifference < 0) {
                  displayCost = `- ${Math.abs(costDifference)} kr`;
                }

                return (
                  <button
                    key={option.name}
                    onClick={() => setDjTable(option)}
                    className={`block w-full text-left px-4 py-3 border rounded-lg ${
                      djTable.name === option.name
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
              })}
            </div>
          </div>

          {/* Player Section */}
          <div className="mt-6">
            <h3 className="text-lg font-medium text-gray-700">Spelare</h3>
            <p className="text-sm text-gray-500">
              Vilken spelare är rätt för dig?
            </p>
            <div className="space-y-2 mt-3">
              {playerOptions.map((option) => {
                const costDifference = option.cost - player.cost;
                let displayCost = "";

                if (option.name === player.name) {
                  displayCost = "";
                } else if (costDifference > 0) {
                  displayCost = `+ ${costDifference} kr`;
                } else if (costDifference < 0) {
                  displayCost = `- ${Math.abs(costDifference)} kr`;
                }

                return (
                  <button
                    key={option.name}
                    onClick={() => setPlayer(option)}
                    className={`block w-full text-left px-4 py-3 border rounded-lg ${
                      player.name === option.name
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
              })}
            </div>
          </div>

          {/* Microphone Section */}
          <div className="mt-6">
            <h3 className="text-lg font-medium text-gray-700">Mikrofon</h3>
            <p className="text-sm text-gray-500">Behöver du mikrofon?</p>
            <div className="space-y-2 mt-3">
              {microphoneOptions.map((option) => {
                const costDifference = option.cost - microphone.cost;
                let displayCost = "";

                if (option.name === microphone.name) {
                  displayCost = "";
                } else if (costDifference > 0) {
                  displayCost = `+ ${costDifference} kr`;
                } else if (costDifference < 0) {
                  displayCost = `- ${Math.abs(costDifference)} kr`;
                }

                return (
                  <button
                    key={option.name}
                    onClick={() => setMicrophone(option)}
                    className={`block w-full text-left px-4 py-3 border rounded-lg ${
                      microphone.name === option.name
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
              })}
            </div>
          </div>

          {/* Uplighting Section */}
          <div className="mt-6">
            <h3 className="text-lg font-medium text-gray-700">Uplighting</h3>
            <p className="text-sm text-gray-500">Vill du ha uplighting?</p>
            <div className="space-y-2 mt-3">
              {uplightingOptions.map((option) => {
                const costDifference = option.cost - uplighting.cost;
                let displayCost = "";

                if (option.name === uplighting.name) {
                  displayCost = "";
                } else if (costDifference > 0) {
                  displayCost = `+ ${costDifference} kr`;
                } else if (costDifference < 0) {
                  displayCost = `- ${Math.abs(costDifference)} kr`;
                }

                return (
                  <button
                    key={option.name}
                    onClick={() => setUplighting(option)}
                    className={`block w-full text-left px-4 py-3 border rounded-lg ${
                      uplighting.name === option.name
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
              })}
            </div>
          </div>

          {/* Continue with other sections: Strobe, Ljuspelare, Rökmaskin, etc. */}

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
          <span className="text-xl font-semibold">
            Totalpris: {totalCost} kr
          </span>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700">
            Finalisera din konfiguration
          </button>
        </div>
      </footer>
    </div>
  );
};

export default StickyShowcase;
