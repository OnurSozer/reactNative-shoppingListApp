import React  from 'react'; 
import {Text , View, StyleSheet } from 'react-native';

export default function Header(){
    return(
        <View style={styles.header}>
            <Text style={styles.title}>SHOPPING LIST</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    header:{
        height:80,
        paddingTop:38,
        backgroundColor: "red"
    },
    title:{
        textAlign: "center",
        color: "black",
        fontSize: 20,
        fontWeight: "bold",
    }
});