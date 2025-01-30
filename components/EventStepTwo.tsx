import { Image, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import EventButton from "./EventButton";
import Input from "./Input";
import TextFont from "./TextFont";
import { Colors } from "@/constants/Colors";
import ReusableButton from "./ReusableButton";

const EventStepTwo = () => {
  const [online, setOnline] = useState(true);
  const [paymentType, setPaymentType] = useState("free");
  return (
    <View>
      <View style={styles.buttons}>
        <EventButton
          firstButton="Offline / Physical"
          secondButton="Online / Virtual"
          onToggle={(arg) => setOnline(arg)}
          label="Event type & location"
          isActive={online}
        />
        <View>
          <Input
            value=""
            onChange={(value: string) => {}}
            placeholder={
              <View style={styles.placeholder}>
                <Image source={require("@/assets/images/location.png")} />
                <TextFont
                  font="NunitoSans_400Regular"
                  style={styles.placeholderText}
                >
                  Choose event location
                </TextFont>
              </View>
            }
            //   config?: any;
            error=""
            //   inputStyle?;
          />
        </View>
        <View>
          <TextFont font="NunitoSans_600SemiBold" style={{}}>
            Event payment details{" "}
          </TextFont>
          <View style={styles.paybtns}>
            <ReusableButton
              onPress={() => {
                setPaymentType("free");
              }}
              style={[
                styles.paybtn,
                paymentType === "free" && styles.activePay,
              ]}
            >
              <TextFont
                font="NunitoSans_600SemiBold"
                style={[
                  styles.paytext,
                  paymentType === "free" && styles.activeText,
                ]}
              >
                Free
              </TextFont>
            </ReusableButton>
            <ReusableButton
              onPress={() => {
                setPaymentType("free_and_paid");
              }}
              style={[
                styles.paybtn,
                paymentType === "free_and_paid" && styles.activePay,
              ]}
            >
              <TextFont
                font="NunitoSans_600SemiBold"
                style={[
                  styles.paytext,
                  paymentType === "free_and_paid" && styles.activeText,
                ]}
              >
                Free with paid options
              </TextFont>
            </ReusableButton>
            <ReusableButton
              onPress={() => {
                setPaymentType("paid");
              }}
              style={[
                styles.paybtn,
                paymentType === "paid" && styles.activePay,
              ]}
            >
              <TextFont
                font="NunitoSans_600SemiBold"
                style={[
                  styles.paytext,
                  paymentType === "paid" && styles.activeText,
                ]}
              >
                Strictly paid
              </TextFont>
            </ReusableButton>
          </View>
          <View>
            <TextFont font="NunitoSans_600SemiBold" style={styles.label}>
              Secure password
            </TextFont>
            <Input
              value=""
              onChange={(value: string) => {}}
              placeholder={
                <View style={styles.placeholder}>
                  <Image source={require("@/assets/images/lock.png")} />
                  <TextFont
                    font="NunitoSans_400Regular"
                    style={styles.placeholderText}
                  >
                    Add your event registration link
                  </TextFont>
                </View>
              }
              //   config?: any;
              error=""
              //   inputStyle?;
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default EventStepTwo;

const styles = StyleSheet.create({
  buttons: {
    paddingHorizontal: 24,
    marginTop: 32,
  },
  placeholder: {
    flexDirection: "row",
    alignItems: "center",
  },
  placeholderText: {
    color: Colors.primary.text,
    marginLeft: 5,
  },
  paybtns: {
    flexDirection: "row",
    gap: 10,
    flexWrap: "wrap",
    marginTop: 16,
    marginBottom: 30,
  },
  paybtn: {
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 8,
    borderColor: Colors.primary.line,
    borderWidth: 1,
  },
  paytext: {
    color: "#474E60",
  },
  activePay: {
    backgroundColor: "#000",
    borderWidth: 0,
  },
  activeText: {
    color: "#fff",
  },
  label: {
    marginBottom: 5,
    fontSize: 14,
  },
});
