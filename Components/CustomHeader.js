import React from 'react';
import { StyleSheet, Image,TouchableOpacity } from 'react-native';
import {Header,Icon} from "react-native-elements";
// import { Icon } from 'react-native-vector-icons/Icon';


function CustomHeader(props){
    // console.log(props)
    return (
        <React.Fragment>
            <Header
                leftComponent={<LeftComponent {...props}/>}
                centerComponent={{text:`${props.title}`,style:{color: '#fff',fontSize:30}}}
                rightComponent={<RightComponent  {...props}/>}
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
            onPress={props.navigation.openDrawer}
        >
            <Image source={require("../assets/Menu.png")} style={styles.menuStyle}/>
        </TouchableOpacity>
    )
}

const RightComponent = (props) => {

    const handleQuizz = () => {
        props.navigation.navigate('quizzPage')
    }
    return (
        <Icon
            name="school"
            type='material'
            size={40}
            color='white'
            onPress={handleQuizz}
    />
    )
}
const styles = StyleSheet.create({
    containerStyle:{
        height:"13%",
        borderBottomWidth:7,
        borderBottomColor:"#6b6464",
    },
    menuStyle:{
        width:40,
        height:40,
        marginLeft:10
    }
})