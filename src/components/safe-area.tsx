
import { ReactNode } from "react";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface SafeAreaProps {
    children?: ReactNode;
    bgColor?: string;
}

function SafeArea({ children, bgColor }: SafeAreaProps) {
    const { top, bottom } = useSafeAreaInsets();
    return (
        <View style={{ flex: 1 }}>
            <View style={{ height: top, backgroundColor: bgColor ?? "white" }} />
            <View style={{ flex: 1, backgroundColor: bgColor ?? "white" }}>{children}</View>
            <View style={{ height: bottom, backgroundColor: bgColor ?? "white" }} />
        </View>
    );
}



export default SafeArea;