# Login / Authentication Workflow Guide

The authentication workflow includes screens related to user authentication including Login, Forgot Password, Reset Password, etc.


## AuthContextProvider

The screens in this workflow access shared data / configuration / API definitions through an `AuthContextProvider` which should wrap all of the relevant routes / screens.

You must supply the `AuthContextProvider` with the following props / data:
-   `actions`: defines the API calls / functions to execute when certain actions are performed in the UI (such as pressing the Login button)
-   `language`: configures the language displayed on the screens
-   `navigate`: a function that can be called to navigate to a new route
-   `routeConfig`: an object describing the URLs you are using for the relevant routes so the workflow can correctly navigate between screens

More information about the required and optional props can found in the [API](#api) section.

## Implement AuthUIActions

Because this workflow package is back-end agnostic, you must provide an implementation for what happens when the user triggers certain behaviors in the UI.

The example project includes a skeleton implementation of all required functions using mocks / sleeps. You will need to replace these implementations with appropriate calls to your APIs, caching the returned data, etc. depending on the requirements of your application.

1. Create a `AuthUIActions.ts` file
    - This file will handle the implementation of the authentication related actions (such as login and forgot password).
    - You can copy this file directly from the [example](../../../examples/showcase/src/actions/AuthUIActions.tsx) project as a starting point and then update the implementation details if you choose.
2. You might also want to copy over the `example/src/store` and `example/src/constants` folders, which provide a very basic mechanism for storing important data using LocalStorage
    -   You will want to switch this out for a more secure approach before going to production with your application.

## Okta Example Usage

### OktaAuthContextProvider

The login screen in this workflow accesses shared data / configuration / API definitions through an `OktaAuthContextProvider` which should wrap the screen. We recommend using Okta to manage the additional password-related screens (Forgot / Reset / Change), but if you prefer to use those screens from this workflow, you'll need to wrap those screens with the `AuthContextProvider` (see custom workflow below).

You must supply the `OktaAuthContextProvider` with the following props / data:
-   `language`: configures the language displayed on the screens
-   `navigate`: a function that can be called to navigate to a new route
-   `routeConfig`: an object describing the URLs you are using for the relevant routes so the workflow can correctly navigate between screens

More information about the required and optional props can found in the [API](#okta-auth-context-provider-api) section.

### Example

Each feature/screen from the Okta Auth Workflow that you wish to use should be rendered on a separate route.

```tsx
 <OktaAuthContextProvider 
    language={'en'} 
    navigate={navigate} 
    routeConfig={{}}
 >
    <OktaRedirectLoginScreen />
 </OktaAuthContextProvider>
```

For a detailed explanation of setting up routes, see the [Routing](./routing.md) guide.

### Okta Auth Context Provider API

### OktaAuthContextProviderProps

| Prop Name | Type | Description | Default |
|---|---|---|---|
| language* | `string` | The language code specifying which language to use for the UI | `'en'` |
| navigate* | `(url: string) => void` | A function that is used to navigate to a new URL. This is used to navigate to the various screens of the authentication workflow. |  |
| routeConfig* | `RouteConfig` | An object that defines the various routes for the authentication workflow. See [RouteConfig](#routeconfig) for more information. |  |
| i18n | `i18n` | An optional i18n object that is used to translate the UI. This is only needed if you want to use custom translation keys / languages inside any of the workflow screens |  |

## Example Usage

Here is an example of how you would set up the Login workflow.

Each feature/screen from the Auth Workflow that you wish to use should be rendered on a separate route.

```tsx
<AuthContextProvider
    actions={actions}
    language={'en'}
    navigate={navigate}
    routeConfig={{}}
    rememberMeDetails={{}}
>
    <ErrorContextProvider>
        <Login />
        <ForgotPasswordScreen />
        <ContactSupportScreen />
        <ResetPasswordScreen />
    </ErrorContextProvider>
</AuthContextProvider>
```

## API

### AuthContextProviderProps

| Prop Name | Type | Description | Default |
|---|---|---|---|
| actions* | `AuthUIActions` | An object of functions that are used to manage the authentication workflow. See [AuthUIActions](#authuiactions) for more information |  |
| language* | `string` | The language code specifying which language to use for the UI | `'en'` |
| navigate* | `(url: string) => void` | A function that is used to navigate to a new URL. This is used to navigate to the various screens of the authentication workflow. |  |
| routeConfig* | `RouteConfig` | An object that defines the various routes for the authentication workflow. See [RouteConfig](#routeconfig) for more information. |  |
| i18n | `i18n` | An optional i18n object that is used to translate the UI. This is only needed if you want to use custom translation keys / languages inside any of the workflow screens |  |
| rememberMeDetails | `{ email?: string, rememberMe?: boolean }` | An optional object that is used to initialize the data on the Login screen. If not provided, the email field will be empty and the remember me checkbox will be unchecked. |  |
| errorConfig | `ErrorContextProviderProps` | An object that is used to configure error handling within the workflow. See [Error Management](./error-management.md) for more information. |  |


### AuthUIActions

| Prop Name | Type | Description | Default |
|---|---|---|---|
| initiateSecurity | `() => Promise<void>` | This function will be called when the AuthContext is first loaded. It's an opportunity for you to initialize the security state of the application. |  |
| logIn | `(email: string, password: string, rememberMe: boolean) => Promise<void>` | A function that is used to log in a user. This function will be called when the user clicks the Login button on the Login screen. |  |
| forgotPassword | `(email: string) => Promise<void>` | A function that is used to request a password reset code. This function will be called when the user clicks the Next button on the Forgot Password screen. |  |
| verifyResetCode | `(code: string, email?: string) => Promise<void>` | This function is called on the ResetPassword screen to validate the code passed in the URL |  |
| setPassword | `(code: string, password: string, email?: string) => Promise<void>` | A function that is used to set a new password. This function will be called when the user clicks the Next button on the Reset Password screen. |  |
| changePassword | `(oldPassword: string, newPassword: string) => Promise<void>` | A function that is used to change a user's password. This function will be called when the user clicks the Next button in the Change Password dialog. |  |

### RouteConfig

The RouteConfig is an object that specifies the paths you are using for the routes / screens in your application to facilitate navigating between screens within the workflows.

| Key | Type | Description | Default |
|---|---|---|---|
| LOGIN | `string` | The URL path for the Login screen |  |
| FORGOT_PASSWORD | `string` | The URL path for the Forgot Password screen |  |
| RESET_PASSWORD | `string` | The URL path for the Reset Password screen |  |
| REGISTER_INVITE | `string` | The URL path for the invitation-based registration workflow |  |
| REGISTER_SELF | `string` | The URL path for the self-registration workflow |  |
| SUPPORT | `string` | The URL path for the Contact/Support screen |  |