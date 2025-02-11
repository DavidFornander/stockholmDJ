"use client";
import React from "react";
import dynamic from "next/dynamic";

// Dynamically import ModelViewer to ensure it only loads on the client
const ModelViewer = dynamic(() => import("@/app/utils/ModelViewer"), {
  ssr: false,
});

export default function ThreeDPage() {
  return (
    <div style={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <ModelViewer
        src="/assets/models/untitled.glb"
        alt="Untitled 3D model"
        cameraControls
        shadowIntensity="1"
        touchAction="pan-y"
      />
    </div>
  );
}