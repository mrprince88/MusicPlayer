import { Text, Pressable } from "react-native";
import { AudioContext } from "../contexts/Audio";
import { useContext } from "react";
import { Asset } from "expo-media-library";

export default function MusicItem({ data }: { data: Asset }) {
  const audio = useContext(AudioContext);

  return (
    <Pressable
      className="p-2 border-b border-gray-200 rounded"
      onPress={async () => {
        await audio?.unloadAsync();
        await audio?.loadAsync({ uri: data.uri });
        await audio?.playAsync();
      }}
    >
      <Text className="text-lg font-semibold">{data.filename}</Text>
      <Text className="text-gray-500">{data.duration}</Text>
    </Pressable>
  );
}
