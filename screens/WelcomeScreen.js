import React from "react"
import {useColorScheme} from 'react-native';
import { StyleSheet, View, Text, Image, Pressable } from 'react-native'
import { COLORS } from '../style_constants.js'

export default function WelcomeScreen({ navigation }) {
  const colorScheme = useColorScheme()
  const styles = appliedStyles(colorScheme)

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
                backgroundColor: pressed ? 
                  COLORS(colorScheme).PRIMARY_CONTAINER : 
                  COLORS(colorScheme).PRIMARY,
              },
              styles.buttonContainer,
            ]}>
            <Text style={styles.buttonText}>Newsletter</Text>
          </Pressable>
        </View>
    );
}

const appliedStyles = (colorScheme) => {
  const colors = COLORS(colorScheme)
  return StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: colors.SURFACE
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
      color: colors.ON_SURFACE, 
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
      color: colors.SURFACE,
      fontSize: 16,
      fontWeight: '600',
      alignSelf: 'center'
    }
  })
}