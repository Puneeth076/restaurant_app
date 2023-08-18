import {
  View,
  Text,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import COLORS from "../../data/colors";
import { StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import categories from "../../data/categories";
import foods from "../../data/foods";

const { width } = Dimensions.get("screen");
const cardWidth = width / 2 - 20;

export default function HomeScreen() {
  const [selectedCategory, setSelectedCategory] = useState(0);

  const CategoryList = () => {
    return (
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={style.category}
      >
        {categories.map((data, index) => {
          return (
            <TouchableOpacity
              activeOpacity={0.8}
              key={data.id}
              onPress={() => setSelectedCategory(index)}
            >
              <View
                style={{
                  backgroundColor:
                    selectedCategory === index
                      ? COLORS.primary
                      : COLORS.secondary,
                  ...style.categoryBtn,
                  elevation: 5,
                }}
              >
                <Image
                  source={data.image}
                  style={{ ...style.image, resizeMode: "contain" }}
                />
                <Text
                  style={{
                    fontWeight: selectedCategory === index ? "bold" : "normal",
                    color:
                      selectedCategory === index
                        ? COLORS.white
                        : COLORS.primary,
                  }}
                >
                  {data.name}
                </Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    );
  };

  const Card = ({ food }: any) => {
    return (
      <View style={style.card}>
        <View
          style={{ justifyContent: "center", alignItems: "center", top: -30 }}
        >
          <Image source={food.image} style={style.imageONE} />
        </View>
        <View style={{ marginStart: 20, gap: 5 }}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>{food.name}</Text>
          <Text style={{ color: COLORS.grey }}>{food.ingredients}</Text>
          <Text style={{ fontWeight: "bold", fontSize: 20 }}>
            Rs.{food.price}
          </Text>
          <View>
            <Icon name="add" size={20} style={style.addToCart} />
          </View>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <View style={style.container}>
        <View>
          <Text style={{ fontSize: 20 }}>
            Hello,{" "}
            <Text style={{ fontWeight: "bold", fontSize: 25 }}>Puneeth</Text>
          </Text>
          <Text style={{ color: COLORS.grey, marginTop: 10 }}>
            What do you want today
          </Text>
        </View>
        <View>
          <Image
            style={style.image}
            source={require("../../assets/person.png")}
          />
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          marginHorizontal: 20,
          marginTop: 40,
          alignItems: "center",
        }}
      >
        <View style={style.inputContainer}>
          <Icon name="search" size={20} />
          <TextInput
            style={{ paddingStart: 15, fontSize: 15, color: COLORS.dark }}
            placeholder="search your food"
          />
        </View>
        <View
          style={{
            backgroundColor: COLORS.primary,
            marginStart: 10,
            padding: 10,
            borderRadius: 10,
          }}
        >
          <Icon name="tune" size={28} color={COLORS.white} />
        </View>
      </View>
      <View>
        <CategoryList />
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        numColumns={2}
        data={foods}
        renderItem={({ item }) => <Card food={item} />}
      />
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    marginTop: 50,
    marginHorizontal: 30,
    justifyContent: "space-between",
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 30,
  },
  inputContainer: {
    flex: 1,
    height: 50,
    borderRadius: 10,
    flexDirection: "row",
    backgroundColor: COLORS.light,

    paddingHorizontal: 20,
    alignItems: "center",
  },
  category: {
    paddingVertical: 30,
    alignItems: "center",
    paddingHorizontal: 20,
  },
  categoryBtn: {
    height: 45,
    width: 120,
    marginRight: 7,
    borderRadius: 30,
    alignItems: "center",
    paddingHorizontal: 5,
    flexDirection: "row",
  },
  card: {
    height: 220,
    width: cardWidth,
    marginHorizontal: 10,
    marginBottom: 20,
    marginTop: 50,
    borderRadius: 15,
    elevation: 13,
    backgroundColor: COLORS.white,
  },
  imageONE: {
    display: "flex",
    width: 100,
    height: 100,
    // borderWidth: 2,
    borderColor: COLORS.dark,
    padding: 20,
    objectFit: "contain",
    borderRadius: 50,
  },
  addToCart: {
    marginTop: -10,
    width: 30,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    padding: 5,
    marginStart: 120,
    backgroundColor: COLORS.primary,
  },
});
