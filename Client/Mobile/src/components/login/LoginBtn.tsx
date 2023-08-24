import {
    View,
    Text,
    TouchableWithoutFeedback,
    StyleProp,
    ViewStyle,
} from 'react-native';
export default function LoginBtn({
    bgColor,
    title,
    textColor,
    style,
}: {
    bgColor: string;
    title: string;
    textColor: string;
    style?: StyleProp<ViewStyle>;
}) {
    return (
        <TouchableWithoutFeedback>
            <View
                style={[
                    {
                        backgroundColor: bgColor,
                        width: '90%',
                        height: 50,
                        paddingVertical: 10,
                        borderRadius: 30,
                        justifyContent: 'center',
                        alignItems: 'center',
                    },
                    style,
                ]}>
                <Text
                    style={{
                        fontSize: 16,
                        fontWeight: 'bold',
                        color: textColor,
                    }}>
                    {title}
                </Text>
            </View>
        </TouchableWithoutFeedback>
    );
}
