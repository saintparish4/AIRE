import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import type { RegisterRequest } from '../../types/auth';

interface RegisterFormProps {
    onSubmit: (data: RegisterRequest) => void;
    loading?: boolean; 
}

interface FormData extends RegisterRequest {
    confirmPassword: string; 
}

export const RegisterForm: React.FC<RegisterFormProps> = ({ onSubmit, loading = false }) => {
    const {
        control,
        handleSubmit,
        watch,
        formState: { errors, isValid },
    } = useForm<FormData>({
        defaultValues: {
            email: '',
            password: '',
            confirmPassword: '',
            firstName: '',
            lastName: '',
        },
    });

    const password = watch('password');

    const validateEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email) || 'Please enter a valid email address';
    };

    const validatePassword = (password: string) => {
        if (password.length < 8) return 'Password must be at least 8 characters';
        if (!/[A-Z]/.test(password)) return 'Password must contain at least one uppercase letter';
        if (!/[a-z]/.test(password)) return 'Password must contain at least one lowercase letter';
        if (!/[0-9]/.test(password)) return 'Password must contain at least one number';
        return true;
    };

    const validateConfirmPassword = (confirmPassword: string) => {
        return confirmPassword === password || 'Passwords do not match';
    };

    const handleFormSubmit = (data: FormData) => {
        const { confirmPassword, ...submitData } = data;
        onSubmit(submitData); 
    };

    return (
        <View style={styles.container}>
            <Controller
                control={control}
                name="firstName"
                rules={{ required: 'First name is required'  }}
                render={({ field: { onChange, value } }) => (
                    <Input
                        label="First Name"
                        placeholder="Enter your first name"
                        value={value}
                        onChangeText={onChange}
                        error={errors.firstName?.message}
                        testID="first-name-input"
                    />
                )}
            />

            <Controller
                control={control}
                name="lastName"
                rules={{ required: 'Last name is required' }}
                render={({ field: { onChange, value } }) => (
                    <Input
                        label="Last Name"
                        placeholder="Enter your last name"
                        value={value}
                        onChangeText={onChange}
                        error={errors.lastName?.message}
                        testID="last-name-input"
                    />
                )}
            />

            <Controller
                control={control}
                name="email"
                rules={{ required: 'Email is required', validate: validateEmail }}
                render={({ field: { onChange, value } }) => (
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
                rules={{ required: 'Password is required', validate: validatePassword }}
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

            <Controller
                control={control}
                name="confirmPassword"
                rules={{ required: 'Confirm password is required', validate: validateConfirmPassword }}
                render={({ field: { onChange, value } }) => (
                    <Input
                        label="Confirm Password"
                        placeholder="Confirm your password"
                        value={value}
                        onChangeText={onChange}
                        secureTextEntry
                        error={errors.confirmPassword?.message}
                        testID="confirm-password-input"
                    />
                )}
            />

            <Button
                title="Create Account"
                onPress={handleSubmit(handleFormSubmit)}
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