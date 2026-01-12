import { Image, Text, TouchableOpacity, View } from "react-native"
import NoImage from "../../components/no-image"
import { NewsArticle } from "../../services/dto/news-response"
import getFontScale from "../../utils/get-font-scale"

interface IRenderItemNoticiaProps {
    seleccionarNoticia: (noticia: NewsArticle) => void
    item: NewsArticle
}


export const RenderItemNoticia = ({ item, seleccionarNoticia }: IRenderItemNoticiaProps) => {
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