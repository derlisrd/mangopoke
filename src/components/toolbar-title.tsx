


import { View, StyleSheet, Pressable, Text } from "react-native";
import getFontScale from "../utils/get-font-scale";


interface ToolBackProps {
    onPress?: () => void;
    title?: string;
}

export default function ToolBarTitle({ onPress, title }: ToolBackProps) {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Pressable onPress={onPress} style={styles.iconButton}>
                    <Text style={styles.iconText}> {title}</Text>
                </Pressable>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: "100%",
        paddingVertical: 12,
        paddingHorizontal: 16,
        flexDirection: "column",
        alignItems: "center",
    },
    content: {
        maxWidth: 960,
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    iconButton: {
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 6,
        backgroundColor: 'red',
        padding: 8,
    },
    iconText: {
        color: 'white',
        fontSize: getFontScale(18),
        fontWeight: 'bold',
    },
    logo: {
        color: 'red',
        fontSize: getFontScale(18),
    },
});

