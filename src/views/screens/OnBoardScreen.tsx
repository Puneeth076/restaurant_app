import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import COLORS from "../../data/colors";
import Button from "../components/Button";

export default function OnBoardScreen({ navigation }: any) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <View style={{ height: 400 }}>
        <Image
          style={{
            width: "100%",
            resizeMode: "contain",
            top: -150,
          }}
          source={require("../../assets/onboardImage.png")}
        />
      </View>
      <View style={style.textContainer}>
        <View>
          <Text
            style={{ fontSize: 32, fontWeight: "bold", textAlign: "center" }}
          >
            Delicious Food
          </Text>
          <Text
            style={{
              marginTop: 20,
              fontSize: 18,
              textAlign: "center",
              color: COLORS.grey,
            }}
          >
            We help you to find best and delicious food in your place
          </Text>
        </View>
        <View style={style.indicatorContainer}>
          <View style={style.currentIndicator}></View>
          <View style={style.indicator}></View>
          <View style={style.indicator}></View>
        </View>
        <Button
          title="Get started"
          onPress={() => navigation.navigate("Home")}
        />
      </View>
    </SafeAreaView>
  );
}
const style = StyleSheet.create({
  textContainer: {
    flex: 1,
    paddingHorizontal: 30,
    justifyContent: "space-between",
    paddingBottom: 40,
  },
  indicatorContainer: {
    height: 50,
    flex: 1,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  currentIndicator: {
    height: 12,
    width: 30,
    borderRadius: 10,
    marginHorizontal: 5,
    backgroundColor: COLORS.primary,
  },
  indicator: {
    height: 12,
    width: 20,
    borderRadius: 10,
    marginHorizontal: 5,
    backgroundColor: COLORS.grey,
  },
});
