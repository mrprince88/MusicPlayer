import { Text, View } from "react-native";
import { Asset } from "expo-media-library";
import { useAudioContext } from "src/contexts/Audio";

import PlayIcon from "@expo/vector-icons/AntDesign";
import PauseIcon from "@expo/vector-icons/AntDesign";

export default function MusicItem({ data }: { data: Asset }) {
  const { playAudio, getCurrentStatus, currentPlaying, pauseAudio } =
    useAudioContext();

  return (
    <View className="p-2 border-b border-gray-200 rounded flex flex-row items-center gap-2">
      {currentPlaying === data.uri ? (
        <PauseIcon name="pause" size={24} color="black" onPress={pauseAudio} />
      ) : (
        <PlayIcon
          name="play"
          size={24}
          color="black"
          onPress={() => playAudio(data.uri)}
        />
      )}
      <View className="flex-1">
        <Text className="text-lg font-semibold">{data.filename}</Text>
        <Text className="text-gray-500">{data.duration}</Text>
      </View>
    </View>
  );
}
