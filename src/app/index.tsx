import { useEffect, useState } from "react";
import { ScrollView, View } from "react-native";
import * as MediaLibrary from "expo-media-library";
import MusicItem from "src/components/MusicItem";
import Footer from "src/components/Footer";

export default function App() {
  const [permissionResponse, requestPermission] = MediaLibrary.usePermissions();
  const [files, setFiles] = useState<MediaLibrary.Asset[] | null>(null);

  useEffect(() => {
    if (permissionResponse?.granted) {
      MediaLibrary.getAssetsAsync({ mediaType: "audio" }).then((assets) => {
        setFiles(assets.assets);
      });
    } else if (permissionResponse?.canAskAgain) {
      requestPermission();
    }
  }, [permissionResponse]);

  return (
    <View className="flex-1 items-center justify-center">
      <ScrollView className="flex-1 w-full p-4 pb-20 bg-white">
        {files?.map((file, index) => (
          <MusicItem key={index} data={file} />
        ))}
      </ScrollView>
      <Footer />
    </View>
  );
}
