import { TextInput, View } from "react-native";
import getFontScale from "../../utils/get-font-scale";
import ChipPressable from "../../components/chip-pressable";

interface IBusquedaBlockProps {
    buscar: string
    setBuscar: (value: string) => void
    buscarNoticias: () => void
}

export default function BusquedaBlock({ buscar, setBuscar, buscarNoticias }: IBusquedaBlockProps) {
    return <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 16,
        marginTop: 8,
        gap: 8
    }}>
        <TextInput
            style={{
                flex: 1,
                borderRadius: 8,
                borderWidth: 1,
                borderColor: '#ddd',
                padding: 12,
                fontSize: getFontScale(16),
                backgroundColor: '#fff'
            }}
            placeholder="Buscar noticias..."
            value={buscar}
            onChangeText={setBuscar}
        />

        <ChipPressable onPress={buscarNoticias}>
            Buscar
        </ChipPressable>
    </View>
}