import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import useTheme from '../../hooks/useTheme';
const Header = () => {

    const {
        AppTheme: { colors }
    } = useTheme();

    return (
        <View style={[styles.container, { backgroundColor: colors.surfaces.background }]}>
            <Text style={styles.headText}>OFF OFF</Text>
            <Image source={require('../../../assets/png/filter.png')} style={styles.filterImg} />
        </View>
    )

};

export default Header

const styles = StyleSheet.create({
    container: {
        height: 92, width: '100%', position: 'absolute', zIndex: 1000,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        paddingTop: 50,
        paddingVertical: 7,
        paddingHorizontal: 16
    },
    headText: { fontSize: 28, fontWeight: '700', lineHeight: 35 },
    filterImg: {
        width: 24,
        height: 24
    }
});