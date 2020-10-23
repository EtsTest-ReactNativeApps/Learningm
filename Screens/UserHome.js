import React from 'react';
import { StyleSheet, ScrollView,TouchableOpacity,ActivityIndicator } from 'react-native';
import CustomHeader from '../Components/CustomHeader';
import CustomCards from '../Components/CustomCard';
import {connect} from 'react-redux';
import {levelContentRequest} from '../actions/index'
function UserHome(props){
  const {levels} = props
  const handleClick = (l) =>{
  
    props.getLevelContents({
      "fk_languageId":1,
      "fk_levelId":l 
    })
  }
  React.useEffect(() =>{
    if(props.levelContent.STS==="200"){
      props.navigation.navigate("levelDetail")
    }
  },[props.levelContent])
  
    return (   
        <>
                <CustomHeader openDrawer={props.navigation.openDrawer} language="Kannada"/>
                <ScrollView style={styles.containerView}>
                  {
                    levels.CONTENT.map(level =>(
                      <TouchableOpacity 
                        key={level.levelId}
                        onPress={() => handleClick(level.levelId)}
                      >
                        <CustomCards 
                          title={level.categoryName}
                          maxScore={level.levelMaxScore}
                        />
                      </TouchableOpacity>
                    ))
                  }
                </ScrollView>
        </>
      
    )
}

const mapStateToProps =(state) =>{
  return {
    levels:state.levelsData,
    levelContent:state.levelContent
  }
}

const mapDispatchToProps =(dispatch) =>({
  getLevelContents:(data) =>dispatch(levelContentRequest(data))
})

export default connect(mapStateToProps,mapDispatchToProps)(UserHome);

const styles  = StyleSheet.create({
  containerView:{
    backgroundColor:"#d7d8db"
  }
})