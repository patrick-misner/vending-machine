import { Snack } from "./Models/Snack.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  values = []

  wallet = 0
  snacks = [
    new Snack(1, 'Egg Sandwich', './assets/img/eggsandwich.jpeg', 5),
    new Snack(2, 'Gameboy', './assets/img/gameboy.jpeg', 5),
    new Snack(3, 'Glasses', './assets/img/glasses.jpeg', 4),
    new Snack(4, 'Mountian Dew', './assets/img/mtdew.jpeg', 3),
    new Snack(5, "Thor's Hammer", './assets/img/thorhammer.jpeg', 6)
  ]
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
