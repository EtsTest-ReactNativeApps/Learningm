import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import CustomHeader from '../Components/CustomHeader';
import CustomCards from '../Components/CustomCard';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ProfilePage from './ProfilePage';

function UserHome(props){
  // console.log(props)
    return (   
        <>
                <CustomHeader openDrawer={props.navigation.openDrawer}/>
                <ScrollView style={styles.containerView}>
                    <CustomCards/>
                    <CustomCards/>
                    <CustomCards/>
                    <CustomCards/>
                    <CustomCards/>
                </ScrollView>
        </>
      
    )
}

export default UserHome;

const styles  = StyleSheet.create({
  containerView:{
    backgroundColor:"#d7d8db"
  }
})