import { View, Text, StyleSheet } from "react-native";
import getFontScale from "../../utils/get-font-scale";
import SafeArea from "../../components/safe-area";
import ToolBarBack from "../../components/toolbar-back";
import { useNav } from "../../core/hooks/use-nav";


export default function NoticiaScreen() {
    const nav = useNav()
    return <SafeArea>
        <ToolBarBack onPress={() => nav.goBack()} />
    </SafeArea>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: getFontScale(16),
    }
});