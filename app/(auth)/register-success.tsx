import Success from "@/components/Success";
import { useRouter } from "expo-router";
import React from "react";
import { Image } from "react-native";

const RegisterationSuccess = () => {
  const router = useRouter();
  return (
    <Success
      message="Email already verified!"
      btnText="Show me what’s Harpenin 👀"
      caption="Oluwatobi, we’re glad to have you onboard. See you around adventurer.
     "
      onNext={() => router.push("/(tabs)/explore")}
    >
      <Image source={require("@/assets/images/ic_round-mark-email-read.png")} />
    </Success>
  );
};

export default RegisterationSuccess;
