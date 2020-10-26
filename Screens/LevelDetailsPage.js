import React from 'react';
import { Text, StyleSheet, ScrollView, View, TouchableOpacity } from 'react-native';
import {Card} from 'react-native-elements'
import CustomHeader from '../Components/CustomHeader';
import CustomWordCard from '../Components/CustomWordCard';
import {connect} from 'react-redux';

function LevelDetailsPage(props){
    const { levelContent, navigation } = props
    const [loading, setLoading] = React.useState(false);
    // console.log("level content in leveldetail page",levelContent.CONTENT)
    const handleClick = (index) => {
        setLoading(true);
        navigation.navigate("contentsPage",{
            index:index
        })
    }
    return(
        <React.Fragment>
            <CustomHeader {...props} title="Introduction"/>    
            <ScrollView
            contentContainerStyle={styles.detailView}
            >
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
                
        </React.Fragment>
    )
}

const mapStateToProps =(state) =>{
    return{
        levelContent:state.levelContent
    }
}


export default connect(mapStateToProps)(LevelDetailsPage); 

const styles = StyleSheet.create({
    detailView: {
        width:"100%",
        height: "100%",
        backgroundColor:"white"
    },
})