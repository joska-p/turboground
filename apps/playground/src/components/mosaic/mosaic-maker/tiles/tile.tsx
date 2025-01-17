import { CornerCircles } from "./corner-circles";
import { Cube } from "./cube";
import { Diamond } from "./diamond";
import { MiddleCircle } from "./middle-circle";
import { OppositeCircles } from "./opposite-circles";
import { Rainbow } from "./rainbow";
import { Square } from "./square";
import { Triangles } from "./triangles";
import { cn } from "@/lib/utils";

const tileComponents = {
  CornerCircles,
  Diamond,
  MiddleCircle,
  OppositeCircles,
  Rainbow,
  Square,
  Triangles,
  Cube,
};

export type TileComponentNames = keyof typeof tileComponents;

interface Props {
  name: TileComponentNames;
  colors: [string, string, string, string, string];
  rotation: string;
  className?: string;
}

function Tile({ name, colors, rotation, className }: Props) {
  if (colors.length < 5) {
    throw new Error("Tile component requires exactly 5 colors");
  }

  const Component = tileComponents[name];
  return (
    <Component
      colors={colors}
      rotation={rotation}
      className={cn(
        "relative h-[var(--tile-size)] w-[var(--tile-size)] overflow-hidden",
        className
      )}
    />
  );
}

export { Tile };
