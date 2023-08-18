import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import COLORS from "../../data/colors";

type Props = {
  title: String;
  onPress?: () => {};
};

export default function Button({ title, onPress }: Props) {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <View style={style.btnContainer}>
        <Text style={style.text}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}

const style = StyleSheet.create({
  btnContainer: {
    backgroundColor: COLORS.primary,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    color: COLORS.white,
  },
});
