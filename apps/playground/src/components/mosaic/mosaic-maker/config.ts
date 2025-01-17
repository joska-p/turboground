import type { TileComponentNames } from "./tiles/tile";

const CSS_VARS = {
  width: "--tile-size",
  height: "--tile-size",
  gap: "--mosaicGap",
};

const MAX_RANDOM_PALETTES = 39;
const DEFAULT_TILE_SIZE = 64;
const DEFAULT_GAP_SIZE = 0;

const defaultTileSize = {
  [CSS_VARS.width]: `${DEFAULT_TILE_SIZE}px`,
  [CSS_VARS.height]: `${DEFAULT_TILE_SIZE}px`,
};

const defaultGapSize = {
  [CSS_VARS.gap]: `${DEFAULT_GAP_SIZE}px`,
};

const defaultRotations = {
  "--rotation-0": "0deg",
  "--rotation-1": "90deg",
  "--rotation-2": "180deg",
  "--rotation-3": "270deg",
};

const defaultPalette = {
  "--color-0": "#333333",
  "--color-1": "#555555",
  "--color-2": "#777777",
  "--color-3": "#999999",
  "--color-4": "#bbbbbb",
};

const defaultTileSet: TileComponentNames[] = [
  "CornerCircles",
  "Diamond",
  "MiddleCircle",
  "OppositeCircles",
  "Rainbow",
  "Square",
  "Triangles",
  "Cube",
];

const initialTileSize = defaultTileSize;
const initialGapSize = defaultGapSize;
const initialRotations = defaultRotations;
const initialPalette = defaultPalette;
const initialTileSet = defaultTileSet;

export {
  CSS_VARS,
  DEFAULT_GAP_SIZE,
  DEFAULT_TILE_SIZE,
  initialGapSize,
  initialPalette,
  initialRotations,
  initialTileSet,
  initialTileSize,
  MAX_RANDOM_PALETTES,
};
