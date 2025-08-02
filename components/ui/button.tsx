import React from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ActivityIndicator,
} from "react-native";

interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: "primary" | "secondary" | "outline";
  size?: "small" | "medium" | "large";
  disabled?: boolean;
  loading?: boolean;
  testID?: string;
}

export const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  variant = "primary",
  size = "medium",
  disabled = false,
  loading = false,
  testID,
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        styles[variant],
        styles[size],
        (disabled || loading) && styles.disabled,
      ]}
      onPress={onPress}
      disabled={disabled || loading}
      testID={testID}
    >
      {loading ? (
        <ActivityIndicator color={variant === "primary" ? "#fff" : "#007AFF"} />
      ) : (
        <Text style={[styles.text, styles[`text_${variant}`]]}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    button: {
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row', 
    },
    primary: {
        backgroundColor: '#007AFF',
    },
    secondary: {
        backgroundColor: '#F2F2F7'
    },
    outline: {
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: '#007AFF', 
    },
    small: {
        paddingHorizontal: 16,
        paddingVertical: 8,
        minHeight: 36,
    },
    medium: {
        paddingHorizontal: 24,
        paddingVertical: 12,
        minHeight: 48,
    },
    large: {
        paddingHorizontal: 32,
        paddingVertical: 16,
        minHeight: 56,
    },
    disabled: {
        opacity: 0.5, 
    },
    text: {
        fontWeight: '600',
        fontSize: 16, 
    },
    text_primary: {
        color: '#fff', 
    },
    text_secondary: {
        color: '#007AFF',
    },
    text_outline: {
        color: '#007AFF',
    },
});
