import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Linking } from "react-native";
import getFontScale from "../../utils/get-font-scale";
import SafeArea from "../../components/safe-area";
import ToolBarBack from "../../components/toolbar-back";
import { useNav } from "../../core/hooks/use-nav";

import { useAppSelector } from "../../store/hooks";


export default function NoticiaScreen() {
    const nav = useNav()
    const noticia = useAppSelector(state => state.noticiaSelect.selected)

    const abrirTodo = () => {
        if (noticia && noticia.url) {
            Linking.openURL(noticia.url);
        }
    };

    if (!noticia) {
        return <SafeArea>
            <ToolBarBack onPress={() => nav.goBack()} />
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontSize: getFontScale(16) }}>No hay noticia seleccionada</Text>
            </View>
        </SafeArea>
    }



    return <SafeArea>
        <ToolBarBack onPress={() => nav.goBack()} />
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            {noticia.urlToImage ? (
                <Image
                    source={{ uri: noticia.urlToImage }}
                    style={styles.headerImage}
                    resizeMode="cover"
                />
            ) : (
                <View style={styles.placeholderImage}>
                    <Text style={styles.placeholderText}>Sin imagen</Text>
                </View>
            )}

            <View style={styles.content}>
                <View style={styles.sourceContainer}>
                    <Text style={styles.sourceName}>{noticia.sourceName}</Text>
                    <Text style={styles.date}>
                        {new Date(noticia.publishedAt).toLocaleDateString('es-ES', {
                            day: 'numeric',
                            month: 'long',
                            year: 'numeric',
                            hour: '2-digit',
                            minute: '2-digit',
                        })}
                    </Text>
                </View>

                <Text style={styles.title}>{noticia.title}</Text>

                {noticia.descripcion && (
                    <Text style={styles.description}>{noticia.descripcion}</Text>
                )}

                <TouchableOpacity
                    style={styles.leerMasBoton}
                    onPress={abrirTodo}
                >
                    <Text style={styles.readMoreText}>Leer artículo completo</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    </SafeArea>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    headerImage: {
        width: '100%',
        height: 300,
        backgroundColor: '#e0e0e0',
    },
    placeholderImage: {
        width: '100%',
        height: 300,
        backgroundColor: '#e0e0e0',
        alignItems: 'center',
        justifyContent: 'center',
    },
    placeholderText: {
        color: '#999',
        fontSize: getFontScale(16),
    },
    content: {
        padding: 20,
    },
    sourceContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16,
    },
    sourceName: {
        fontSize: getFontScale(14),
        color: '#007AFF',
        fontWeight: '600',
    },
    date: {
        fontSize: getFontScale(12),
        color: '#999',
    },
    title: {
        fontSize: getFontScale(24),
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 16,
        lineHeight: 32,
    },
    description: {
        fontSize: getFontScale(16),
        color: '#666',
        lineHeight: 24,
        marginBottom: 24,
    },
    leerMasBoton: {
        backgroundColor: '#ff1900ff',
        paddingVertical: 16,
        paddingHorizontal: 24,
        borderRadius: 8,
        alignItems: 'center',
    },
    readMoreText: {
        color: '#fff',
        fontSize: getFontScale(16),
        fontWeight: '600',
    },
});