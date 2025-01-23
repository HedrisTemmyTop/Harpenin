import React from "react";
import { Redirect } from "expo-router";
import { useAuth } from "@/context/AuthContext";

export default function Index() {
  const { user, token } = useAuth();

  if (!user && !token) {
    return <Redirect href="/(auth)/welcome" />;
  }

  return <Redirect href="/(tabs)/explore" />;
}
