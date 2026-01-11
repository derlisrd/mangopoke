import { View } from "react-native";
import ChipPressable from "../../components/chip-pressable";
import { categories } from "../../config/constants";

export default function CategoriesList() {
    return <View style={{ flexDirection: 'row', justifyContent: 'space-around', margin: 8, gap: 8, flexWrap: 'wrap' }}>
        {
            categories.map((el, i) => (
                <ChipPressable key={i} onPress={() => { }}>{el.label}</ChipPressable>
            ))
        }
    </View>
}