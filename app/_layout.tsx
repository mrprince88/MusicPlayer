import { Stack } from "expo-router";
import AudioProvider from "../contexts/Audio";

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
