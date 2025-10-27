"use client";

import React, { useRef, useEffect } from 'react';

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
  const [hasError, setHasError] = React.useState(false);

  // Enhanced debugging for model loading
  useEffect(() => {
    console.log('Compact3DViewer mounted with modelPath:', modelPath);
    
    // Check if model-viewer is available (client-side only)
    if (typeof window !== 'undefined') {
      const checkModelViewer = () => {
        const isAvailable = !!window.customElements.get('model-viewer');
        console.log('Model-viewer element available:', isAvailable);
        
        if (!isAvailable) {
          console.warn('Model-viewer not yet registered, checking again in 1s...');
          setTimeout(checkModelViewer, 1000);
        }
      };
      
      checkModelViewer();
    }
  }, []);

  // Handle model loading state separately
  useEffect(() => {
    if (!modelRef.current) {
      console.log('Model ref not yet available');
      return;
    }

    const modelElement = modelRef.current;
    console.log('Setting up event listeners for model:', modelPath);
    
    const handleLoad = () => {
      console.log('3D Model loaded successfully:', modelPath);
      setIsLoading(false);
      setHasError(false);
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleError = (error: any) => {
      console.error('3D Model failed to load:', modelPath, error);
      setIsLoading(false);
      setHasError(true);
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleProgress = (event: any) => {
      console.log('Model loading progress:', event.detail?.totalProgress);
    };

    // Add timeout fallback
    const timeout = setTimeout(() => {
      if (isLoading) {
        console.warn('3D Model loading timeout for:', modelPath);
        setIsLoading(false);
        setHasError(true);
      }
    }, 10000); // 10 second timeout

    modelElement.addEventListener('load', handleLoad);
    modelElement.addEventListener('error', handleError);
    modelElement.addEventListener('progress', handleProgress);

    return () => {
      clearTimeout(timeout);
      modelElement.removeEventListener('load', handleLoad);
      modelElement.removeEventListener('error', handleError);
      modelElement.removeEventListener('progress', handleProgress);
    };
  }, [modelPath, isLoading]);

  // Update the 3D scene based on selected gear
  useEffect(() => {
    if (!modelRef.current || !selectedGear) return;

    const modelElement = modelRef.current;
    
    // Wait for model to load
    const updateScene = () => {
      if (!modelElement.hasLoaded) return;
      
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
        auto-rotate={false}
        camera-controls
        disable-zoom
        loading="eager"
        reveal="auto"
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
          <div className="text-center">
            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600 mx-auto mb-2"></div>
            <div className="text-xs text-gray-600 dark:text-gray-300">Loading 3D model...</div>
          </div>
        </div>
      )}
      
      {/* Error indicator */}
      {hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-700 rounded-lg">
          <div className="text-center text-gray-500 dark:text-gray-400">
            <div className="text-xs">3D model unavailable</div>
            <div className="text-xs mt-1 opacity-75">Check console for details</div>
          </div>
        </div>
      )}
      
      {/* Success indicator (temporary) */}
      {!isLoading && !hasError && (
        <div className="absolute top-1 right-1 bg-green-500 text-white text-xs px-1 py-0.5 rounded opacity-75">
          3D ✓
        </div>
      )}
    </div>
  );
};

export default Compact3DViewer;
