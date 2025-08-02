// Welcome Screen
import { Button } from "@/components/ui/button";
import { router } from "expo-router";
import { Image, StyleSheet, Text, View } from "react-native";

export default function WelcomeScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={require("@/assets/images/bgtest1.jpg")}
        style={styles.backgroundImage}
        resizeMode="cover"
      />
      <View style={styles.overlay}>
        <View style={styles.content}>
          <Image
            source={require("@/assets/images/jotai.png")}
            style={styles.logo}
            resizeMode="contain"
          />

          <Text style={styles.title}>Welcome to Aire</Text>
          <Text style={styles.subtitle}>
            Receive payments in USD, convert to stablecoins, and withdraw to your
            local bank account in 50+ currencies.
          </Text>
        </View>

        <View style={styles.actions}>
          <Button
            title="Create Account"
            onPress={() => router.push("/(public)/register")}
            size="large"
          />
          <Button
            title="Sign In"
            onPress={() => router.push("/(public)/login")}
            variant="outline"
            size="large"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    padding: 20,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#ffffff",
    textAlign: "center",
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 16,
    color: "#f0f0f0",
    textAlign: "center",
    lineHeight: 22,
    paddingHorizontal: 20,
  },
  actions: {
    gap: 12,
  },
});
