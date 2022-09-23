import React from 'react';
import {View} from 'react-native';
import useTheme from '../../hooks/useTheme';
const Footer = () => {
    const {AppTheme:{colors}} = useTheme();
    return(
        <View style={{height:100,width:'100%',backgroundColor:colors.surfaces.white,position:'absolute',zIndex:1000,bottom:0}} />
    )

};

export default Footer