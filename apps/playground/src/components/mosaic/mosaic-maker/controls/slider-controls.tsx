import { useSignal } from "@preact/signals-react";
import { Slider } from "@repo/ui/slider";
import { useMosaicMakerContext } from "../mosaic-context";

interface Props {
  label: string;
  defaultValue: number;
  cssVar: string;
  min: number;
  max: number;
  step: number;
}

function SliderControls({ label, defaultValue, cssVar, min, max, step }: Props) {
  const { mosaicRef } = useMosaicMakerContext();
  const slideValue = useSignal(defaultValue);

  const handleSetValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!mosaicRef.current) return;
    const value = Number(event.target.value);
    slideValue.value = value;
    mosaicRef.current.style.setProperty(cssVar, `${value}px`);
  };

  return (
    <Slider.Label>
      {label}: {slideValue.value}px
      <Slider.Input
        min={min}
        max={max}
        step={step}
        value={slideValue.value}
        onChange={handleSetValue}
      />
    </Slider.Label>
  );
}

export { SliderControls };
