import React from "react";
import { AntDesign } from "@expo/vector-icons";

const getIconName = (type: "PLAY" | "PAUSE" | "NEXT" | "PREV") => {
  switch (type) {
    case "PLAY":
      return "pausecircle";
    case "PAUSE":
      return "playcircleo";
    case "NEXT":
      return "forward";
    case "PREV":
      return "banckward";
  }
};

const PlayerButton = (props: any) => {
  const { iconType, size = 40, onPress } = props;

  return (
    <AntDesign
      {...props}
      onPress={onPress}
      name={getIconName(iconType)}
      size={size}
    />
  );
};

export default PlayerButton;
