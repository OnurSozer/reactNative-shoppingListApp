import React  from 'react'; 
import {Text , StyleSheet , TouchableOpacity,View} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import FontAwesome from 'react-native-vector-icons/FontAwesome';
export default function TodoItem({item, pressHandler}){

    return(
        <TouchableOpacity onPress ={()=> pressHandler(item.key)}>
        <View style ={styles.item}>
          <MaterialCommunityIcons name = "delete" size={18} color="black"/>
          <Text style = {styles.itemText}>{item.text}</Text>
        </View>
        </TouchableOpacity>
    )
    

}

const styles = StyleSheet.create({
    item:{
        padding:8,
        marginTop: 16,
        borderColor: "blue",
        borderWidth: 1,
        borderStyle: "dashed",
        borderRadius: 10,
        flexDirection: "row",
    },
    itemText:{
        marginLeft:10,
    }
})