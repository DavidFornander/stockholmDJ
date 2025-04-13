"use client";
import React, { useEffect, useRef, forwardRef } from "react";

export interface ModelViewerProps extends React.HTMLAttributes<HTMLElement> {
  src: string;
  alt: string;
  poster?: string;
  environmentImage?: string;
  shadowIntensity?: string | number;
  cameraControls?: boolean;
  touchAction?: string;
  ar?: boolean;
  autoRotate?: boolean;
}

const ModelViewer = forwardRef<HTMLElement, ModelViewerProps>(
  (
    {
      src,
      alt,
      poster,
      environmentImage,
      shadowIntensity = "1",
      cameraControls = true,
      touchAction = "pan-y",
      ar = false,
      autoRotate = false,
      ...rest
    },
    ref
  ) => {
    const internalRef = useRef<HTMLElement>(null);

    useEffect(() => {
      if (typeof window !== "undefined") {
        // Check if the element is registered or already imported via a global flag.
        if (
          !window.customElements.get("model-viewer") &&
          !(window as any).__MODEL_VIEWER_IMPORTED__
        ) {
          import("@google/model-viewer").then(() => {
            (window as any).__MODEL_VIEWER_IMPORTED__ = true;
          });
        }
      }
    }, []);

    return (
      <model-viewer
        ref={ref || internalRef}
        src={src}
        alt={alt}
        poster={poster}
        environment-image={environmentImage}
        shadow-intensity={shadowIntensity}
        camera-controls={cameraControls}
        touch-action={touchAction}
        ar={ar}
        auto-rotate={autoRotate}
        style={{ width: "100%", height: "100%" }}
        {...rest}
      ></model-viewer>
    );
  }
);

ModelViewer.displayName = "ModelViewer";

export default ModelViewer;