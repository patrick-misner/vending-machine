

export class Snack {

  constructor(id, name, img, price) {
    this.id = id // Can I do like a sequential on this? not sure how this runs.
    this.name = name
    this.img = img
    this.price = price
    this.qty = 0
  }

  get Template(){
    return `
  <div class="col-4">
    <div class="m-3 bg-dark text-light rounded shadow">
      <img src="${this.img}" class="img-fluid rounded-top snack-img" alt="">
      <div class="p-3">
        <h3>${this.name}</h3>
        <div class="d-flex justify-content-between">
          <h3>$${this.price.toFixed(2)}</h3>
          <button id="${this.id}-button" onclick="app.snacksController.buyItem(${this.id})" type="button" class="btn btn-primary">Buy</button>
        </div>
      </div>
    </div>
  </div>
    `
  }

}