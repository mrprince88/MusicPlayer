import { createContext, useState, useContext } from "react";
import { Audio, AVPlaybackStatus } from "expo-av";

type AudioContextType = {
  playAudio: (uri: string) => Promise<void>;
  getCurrentStatus: () => Promise<AVPlaybackStatus>;
  pauseAudio: () => Promise<void>;
};

const AudioContext = createContext<AudioContextType | null>(null);

export function useAudioContext() {
  const context = useContext(AudioContext);
  if (!context) {
    throw new Error("useAudioContext must be used within an AudioProvider");
  }
  return context;
}

export default function AudioProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [audio] = useState(new Audio.Sound());
  // play audio
  const playAudio = async (uri: string) => {
    const status = await audio.getStatusAsync();
    if (status.isLoaded) {
      if (status.uri === uri) {
        await audio.playAsync();
      } else {
        await audio.unloadAsync();
        await audio.loadAsync({ uri }, { shouldPlay: true });
      }
    } else {
      await audio.loadAsync({ uri }, { shouldPlay: true });
    }
  };

  const pauseAudio = async () => {
    await audio.pauseAsync();
  };

  const getCurrentStatus = () => {
    return audio.getStatusAsync();
  };

  return (
    <AudioContext.Provider value={{ pauseAudio, playAudio, getCurrentStatus }}>
      {children}
    </AudioContext.Provider>
  );
}
