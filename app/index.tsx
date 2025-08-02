import { Loading } from "@/components/ui/loading";
import { useAuth } from "@/hooks/useAuth";
import { router } from "expo-router";
import { useEffect } from "react";
import { Text, View } from "react-native";

export default function IndexScreen() {
  const { isAuthenticated, isLoading } = useAuth();

  useEffect(() => {
    if (!isLoading) {
      // Add a small delay to ensure root layout is mounted
      const timer = setTimeout(() => {
        if (isAuthenticated) {
          router.replace('/(auth)/dashboard');
        } else {
          router.replace('/(public)/welcome');
        }
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [isAuthenticated, isLoading]);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Loading />
      <Text>Loading Aire...</Text>
    </View>
  ); 
}