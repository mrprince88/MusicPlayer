import { createContext } from "react";
import { Audio } from "expo-av";

export const AudioContext = createContext<Audio.Sound | null>(null);

export default function AudioProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  Audio.setAudioModeAsync({
    allowsRecordingIOS: false,
    staysActiveInBackground: true,
    playThroughEarpieceAndroid: false,
  });
  const audio = new Audio.Sound();
  return (
    <AudioContext.Provider value={audio}>{children}</AudioContext.Provider>
  );
}
