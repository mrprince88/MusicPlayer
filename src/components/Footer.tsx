import { View, Text, Pressable } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import PlayerButton from "./PlayerButton";

export default function Footer() {
  const router = useRouter();
  return (
    <Pressable
      onPress={() => router.navigate("player")}
      className="flex flex-row items-center px-5 py-2 justify-between w-full"
    >
      <View className="flex flex-row items-center">
        <MaterialCommunityIcons name="music-circle" size={50} color="black" />
        <Text className="text-center">Song Name</Text>
      </View>
      <PlayerButton iconType="PLAY" />
    </Pressable>
  );
}
