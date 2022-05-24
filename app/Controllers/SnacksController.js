import { ProxyState } from "../AppState.js"


function _drawSnacks(){
  let snacks = ProxyState.snacks
  let template = ''
  snacks.forEach(s => template += s.Template)
  // console.log(template)
  document.getElementById('snack-display').innerHTML = template
}


export class SnacksController {
  constructor(){
    console.log('Snacks Controller Loaded')
    _drawSnacks()
  }
}