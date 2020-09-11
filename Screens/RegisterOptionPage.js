import React from 'react';
import { StyleSheet, Text, View ,TouchableOpacity,Image} from 'react-native';
import { Button } from 'react-native-elements';

function RegisterOptionPage(props) {
  const {navigation} = props
  return (
 
    <View style={styles.LndingPageView}>
        <View style={styles.logo}>
          <Image
              source={require('../assets/logo2.png')}
              style={styles.image}
            />
        </View>
        <View style={styles.buttonView}>
                <TouchableOpacity
                        onPress={() => console.log("hii")}
                        style={[styles.signIn, {
                            borderColor: '#009387',
                            borderWidth: 1,
                            marginTop: 15
                        }]}
                    >
                        <Text style={[styles.textSign, {
                            color: '#009387'
                        }]}>Sign Up With Google</Text>
                </TouchableOpacity>
                <TouchableOpacity
                        onPress={() => navigation.navigate("RegisterPage")}
                        style={[styles.signIn, {
                            borderColor: '#009387',
                            borderWidth: 1,
                            marginTop: 15
                        }]}
                    >
                        <Text style={[styles.textSign, {
                            color: '#009387'
                        }]}>Sign Up With Email</Text>
                </TouchableOpacity>
        </View>
        <View style={styles.registerOptionView}>
              <Text style={{fontSize:20,color:"#399668"}}>  Have an account ??</Text>
              <TouchableOpacity 
                onPress={() => navigation.navigate("LoginOptionPage")}
              >
                <Text style={{fontSize:18,fontWeight:"700",color:"#399668"}}>Sig In</Text>
              </TouchableOpacity>
        </View>
    </View>
  );
}
export default RegisterOptionPage;

const styles = StyleSheet.create({
    LndingPageView: {
    flex: 1,
    backgroundColor: 'white',
    alignItems:"center"
  },
  logo:{
    position:"relative",
    width:"70%",
    height:"35%",
    borderRadius:25,
    top:"20%"
  },
  image:{
    width:"100%",
    height:"100%",
    borderRadius:25,
  },
  registerOptionView:{
      position:"absolute",
      bottom:"10%",
      alignItems:"center"
  },
  buttonView:{
    width:"80%",
    position:"absolute",
    bottom:"20%"
  },
  signIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
},
textSign: {
    fontSize: 18,
    fontWeight: 'bold'
},

});

