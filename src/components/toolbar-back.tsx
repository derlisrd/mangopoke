


import { View, StyleSheet, Pressable, Text } from "react-native";

import getFontScale from "../utils/get-font-scale";


interface ToolBackProps {
    onPress?: () => void;
}

export default function ToolBarBack({ onPress }: ToolBackProps) {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Pressable onPress={onPress} style={styles.iconButton}>
                    <Text style={styles.iconText}>{"<"}</Text>
                </Pressable>
                <Text style={styles.logo}>CNN</Text>
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
        width: 32,
        height: 32,
        borderRadius: 24,
        backgroundColor: 'red',
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

