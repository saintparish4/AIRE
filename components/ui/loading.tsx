import React from "react";
import { View, ActivityIndicator, Text, StyleSheet } from "react-native";

interface LoadingProps {
  size?: "small" | "large";
  text?: string;
  overlay?: boolean;
}

export const Loading: React.FC<LoadingProps> = ({
  size = "large",
  text,
  overlay = false,
}) => {
  const containerStyle = overlay
    ? [styles.container, styles.overlay]
    : styles.container;

  return (
    <View style={containerStyle}>
      <ActivityIndicator size={size} color="#007AFF" />
      {text && <Text style={styles.text}>{text}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 999,
  },
  text: {
    marginTop: 12,
    fontSize: 16,
    color: "#8e8e93",
    textAlign: "center",
  },
});
