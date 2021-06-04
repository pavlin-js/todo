import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import Colors from "../constans/Colors";
import Button from '../components/Button'

export default ( { labelStyle, label, errorMessage, inputStyle, text} ) => {
  return(
    <View style={ styles.container } >
      <View style={ styles.labelContainer } >
        <Text style={ labelStyle } >{ label }</Text>
        <Text style={ styles.error } >{ errorMessage && `*${ errorMessage }` }</Text>
      </View>
      <TextInput
        underlineColorAndroid='transperant'
        selectionColor='transperant'
        style={[styles.input, { outline: 'none' }, inputStyle]}
        value={ text }
      />
    </View>
  )
}

let styles = StyleSheet.create({
  container: {
    paddingHorizontal: 8,
    margin: 4,
  },
  labelContainer: {
    flexDirection: 'row',
    marginBottom: 4,
  },
  error: {
    color: Colors.red,
    fontSize: 12,
    marginLeft: 4,
  },
  input: {
    borderBottomColor: Colors.lightGray,
    borderBottomWidth: 1,
    paddingLeft: 4,
    height: 32,
    fontSize: 24,
    color: Colors.black, 
  }
})