"use client";
import dynamic from "next/dynamic";
import React, { useEffect, useRef, useCallback } from "react";

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
  const modelRef = useRef<HTMLElement>(null);

  const updateSceneVisibility = useCallback(() => {
    const model = modelRef.current;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    if (model && (model as any).scene) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      console.log("Model scene exists:", (model as any).scene);

      // Update speaker visibility.
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const speakerNode = (model as any).scene.getObjectByName("evolve50");
      console.log("Speaker node:", speakerNode);
      if (speakerNode) {
        speakerNode.visible = speaker.name !== "Ljud finns i lokalen";
        console.log("Speaker node visibility:", speakerNode.visible);
      }

      // Update DJ table visibility.
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const djTableNode = (model as any).scene.getObjectByName("dj_table");
      console.log("DJ table node:", djTableNode);
      if (djTableNode) {
        djTableNode.visible = djTable.name !== "Finns i lokalen";
        console.log("DJ table node visibility:", djTableNode.visible);
      }

      // Update uplighting visibility.
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const uplightingNode = (model as any).scene.getObjectByName("uplighting");
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

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    if ((model as any).hasLoaded) {
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