import React from 'react';
import { Text, StyleSheet, ScrollView, View, TouchableOpacity } from 'react-native';
import {Button} from 'react-native-elements'
import CustomHeader from '../Components/CustomHeader';
import CustomWordCard from '../Components/CustomWordCard';
import {connect} from 'react-redux';
import { FAB } from 'react-native-paper';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp
  } from '../utils/react-native-responsive-screen';
function LevelDetailsPage(props) {
    const [visibleButton, setVisibleButton] = React.useState(false);
    const { levelContent, navigation,userProgData } = props
    const handleClick = (index) => {
        navigation.navigate("contentsPage",{
            index:index
        })
    }

    React.useEffect(() => {
        // console.log(props.route.params,userProgData.CONTENT.currLevelId)
        if (props.route.params.levlId === userProgData.CONTENT.currLevelId &&
            userProgData.CONTENT.completedWords === levelContent.CONTENT.length)
         {
            setVisibleButton(true)
        }
        else {
            setVisibleButton(false)
        }
    },[userProgData.CONTENT.completedWords])
    // console.log(levelContent)
    return(
        <React.Fragment>
            <CustomHeader {...props} title={props.route.params.levlName}/>
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
                                </TouchableOpacity>
                            )) 
                        }
                        {
                            visibleButton?
                            (<View style={styles.buttonView}>
                                <Button
                                    title="Take Assement"
                                    titleStyle={{fontSize:hp("3%")}}
                                    containerStyle={{margin:wp("2%"),width:wp("95%"),borderRadius:10}}
                                    onPress={() => props.navigation.navigate('assesmentPage')}
                                />
                            </View>):null
                        }
                </ScrollView>
                {/* {
                    visibleButton?(
                        <FAB
                            style={styles.fab}
                            label="take Assesment"
                            icon="pencil"
                            onPress={() => props.navigation.navigate('assesmentPage')}
                        />
                    ):null
                } */}
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
        
        width:wp("100%"),
        height: hp("100%"),
        backgroundColor: "white",
        
    },
    buttonView: {
        // flexGrow:1,
        width: "100%",
        alignItems:"center"
        // justifyContent:"space-around"  
    },
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
      },
})