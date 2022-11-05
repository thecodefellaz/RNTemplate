import React from 'react'
import { StatusBar, StatusBarStyle, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';

type Props = {
    backgroundColor?: string | undefined;
    barStyle?: StatusBarStyle | undefined
}

const CustomStatusBar = ({
    backgroundColor,
    barStyle = "light-content",
}: Props) => {
    const insets = useSafeAreaInsets();
    return (
        <View style={{ height: insets.top, backgroundColor }}>
            <StatusBar
                animated={true}
                backgroundColor={backgroundColor}
                barStyle={barStyle} />
        </View>
    );
}

export default CustomStatusBar

