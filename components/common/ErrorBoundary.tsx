import React, { Component, ReactNode } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "../ui/button";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: any) {
    console.error("Error caught by ErrorBoundary:", error, errorInfo);
    // Log to ccrash reproting service
  }

  handleReload = () => {
    this.setState({ hasError: false, error: undefined });
  };

  render() {
    if (this.state.hasError) {
      return (
        <View style={styles.container}>
          <Text style={styles.title}>Oops! Something went wrong.</Text>
          <Text style={styles.message}>
            We&apos;re sorry, but an unexpected error occurred. Please try again
            later.
          </Text>
          {__DEV__ && this.state.error && (
            <Text style={styles.errorDetails}>
              {this.state.error.toString()}
            </Text>
          )}
          <Button title="Try Again" onPress={this.handleReload} />
        </View>
      );
    }
    return this.props.children;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1c1c1e",
    marginBottom: 16,
    textAlign: "center",
  },
  message: {
    fontSize: 16,
    color: "#8e8e93",
    textAlign: "center",
    marginBottom: 24,
    lineHeight: 22,
  },
  errorDetails: {
    fontSize: 12,
    color: "#ff3b30",
    textAlign: "center",
    marginBottom: 24,
    fontFamily: "monospace",
  },
});
