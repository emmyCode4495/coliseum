import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const OnBoarding = () => {

    const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View>
        <Image
        source={require('../../assets/images/logocolli.png')}
        style={{width:70, height:70, marginTop:"30%", alignSelf:"center"}}
        />
        <Text style={styles.startText}>Get Started</Text>
        <View style={styles.walletView}>
            <TouchableOpacity style={{flexDirection:'row', justifyContent:'space-between', marginBottom:20}}
            onPress={() => navigation.navigate('CreateWallet')}>
            <Text  style={styles.walletText}>Create Wallet</Text>
            <AntDesign name="arrowright" size={24} color="white" />
        </TouchableOpacity>
        <View style={{borderBottomWidth:0.5, borderColor:'white'}}/>
        <View/>
          <TouchableOpacity style={{flexDirection:'row', justifyContent:"space-between", marginTop:20}}> 
            <Text  style={styles.walletText}>Import Wallet</Text>
            <AntDesign name="arrowright" size={24} color="white" />
        </TouchableOpacity>
        </View>
      </View>
     <View style={{marginTop:'70%'}}>
       <Image
        source={require('../../assets/images/powered.png')}
        style={{width:171, height:100,alignSelf:"center"}}
        resizeMode='contain'
        />
     </View>
    
    </View>
  )
}

export default OnBoarding

const styles = StyleSheet.create({
    container:{
        flex:1, 
        backgroundColor:"#000"
    },
    startText:{
        color:"#fff",
         fontSize:25, 
         fontWeight:"bold", 
         textAlign:"center",
          marginTop:20
    },
      walletText:{
        color:"#fff",
         fontSize:16, 
         fontWeight:"bold", 
         textAlign:"center", 
    },
    walletView:{
        marginTop:"30%",
        marginLeft:15,
        marginRight:15
    }
})