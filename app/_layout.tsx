import { SafeAreaView, Text, StyleSheet } from "react-native";
import { Tabs, TabList, TabTrigger, TabSlot } from "expo-router/ui";

// Defining the layout of the custom tab navigator
export default function Layout() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Tabs>
        <TabSlot />
        <TabList style={styles.tabList}>
          <TabTrigger name="home" href="/(home)" style={styles.tabTrigger}>
            <Text>Home</Text>
          </TabTrigger>
          <TabTrigger
            name="settings"
            href="/settings"
            style={styles.tabTrigger}
          >
            <Text>Settings</Text>
          </TabTrigger>
        </TabList>
      </Tabs>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  tabList: {
    justifyContent: "space-around",
    height: 40
  },
  tabTrigger: {
    flex: 1,
    height: "100%",
    justifyContent: "center",
    alignItems: "center"
  }
});

// Expo router default tabs
// import { Tabs } from "expo-router";

// export default function Layout() {
//   return (
//     <Tabs screenOptions={{ headerShown: false }}>
//       <Tabs.Screen name="(home)" />
//       <Tabs.Screen name="settings" />
//     </Tabs>
//   );
// }
