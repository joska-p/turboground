import { Input } from "@repo/ui/input";
import { Label } from "@repo/ui/label";
import { Slider } from "@repo/ui/slider";
import { createRacamanSequence } from "./lib/sequence";
import { useRacamanContext } from "./racaman-context";

function Controls() {
  const { sequence, drawMode } = useRacamanContext();

  return (
    <form className="flex items-center justify-center gap-8 bg-background/90 py-4">
      <Slider.Label>
        Length: {sequence.value.length}
        <Slider.Input
          min={1}
          max={256}
          step={1}
          defaultValue={sequence.value.length}
          onChange={(event) => {
            sequence.value = createRacamanSequence(Number(event.target.value));
          }}
        />
      </Slider.Label>
      <Label>
        <Input
          type="radio"
          value="canvas-mode"
          checked={drawMode.value === "canvas-mode"}
          name="canvas-mode"
          onChange={(event) => {
            drawMode.value = event.target.value;
          }}
        />
        Canvas mode
      </Label>
      <Label>
        <Input
          type="radio"
          value="vector-mode"
          checked={drawMode.value === "vector-mode"}
          name="vectors-mode"
          onChange={(event) => {
            drawMode.value = event.target.value;
          }}
        />
        Vector mode
      </Label>
    </form>
  );
}

export { Controls };
