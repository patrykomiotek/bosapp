import { useViewport } from "@/hooks/useViewport";

export const Viewport = () => {
  const { x, y } = useViewport();

  return (
    <div>
      <p>
        X: {x}, Y: {y}
      </p>
    </div>
  );
};
