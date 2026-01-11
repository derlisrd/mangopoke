import { SafeAreaProvider } from 'react-native-safe-area-context';
import RouteMainScreens from "./screens/route-main";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Provider } from 'react-redux'
import { store } from './store';

export default function App() {
    const queryClient = new QueryClient();
    return (
        <Provider store={store}>
            <QueryClientProvider client={queryClient}>
                <SafeAreaProvider>
                    <RouteMainScreens />
                </SafeAreaProvider>
            </QueryClientProvider>
        </Provider>)
}

