import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <Text>Settings</Text>
      <Link href="/settings/some-settings-screen">
        <Text>Go to Some Settings Screen</Text>
      </Link>
    </View>
  );
}
