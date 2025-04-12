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
      <Text>Home</Text>
      <Link href="/(home)/some-other-screen">
        <Text>Go to Some Other Screen</Text>
      </Link>
    </View>
  );
}
