import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { Colors } from "@/constants/Colors";
import TextFont from "./TextFont";

interface PropTypes {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  label?: string;
  config?: any;
}

const Input = ({ value, onChange, placeholder, label, config }: PropTypes) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={styles.container}>
      {label && (
        <TextFont
          font="NunitoSans_600SemiBold"
          style={[styles.label, (isFocused || value) && styles.activeLabel]}
        >
          {label}
        </TextFont>
      )}

      <View style={styles.inputWrapper}>
        {!value && (
          <TextFont font="NunitoSans_400Regular" style={styles.placeholder}>
            {placeholder}
          </TextFont>
        )}
        <TextInput
          style={[
            styles.input,
            isFocused && styles.foused,
            value && styles.filled,
          ]}
          value={value}
          onChangeText={onChange}
          onFocus={() => setIsFocused(true)}
          {...config}
        />
      </View>
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputWrapper: {
    position: "relative",
  },
  input: {
    height: 52,
    borderWidth: 1,
    borderColor: Colors.primary.line,
    borderRadius: 10,
    color: "#000",
    padding: 16,
  },
  placeholder: {
    position: "absolute",
    marginTop: 15,
    left: 15,
    fontSize: 16,
    color: Colors.primary.text,
  },
  foused: {
    borderColor: Colors.tertiary.border,
    // backgroundColor: Colors.primary.border,
  },
  label: {
    fontSize: 13,
    marginBottom: 10,
    color: "#000",
  },
  activeLabel: {
    color: Colors.purple.primary,
  },
  filled: {
    borderColor: "#000",
  },
});
