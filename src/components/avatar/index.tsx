import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import useTheme from '../../hooks/useTheme';
const Avatar = () => {

    const { AppTheme: { colors } } = useTheme();

    return (
        <TouchableOpacity style={[styles.circle, { backgroundColor: colors.surfaces.grey100, borderColor: colors.surfaces.purple100 }]}>
            <View style={styles.buttonWrapper}>
                <Image source={require('../../../assets/png/plusButton.png')} style={styles.plusButton} />
            </View>
        </TouchableOpacity>
    )

};
export default Avatar;

const styles = StyleSheet.create({

    circle: {
        width: 60,
        height: 60,
        borderRadius: 30,
        borderWidth: 1,
        borderStyle: 'dashed',
        marginRight: 10
    },
    plusButton: {
        width: 25,
        height: 25
    },
    buttonWrapper: {
        position: 'absolute',
        right: 0,
        bottom: 0
    }
});