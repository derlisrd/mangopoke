import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image, ActivityIndicator, TextInput } from "react-native";
import getFontScale from "../../utils/get-font-scale";
import { useNav } from "../../core/hooks/use-nav";
import SafeArea from "../../components/safe-area";
import { useQuery } from "@tanstack/react-query";
import { API } from "../../services/api";
import { NewsArticle } from "../../services/dto/news-response";
import ToolBarTitle from "../../components/toolbar-title";
import { useState } from "react";
import NoImage from "../../components/no-image";
import { useAppDispatch } from "../../store/hooks";
import { setSelectNoticia } from "../../store/noticia-slice";
import ChipPressable from "../../components/chip-pressable";


export default function HomeScreen() {

    const nav = useNav()
    const dispatch = useAppDispatch()
    const [category, setCategory] = useState<string>('')
    const [buscar, setBuscar] = useState<string>('')
    const { isLoading, data: noticias, refetch, isFetching } = useQuery({
        queryKey: ['todos-home', category],
        queryFn: async () => API.todos(category),
        staleTime: 1000 * 60 * 5,
        select(data) {
            return data.articles
        }
    })

    const buscarNoticias = () => {
        setCategory(buscar)
    }

    const seleccionarNoticia = (noticia: NewsArticle) => {
        dispatch(setSelectNoticia(noticia))
        nav.navigate('Noticia')
    }

    const renderItem = ({ item }: { item: NewsArticle }) => {
        return <TouchableOpacity
            style={{ padding: 16, borderBottomWidth: 1, borderBottomColor: '#eee', marginHorizontal: 16 }}
            onPress={() => seleccionarNoticia(item)}
        >
            <View style={{ flexDirection: 'row', gap: 12 }}>
                {
                    item.urlToImage ? <Image
                        source={{ uri: item.urlToImage }}
                        style={{ width: 48, height: 48, objectFit: 'cover', borderRadius: 12 }}
                    /> : <NoImage width={48} height={48} backgroundColor="#e0e0e0" />
                }
                <View style={{ flex: 1 }}>
                    <Text style={{ fontWeight: 'bold', fontSize: getFontScale(12) }}>
                        {item.title}
                    </Text>
                    <Text style={{ fontSize: getFontScale(10), color: '#666', marginTop: 4 }}>
                        {new Date(item.publishedAt).toLocaleDateString()}
                    </Text>
                </View>

            </View>
        </TouchableOpacity>
    }


    return <SafeArea>
        <View style={styles.container}>

            <ToolBarTitle title="CNN" />

            <View style={{
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
            {isLoading ? (
                <View style={styles.centerContainer}>
                    <ActivityIndicator size="large" color="#0000ff" />
                    <Text style={styles.loadingText}>Cargando noticias...</Text>
                </View>
            ) : < FlatList
                data={noticias}
                renderItem={renderItem}
                keyExtractor={(item, index) => `${index}`}
                showsVerticalScrollIndicator
                ListEmptyComponent={
                    <View>
                        <Text>
                            No se encontraron noticias
                        </Text>
                    </View>
                }
            />}
        </View>
    </SafeArea>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    text: {
        fontSize: getFontScale(16),
    },
    centerContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    listContent: {
        padding: 16,
    },
    searchContainer: {
        marginBottom: 16,
    },
    searchInput: {
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 12,
        fontSize: getFontScale(16),
        borderWidth: 1,
        borderColor: '#ddd',
    },
    noticiaCard: {
        backgroundColor: '#fff',
        borderRadius: 12,
        marginBottom: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
        overflow: 'hidden',
    },
    noticiaImagen: {
        width: '100%',
        height: 200,
        backgroundColor: '#e0e0e0',
    },
    sinImagen: {
        width: '100%',
        height: 200,
        backgroundColor: '#e0e0e0',
        alignItems: 'center',
        justifyContent: 'center',
    },
    placeholderText: {
        color: '#999',
        fontSize: getFontScale(14),
    },
    noticiaContenido: {
        padding: 16,
    },
    noticiaTitulo: {
        fontSize: getFontScale(17),
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 8,
    },
    newsSource: {
        fontSize: getFontScale(12),
        color: '#007AFF',
        fontWeight: '600',
        marginBottom: 8,
    },
    newsDescription: {
        fontSize: getFontScale(14),
        color: '#666',
        lineHeight: 20,
        marginBottom: 8,
    },
    newsDate: {
        fontSize: getFontScale(12),
        color: '#999',
    },
    loadingText: {
        marginTop: 12,
        fontSize: getFontScale(16),
        color: '#666',
    },
    errorText: {
        fontSize: getFontScale(16),
        color: '#FF3B30',
        textAlign: 'center',
        marginBottom: 16,
    },
    retryButton: {
        backgroundColor: '#007AFF',
        paddingHorizontal: 24,
        paddingVertical: 12,
        borderRadius: 8,
    },
    retryButtonText: {
        color: '#fff',
        fontSize: getFontScale(16),
        fontWeight: '600',
    },
    emptyContainer: {
        padding: 40,
        alignItems: 'center',
    },
    emptyText: {
        fontSize: getFontScale(16),
        color: '#999',
    },
});