import { create } from "zustand";
import { Alert } from "react-native";
import * as MediaLibrary from "expo-media-library";

type AudioFilesState = {
  audioFiles: MediaLibrary.Asset[];
  permissionError: boolean;
  fetchAudioFiles: () => Promise<void>;
};

export const useAudioFiles = create<AudioFilesState>((set) => ({
  audioFiles: [],
  permissionError: false,
  fetchAudioFiles: async () => {
    const permissionResponse = await MediaLibrary.getPermissionsAsync();

    if (!permissionResponse.granted && !permissionResponse.canAskAgain) {
      set({ permissionError: true });
    } else if (permissionResponse.granted) {
      const assets = await MediaLibrary.getAssetsAsync({ mediaType: "audio" });
      set({ audioFiles: assets.assets, permissionError: false });
    } else if (permissionResponse.canAskAgain) {
      const permissionResponse = await MediaLibrary.requestPermissionsAsync();

      if (permissionResponse.granted) {
        const assets = await MediaLibrary.getAssetsAsync({
          mediaType: "audio",
        });
        set({ audioFiles: assets.assets, permissionError: false });
      } else {
        set({ permissionError: true });
      }
    }
  },
}));
