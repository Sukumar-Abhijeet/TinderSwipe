import React, {useState} from 'react';
import Swiper from 'react-native-deck-swiper';
import TinderAccounts from '../../../mock/DataSet';
import SwipeCard from '../../components/swipeCard';
import Toast from 'react-native-simple-toast';

interface ScreenProps {}

const MainSurface = ({...props} : ScreenProps) => {

    const [cardIndex, setCardIndex] = useState(0);

    const  _handleSwiped = () => setCardIndex(cardIndex+1);
    const _handleSwipedLeft = () => Toast.show('PASS',Toast.SHORT);
    const _handleSwipedRight = () => Toast.show('KEEP',Toast.SHORT);

    const _handleCard = (account,index) => <SwipeCard account={account} key={index} />

    return(
        <>
            <Swiper
                showSecondCard={true}
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
            />
        </>
    )

};

export default MainSurface;