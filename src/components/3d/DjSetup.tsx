"use client";
import React from "react";
import dynamic from "next/dynamic";

// Dynamically import ModelViewer to ensure it loads only on the client side
const ModelViewer = dynamic(() => import("@/components/3d/ModelViewer"), {
  ssr: false,
});

export default function DjSetup() {
  return (
    // <div
    //   style={{
    //     height: "40vh",
    //     display: "flex",
    //     justifyContent: "center",
    //     alignItems: "center",
    //   }}
    // >
      <ModelViewer
        src="/assets/models/ev50_table.glb"
        alt="Untitled 3D model for DJ Setup"
        cameraControls
        shadowIntensity="1"
        touchAction="pan-y"
      />
    // {/* </div> */}
  );
}