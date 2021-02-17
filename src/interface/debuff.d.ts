export type IDebuff = {
  name: 'DoT' | 'frostbite' | 'curse' | 'fear' | 'snare' | 'curse'
  remainedTurn: number
  icon: {
    src: string
    alt: string
  }
}


/** TODO: プレイヤーが与えるものは何？ */