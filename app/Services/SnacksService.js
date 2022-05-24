

class SnacksService {

  buyItem(id) {
    console.log ('snack service buyItem', id)
  }
}



// this is so other places can read from SnacksService.js
export const snacksService = new SnacksService()