import * as Recoil from 'recoil';

export const remainedBuffsTurn = Recoil.atom({
  key: 'remainedBuffsTurn',
  default: {
    /** 再生 */regeneration: 0,
    /** 湧昇 */flow: 0,
    /** 霧遁 */mist: 0,

  }
})
