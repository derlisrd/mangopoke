import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RouteStackListType } from "../core/types/routes-stack-list";
import { createStaticNavigation } from "@react-navigation/native";


import HomeScreen from "./home";
import NoticiaScreen from "./noticia";
import BusquedaScreen from "./busqueda";


const RootStack = createNativeStackNavigator<RouteStackListType>({
    initialRouteName: 'Home',
    screenOptions: {
        headerShown: false,
    },
    screens: {
        Home: HomeScreen,
        Noticia: NoticiaScreen,
        Busqueda: BusquedaScreen,
    },
});

const RouteMainScreens = createStaticNavigation(RootStack);
export default RouteMainScreens;