import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/MaterialIcons";
import COLORS from "../../data/colors";
import Button, { Secondarybutton } from "../components/Button";
import { MyContext } from "../../../App";

export default function DetailsScreen({ navigation, route }: any) {
  const item = route.params;
  const { cartItem, setCartItem }: any = React.useContext(MyContext);
  const addToCart = () => {
    alert("Added to cart");
    setCartItem({ ...cartItem, item });
    navigation.navigate("CartScreen");
  };

  return (
    <SafeAreaView style={{ backgroundColor: COLORS.white, flex: 1 }}>
      <View style={style.header}>
        <Icon name="arrow-back-ios" size={28} onPress={navigation.goBack} />
        <Text style={{ fontSize: 30, fontWeight: "bold" }}>Details</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            height: 280,
          }}
        >
          <Image source={item.image} style={{ width: 220, height: 220 }} />
        </View>
        <View style={style.details}>
          <View style={style.detailsHeader}>
            <Text style={{ color: COLORS.white, fontSize: 20 }}>
              {item.name}
            </Text>
            <View style={style.favorite}>
              <Icon
                name="favorite-outline"
                style={{ color: COLORS.primary }}
                size={25}
              />
            </View>
          </View>
          <Text
            style={{ color: COLORS.dark, fontSize: 30, fontWeight: "bold" }}
          >
            Rs.{item.price}
          </Text>
          <Text style={style.description}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries.
          </Text>
          <View style={{ marginTop: 40, marginBottom: 40 }}>
            <Secondarybutton title="Add to cart" onPress={addToCart} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  header: {
    marginTop: 20,
    marginStart: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  details: {
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 60,
    backgroundColor: COLORS.primary,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  detailsHeader: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  favorite: {
    height: 40,
    width: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.white,
    borderRadius: 30,
  },
  description: {
    marginTop: 20,
    lineHeight: 32,
    fontSize: 16,
    color: COLORS.white,
  },
});
