import React  from 'react'; 
import {Text , StyleSheet , View} from 'react-native';

export default function Sandbox(){
    return(
        <View style= {styles.container}>
          <Text style = {styles.boxOne}>one</Text>
          <Text style = {styles.boxTwo}one>two</Text>
          <Text style = {styles.boxThree}one>three</Text>
          <Text style = {styles.boxFour}one>four</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        //flex: 1,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "flex-end",
        paddingTop: 40,
        backgroundColor: "aqua",
    },
    boxOne:{
        flex: 1,
        backgroundColor: "violet",
        padding: 20,
    },
    boxTwo:{
        flex: 1,
        backgroundColor: "gold",
        padding: 30,
    },
    boxThree:{
        flex: 1,
        backgroundColor: "coral",
        padding: 40,
    },
    boxFour:{
        flex: 1,
        backgroundColor: "skyblue",
        padding: 50,
    }
  
});