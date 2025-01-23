import { View, Text, Image } from "react-native";
import React from "react";
import Success from "@/components/Success";
import { useRouter } from "expo-router";

const ResetSuccess = () => {
  const router = useRouter();
  return (
    <Success
      message="Password reset successfully!"
      btnText="Login to your account"
      caption="Oluwatobi, we’re glad to have you onboard. See you around adventurer.
     "
      onNext={() => router.push("/(tabs)/explore")}
    >
      <Image source={require("@/assets/images/lock-colored.png")} />
    </Success>
  );
};

export default ResetSuccess;
