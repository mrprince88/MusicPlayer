import { useEffect } from "react";
import { ScrollView, View, Text, Pressable, Linking } from "react-native";
import MusicItem from "src/components/MusicItem";
import Footer from "src/components/Footer";
import { useAudioFiles } from "app/store/AudioFiles";

export default function App() {
  const audioFiles = useAudioFiles((state) => state.audioFiles);
  const permissionError = useAudioFiles((state) => state.permissionError);

  useEffect(() => {
    useAudioFiles.getState().fetchAudioFiles();
  }, []);

  if (permissionError) {
    return (
      <View className="flex-1 items-center justify-center p-5">
        <Text className="text-lg">
          You need to grant permission to access the audio files
        </Text>
        <Pressable
          className="mt-4 p-2 bg-blue-500 rounded-md"
          onPress={() => Linking.openSettings()}
        >
          <Text className="text-white font-bold">Open Settings</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <View className="flex-1 items-center justify-center">
      <ScrollView className="flex-1 w-full p-4 pb-20 bg-white">
        {audioFiles.map((file, index) => (
          <MusicItem key={index} data={file} />
        ))}
      </ScrollView>
      <Footer />
    </View>
  );
}
