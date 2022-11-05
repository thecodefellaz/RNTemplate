import React from 'react';
import { View, TouchableOpacity, ViewStyle } from 'react-native';
import { normalize } from '../../theme/Metrics';
import { styles } from './styles';

interface Props {
    customStyle?: ViewStyle;
    backgroundColor?: string;
    SvgIcon: any;
    svgHeight?: number;
    svgWidth?: number;
}

const Tool = (props: Props) => {
    const { customStyle, backgroundColor, SvgIcon, svgHeight, svgWidth } = props;

    return (
        <TouchableOpacity style={[styles.container, { backgroundColor: backgroundColor }, customStyle]}>
            <SvgIcon height={svgHeight || normalize(45)} width={svgWidth || normalize(45)} />
        </TouchableOpacity>
    )
}

export default Tool;