import { Tabs, usePathname } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import TextFont from "@/components/TextFont";
import { StyleSheet, View } from "react-native";
import { Colors } from "@/constants/Colors";
import { ReminderProvider } from "@/context/ReminderContext";

export default function TabLayout() {
  const pathname = usePathname();

  return (
    <ReminderProvider>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            position: "relative",
            height: 110,
            paddingHorizontal: 16,
            paddingVertical: 16,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: -4 },
            shadowOpacity: 0.05,
            shadowRadius: 23,
            elevation: 5,
            alignItems: "center",
            justifyContent: "space-around",
          },
          tabBarLabelStyle: {
            fontSize: 14,
            fontWeight: 800,
            color: "#000",
          },
          tabBarActiveTintColor: "black",
          tabBarInactiveTintColor: "black",
        }}
      >
        <Tabs.Screen
          name="explore"
          options={{
            tabBarLabel: ({ focused }) =>
              pathname === "/explore" && (
                <View style={styles.tabBar}>
                  <TextFont
                    font="NunitoSans_800ExtraBold"
                    style={[styles.tab, focused && styles.focusedTab]}
                  >
                    Explore
                  </TextFont>
                  {focused && <View style={styles.after}></View>}
                </View>
              ),
            tabBarIcon: ({ color, focused }) =>
              pathname !== "/explore" && (
                <Ionicons
                  style={styles.icon}
                  name="search-outline"
                  size={24}
                  color={focused ? "black" : color}
                />
              ),
          }}
        />
        <Tabs.Screen
          name="my_events"
          options={{
            tabBarLabel: ({ focused }) =>
              pathname === "/my_events" && (
                <View style={styles.tabBar}>
                  <TextFont
                    font="NunitoSans_800ExtraBold"
                    style={[styles.tab, focused && styles.focusedTab]}
                  >
                    My Events
                  </TextFont>
                  {focused && <View style={styles.after}></View>}
                </View>
              ),
            tabBarIcon: ({ color, focused }) =>
              pathname !== "/my_events" && (
                <Ionicons
                  style={styles.icon}
                  name="bookmark-outline"
                  size={24}
                  color={focused ? "black" : color}
                />
              ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            tabBarLabel: ({ focused }) =>
              pathname === "/profile" && (
                <View style={styles.tabBar}>
                  <TextFont
                    font="NunitoSans_800ExtraBold"
                    style={[styles.tab, focused && styles.focusedTab]}
                  >
                    Profile
                  </TextFont>
                  {focused && <View style={styles.after}></View>}
                </View>
              ),
            tabBarIcon: ({ color, focused }) =>
              pathname !== "/profile" && (
                <Ionicons
                  style={styles.icon}
                  name="person-outline"
                  size={24}
                  color={focused ? "black" : color}
                />
              ),
          }}
        />
      </Tabs>
    </ReminderProvider>
  );
}

const styles = StyleSheet.create({
  after: {
    width: 4,
    height: 4,
    backgroundColor: Colors.primary.button,
    marginTop: 2,
  },
  tab: {
    color: "#000",
    fontSize: 16,
    // display: "none"
  },
  focusedTab: {
    color: "black",
  },
  tabBar: {
    alignItems: "center",
  },
  icon: {
    textAlign: "center",
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    top: 27.5,
    // transform: [{ translateY: 55 }],
    // flex: 1,
    // backgroundColor: "red",
  },
});
