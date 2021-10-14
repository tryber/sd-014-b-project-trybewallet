// Requisito 3: Utilize o Redux para salvar no estado global as informações da pessoa logada

export const SET_EMAIL_USER = 'SET_EMAIL_USER';

export const setEmailUser = (payload) => ({ type: SET_EMAIL_USER, payload });
