"use client";
import React, { useEffect, useRef, useCallback } from "react";
import dynamic from "next/dynamic";

// Dynamically import ModelViewer to ensure it loads only on the client side
const ModelViewer = dynamic(() => import("@/components/shared/3d/ModelViewer"), {
  ssr: false,
});

interface DjSetupProps {
  speaker: { name: string; cost: number };
  djTable: { name: string; cost: number };
  uplighting: { name: string; cost: number };
  // add other options as needed
}

const DjSetup: React.FC<DjSetupProps> = ({ speaker, djTable, uplighting }) => {
  const modelRef = useRef<any>(null);

  const updateSceneVisibility = useCallback(() => {
    const model = modelRef.current;
    if (model && model.scene) {
      console.log("Model scene exists:", model.scene);

      // Update speaker visibility.
      const speakerNode = model.scene.getObjectByName("evolve50");
      console.log("Speaker node:", speakerNode);
      if (speakerNode) {
        speakerNode.visible = speaker.name !== "Ljud finns i lokalen";
        console.log("Speaker node visibility:", speakerNode.visible);
      }

      // Update DJ table visibility.
      const djTableNode = model.scene.getObjectByName("dj_table");
      console.log("DJ table node:", djTableNode);
      if (djTableNode) {
        djTableNode.visible = djTable.name !== "Finns i lokalen";
        console.log("DJ table node visibility:", djTableNode.visible);
      }

      // Update uplighting visibility.
      const uplightingNode = model.scene.getObjectByName("uplighting");
      console.log("Uplighting node:", uplightingNode);
      if (uplightingNode) {
        uplightingNode.visible = uplighting.name !== "Nej, tack";
        console.log("Uplighting node visibility:", uplightingNode.visible);
      }
    } else {
      console.log("Model or model.scene is not available yet.");
    }
  }, [speaker, djTable, uplighting]);

  // Listen to the model load event.
  useEffect(() => {
    const model = modelRef.current;
    if (!model) {
      console.log("Model ref is not set yet.");
      return;
    }

    const handleLoad = () => {
      console.log("Model loaded event triggered.");
      console.log("modelRef.current:", modelRef.current);
      updateSceneVisibility();
    };

    if (model.hasLoaded) {
      // If already loaded, call it immediately.
      handleLoad();
    } else {
      model.addEventListener("load", handleLoad);
    }

    return () => {
      model.removeEventListener("load", handleLoad);
    };
  }, [updateSceneVisibility]);

  // Also update the scene if options change after load.
  useEffect(() => {
    console.log("Options updated:", { speaker, djTable, uplighting });
    updateSceneVisibility();
  }, [speaker, djTable, uplighting, updateSceneVisibility]);

  useEffect(() => {
    console.log("Mounted modelRef:", modelRef.current);
  }, []);

  return (
    <ModelViewer
      ref={modelRef}
      src="/assets/models/ev50_table.glb"
      alt="Untitled 3D model for DJ Setup"
      cameraControls
      shadowIntensity="1"
      touchAction="pan-y"
    />
  );
};

export default DjSetup;