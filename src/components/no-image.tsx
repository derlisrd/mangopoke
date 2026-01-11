import { View, DimensionValue, Text } from "react-native";


interface INoImageProps {
    width?: DimensionValue;
    height?: DimensionValue;
    backgroundColor?: string;
}

export default function NoImage({ width, height, backgroundColor }: INoImageProps) {
    return <View style={{ width: width ?? 100, height: height ?? 100, borderRadius: 12, backgroundColor: backgroundColor ?? '#ccc', justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ color: '#999', fontWeight: 'bold' }}>x</Text>
    </View>
}