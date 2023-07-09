import React from "react"
import { StyleSheet, View, Text, Image, Pressable } from 'react-native'

const COLOR_BUTTON = "#505E58"
const COLOR_BUTTON_PRESSED = "#a7aeab"
const COLOR_BG = "#FFFFFF"
const COLOR_TEXT = "#000000"

export default function WelcomeScreen({ navigation }) {

    return (
        <View style={styles.container}>
          <View style={styles.infoContiner}>
            <View style={styles.imageContainer}>
                <Image style={styles.logoImg} source={require('../assets/little-lemon-logo.png')} />
            </View>
            <Text style={styles.text}>
                Little Lemon, your local Mediterranean Bistro
            </Text>
          </View>
          <Pressable 
            onPress={() => 
              navigation.push('Subscribe')
            }
            style={({pressed}) => [
              {
                backgroundColor: pressed ? COLOR_BUTTON_PRESSED : COLOR_BUTTON,
              },
              styles.buttonContainer,
            ]}>
            <Text style={styles.buttonText}>Newsletter</Text>
          </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: COLOR_BG
    },
    infoContiner: {
      flexGrow: 1,
      justifyContent: 'center'
    },
    imageContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      padding: 15
    },
    logoImg: {
      width: 120,
      height: 210,
      resizeMode: 'contain'
    },
    text: {
      fontSize: 20, 
      marginTop: 30,
      marginHorizontal: 30,
      color: COLOR_TEXT, 
      textAlign: "center",
      fontWeight: "bold"
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