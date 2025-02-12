"use client";
import React, { useEffect, useRef } from "react";

interface ModelViewerProps extends React.HTMLAttributes<HTMLElement> {
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

export default function ModelViewer({
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
}: ModelViewerProps) {
  const modelViewerRef = useRef<HTMLElement>(null);

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
      ref={modelViewerRef}
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