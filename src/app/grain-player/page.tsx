'use client';

import { useEffect, useState } from 'react';
import * as Tone from 'tone';
import { Slider } from '@radix-ui/react-slider';

export default function GrainPlayerPage() {
  const [player, setPlayer] = useState<Tone.GrainPlayer | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const load = async () => {
      await Tone.start();

      const gp = new Tone.GrainPlayer({
        url: '/samples/test_freesound.wav',
        loop: true,
        grainSize: 0.2,
        overlap: 0.1,
        playbackRate: 1,
        detune: 0,
      }).toDestination();

      setPlayer(gp);
    };

    load();

    return () => {
      player?.stop();
      player?.dispose();
    };
  }, []);

  const togglePlayback = () => {
    if (!player) return;

    if (isPlaying) {
      player.stop();
      setIsPlaying(false);
    } else {
      player.start();
      setIsPlaying(true);
    }
  };

  const updateParam = (param: keyof Tone.GrainPlayer, value: number) => {
    if (player) {
      switch (param) {
        case 'grainSize':
          player.grainSize = value;
          break;
        case 'overlap':
          player.overlap = value;
          break;
        case 'playbackRate':
          player.playbackRate = value;
          break;
        case 'detune':
          player.detune = value;
          break;
        case 'loopStart':
          player.loopStart = value;
          break;
        case 'loopEnd':
          player.loopEnd = value;
          break;
      }
    }
  };

  return (
    <main className="p-8 space-y-6 text-white bg-black min-h-screen">
      <h1 className="text-2xl font-semibold mb-4">🎚️ Granular Synth (GrainPlayer)</h1>

      <button
        onClick={togglePlayback}
        className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600"
      >
        {isPlaying ? 'Stop' : 'Play'}
      </button>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <SliderControl label="Grain Size" min={0.01} max={1} step={0.01} onChange={(v) => updateParam('grainSize', v)} />
        <SliderControl label="Overlap" min={0} max={1} step={0.01} onChange={(v) => updateParam('overlap', v)} />
        <SliderControl label="Playback Rate" min={0.2} max={2} step={0.01} onChange={(v) => updateParam('playbackRate', v)} />
        <SliderControl label="Detune (cents)" min={-1200} max={1200} step={1} onChange={(v) => updateParam('detune', v)} />
        <SliderControl label="Loop Start" min={0} max={5} step={0.1} onChange={(v) => updateParam('loopStart', v)} />
        <SliderControl label="Loop End" min={0} max={5} step={0.1} onChange={(v) => updateParam('loopEnd', v)} />
      </div>
    </main>
  );
}



export function SliderControl({
  label,
  min,
  max,
  step,
  onChange,
}: {
  label: string;
  min: number;
  max: number;
  step: number;
  onChange: (val: number) => void;
}) {
  const [val, setVal] = useState((min + max) / 2);

  return (
    <div className="flex flex-col items-center">
      <span className="text-sm mb-1">{label}: {val.toFixed(2)}</span>
      <Slider
        className="relative flex items-center w-40 h-5 select-none touch-none"
        min={min}
        max={max}
        step={step}
        defaultValue={[val]}
        onValueChange={([v]) => {
          setVal(v);
          onChange(v);
        }}
      >
        <div className="bg-gray-600 h-1 w-full rounded-full" />
        <div className="absolute bg-blue-500 h-1 rounded-full" style={{ width: `${((val - min) / (max - min)) * 100}%` }} />
        <div
          className="absolute w-4 h-4 bg-white border border-blue-500 rounded-full shadow-md"
          style={{ left: `${((val - min) / (max - min)) * 100}%`, transform: 'translate(-50%, -50%)', top: '50%' }}
        />
      </Slider>
    </div>
  );
}

