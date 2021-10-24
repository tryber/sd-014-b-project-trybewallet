// Coloque aqui suas actions
export const TEST_EMAIL = 'TEST_EMAIL';

export const testEmail = () => ({
  type: TEST_EMAIL,
  user: {
    email: 'teste@trybe.com',
  },
});
