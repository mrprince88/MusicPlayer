import { SafeAreaView } from "react-native-safe-area-context";
import { View } from "react-native";
import { MaterialCommunityIcons, Entypo, AntDesign } from "@expo/vector-icons";
import Slider from "@react-native-community/slider";
import Header from "src/components/Header";
import { useRouter } from "expo-router";
import PlayerButton from "app/components/PlayerButton";

export default function AudioItem() {
  const router = useRouter();

  return (
    <SafeAreaView className="flex items-center">
      <Header
        left={<Entypo name="chevron-down" size={30} />}
        onLeftIconPress={() => router.back()}
        title="Hello"
        right={<AntDesign name="ellipsis1" size={30} />}
      />
      <MaterialCommunityIcons
        name="music-circle"
        size={300}
        style={{ marginVertical: 100 }}
      />

      <Slider style={{ width: "100%" }} />
      <View className="flex flex-row w-full justify-between p-10">
        <PlayerButton iconType="PREV" />
        <PlayerButton iconType="PLAY" />
        <PlayerButton iconType="NEXT" />
      </View>
    </SafeAreaView>
  );
}
