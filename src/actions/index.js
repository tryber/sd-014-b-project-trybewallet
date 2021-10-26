// Coloque aqui suas actions
// Requisito 3 desenvolvido com ajuda do Grupo 22

export const UserEmailPassword = 'EMAIL_AND_PASSWORD';

export const getUserInfo = (userInfo) => ({
  type: UserEmailPassword, email: userInfo.email, password: userInfo.password });
