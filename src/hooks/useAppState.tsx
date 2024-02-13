import { AppState, AppStateStatus } from "react-native";
import { useEffect } from "react";

export default function useAppState(callback: (state: AppStateStatus) => void) {
  useEffect(() => {
    const subscription = AppState.addEventListener("change", callback);
    return () => {
      subscription.remove();
    };
  }, [callback]);
}
