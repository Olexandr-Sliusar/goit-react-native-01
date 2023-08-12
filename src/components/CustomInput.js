import React, { useState } from "react";
import { StyleSheet, TextInput, Keyboard } from "react-native";
export default function CustomInput({
  value,
  setValue,
  placeholder,
  secureTextEntry = false,
  keyboardShow,
}) {
  const [onFocus, setOnFocus] = useState(false);
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
    >
      <TextInput
        style={[styles.inputStyles, onFocus && styles.inputStylesOnFocus]}
        onChangeText={(text) => setValue(text)}
        value={value}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        onFocus={() => {
          setOnFocus(true);
          keyboardShow(true);
        }}
        onBlur={() => setOnFocus(false)}
      ></TextInput>
    </KeyboardAvoidingView>
  );
}
const styles = StyleSheet.create({
  inputStyles: {
    backgroundColor: "#F6F6F6",
    marginBottom: 16,
    width: "100%",
    height: 50,
    borderColor: "#E8E8E8",
    borderWidth: 1,
    borderRadius: 8,
    paddingTop: 16,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 15,
    fontSize: 16,
    lineHeight: 19,
    color: "#212121",
  },
  inputStylesOnFocus: {
    borderColor: "#FF6C00",
    backgroundColor: "#ffffff",
  },
});
