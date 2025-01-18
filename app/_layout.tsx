import React from "react";
import { Slot, Redirect } from "expo-router";
import { AuthProvider, useAuth } from "./../context/AuthContext";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
  return (
    <AuthProvider>
      <Slot />
      {/* <AuthLoader>
      </AuthLoader> */}
      <StatusBar style={"dark"} />
    </AuthProvider>
  );
}

// function AuthLoader({ children }: { children: React.ReactNode }) {
//   const { user } = useAuth();

//   if (!user) {
//     // Redirect to login if user is not authenticated
//     return <Redirect href="/(auth)/login" />;
//   }

//   return <>{children}</>;
// }
