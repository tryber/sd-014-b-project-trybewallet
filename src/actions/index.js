export const SALVA_USUARIO = 'SALVA_USUARIO';
export const SALVA_WALLET = 'SALVA_WALLET';
export const SALVA_GASTOS = 'SALVA_GASTOS';
export const APAGA_GASTO = 'APAGA_GASTO';

export const salvaUsuario = (payload) => ({
  type: SALVA_USUARIO,
  payload,
});

export const salvaWallet = (payload) => ({
  type: SALVA_WALLET,
  payload,
});

export const salvaGasto = (payload) => (
  {
    type: SALVA_GASTOS,
    payload,
  }
);

export const apagaGasto = (payload) => (
  {
    type: APAGA_GASTO,
    payload,
  }
);
