import { View, Text,StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import "./quiz"
const Result = ({navigation}) => {
  return (
    <View style = {style.container}>
      <Text style={style.result}>{global.mark}</Text>
      <Text style={style.saying}>Mistakes are proof that you are trying.</Text>
      <TouchableOpacity style={style.button} onPress={()=>{
        global.mark = 0;
        navigation.navigate('Home')
      }}>
        <Text style={style.btnText}>Reset</Text>
      </TouchableOpacity>
    </View>
  )
}
const style = StyleSheet.create(
    {
        container:{
            flex:1,
            marginTop:30,
            backgroundColor:'#151119',
            alignItems:'center'
        },
        result:{
          fontSize:126,
          fontWeight:'bold',
          color:'#fff',
          textAlign:'center',
          marginTop:128
        },
        saying:{
          fontSize:24,
          textAlign:'center',
          color:"#fff",
          marginTop:32
        },
        button:{
          padding:16,
          backgroundColor:'#7b53bd',
          marginTop:64,
          width:100,
          borderRadius:20

        },
        btnText:{
          color:'#fff',
          textAlign:'center',
          fontSize:24
        }
    }
)

export default Result