import { StyleSheet, View, TouchableOpacity } from 'react-native'
import React from 'react'
import colors from '../config/colors'
import { Text } from './text'

export function NavigationButtons(props) {
  const { onPressPrimary, onPressSecondary, textPrimary, textSecondary } = props

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={onPressPrimary} >
        <Text text={textPrimary} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={onPressSecondary} >
        <Text text={textSecondary} />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  button: {
    backgroundColor: colors.primary,
    borderRadius: 5,
    height: 36,
    margin: 10,
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
})
