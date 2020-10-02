import React  from 'react';
import {View,Image,Text} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';


const pages = [
    {
        backgroundColor: '#fff',
      image: <Image source={require('../assets/logo1.png')} />,
      title: 'Onboarding',
      subtitle: 'Done with React Native Onboarding Swiper',
    },
    {
        backgroundColor: '#fff',
      image: <Image source={require('../assets/logo2.png')} />,
      title: 'Onboarding',
      subtitle: 'Done with React Native Onboarding Swiper',
    }
]
function OnBoardScreen(props){
    const {navigation} = props
    return (
        <Onboarding
        onSkip={() => navigation.navigate("LandingPage")}
        onDone={() =>navigation.navigate("LandingPage")}
        pages={pages}
        />
    )
}

export default OnBoardScreen;