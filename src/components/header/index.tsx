import React from 'react';
import {View,StyleSheet} from 'react-native';
import useTheme from '../../hooks/useTheme';
const Header = () => {

    const {
        AppTheme:{colors}
    } = useTheme();

    return(
        <View style={[styles.container,{backgroundColor:colors.surfaces.background}]}>

        </View>
    )

};

export default Header

const styles = StyleSheet.create({
    container: {
        height:100,width:'100%',position:'absolute',zIndex:1000,
    },
  });