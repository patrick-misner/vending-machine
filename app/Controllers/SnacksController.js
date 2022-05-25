import { ProxyState } from "../AppState.js"
import { snacksService } from "../Services/SnacksService.js"


function _drawSnacks(){
  let snacks = ProxyState.snacks
  let template = ''
  snacks.forEach(s => template += s.Template)
  // console.log(template)
  document.getElementById('snack-display').innerHTML = template
}

function _drawWallet(){
  let wallet = ProxyState.wallet
  document.getElementById('wallet-display').innerText = '$' + wallet.toFixed(2)
}


export class SnacksController {
  constructor(){
    console.log('Snacks Controller Loaded')
    _drawSnacks()
    _drawWallet()
  }

  buyItem(id){
    console.log('snack controller buy item ID:', id);
    ProxyState.on('wallet', _drawWallet)
    snacksService.buyItem(id)
    // _drawWallet()
  }

  addCoin(){
    // console.log('SnacksController ADDCOIN!')
    ProxyState.on('wallet', _drawWallet)
    snacksService.addCoin()
  }
}