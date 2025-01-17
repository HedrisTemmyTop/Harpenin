import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { useAuth } from "@/context/AuthContext";

export default function RegisterScreen() {
  const { login } = useAuth();
  const router = useRouter();

  const handleLogin = () => {
    // login("user123"); // Simulate login
    router.replace("/home"); // Navigate to home after login
  };

  return (
    <View>
      <Text>hELLO WORLD</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 24, marginBottom: 20 },
});
