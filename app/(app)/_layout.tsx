import { Stack } from "expo-router";
import React from "react";

export default function AppLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,

        gestureEnabled: true,
        gestureDirection: "horizontal",
      }}
    >
      <Stack.Screen name="create" />
    </Stack>
  );
}
