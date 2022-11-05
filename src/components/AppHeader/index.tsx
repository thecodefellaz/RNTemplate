import React from 'react';
import styles from './styles';
import { Colors } from '../../theme';
import { Text } from '../../components';
import { useColorScheme } from '../../hooks';
import Icon from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import { TextStyle, TouchableOpacity, View, ViewStyle } from 'react-native';

interface Props {
    title: string;
    leftView?: React.ReactNode;
    rightView?: React.ReactNode;
    customStyle?: ViewStyle;
    titleStyle?: TextStyle;
    onBackPress?: Function;
    hideBackIcon?: Boolean;
    backIcon?: string;
    backIconComponent?: React.ReactNode;
}

const AppHeader = ({
    title,
    leftView,
    rightView,
    customStyle,
    onBackPress,
    hideBackIcon,
    backIcon,
    backIconComponent,
    titleStyle,
}: Props) => {

    const navigation = useNavigation();
    const theme = useColorScheme();

    return (
        <View style={[styles.container, { backgroundColor: Colors[theme].primary }, customStyle]}>
            {
                hideBackIcon ?
                    <View style={styles.simpleHeaderRow}>
                        <Text numberOfLines={2} style={[styles.simpleTitle, titleStyle]}>
                            {title}
                        </Text>
                        {rightView ? rightView : <View />}
                    </View> :
                    <View style={styles.row}>
                        <View style={styles.left}>
                            <TouchableOpacity
                                onPress={() => (onBackPress ? onBackPress() : navigation.goBack())}>
                                {backIconComponent ? (
                                    backIconComponent
                                ) : (
                                    <Icon name={backIcon || 'arrowleft'} size={28} color={'#fff'} />
                                )}
                            </TouchableOpacity>
                        </View>

                        <Text numberOfLines={2} style={[styles.title, titleStyle]}>
                            {title}
                        </Text>
                        {leftView ? (
                            <View style={styles.left}>{leftView}</View>
                        ) : (
                            <View style={styles.left} />
                        )}
                    </View>
            }
        </View>
    );
};

export default AppHeader;