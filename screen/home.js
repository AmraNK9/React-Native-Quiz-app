import { View,Image, Text, StyleSheet, Button, TouchableOpacity } from 'react-native'
import React from 'react'


const Home = ({navigation}) => {
  return (
    <View style={style.container}>
      <View style={style.imageWrapper}>
      <Image source={require('../assets/126.jpg')} style={style.image}  resizeMode="cover" />
      <Text style={style.header}>
      The more that you read, the more things you will know. The more that you learn, the more places you'll go.
      </Text>
      </View>
  
      <TouchableOpacity onPress={()=>{navigation.navigate('Quiz')}}>
        <Text style={style.button}>

          start
        </Text>
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
            alignItems:'center',
            justifyContent:'space-between'
        },
        image:{
          width:'100%',
          height:350,
          backgroundColor:'#fff',
          borderRadius:16,
          marginBottom:16
        },
        banner:{
          width:'100%',
          height:200,
          backgroundColor:'#fff'
        },
        button:{
          width: 200,
          backgroundColor:'#7b53bd',
          color:'#fff',
          paddingVertical:16,
          textAlign:'center',
          borderRadius:16,
          marginBottom:16,
          fontSize:24
        },
        header:{
          fontSize:32,
          color:'#fff',
          textAlign:'center'
        },
        imageWrapper:{
          width:'100%',
          padding:16,

        }

    }
)

export default Home