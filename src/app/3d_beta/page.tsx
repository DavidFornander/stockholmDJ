"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";

interface ModelData {
  name: string;
  path: string;
  visible: boolean;
}

// Dynamically import ModelViewer so that it only renders on the client
const ModelViewer = dynamic(
  () => import("@/components/shared/3d/ModelViewer"),
  { ssr: false }
);

export default function AllModelsPage() {
  // Update the list with your actual project models:
  const initialModels: ModelData[] = [
    { name: "DJ Setup", path: "/assets/models/untitled.glb", visible: false },
    { name: "Speaker Basic", path: "/assets/models/Tree1.glb", visible: true },
    { name: "Speaker with Sub", path: "/assets/models/Humpter_b3_v3.glb", visible: true },
    { name: "Speaker with Sub2", path: "/assets/models/Speakers2Finished.glb", visible: true },
    { name: "Speaker with Sub3", path: "/assets/models/ev50_table.glb", visible: true },


    // Add more models as needed...
  ];

  const [models, setModels] = useState<ModelData[]>(initialModels);

  const toggleModelVisibility = (modelName: string) => {
    setModels((prev) =>
      prev.map((model) =>
        model.name === modelName
          ? { ...model, visible: !model.visible }
          : model
      )
    );
  };

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      {/* Sidebar Chart */}
      <aside
        style={{
          width: "25%",
          padding: "1rem",
          background: "#f0f0f0",
          overflowY: "auto",
        }}
      >
        <h2>3D Model Chart</h2>
        {models.map((model) => (
          <div key={model.name} style={{ marginBottom: "0.5rem" }}>
            <label>
              <input
                type="checkbox"
                checked={model.visible}
                onChange={() => toggleModelVisibility(model.name)}
                style={{ marginRight: "0.5rem" }}
              />
              {model.name}
            </label>
          </div>
        ))}
      </aside>

      {/* Models Display */}
      <main
        style={{
          width: "75%",
          padding: "1rem",
          overflowY: "auto",
          background: "#fff",
        }}
      >
        {models
          .filter((model) => model.visible)
          .map((model) => (
            <div key={model.name} style={{ marginBottom: "2rem" }}>
              <h3 style={{ marginBottom: "0.5rem" }}>{model.name}</h3>
              <div style={{ width: "100%", height: "400px" }}>
                <ModelViewer
                  src={model.path}
                  alt={model.name}
                  cameraControls
                  shadowIntensity="1"
                  touchAction="pan-y"
                />
              </div>
            </div>
          ))}
      </main>
    </div>
  );
}