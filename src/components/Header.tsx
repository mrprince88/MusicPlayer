import React from "react";
import { View, Text, Pressable } from "react-native";

type ModalHeaderProps = {
  title: string;
  left: React.ReactNode;
  right?: React.ReactNode;
  onLeftIconPress?: () => void;
  onRightIconPress?: () => void;
};

export default function Header({
  left,
  right,
  title,
  onRightIconPress,
  onLeftIconPress,
}: ModalHeaderProps) {
  return (
    <View className="container px-5 py-5 flex flex-row justify-between items-center">
      <Pressable onPress={onLeftIconPress}>{left}</Pressable>

      <View>
        <Text className="text-lg">{title}</Text>
      </View>

      <Pressable onPress={onRightIconPress}>{right}</Pressable>
    </View>
  );
}
