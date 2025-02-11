declare namespace JSX {
  interface IntrinsicElements {
    "model-viewer": React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement
    > & {
      src: string;
      alt: string;
      poster?: string;
      "environment-image"?: string;
      "shadow-intensity"?: string | number;
      "camera-controls"?: boolean;
      "touch-action"?: string;
      ar?: boolean;
      "auto-rotate"?: boolean;
    };
  }
}