import { Dimensions, PixelRatio } from 'react-native';

let screenWidth = Dimensions.get('window').width;
let screenHeight = Dimensions.get('window').height;

export const widthPercentageToDP = widthPercent => {
    
    const elemWidth = typeof widthPercent === "number" ? widthPercent : parseFloat(widthPercent);
  
    
    return PixelRatio.roundToNearestPixel(screenWidth * elemWidth / 100);
};
  
export const heightPercentageToDP = heightPercent => {
    
    const elemHeight = typeof heightPercent === "number" ? heightPercent : parseFloat(heightPercent);
  
    
    return PixelRatio.roundToNearestPixel(screenHeight * elemHeight / 100);
};
  
