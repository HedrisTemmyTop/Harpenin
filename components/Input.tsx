import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { ReactNode, useState } from "react";
import { Colors } from "@/constants/Colors";
import TextFont from "./TextFont";

interface PropTypes {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string | ReactNode;
  label?: string;
  config?: any;
  error?: string;
  containerStyle?: any;
  inputStyle?: any;
  ref?: any;
}

const Input = ({
  error,
  value,
  onChange,
  placeholder,
  label,
  config,
  inputStyle,
  ref,
  containerStyle,
}: PropTypes) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={[styles.container, containerStyle]} ref={ref}>
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
            inputStyle,
            isFocused && styles.foused,
            value && styles.filled,
            error && styles.inputError,
          ]}
          value={value}
          onChangeText={onChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          {...config}
        />
        <Text style={styles.error}> {error}</Text>
      </View>
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxHeight: "100%",
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
    backgroundColor: Colors.primary.border,
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
  error: {
    color: Colors.primary.error,
    marginTop: 5,
  },
  inputError: {
    borderColor: Colors.primary.error,
  },
});
