import React from 'react';
import { Text, StyleSheet, ScrollView, View, TouchableOpacity } from 'react-native';
import {Card} from 'react-native-elements'
import CustomHeader from '../Components/CustomHeader';
import CustomWordCard from '../Components/CustomWordCard';
import {connect} from 'react-redux';
import { FAB } from 'react-native-paper';
function LevelDetailsPage(props) {
    const [visibleButton, setVisibleButton] = React.useState(false);
    const { levelContent, navigation,userProgData } = props
    const handleClick = (index) => {
        navigation.navigate("contentsPage",{
            index:index
        })
    }

    React.useEffect(() => {
        if (props.route.params.levlId === userProgData.CONTENT.currLevelId &&
            userProgData.CONTENT.completedWords === levelContent.CONTENT.length)
         {
            setVisibleButton(true)
        }
        else {
            setVisibleButton(false)
        }
    },[userProgData.CONTENT.completedWords,userProgData.CONTENT.currLevelId])

    return(
        <React.Fragment>
            <CustomHeader {...props} title="Introduction"/>
            <ScrollView style={styles.detailView}>
                        {
                            levelContent.CONTENT.map((content,index)=> (
                                <TouchableOpacity
                                    key={content.contentId}
                                    onPress={() => handleClick(index)}
                                >
                                    <CustomWordCard
                                        word={content.word}
                                        isCompleted={content.fk_levelId < userProgData.CONTENT.currLevelId ?
                                            true:index+1 <= userProgData.CONTENT.completedWords}
                                    />
                                    {/* {console.log(content.fk_levelId,)} */}
                                </TouchableOpacity>
                            )) 
                        }
                </ScrollView>
                {
                    visibleButton?(
                        <FAB
                            style={styles.fab}
                            label="take Assesment"
                            icon="pencil"
                            onPress={() => props.navigation.navigate('assesmentPage')}
                        />
                    ):null
                }
        </React.Fragment>
    )
}

const mapStateToProps =(state) =>{
    return{
        levelContent: state.levelContent,
        userProgData:state.userProgress
    }
}


export default connect(mapStateToProps)(LevelDetailsPage); 

const styles = StyleSheet.create({
    detailView: {
        width:"100%",
        height: "100%",
        backgroundColor:"white"
    },
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
      },
})