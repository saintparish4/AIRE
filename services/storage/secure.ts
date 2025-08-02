import * as SecureStore from "expo-secure-store";

const KEYS = {
  ACCESS_TOKEN: "access_token",
  REFRESH_TOKEN: "refresh_token",
  USER_DATA: "user_data",
  BIOMETRY_ENABLED: "biometry_enabled",
} as const;

export class SecureStorage {
  static async setItem(key: string, value: string): Promise<void> {
    try {
      await SecureStore.setItemAsync(key, value);
    } catch (error) {
      console.error("SecureStorage setItem error:", error);
      throw error;
    }
  }

  static async getItem(key: string): Promise<string | null> {
    try {
      return await SecureStore.getItemAsync(key);
    } catch (error) {
      console.error("SecureStorage getItem error:", error);
      return null;
    }
  }

  static async deleteItem(key: string): Promise<void> {
    try {
      await SecureStore.deleteItemAsync(key);
    } catch (error) {
      console.error("SecureStorage deleteItem error:", error);
    }
  }

  static async clear(): Promise<void> {
    try {
      const promises = Object.values(KEYS).map((key) =>
        SecureStore.deleteItemAsync(key).catch(() => {})
      );
      await Promise.all(promises);
    } catch (error) {
      console.error("SecureStorage clear error:", error);
    }
  }

  // Auth token methods
  static async setTokens(
    accessToken: string,
    refreshToken: string
  ): Promise<void> {
    await Promise.all([
      this.setItem(KEYS.ACCESS_TOKEN, accessToken),
      this.setItem(KEYS.REFRESH_TOKEN, refreshToken),
    ]);
  }

  static async getTokens(): Promise<{
    accessToken: string | null;
    refreshToken: string | null;
  }> {
    const [accessToken, refreshToken] = await Promise.all([
      this.getItem(KEYS.ACCESS_TOKEN),
      this.getItem(KEYS.REFRESH_TOKEN),
    ]);

    return { accessToken, refreshToken };
  }

  static async clearTokens(): Promise<void> {
    await Promise.all([
      this.deleteItem(KEYS.ACCESS_TOKEN),
      this.deleteItem(KEYS.REFRESH_TOKEN),
    ]);
  }
}
