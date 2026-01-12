import { Text, View } from "react-native";
import getFontScale from "../../utils/get-font-scale";

export default function NoticiasVacias() {
    return <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: getFontScale(14) }}>
            No se encontraron noticias
        </Text>
    </View>
}

