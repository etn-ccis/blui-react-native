/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  RegistrationUIActions,
  AccountDetails,
} from '@brightlayer-ui/react-native-auth-workflow';
import Config from 'react-native-config';

const sleep = (ms: number): Promise<void> =>
  new Promise(resolve => setTimeout(resolve, ms));

function getRandomInt(max: number): number {
  return Math.floor(Math.random() * Math.floor(max));
}

function isRandomFailure(): boolean {
  const randomResponseNumber = getRandomInt(100);
  return false; // randomResponseNumber < 90;
}
let validateCodeRetries = 0;
/**
 * Example implementation of [[RegistrationUIActions]] to start with during development.
 *
 * Registration Actions to be performed based on the user's actions. The application will create appropriate actions
 * (often API calls, local network storage, credential updates, etc.) based on the actionable needs of the user.
 */
export const ProjectRegistrationUIActions: () => RegistrationUIActions =
  () => ({
    /**
     * The user wants to complete an action but must first accept the EULA.
     * The application should retrieve an application-specific EULA for the user.
     *
     * @param language  The i18n language the user is requesting for the EULA text.
     *
     * @returns Resolve with EULA, otherwise reject with an error message.
     */
    loadEula: async (): Promise<string> => {
      // await sleep(1000);

      const eulaApiUrl = `${Config.API_URL ?? ''}iam/v1/users/eula/profile`;
      try {
        const response = await fetch(eulaApiUrl, {
          headers: {'x-realm': 'eaton'},
        });

        const eulaData = await response.json();

        return eulaData;
      } catch (error: any) {
        throw new Error(error.message);
      }
    },

    /**
     * The user accepted the EULA.
     * The API should now update accepted EULA.
     *
     *
     * @returns Resolve when the server accepted the request.
     */
    acceptEula: async (): Promise<void> => {
      await sleep(800);
      if (isRandomFailure()) {
        throw new Error('Sorry, there was a problem sending your request.');
      }
    },

    requestRegistrationCode: async (email: string): Promise<string> => {
      try {
        validateCodeRetries = 0;
        const registrationCodeApiUrl = `${
          Config.API_URL ?? ''
        }/api/v1/registration/user/register/${email}`;
        const response = await fetch(registrationCodeApiUrl, {
          method: 'POST',
          body: JSON.stringify({
            adopter_id: 'YOUR_ADOPTER_ID',
            expire_at: 'EXPIRY_DATE', // Use this format 2025-03-26T10:19:26.276Z
            custom_attributes_by_adopter: {}, // Optional
          }),
        });
        return response.json();
      } catch (err: any) {
        throw new Error(err.data.errorMessage);
      }
    },

    createPassword: async (password: string): Promise<boolean> => {
      try {
        validateCodeRetries = 0;
        const registrationCodeApiUrl = `${
          Config.API_URL ?? ''
        }/api/v1/registration/user/${'YOUR_EMAIL'}/password`;
        const response = await fetch(registrationCodeApiUrl, {
          method: 'POST',
          body: JSON.stringify({
            adopter_id: 'YOUR_ADOPTER_ID',
            verification_code: 'YOUR_VERIFICATION_CODE',
            password: password,
          }),
        });
        return response.json();
      } catch (err: any) {
        throw new Error(err.data.errorMessage);
      }
    },

    setAccountDetails: async (details: AccountDetails): Promise<boolean> => {
      await sleep(800);
      if (isRandomFailure()) {
        throw new Error('Sorry, there was a problem sending your request.');
      }
      return true;
    },

    /**
     * The user has tapped on an email link inviting them to register with the application.
     * The application should validate the code provided by the link.
     *
     * @param validationCode  Registration code provided from the link.
     * @param validationEmail  Email provided from the invitation email link (optional) `?email=addr%40domain.com`.
     *
     * @returns Resolves when the code is valid. True if registration is complete, False if account information is needed.
     *          If the code is not valid a rejection will occur with an error message.
     */
    validateUserRegistrationRequest: async (
      validationCode: string,
      validationEmail?: string,
    ): Promise<{codeValid: boolean | string; accountExists?: boolean}> => {

      if (validateCodeRetries >= 10) {
        await sleep(800);
        throw new Error(
          'You have made too many failed attempts. Please request for a new code.',
        );
      } else {
        try {
          const verifySignUpCodeApiUrl = `${
            Config.API_URL ?? ''
          }/api/v1/registration/user/${validationEmail}/verification`;
          const response = await fetch(verifySignUpCodeApiUrl, {
            method: 'POST',
            body: JSON.stringify({
              adopter_id: 'YOUR_ADOPTER_ID',
              verification_Code: validationCode,
            }),
          });
          const responseData = await response.json();
          return {
            codeValid: responseData.codeValid,
            accountExists: responseData.accountExists,
          };
        } catch (err: any) {
          if (err.status === 400) {
            validateCodeRetries++;
          }
          throw new Error(err.data.errorMessage);
        }
      }
    },

    completeRegistration: async (
      userData: any,
    ): Promise<{email: string; organizationName: string}> => {
      const email = userData.email;
      const organizationName = 'Acme Co.';
      const userInfo = {email: email, organizationName};

      const body = {
        areaCode: userData.phoneNumberPrefix.toString(),
        country: userData.country,
        email: userData.emailAddress,
        licenseAccepted: true,
        firstName: userData.firstName,
        lastName: userData.lastName,
        mfa: userData.multifactorAuth,
        ...(userData.phoneNumber !== '' && {phoneNumber: userData.phoneNumber}),
      };

      try {
        const verifySignUpCodeApiUrl = `${
          Config.API_URL ?? ''
        }/iam/v1/users/signup`;
        await fetch(verifySignUpCodeApiUrl, {
          method: 'POST',
          body: JSON.stringify(body),
          headers: {
            'x-realm': 'eaton',
          },
        });
      } catch (err: any) {
        throw new Error(err.data.errorMessage);
      }

      return userInfo;
    },
  });
