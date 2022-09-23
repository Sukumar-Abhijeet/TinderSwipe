import React from 'react';
import {View,Image} from 'react-native';
import useTheme from '../../hooks/useTheme';
import {styles} from './styles';

type CardProps = {
    account : {
        imageUrl : string
    }
}

const SwipeCard = ({...props} : CardProps) => {

    const {AppTheme:{colors}} = useTheme();
    const {account:{imageUrl}} = props;
    return (
        <View style={[styles.container,{backgroundColor:colors.surfaces.lightGrey}]}>
            <Image source={imageUrl} style={styles.imageStyles} />
        </View>
    )
};

export default SwipeCard