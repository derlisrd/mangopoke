import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { createStaticNavigation, useNavigation, NavigationProp } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

type RootStackParamList = {
    Home: undefined;
    Noticia: undefined;
};

function HomeScreen() {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

            <TouchableOpacity
                onPress={() =>
                    navigation.navigate('Noticia')
                }
            >
                <Text>Go to Noticia</Text>
            </TouchableOpacity>
        </View>
    );
}
function NoticiaScreen() {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <TouchableOpacity
                onPress={() =>
                    navigation.navigate('Home')
                }
            >
                <Text>home Screen</Text>
            </TouchableOpacity>
        </View>
    );
}

const RootStack = createNativeStackNavigator<RootStackParamList>({
    initialRouteName: 'Home',
    screens: {
        Home: HomeScreen,
        Noticia: NoticiaScreen,
    },
});

const Navigation = createStaticNavigation(RootStack);

export default function Main() {
    return <Navigation />;
}