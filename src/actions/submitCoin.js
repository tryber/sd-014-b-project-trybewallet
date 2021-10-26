export const SUBMIT_COIN = 'SUBMIT_COIN';

export function coinSubmit(payload) {
  return {

    type: SUBMIT_COIN,
    payload,
  };
}
