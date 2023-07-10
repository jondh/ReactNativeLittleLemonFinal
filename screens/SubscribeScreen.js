import React, {useState} from "react"
import {useColorScheme} from 'react-native';
import { StyleSheet, Image, Text, ScrollView, TextInput, 
    KeyboardAvoidingView, Platform, Pressable, Alert } from 'react-native'

import { validateEmail } from '../utils/index.js'
import { COLORS } from '../style_constants.js'

export default function SubscribeScreen() {
    const [email, onChangeEmail] = useState('')
    const colorScheme = useColorScheme();
    const styles = appliedStyles(colorScheme)

    var isEmailValid = validateEmail(email)

    const ButtonColor = (enabled, pressed) => {
      const colors = COLORS(colorScheme)
      if (enabled && pressed) return colors.PRIMARY_CONTAINER
      if (enabled) return colors.PRIMARY
      return colors.SURFACE_CONTAINER
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


const appliedStyles = (colorScheme) => {
  const colors = COLORS(colorScheme)
  return StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.SURFACE
    },
    bodyText: {
      fontSize: 20, 
      marginTop: 30,
      marginHorizontal: 30,
      color: colors.ON_SURFACE, 
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
        borderColor: colors.ON_SURFACE,
        borderRadius: 10
    },
    buttonContainer: {
      borderRadius: 10,
      padding: 10,
      marginHorizontal: 15,
      marginVertical: 15
    },
    buttonText: {
      color: colors.SURFACE,
      fontSize: 16,
      fontWeight: '600',
      alignSelf: 'center'
    }
  })
}