import { ActivityIndicator, Text, View, StyleSheet } from "react-native";
import getFontScale from "../../utils/get-font-scale";

export default function LoadingNoticias() {
    return <View style={styles.centerContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text style={styles.loadingText}>Cargando noticias...</Text>
    </View>
}


const styles = StyleSheet.create({
    centerContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    loadingText: {
        marginTop: 12,
        fontSize: getFontScale(16),
        color: '#666',
    },
});