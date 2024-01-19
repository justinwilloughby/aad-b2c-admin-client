import { LogLevel, PublicClientApplication } from '@azure/msal-browser';

// Config object to be passed to Msal on creation
export const msalConfig = {
    auth: {
        clientId: "1f00f0e1-56ab-4793-927b-b0d14625c247", // This is the ONLY mandatory field that you need to supply.
        authority: "https://contosowilloughbyb2c.b2clogin.com/contosowilloughbyb2c.onmicrosoft.com/B2C_1_SignUpOrSignIn",
        knownAuthorities: ["contosowilloughbyb2c.b2clogin.com"],
        redirectUri: "http://localhost:5173", // You must register this URI on Azure Portal/App Registration.
    },
    cache: {
        cacheLocation: "localStorage", // This configures where your cache will be stored
        storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
    },
    system: {
        loggerOptions: {
            loggerCallback: (level: LogLevel, message: string, containsPii: boolean) => {
                if (containsPii) {
                    return;
                }
                switch (level) {
                    case LogLevel.Error:
                        console.error(message);
                        return;
                    case LogLevel.Info:
                        console.info(message);
                        return;
                    case LogLevel.Verbose:
                        console.debug(message);
                        return;
                    case LogLevel.Warning:
                        console.warn(message);
                        return;
                    default:
                        return;
                }
            },
            logLevel: LogLevel.Verbose
        }
    }
};

export const msalInstance = new PublicClientApplication(msalConfig);

// Add here scopes for id token to be used at MS Identity Platform endpoints.
export const loginRequest = {
    scopes: ["openid", "offline_access"],
};


export const apiConfig = {
    b2cScopes: ["https://contosowilloughbyb2c.onmicrosoft.com/e3508248-371c-4b76-bdf1-067eaf47a556/Users.ReadWrite"],
    webApiUri: "http://localhost:8080"
};

export const tokenRequest = {
    scopes: apiConfig.b2cScopes
};

// Add here the endpoints for MS Graph API services you would like to use.
export const graphConfig = {
    graphMeEndpoint: 'https://graph.microsoft.com/v1.0/me',
};