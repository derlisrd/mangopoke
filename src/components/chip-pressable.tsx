import { ReactNode } from "react";
import { TouchableOpacity, Text } from "react-native";

export default function ChipPressable({ children, onPress }: { children: ReactNode, onPress: () => void }) {
    return <TouchableOpacity style={{ padding: 6, backgroundColor: '#fc9090ff', borderRadius: 12 }} onPress={onPress}>
        <Text style={{ color: '#fff' }}>{children}</Text>
    </TouchableOpacity>
}