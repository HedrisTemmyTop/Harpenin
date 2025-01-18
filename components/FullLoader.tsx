import React, { useEffect } from "react";
import { Animated, Image, StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const FullLoader = () => {
  // Create an animated value for the fade effect
  const fadeAnim = new Animated.Value(0.8); // Initially invisible

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        // Fade out
        Animated.timing(fadeAnim, {
          toValue: 0.5, // Fully invisible
          duration: 1000, // Duration for fade-out (2 seconds)
          useNativeDriver: true, // Using native driver for performance
        }),
        // Fade in
        Animated.timing(fadeAnim, {
          toValue: 0.75, // Fully visible
          duration: 1000, // Duration for fade-in (2 seconds)
          useNativeDriver: true, // Using native driver for performance
        }),
      ])
    ).start(); // Start the animation loop
  }, []);

  return (
    // Wrap the entire container in an Animated.View
    <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
      <View style={styles.wrapper}>
        <Image source={require("@/assets/images/smallLogo.png")} />

        {/* Apply the Linear Gradient with static background */}
        <LinearGradient
          colors={["#EEEEEE", "#EEEEEE", "#B3B3C0", "#EEEEEE", "#EEEEEE"]} // Gradient colors
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          locations={[0.0453, 0.2475, 0.4806, 0.7249, 0.9392]} // Define exact positions (optional)
          style={styles.gradientBackground}
        />
      </View>
    </Animated.View>
  );
};

export default FullLoader;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 2,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // opacity: 0.2,
    backgroundColor: "white", // Optional: background color of the whole container
  },

  gradientBackground: {
    justifyContent: "center",
    alignItems: "center",
    height: 6, // Adjust gradient height as needed
    width: 74, // Adjust gradient width as needed
    borderRadius: 10,
    marginTop: 10,
  },
});
