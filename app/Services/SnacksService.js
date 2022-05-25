import { ProxyState } from "../AppState.js"
import { Pop } from "../Utils/Pop.js"

class SnacksService {

  buyItem(id) {
    // console.log ('snack service buyItem', id)
    let snacks = ProxyState.snacks
    // console.log(snacks)
    for (let i = 0; i < snacks.length; i++) {
      const snack = snacks[i];
      if (snack.id == id && ProxyState.wallet >= snack.price){
        snack.qty++
        ProxyState.wallet -= snack.price
        Pop.toast('You successfully purchased ' + snack.name, 'success')
      }
    }
    for (let i = 0; i < snacks.length; i++) {
      const snack = snacks[i];
      if (ProxyState.wallet < snack.price){
        document.getElementById(snack.id + '-button').setAttribute('disabled', '')
      }
    }
  }
  addCoin(){
    // console.log('snacksservice add coin')
    ProxyState.wallet += 0.25
    let snacks = ProxyState.snacks
    snacks.forEach(s => {
      if (ProxyState.wallet >= s.price){
        document.getElementById(s.id + '-button').removeAttribute('disabled')
      }
    });
  }

}






// this is so other places can read from SnacksService.js
export const snacksService = new SnacksService()