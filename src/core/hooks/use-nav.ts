import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RouteStackListType } from "../types/routes-stack-list";

export const useNav = () => {
    const navigation = useNavigation<NavigationProp<RouteStackListType>>();
    return navigation;
}