import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import type { LoginRequest } from '../../types/auth';

interface LoginFormProps {
    onSubmit: (data: LoginRequest) => void;
    loading?: boolean;
}

interface FormData {
    email: string;
    password: string;
}

export const LoginForm: React.FC<LoginFormProps> = ({ onSubmit, loading = false }) => {
    const {
        control,
        handleSubmit,
        formState: { errors, isValid }, 
    } = useForm<FormData>({
        defaultValues: {
            email: '',
            password: '', 
        }, 
    });

    const validateEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email) || 'Please enter a valid email address';
    };

    const validatePassword = (password: string) => {
        return password.length >= 6 || 'Password must be at least 6 characters';
    };

    return (
        <View style={styles.container}>
            <Controller 
                control={control}
                name="email"
                rules={{
                    required: 'Email is required',
                    validate: validateEmail,
                }}
                render={({ field: {
                    onChange,
                    value,
                } }) => (
                    <Input
                      label="Email"
                      placeholder="Enter your email"
                      value={value}
                      onChangeText={onChange}
                      keyboardType="email-address"
                      error={errors.email?.message}
                      testID="email-input"
                    />
                )}
            />

            <Controller
                control={control}
                name="password"
                rules={{
                    required: 'Password is required',
                    validate: validatePassword,
                }}
                render={({ field: { onChange, value } }) => (
                    <Input
                        label="Password"
                        placeholder="Enter your password"
                        value={value}
                        onChangeText={onChange}
                        secureTextEntry
                        error={errors.password?.message}
                        testID="password-input"
                    />
                )}
            />

            <Button
                title="Sign In"
                onPress={handleSubmit(onSubmit)}
                loading={loading}
                disabled={!isValid || loading} 
                testID="submit-button"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20, 
    }
})