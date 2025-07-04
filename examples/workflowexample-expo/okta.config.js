export default {
    oidc: {
        clientId: process.env.EXPO_PUBLIC_OKTA_CLIENT_ID,
        redirectUri: process.env.EXPO_PUBLIC_OKTA_REDIRECT_URI,
        endSessionRedirectUri: process.env.EXPO_PUBLIC_OKTA_LOGOUT_REDIRECT_URI,
        discoveryUri: process.env.EXPO_PUBLIC_OKTA_ISSUER,
        scopes: ['openid', 'profile', 'offline_access', 'groups'],
        requireHardwareBackedKeyStore: false,
    },
};
