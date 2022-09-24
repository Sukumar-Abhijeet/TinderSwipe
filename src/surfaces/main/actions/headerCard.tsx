import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Avatar from '../../../components/avatar/index';
const HeaderCard = () => {

    const AVATARS = [1, 2, 3];
    return (
        <View style={styles.wrapper}>
            <View style={styles.textWrapper}>
                <Text style={styles.headText}>고정모임</Text>
                <Text style={styles.subText}>일정 제한 없이</Text>
                <Text style={styles.subText}>모이고 싶을 때</Text>
            </View>
            <View style={styles.avatarWrapper}>
                {AVATARS.map((_, i) => <Avatar key={i} />)}
            </View>
        </View>
    )

};

export default HeaderCard;

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'row',
        height: 91,
        width: '92%',
        backgroundColor: 'white',
        marginTop: 60,
        marginHorizontal: 16,
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 16,
        elevation: 6,
        alignSelf: 'center',
        shadowOffset: { width: 2, height: 2 },
        shadowColor: '#171717',
        shadowOpacity: 0.2,
        shadowRadius: 6,
    },
    textWrapper: {
        flex: 0.35,
        paddingLeft: 20
    },
    avatarWrapper: {
        flex: 0.65,
        flexDirection: 'row'
    },
    headText: {
        fontWeight: '700',
        fontSize: 16,
        lineHeight: 24,
        color: '#1D1D1E'
    },
    subText: {
        fontWeight: '500',
        fontSize: 12,
        lineHeight: 18,
        color: '#99999A'
    }
});