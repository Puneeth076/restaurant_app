import CartScreen from "../views/screens/CartScreen";
import HomeScreen from "../views/screens/HomeScreen";

const navigation = [
  {
    id: 1,
    name: "HomeScreen",
    component: { HomeScreen },
    iconName: "home-filled",
  },
  {
    id: 2,
    name: "LocalMall",
    component: { HomeScreen },
    iconName: "local-mall",
  },
  {
    id: 3,
    name: "Search",
    component: { HomeScreen },
    iconName: "search",
  },
  {
    id: 4,
    name: "Favorite",
    component: { HomeScreen },
    iconName: "favorite",
  },
  {
    id: 5,
    name: "Cart",
    component: { CartScreen },
    iconName: "shopping-car",
  },
];

export default navigation;
