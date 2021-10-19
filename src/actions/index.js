// Coloque aqui suas actions

export const emailAndPassword = 'EMAIL_AND_PASSWORD';

export const getUserInfo = (userInfo) => ({
  type: emailAndPassword, email: userInfo.email, password: userInfo.password });
