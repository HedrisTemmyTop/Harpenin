import { View, Text } from "react-native";
import React from "react";
import VerifyEmail from "@/components/VerifyEmail";
import { useLocalSearchParams } from "expo-router";

const Verify = () => {
  const { email, firstname } = useLocalSearchParams();

  return <VerifyEmail email={email} firstname={firstname} />;
};

export default Verify;
