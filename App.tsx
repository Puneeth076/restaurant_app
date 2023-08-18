import "react-native-gesture-handler";
import React from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import COLORS from "./src/data/colors";
import { createStackNavigator } from "@react-navigation/stack";
import OnBoardScreen from "./src/views/screens/OnBoardScreen";
import BottomNavigation from "./src/views/screens/BottomNavigation";
import DetailsScreen from "./src/views/screens/DetailsScreen";
import CartScreen from "./src/views/screens/CartScreen";

export const MyContext = React.createContext({});

const Stack = createStackNavigator();
export default function App() {
  const [cartItem, setCartItem] = React.useState([]);
  const values = { cartItem, setCartItem };

  return (
    <NavigationContainer>
      <MyContext.Provider value={values}>
        <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="BoardScreen" component={OnBoardScreen} />
          <Stack.Screen name="Home" component={BottomNavigation} />
          <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
          <Stack.Screen name="CartScreen" component={CartScreen} />
        </Stack.Navigator>
      </MyContext.Provider>
    </NavigationContainer>
  );
}
