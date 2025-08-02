import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert, ScrollView } from 'react-native';
import { router } from 'expo-router';
import { LoginForm } from '@/components/forms/loginForm';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/hooks/useAuth';
import type { LoginRequest } from '@/types/auth';

export default function LoginScreen() {
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();

  const handleLogin = async (credentials: LoginRequest) => {
    try {
      setLoading(true);
      await login(credentials);
      // router.replace('/(auth)/dashboard');
    } catch (error) {
      Alert.alert(
        'Login Failed',
        error instanceof Error ? error.message : 'Please check your credentials and try again.'
      );
    } finally {
      setLoading(false);
    }
  };

  const handleForgotPassword = () => {
    // Navigate to forgot password screen
    Alert.alert('Forgot Password', 'This feature will be implemented in Phase 2');
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Welcome Back</Text>
      <Text style={styles.subtitle}>Sign in to your Aire account</Text>

      <LoginForm onSubmit={handleLogin} loading={loading} />

      <Button
        title="Forgot Password?"
        onPress={handleForgotPassword}
        variant="outline"
        size="small"
      />

      <View style={styles.footer}>
        <Text style={styles.footerText}>Don't have an account? </Text>
        <Button
          title="Create Account"
          onPress={() => router.push('/(public)/register')}
          variant="outline"
          size="small"
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1C1C1E',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#8E8E93',
    textAlign: 'center',
    marginBottom: 32,
  },
  footer: {
    marginTop: 32,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 16,
    color: '#8E8E93',
    marginBottom: 12,
  },
});