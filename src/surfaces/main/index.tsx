import React, { useState } from 'react';
import Swiper from 'react-native-deck-swiper';
import TinderAccounts from '../../../mock/DataSet';
import SwipeCard from '../../components/swipeCard';
import Toast from 'react-native-simple-toast';
import { View } from 'react-native';
import HeaderCard from './actions/headerCard';
import FooterActions from './actions/footerActions';

interface ScreenProps { }

const MainSurface = ({ ...props }: ScreenProps) => {

    const [cardIndex, setCardIndex] = useState(0);
    const [zIndex, setZindex] = useState(1000);

    const _handleSwiped = () => setCardIndex(cardIndex + 1);

    const _handleSwipedLeft = () => Toast.show('PASS', Toast.SHORT);
    const _handleSwipedRight = () => Toast.show('KEEP', Toast.SHORT);

    const _handleDragStart = () => setZindex(0)
    const _handleDragEnd = () => setZindex(1000)

    const _handleCard = (account, index) => <SwipeCard account={account} key={index} />

    return (
        <View>
            <HeaderCard zIndex={zIndex} />
            <Swiper
                showSecondCard={true}
                dragStart={_handleDragStart}
                dragEnd={_handleDragEnd}
                cards={TinderAccounts}
                renderCard={_handleCard}
                stackSize={2}
                disableTopSwipe
                cardIndex={cardIndex}
                onSwipedLeft={_handleSwipedLeft}
                onSwiped={_handleSwiped}
                onSwipedRight={_handleSwipedRight}
                disableBottomSwipe
                stackScale={10}
                backgroundColor={'transparent'}
            >
                <>
                    <FooterActions />
                </>
            </Swiper>
        </View>
    )

};

export default MainSurface;