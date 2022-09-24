import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
const FooterActions = () => {
    return (
        <View style={styles.wrapper}>
            <Image source={require('../../../../assets/png/passKeep.png')} style={styles.image} />
            <Image source={require('../../../../assets/png/ad.png')} style={styles.adImage} />
        </View>
    )
};

export default FooterActions;

const styles = StyleSheet.create({
    image: {
        height: 52,
        width: '92%',
        alignSelf: 'center',
    },
    wrapper: {
        marginTop: 430
    },
    adImage: {
        height: 52,
        width: '100%',
        alignSelf: 'center',
        marginTop: 30
    }
});