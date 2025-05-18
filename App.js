import 'react-native-get-random-values';
import { Buffer } from 'buffer';
global.Buffer = Buffer;


import React from 'react'
import OnBoarding from './src/OnboardAcreens/OnBoarding' 
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CreateWalletScreen from './src/OnboardAcreens/WalletScreens/CreateWalletScreen'
import ConfirmMnemonicScreen from './src/OnboardAcreens/WalletScreens/ConfirmMnemonic'
import HomeScreen from './src/MainScreens/HomeScreen'


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Stack.Navigator initialRouteName="onboard" screenOptions={{headerShown:false}}>
      <Stack.Screen name="onboard" component={OnBoarding} />
        <Stack.Screen name="CreateWallet" component={CreateWalletScreen} />
      <Stack.Screen name="ConfirmMnemonic" component={ConfirmMnemonicScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  )
}

export default App

