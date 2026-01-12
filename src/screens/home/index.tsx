import { View, StyleSheet, FlatList } from "react-native";
import { useNav } from "../../core/hooks/use-nav";
import SafeArea from "../../components/safe-area";
import { useQuery } from "@tanstack/react-query";
import { API } from "../../services/api";
import { NewsArticle } from "../../services/dto/news-response";
import ToolBarTitle from "../../components/toolbar-title";
import { useState } from "react";

import { useAppDispatch } from "../../store/hooks";
import { setSelectNoticia } from "../../store/noticia-slice";
import { RenderItemNoticia } from "../../core/components/render-item-noticias";
import BusquedaBlock from "../../core/components/busqueda-block";
import LoadingNoticias from "../../core/components/loading-noticias";
import NoticiasVacias from "../../core/components/noticias-vacias";


export default function HomeScreen() {

    const nav = useNav()
    const dispatch = useAppDispatch()

    const [busca, setBusca] = useState<string>('')
    const [buscar, setBuscar] = useState<string>('')

    const { isLoading, data: noticias } = useQuery({
        queryKey: ['todos-home', busca],
        queryFn: async () => API.todos(busca),
        staleTime: 1000 * 60 * 5,
        select(data) {
            return data.articles
        }
    })

    const buscarNoticias = () => {
        setBusca(buscar)
    }

    const seleccionarNoticia = (noticia: NewsArticle) => {
        dispatch(setSelectNoticia(noticia))
        nav.navigate('Noticia')
    }




    return <SafeArea>
        <View style={styles.container}>

            <ToolBarTitle title="CNN" />
            <BusquedaBlock buscar={buscar} setBuscar={setBuscar} buscarNoticias={buscarNoticias} />

            {isLoading ? (
                <LoadingNoticias />
            ) : < FlatList
                data={noticias}
                renderItem={({ item }) => RenderItemNoticia({ item, seleccionarNoticia })}
                keyExtractor={(item, index) => `${index}`}
                showsVerticalScrollIndicator
                ListEmptyComponent={<NoticiasVacias />}
            />}
        </View>
    </SafeArea>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});