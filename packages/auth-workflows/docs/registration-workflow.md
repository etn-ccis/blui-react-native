# Registration Workflow Guide

The registration workflow includes screens related to user sign-up / registration including Create Account, Create Password, Account Details, etc.

## RegistrationContextProvider

The screens in this workflow access shared data / configuration / API definitions through a `RegistrationContextProvider` which should wrap all of the relevant routes / screens.

You must supply the `RegistrationContextProvider` with the following props / data:

-   `actions`: defines the API calls / functions to execute when certain actions are performed in the UI (such as submitting the password form)
-   `language`: configures the language displayed on the screens
-   `navigate`: a function that can be called to navigate to a new route
-   `routeConfig`: an object describing the URLs you are using for the relevant routes so the workflow can correctly navigate between screens

More information about the required and optional props can found in the [API](#api) section.

## Implement RegistrationUIActions

Because this workflow package is back-end agnostic, you must provide an implementation for what happens when the user triggers certain behaviors in the UI.

The example project includes a skeleton implementation of all required functions using mocks / sleeps. You will need to replace these implementations with appropriate calls to your APIs, caching the returned data, etc. depending on the requirements of your application.

1. Create a `RegistrationUIActions.ts` file
    - This file will handle the implementation of the registration related actions (such as create password, verify code, and create account).
    - You can copy this file directly from the [example](../../../examples/showcase/src/actions/RegistrationUIActions.tsx) project as a starting point and then update the implementation details if you choose.
2. You might also want to copy over the `example/src/store` and `example/src/constants` folders, which provide a very basic mechanism for storing important data using LocalStorage
    - You will want to switch this out for a more secure approach before going to production with your application.

## Example Usage

Here is an example of how you would set up the Registration workflow.

```tsx
<RegistrationContextProvider
    language={'en'}
    actions={actions}
    i18n={i18nAppInstance}
    navigate={navigate}
    routeConfig={{}}
>
    <ErrorContextProvider>
        <RegistrationWorkflow>
            <EulaScreen />
            <CreateAccountScreen />
            <VerifyCodeScreen />
            <CreatePasswordScreen />
            <AccountDetailsScreen />
            ...
        </RegistrationWorkflow>
    </ErrorContextProvider>
</RegistrationContextProvider>
```

## API

### RegistrationContextProviderProps

| Prop Name     | Type                        | Description                                                                                                                                                             | Default |
| ------------- | --------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| actions\*     | `RegistrationUIActions`     | An object of functions that are used to manage the authentication workflow. See [RegistrationUIActions](#registrationuiactions) for more information                    |         |
| errorConfig   | `ErrorContextProviderProps` | An object that is used to configure error handling within the workflow. See [Error Management](./error-management.md) for more information.                             |         |
| i18n          | `i18n`                      | An optional i18n object that is used to translate the UI. This is only needed if you want to use custom translation keys / languages inside any of the workflow screens |         |
| language\*    | `string`                    | The language code specifying which language to use for the UI                                                                                                           | `'en'`  |
| navigate\*    | `(url: string) => void`     | A function that is used to navigate to a new URL. This is used to navigate to the various screens of the workflow.                                                      |         |
| routeConfig\* | `RouteConfig`               | An object that defines the various routes for the workflow. See [RouteConfig](#routeconfig) for more information.                                                       |         |

### RegistrationUIActions

| Prop Name                       | Type                                                                                                                            | Description                                                                                                                                                                                    | Default                                                                                                                                           |
| ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| acceptEula                      | `() => Promise<void>`                                                                                                           | A function that is called when the user has accepted the Eula and hit the Next button.                                                                                                         |                                                                                                                                                   |
| completeRegistration            | `(userData: {}) => Promise<{ email: string; organizationName: string }>`                                                        | A function that is used to complete the registration workflow. This function will be called when the user clicks the Next button on the last registration workflow screen.                     |                                                                                                                                                   |
| createPassword                  | `(password: string) => Promise<boolean>`                                                                                        | A function that is used to create password. This function will be called when the user clicks the Next button on the Create Password screen.                                                   |                                                                                                                                                   |
| loadEula                        | `(language: string) => Promise<string>`                                                                                         | A function that is used to load the Eula content. This function will be called when the Eula screen is loaded.                                                                                 |                                                                                                                                                   |
| requestRegistrationCode         | `(email: string) => Promise<string>`                                                                                            | A function that is used to request a registration code. This function will be called when the user clicks the Next button on the Create Account screen or Resend button on Verify Code screen. |                                                                                                                                                   |
| setAccountDetails               | `(details: { firstName: string; lastName: string; extra?: { [key: string]: boolean \| string \| number }}) => Promise<boolean>` | A function that is used to set account details. This function will be called when the user clicks the Next button on the Account Details screen.                                               |                                                                                                                                                   |
| validateUserRegistrationRequest | `(validationCode: string, validationEmail?: string) => Promise<{codeValid: boolean                                              | string; accountExists?: boolean}>`                                                                                                                                                             | A function that is used to verify registration code. This function will be called when the user clicks the Next button on the Verify Code screen. |

### RouteConfig

The RouteConfig is an object that specifies the paths you are using for the routes / screens in your application to facilitate navigating between screens within the workflows.

| Key             | Type     | Description                                                 | Default |
| --------------- | -------- | ----------------------------------------------------------- | ------- |
| FORGOT_PASSWORD | `string` | The URL path for the Forgot Password screen                 |         |
| LOGIN           | `string` | The URL path for the Login screen                           |         |
| REGISTER_INVITE | `string` | The URL path for the invitation-based registration workflow |         |
| REGISTER_SELF   | `string` | The URL path for the self-registration workflow             |         |
| RESET_PASSWORD  | `string` | The URL path for the Reset Password screen                  |         |
| SUPPORT         | `string` | The URL path for the Contact/Support screen                 |         |

### ScreenData

| Prop Name      | Type                                                                     | Description                                                                     | Default |
| -------------- | ------------------------------------------------------------------------ | ------------------------------------------------------------------------------- | ------- |
| AccountDetails | `{ firstName: string; lastName: string ; extra?: { [key: string]: any }` | An object of data of all screens available in the Registration Workflow Context |         |
| CreateAccount  | `{ emailAddress: string }`                                               | Stores email address of Create Account Screen.                                  |         |
| CreatePassword | `{ password: string; confirmPassword: string }`                          | Stores password and confirmPassword of Create Password Screen.                  |         |
| Eula           | `{ accepted: boolean }`                                                  | Contains data to indicate Eula is accepted or not.                              |         |
| Other          | `{ [key: string]: { [key: string]: any } }`                              | Stores data of custom screen.                                                   |         |
| VerifyCode     | `{ code: string }`                                                       | Stores code of Verify Code Screen.                                              |         |

### RegistrationWorkflowContextProps

| Prop Name            | Type                                   | Description                                                                                                                        | Default |
| -------------------- | -------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ------- |
| currentScreen        | `number`                               | The current screen in the registration workflow                                                                                    |         |
| isInviteRegistration | `boolean`                              | Indicates whether this workflow is for invitation-based registration.                                                              |         |
| nextScreen           | `(data: IndividualScreenData) => void` | Update the data of the current screen while navigating to the next screen in the Registration Workflow Context.                    |         |
| previousScreen       | `(data: IndividualScreenData) => void` | Update the data of the current screen while navigating to the previous screen in the Registration Workflow Context.                |         |
| resetScreenData      | `() => void`                           | Reset collected data/inputs of Registration Workflow.                                                                              |
| screenData           | `ScreenData`                           | An object of data of all screens available in the Registration Workflow Context. Check [ScreenData](#screendata) for more details. |         |
| totalScreens         | `number`                               | The total number of screens in the registration workflow.                                                                          |         |
| updateScreenData     | `(data: IndividualScreenData) => void` | Updates collected data/inputs throughout the Registration Workflow.                                                                |         |
| eulaIsHtml           | `boolean`                              | If true, the EULA content is HTML and should be rendered as such.                                                                  |         |
