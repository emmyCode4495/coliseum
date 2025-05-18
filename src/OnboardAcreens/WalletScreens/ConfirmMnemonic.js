import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, Alert, Image, StyleSheet, TouchableOpacity } from 'react-native';

const ConfirmMnemonicScreen = ({ route, navigation }) => {
  const { mnemonic } = route.params;
  const mnemonicWords = mnemonic.split(' ');

  const [verifyIndexes, setVerifyIndexes] = useState([]);
  const [userInputs, setUserInputs] = useState({});

  useEffect(() => {
    // Get 4 unique random indexes
    const indexes = new Set();
    while (indexes.size < 4) {
      indexes.add(Math.floor(Math.random() * 12));
    }
    setVerifyIndexes(Array.from(indexes));
  }, []);

  const handleInputChange = (index, value) => {
    setUserInputs((prev) => ({ ...prev, [index]: value.trim().toLowerCase() }));
  };

  const validateMnemonic = () => {
    const isValid = verifyIndexes.every(
      (index) => userInputs[index] === mnemonicWords[index]
    );

    if (isValid) {
      navigation.replace('Home');
    } else {
      Alert.alert('Error', 'One or more words are incorrect. Please try again.');
    }
  };

  return (
    <View style={styles.container}>
          <Image
                source={require("../../../assets/images/logocolli.png")}
                style={{ width: 70, height: 70, marginTop: "30%", alignSelf: "center" }}
              />
              <Text style={styles.startText}>Confirm Phrase</Text>
      <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>
        Confirm your recovery phrase
      </Text>

      {verifyIndexes.map((index) => (
        <View key={index} style={{ marginBottom: 15 }}>
          <Text style={styles.wordText}>Enter word #{index + 1}</Text>
          <TextInput
            style={{
              borderWidth: 1,
              borderColor: '#ccc',
              padding: 15,
              borderRadius: 10,
              marginRight:20,
              marginLeft:20,    
              color:"#fff",
            }}
            onChangeText={(text) => handleInputChange(index, text)}
          />
        </View>
      ))}

        <TouchableOpacity
            style={styles.phraseBtn}
              onPress={validateMnemonic}
            >
              <Text style={styles.btnText}>Confirm</Text>
            </TouchableOpacity>
    </View>
  );
};

export default ConfirmMnemonicScreen;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  startText: {
    color: "#fff",
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
  },
  wordText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom:10,
    marginLeft:20
  },
  walletView: {
    marginTop: "30%",
    marginLeft: 15,
    marginRight: 15,
  },
  walletMainView: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginRight: 20,
    marginLeft: 20,
    marginTop: "25%",
  },
  phraseView: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    
  },
  copyView:{
     marginBottom: 20, 
     flexDirection:'row', 
     alignItems:'center' ,
      justifyContent:'center', 
      marginTop:'10%'
  },
  phraseBtn:{
    backgroundColor: "#FDC91B",
    borderWidth: 1,
   
    borderRadius:50,
    padding: 20,
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  btnText:{
    color: "#000",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  }
});
