import React from 'react';
import { StyleSheet, Image,TouchableOpacity } from 'react-native';
import {Header} from "react-native-elements";


function CustomHeader(props){
    // console.log(props)
    return (
        <React.Fragment>
            <Header
                leftComponent={<LeftComponent {...props}/>}
                rightComponent={{icon:"user-circle-o",color:"#ffff",type:"font-awesome",size:30}}
                linearGradientProps={{
                    colors: ['#399668','#33898f'],
                }}
                containerStyle={styles.containerStyle}
            />
        </React.Fragment>
    )
}

export default CustomHeader;
const LeftComponent = (props) => {
    return(
        <TouchableOpacity 
            onPress={props.openDrawer}
        >
            <Image source={require("../assets/Menu.png")} style={styles.menuStyle}/>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    containerStyle:{
        height:"13%",
        borderBottomWidth:7,
        borderBottomColor:"#6b6464",
    },
    menuStyle:{
        width:35,
        height:35,
        marginLeft:10
    }
})