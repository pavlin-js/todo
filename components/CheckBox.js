import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from "react-native";
import Colors from "../constans/Colors";

export default ( { isChecked, onChecked, ...props } ) => {
  return(
    <TouchableOpacity style={ styles.checkbox } onPress={ onChecked } >
      <Text style={ { color: Colors.lightGray } } >{ isChecked ? "v" : "" }</Text>
    </TouchableOpacity>
  )
}

let styles = StyleSheet.create({
  checkbox: {
    width: 20,
    height: 20,
    margin: 5,
    backgroundColor: '#fff0',
    color: Colors.lightGray,
    borderWidth: 1,
    borderRadius: 3,
    borderColor: Colors.lightGray,
    alignItems: 'center',
    justifyContent: 'center',
  }
})