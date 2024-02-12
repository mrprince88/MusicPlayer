import { Stack } from "expo-router";
import AudioProvider from "src/contexts/Audio";
import "src/styles/global.css";

export default function layout() {
  return (
    <AudioProvider>
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            headerTitle: "Music Player",
          }}
        />
      </Stack>
    </AudioProvider>
  );
}
