import React, {useState} from "react"
import { StyleSheet, Image, Text, ScrollView, TextInput, 
    KeyboardAvoidingView, Platform, Pressable, Alert } from 'react-native'

import { validateEmail } from '../utils/index.js'

const COLOR_BUTTON = "#505E58"
const COLOR_BUTTON_PRESSED = "#a7aeab"
const COLOR_BUTTON_DISABLED = "#B6B6B6"
const COLOR_BG = "#FFFFFF"
const COLOR_TEXT = "#000000"
const COLOR_BORDER = "#000000"

export default function SubscribeScreen({ navigation }) {
    const [email, onChangeEmail] = useState('')

    var isEmailValid = validateEmail(email)

    const ButtonColor = (enabled, pressed) => {
      if (enabled && pressed) return COLOR_BUTTON_PRESSED
      if (enabled) return COLOR_BUTTON
      return COLOR_BUTTON_DISABLED
    }

    return (
        <KeyboardAvoidingView 
            style={styles.container}
            behavior={Platform.OS == 'ios' ? 'padding' : 'height'}>
            <ScrollView 
                indicatorStyle={'white'}
                keyboardDismissMode="on-drag"
                >
                <Image style={styles.logoImg} source={require('../assets/little-lemon-logo-grey.png')} />
                <Text style={styles.bodyText}>
                  Subscribe to our newsletter for our latest delicious recipes!
                </Text>
                <TextInput
                    style={styles.input}
                    value={email}
                    onChangeText={onChangeEmail}
                    placeholder="Type your email"
                    autoCapitalize="none"
                    inputMode="email"
                />
                <Pressable 
                  onPress={() => 
                    Alert.alert("Thanks for subscribing,\nstay tuned!")
                  }
                  disabled={!isEmailValid}
                  style={({pressed}) => [
                    {
                      backgroundColor: ButtonColor(isEmailValid, pressed)
                    },
                    styles.buttonContainer,
                  ]}>
                  <Text style={styles.buttonText}>Subscribe</Text>
                </Pressable>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLOR_BG
    },
    bodyText: {
      fontSize: 20, 
      marginTop: 30,
      marginHorizontal: 30,
      color: COLOR_TEXT, 
      textAlign: "center",
      fontWeight: "600"
    },
    logoImg: {
      width: 100,
      height: 120,
      marginTop: 30,
      resizeMode: 'contain',
      alignSelf: 'center'
    },
    input: {
        height: 40,
        marginHorizontal: 15,
        marginTop: 30,        
        borderWidth: 1,
        padding: 10,
        fontSize: 16,
        borderColor: COLOR_BORDER,
        borderRadius: 10
    },
    buttonContainer: {
      borderRadius: 10,
      padding: 10,
      marginHorizontal: 15,
      marginVertical: 15
    },
    buttonText: {
      color: COLOR_BG,
      fontSize: 16,
      fontWeight: '600',
      alignSelf: 'center'
    }
  });