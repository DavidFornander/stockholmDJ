"use client";

import React, { useRef, useEffect } from 'react';
import dynamic from 'next/dynamic';

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

interface Compact3DViewerProps {
  modelPath?: string;
  selectedGear?: {
    speakers?: { name: string; cost: number };
    djTable?: { name: string; cost: number };
    uplighting?: { name: string; cost: number };
  };
  className?: string;
}

const Compact3DViewer: React.FC<Compact3DViewerProps> = ({ 
  modelPath = '/assets/models/Humpter_b3_v3.glb',
  selectedGear,
  className = "" 
}) => {
  const modelRef = useRef<ModelViewerElement | null>(null);
  const [isLoading, setIsLoading] = React.useState(true);

  // Update the 3D scene based on selected gear
  useEffect(() => {
    if (!modelRef.current || !selectedGear) return;

    const modelElement = modelRef.current;
    
    // Wait for model to load
    const updateScene = () => {
      if (!modelElement.hasLoaded) return;

      setIsLoading(false);
      
      try {
        const threeModel = modelElement.model;
        
        // Update speaker visibility
        if (selectedGear.speakers) {
          const speakerMaterial = threeModel.getMaterialByName('SpeakerMaterial');
          if (speakerMaterial) {
            const isVisible = selectedGear.speakers.name !== 'Ljud finns i lokalen';
            speakerMaterial.setAlphaMode(isVisible ? 'OPAQUE' : 'BLEND');
            speakerMaterial.pbrMetallicRoughness.setBaseColorFactor(
              isVisible ? [1, 1, 1, 1] : [1, 1, 1, 0.1]
            );
          }
        }

        // Update DJ table visibility/color
        if (selectedGear.djTable) {
          const tableMaterial = threeModel.getMaterialByName('TableMaterial');
          if (tableMaterial) {
            const isVisible = selectedGear.djTable.name !== 'Finns i lokalen';
            if (isVisible) {
              const isWhite = selectedGear.djTable.name.includes('Vit');
              tableMaterial.pbrMetallicRoughness.setBaseColorFactor(
                isWhite ? [0.9, 0.9, 0.9, 1] : [0.1, 0.1, 0.1, 1]
              );
            } else {
              tableMaterial.setAlphaMode('BLEND');
              tableMaterial.pbrMetallicRoughness.setBaseColorFactor([1, 1, 1, 0.1]);
            }
          }
        }

        // Update uplighting
        if (selectedGear.uplighting) {
          const lightMaterial = threeModel.getMaterialByName('UplightingMaterial');
          if (lightMaterial) {
            const isVisible = selectedGear.uplighting.name === 'Ja, tack';
            lightMaterial.setAlphaMode(isVisible ? 'OPAQUE' : 'BLEND');
            lightMaterial.pbrMetallicRoughness.setBaseColorFactor(
              isVisible ? [0.3, 0.6, 1, 1] : [1, 1, 1, 0.1]
            );
          }
        }
      } catch (error) {
        console.warn('Failed to update 3D scene:', error);
      }
    };

    // Try updating immediately if loaded, otherwise wait for load event
    if (modelElement.hasLoaded) {
      updateScene();
    } else {
      modelElement.addEventListener('load', updateScene);
      return () => modelElement.removeEventListener('load', updateScene);
    }
  }, [selectedGear]);

  return (
    <div className={`relative bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden ${className}`}>
      <model-viewer
        ref={modelRef}
        src={modelPath}
        alt="DJ Equipment Setup"
        auto-rotate
        camera-controls
        disable-zoom
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: 'transparent'
        }}
        camera-orbit="0deg 75deg 4m"
        field-of-view="45deg"
        min-camera-orbit="auto auto 3m"
        max-camera-orbit="auto auto 6m"
        interaction-prompt="none"
      />
      
      {/* Loading indicator */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-700 rounded-lg">
          <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600"></div>
        </div>
      )}
    </div>
  );
};

export default Compact3DViewer;
