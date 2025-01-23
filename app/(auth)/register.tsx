import RegisterForm from "@/components/RegisterForm";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "expo-router";
import React from "react";

export default function RegisterScreen() {
  const { login } = useAuth();
  const router = useRouter();

  const handleLogin = () => {
    // login("user123"); // Simulate login
    // router.replace("/home"); // Navigate to home after login
  };

  return <RegisterForm />;
}
