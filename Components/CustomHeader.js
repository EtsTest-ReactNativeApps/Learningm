import React from 'react';
import { StyleSheet, Image,TouchableOpacity } from 'react-native';
import { Header, Icon } from "react-native-elements";
import { connect } from 'react-redux';
import {getQuizzData} from '../actions/index'
// import { Icon } from 'react-native-vector-icons/Icon';


function CustomHeader(props) {
    
    const { quizzData, userProg } = props
    
    const handleQuizz = () => {
        props.getQuizz({
            fk_languageId:userProg.CONTENT.languageId,
            levelSerialNo:userProg.CONTENT.currLevelId
        })
        
    }
    React.useEffect(() => {
        if (props.quizzData.STS === '200') {
            props.navigation.navigate('quizzPage')
        }
    },[props.quizzData])
    
    return (
        <React.Fragment>
            <Header
                leftComponent={<LeftComponent {...props}/>}
                centerComponent={{text:`${props.title}`,style:{color: '#fff',fontSize:30}}}
                rightComponent={<RightComponent  {...props} handleQuizz={handleQuizz}/>}
                linearGradientProps={{
                    colors: ['#399668','#33898f'],
                }}
                
                containerStyle={styles.containerStyle}
            />
        </React.Fragment>
    )
}

const mapStateToProps = (state) => {
    return {
        quizzData: state.quizzData,
        userProg:state.userProgress
    }
}

const mapDispatchToProps = dispatch => ({
    getQuizz:(data) => dispatch(getQuizzData(data)),
})

export default connect(mapStateToProps,mapDispatchToProps)(CustomHeader);
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

    
    return (
        <Icon
            name="school"
            type='material'
            size={40}
            color='white'
            onPress={props.handleQuizz}
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