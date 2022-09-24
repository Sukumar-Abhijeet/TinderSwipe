import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import useTheme from '../../hooks/useTheme';
const Footer = () => {
    const { AppTheme: { colors } } = useTheme();
    return (
        <View style={[styles.wrapper, { backgroundColor: colors.surfaces.white }]} >
            <Image source={require('../../../assets/png/tabs.png')} style={styles.tabImages} />
        </View>
    )
};

export default Footer

export const styles = StyleSheet.create({
    wrapper: { height: 80, width: '100%', position: 'absolute', zIndex: 1000, bottom: 0 },
    tabImages: {
        width: '100%',
        height: 48
    },
})