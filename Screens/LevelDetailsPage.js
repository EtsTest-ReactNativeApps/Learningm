import React from 'react';
import {Text,StyleSheet,ScrollView,View,TouchableOpacity} from 'react-native';
import CustomHeader from '../Components/CustomHeader';
import CustomWordCard from '../Components/CustomWordCard';
import {connect} from 'react-redux';

function LevelDetailsPage(props){
    const {levelContent,navigation} = props
    // console.log("level content in leveldetail page",levelContent.CONTENT)
    const handleClick = (index) =>{
        navigation.navigate("contentsPage",{
            index:index
        })
    }
    return(
        <React.Fragment>
            <CustomHeader openDrawer={props.navigation.openDrawer} language="Introduction"/>
                <View>
                <ScrollView style={{width:"100%",height:"100%"}}>
                    {
                        levelContent.CONTENT.map((content,index)=> (
                            <TouchableOpacity
                                key={content.contentId}
                                onPress={() => handleClick(index)}
                            >
                                <CustomWordCard
                                    word={content.word}
                                    isCompleted={true}
                                />
                            </TouchableOpacity>
                        )) 
                    }
                </ScrollView>
                </View>
        </React.Fragment>
    )
}

const mapStateToProps =(state) =>{
    return{
        levelContent:state.levelContent
    }
}

const mapDispatchToProps =(dispatch) =>({

})

export default connect(mapStateToProps)(LevelDetailsPage); 