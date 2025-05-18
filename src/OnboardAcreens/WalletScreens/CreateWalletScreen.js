import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
  Image,
  StyleSheet,
} from "react-native";
import * as Clipboard from "expo-clipboard";
import * as bip39 from "bip39";
import { AntDesign, Feather } from "@expo/vector-icons";

const CreateWalletScreen = ({ navigation }) => {
  const [mnemonic, setMnemonic] = useState("");

  useEffect(() => {
    const generate = async () => {
      try {
        const phrase = bip39.generateMnemonic();
        setMnemonic(phrase);
      } catch (err) {
        console.error("Error generating mnemonic:", err);
        Alert.alert("Error", "Failed to generate wallet phrase");
      }
    };
    generate();
  }, []);

  const copyToClipboard = async () => {
    await Clipboard.setStringAsync(mnemonic);
    Alert.alert("Copied", "Mnemonic copied to clipboard");
  };

  if (!mnemonic) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/images/logocolli.png")}
        style={{ width: 70, height: 70, marginTop: "30%", alignSelf: "center" }}
      />
      <Text style={styles.startText}>Wallet Created Successfully</Text>

      <View style={styles.walletMainView}>
        <View>
          <Text style={styles.walletText}>Coliseum ID</Text>
        </View>

        <View style={{ flexDirection: "row" }}>
          <Text style={styles.walletText}>User ID</Text>
          <Feather
            name="copy"
            size={20}
            color="white"
            style={{ marginLeft: 10 }}
          />
        </View>
      </View>
      <View
        style={{ borderBottomWidth: 0.5, borderColor: "white", marginTop: 30 }}
      />
      <Text
        style={{ color: "white", fontSize: 20, marginTop: 20, marginLeft: 20 }}
      >
        Passphrase
      </Text>
      <View
        style={styles.phraseView}
      >
        {mnemonic.split(" ").map((word, index) => (
          <Text
            key={index}
            style={{
              marginRight: 10,
              marginBottom: 10,
              borderBottomWidth: 1,
              color: "white",
              fontSize:18,
              lineHeight:30
            }}
          >
            {index + 1}. {word}
          </Text>
        ))}
      </View>
      <TouchableOpacity onPress={copyToClipboard} style={styles.copyView}>
        <Text style={{ color: "white", fontSize:12 }}>Copy passphrase</Text>
          <Feather
            name="copy"
            size={15}
            color="white"
            style={{ marginLeft: 10 }}
          />
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.phraseBtn}
        onPress={() => navigation.navigate("ConfirmMnemonic", { mnemonic })}
      >
        <Text style={styles.btnText}>I have written it down</Text>
      </TouchableOpacity>
        <View style={{ marginTop: "10%" }}>
             <Image
               source={require("../../../assets/images/powered.png")}
              style={{width:171, height:100,alignSelf:"center"}}
              resizeMode='contain'
              />
           </View>
    </View>
  );
};

export default CreateWalletScreen;

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
  walletText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
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
