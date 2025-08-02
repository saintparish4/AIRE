import Constants from "expo-constants";

interface Environment {
    API_BASE_URL: string;
    HIFI_API_URL: string;
    ENVIRONMENT: "development" | "staging" | "production";
    APP_VERSION: string; 
}

const getEnvironment = (): Environment => {
    const env = Constants.expoConfig?.extra?.environment || "development";

    const config: Record<string, Environment> = {
        development: {
            API_BASE_URL: "http://localhost:3000/api",
            HIFI_API_URL: "http://sandbox.hifi.finance/api",
            ENVIRONMENT: "development",
            APP_VERSION: '1.0.0-dev', 
        },
        staging: {
            API_BASE_URL: "https://staging-api.aire.com/api",
            HIFI_API_URL: "https://sandbox.hifi.finance/api",
            ENVIRONMENT: "staging",
            APP_VERSION: '1.0.0-staging', 
        },
        production: {
            API_BASE_URL: "https://api.aire.com/api",
            HIFI_API_URL: "https://api.hifi.finance/api",
            ENVIRONMENT: "production",
            APP_VERSION: '1.0.0-prod', 
        },
    };

    return config[env] || config.development;
};

export const ENV = getEnvironment(); 