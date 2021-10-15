export const SEND_EMAIL_ADDRESS = 'SEND_EMAIL_ADDRESS';

export const addEmailAddress = (emailAddress) => ({
  type: SEND_EMAIL_ADDRESS,
  emailAddress,
});
