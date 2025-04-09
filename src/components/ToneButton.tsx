'use client';

import { useEffect, useState } from 'react';
import * as Tone from 'tone';

export const ToneButton = () => {
  const [started, setStarted] = useState(false);

  useEffect(() => {
    return () => {
      Tone.Transport.stop();
      Tone.Transport.cancel();
    };
  }, []);

  const handleStart = async () => {
    await Tone.start(); // Required for iOS / modern browsers
    setStarted(true);

    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease('C4', '8n');
  };

  return (
    <button
      className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
      onClick={handleStart}
      disabled={started}
    >
      {started ? 'Played!' : 'Play Sound'}
    </button>
  );
};
