/**
 * Configuration object to be passed to MSAL instance on creation. 
 * For a full list of MSAL.js configuration parameters, visit:
 * https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-browser/docs/configuration.md 
 */
const msalConfig = {
    auth: {
        clientId: "1f00f0e1-56ab-4793-927b-b0d14625c247", // This is the ONLY mandatory field that you need to supply.
        authority: "https://contosowilloughbyb2c.b2clogin.com/contosowilloughbyb2c.onmicrosoft.com/B2C_1_SignUpOrSignIn",
        knownAuthorities: ["contosowilloughbyb2c.b2clogin.com"],
        redirectUri: "http://localhost:3000", // You must register this URI on Azure Portal/App Registration.
      },
    cache: {
        cacheLocation: "localStorage", // This configures where your cache will be stored
        storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
    },
};

const apiConfig = {
    b2cScopes: ["https://contosowilloughbyb2c.onmicrosoft.com/e3508248-371c-4b76-bdf1-067eaf47a556/Users.ReadWrite"],
    webApiUri: "http://20.85.173.84:8080"
};

/**
 * Scopes you add here will be prompted for user consent during sign-in.
 * By default, MSAL.js will add OIDC scopes (openid, profile, email) to any login request.
 * For more information about OIDC scopes, visit: 
 * https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-permissions-and-consent#openid-connect-scopes
 */
const loginRequest = {
    scopes: [ "openid", "offline_access" ]
};

/**
 * Add here the scopes to request when obtaining an access token for MS Graph API. For more information, see:
 * https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-browser/docs/resources-and-scopes.md
 */
const tokenRequest = {
    scopes: apiConfig.b2cScopes
};
