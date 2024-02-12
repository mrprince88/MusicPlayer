import { Stack } from "expo-router";
import AudioProvider from "src/contexts/Audio";
import { SafeAreaProvider } from "react-native-safe-area-context";
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
        <Stack.Screen
          name="audio/[id]"
          options={{
            headerShown: false,
            animation: "slide_from_bottom",
          }}
        />
      </Stack>
    </AudioProvider>
  );
}
