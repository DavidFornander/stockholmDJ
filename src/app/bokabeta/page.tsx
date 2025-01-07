"use client";
import React from "react";
import { useState } from "react";

const StickyShowcase = () => {
  const [memory, setMemory] = useState("16GB unified memory");
  const [storage, setStorage] = useState("256GB SSD storage");
  const [ethernet, setEthernet] = useState("Gigabit Ethernet");
  const [microphone, setMicrophone] = useState("Nej, tack");
  const [lighting, setLighting] = useState("Nej, tack");
  const [customGraphics, setCustomGraphics] = useState("No, thanks");
  // New state variables for additional items
  const [uplighting, setUplighting] = useState("Nej, tack");
  const [strobe, setStrobe] = useState("Nej, tack");
  const [ljuspelare, setLjuspelare] = useState("Nej, tack");
  const [rokmaskin, setRokmaskin] = useState("Nej, tack");
  const [projektor, setProjektor] = useState("Nej, tack");
  const [photoBooth, setPhotoBooth] = useState("Nej, tack");
  const [saxofonist, setSaxofonist] = useState("Nej, tack");

  return (
    <div className="showcase-container">
      <div className="sticky-item">
        <img
          src="/assets/temp/Cool.png"
          alt="Mac mini"
          className="sticky-image"
        />
      </div>
      <div className="scrolling-content">
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
              {[
                "2x 15' toppar",
                "1x 18' sub & 2x 15' toppar + 2000kr",
                "2x 18' sub & 2x 15' toppar + 4000kr",
              ].map((option) => (
                <button
                  key={option}
                  onClick={() => setMemory(option)}
                  className={`block w-full text-left px-4 py-3 border rounded-lg ${
                    memory === option ? "border-blue-500" : "border-gray-300"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          {/* DJ Bord */}
          <div className="mt-6">
            <h3 className="text-lg font-medium text-gray-700">DJ Bord</h3>
            <p className="text-sm text-gray-500">
              Vilket DJ-bord är rätt för dig?
            </p>
            <div className="space-y-2 mt-3">
              {["Humpter Vit", "Humpter Svart"].map((option) => (
                <button
                  key={option}
                  onClick={() => setStorage(option)}
                  className={`block w-full text-left px-4 py-3 border rounded-lg ${
                    storage === option ? "border-blue-500" : "border-gray-300"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          {/* Spelare */}
          <div className="mt-6">
            <h3 className="text-lg font-medium text-gray-700">Spelare</h3>
            <p className="text-sm text-gray-500">
              Vilken spelare är rätt för dig?
            </p>
            <div className="space-y-2 mt-3">
              {["Digital", "Vinyl + 2000kr"].map((option) => (
                <button
                  key={option}
                  onClick={() => setEthernet(option)}
                  className={`block w-full text-left px-4 py-3 border rounded-lg ${
                    ethernet === option ? "border-blue-500" : "border-gray-300"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          {/* Mic */}
          <div className="mt-6">
            <h3 className="text-lg font-medium text-gray-700">Microfon</h3>
            <p className="text-sm text-gray-500">Behöver du microfon?</p>
            <div className="space-y-2 mt-3">
              {["Nej, tack", "Trådad + 500kr", "Trådlös + 1000kr"].map(
                (option) => (
                  <button
                    key={option}
                    onClick={() => setMicrophone(option)}
                    className={`block w-full text-left px-4 py-3 border rounded-lg ${
                      microphone === option
                        ? "border-blue-500"
                        : "border-gray-300"
                    }`}
                  >
                    {option}
                  </button>
                )
              )}
            </div>
          </div>

          {/* Mic */}
          <div className="mt-6">
            <h3 className="text-lg font-medium text-gray-700">Ljuspaket</h3>
            <p className="text-sm text-gray-500">Behöver du ljus?</p>
            <div className="space-y-2 mt-3">
              {["Nej, tack", "Trådad + 500kr", "Trådlös + 1000kr"].map(
                (option) => (
                  <button
                    key={option}
                    onClick={() => setLighting(option)}
                    className={`block w-full text-left px-4 py-3 border rounded-lg ${
                      lighting === option
                        ? "border-blue-500"
                        : "border-gray-300"
                    }`}
                  >
                    {option}
                  </button>
                )
              )}
            </div>
          </div>

          {/* Custom Graphics Section */}
          <div className="mt-6">
            <h3 className="text-lg font-medium text-gray-700">
              TV + Custom Graphics
            </h3>
            <div className="space-y-2 mt-3">
              {["Nej, tack", 
              "Ja, standard grafik + 500kr",
                "Ja, anpassad grafik + 500kr",
            ].map((option) => (
                <button
                  key={option}
                  onClick={() => setCustomGraphics(option)}
                  className={`block w-full text-left px-4 py-3 border rounded-lg ${
                    customGraphics === option ? "border-blue-500" : "border-gray-300"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>

            {/* Uplighting Section */}
            <div className="mt-6">
              <h3 className="text-lg font-medium text-gray-700">Uplighting</h3>
              <p className="text-sm text-gray-500">Vill du ha uplighting?</p>
              <div className="space-y-2 mt-3">
                {["Nej, tack", "Ja, tack + 1000kr"].map((option) => (
                  <button
                    key={option}
                    onClick={() => setUplighting(option)}
                    className={`block w-full text-left px-4 py-3 border rounded-lg ${
                      uplighting === option
                        ? "border-blue-500"
                        : "border-gray-300"
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>

            {/* Strobe Section */}
            <div className="mt-6">
              <h3 className="text-lg font-medium text-gray-700">Strobe</h3>
              <p className="text-sm text-gray-500">Vill du ha strobe?</p>
              <div className="space-y-2 mt-3">
                {["Nej, tack", "Ja, tack + 500kr"].map((option) => (
                  <button
                    key={option}
                    onClick={() => setStrobe(option)}
                    className={`block w-full text-left px-4 py-3 border rounded-lg ${
                      strobe === option ? "border-blue-500" : "border-gray-300"
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>

            {/* Ljuspelare Section */}
            <div className="mt-6">
              <h3 className="text-lg font-medium text-gray-700">Ljuspelare</h3>
              <p className="text-sm text-gray-500">Vill du ha ljuspelare?</p>
              <div className="space-y-2 mt-3">
                {["Nej, tack", "Ja, tack + 1500kr"].map((option) => (
                  <button
                    key={option}
                    onClick={() => setLjuspelare(option)}
                    className={`block w-full text-left px-4 py-3 border rounded-lg ${
                      ljuspelare === option
                        ? "border-blue-500"
                        : "border-gray-300"
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>

            {/* Rökmaskin Section */}
            <div className="mt-6">
              <h3 className="text-lg font-medium text-gray-700">Rökmaskin</h3>
              <p className="text-sm text-gray-500">Vill du ha rökmaskin?</p>
              <div className="space-y-2 mt-3">
                {["Nej, tack", "Ja, tack + 800kr"].map((option) => (
                  <button
                    key={option}
                    onClick={() => setRokmaskin(option)}
                    className={`block w-full text-left px-4 py-3 border rounded-lg ${
                      rokmaskin === option
                        ? "border-blue-500"
                        : "border-gray-300"
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>

            {/* Projektor Section */}
            <div className="mt-6">
              <h3 className="text-lg font-medium text-gray-700">Projektor</h3>
              <p className="text-sm text-gray-500">Vill du ha projektor?</p>
              <div className="space-y-2 mt-3">
                {["Nej, tack", "Ja, tack + 1200kr"].map((option) => (
                  <button
                    key={option}
                    onClick={() => setProjektor(option)}
                    className={`block w-full text-left px-4 py-3 border rounded-lg ${
                      projektor === option
                        ? "border-blue-500"
                        : "border-gray-300"
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>

            {/* Photo Booth Section */}
            <div className="mt-6">
              <h3 className="text-lg font-medium text-gray-700">Photo Booth</h3>
              <p className="text-sm text-gray-500">
                Vill du ha en photo booth?
              </p>
              <div className="space-y-2 mt-3">
                {["Nej, tack", "Ja, tack + 2000kr"].map((option) => (
                  <button
                    key={option}
                    onClick={() => setPhotoBooth(option)}
                    className={`block w-full text-left px-4 py-3 border rounded-lg ${
                      photoBooth === option
                        ? "border-blue-500"
                        : "border-gray-300"
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>

            {/* Saxofonist Section */}
            <div className="mt-6">
              <h3 className="text-lg font-medium text-gray-700">Saxofonist</h3>
              <p className="text-sm text-gray-500">Vill du ha en saxofonist?</p>
              <div className="space-y-2 mt-3">
                {["Nej, tack", "Ja, tack + 15000kr"].map((option) => (
                  <button
                    key={option}
                    onClick={() => setSaxofonist(option)}
                    className={`block w-full text-left px-4 py-3 border rounded-lg ${
                      saxofonist === option
                        ? "border-blue-500"
                        : "border-gray-300"
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Final Summary */}
          <div className="mt-6 text-center">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700">
              Finalize your configuration
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickyShowcase;
