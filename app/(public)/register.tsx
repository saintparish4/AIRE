import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert, ScrollView } from 'react-native';
import { router } from 'expo-router';
import { RegisterForm } from '@/components/forms/registerForm';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/hooks/useAuth';
import type { RegisterRequest } from '@/types/auth';

export default function RegisterScreen() {
  const [loading, setLoading] = useState(false);
  const { register } = useAuth();

  const handleRegister = async (userData: RegisterRequest) => {
    try {
      setLoading(true);
      await register(userData);
      //router.replace('/(auth)/dashboard');
    } catch (error) {
      Alert.alert(
        'Registration Failed',
        error instanceof Error ? error.message : 'Please try again.'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Create Account</Text>
      <Text style={styles.subtitle}>Join Global Payout and start receiving payments worldwide</Text>

      <RegisterForm onSubmit={handleRegister} loading={loading} />

      <View style={styles.footer}>
        <Text style={styles.footerText}>Already have an account? </Text>
        <Button
          title="Sign In"
          onPress={() => router.push('/(public)/login')}
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
    lineHeight: 22,
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