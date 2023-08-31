


// {
//   "tag": {
//     "type": "String",
//       "maxlength": 120
//   },
//   "url": {
//     "type": "String",
//       "required": true
//   },
//   "opened": {
//     "type": "Boolean",
//       "default": false
//   },
//   "creatorId": {
//     "type": "ObjectId",
//       "required": true,
//         "ref": "Account"
//   }
// }


export class Gift {
  constructor(data) {
    this.id = data._id
    this.tag = data.tag
    this.url = data.url
    this.opened = data.opened
    this.creatorId = data.creatorId
  }









  // get sandboxGiftTemplate() {
  //   return /*HTML*/`
  //   <button onclick="app.SandboxGiftController.openGift('${this.id}')" class="col-3 bg-success m-3 p-1 text-light text-center">
  //     <h4>${this.tag}</h4>
  //     <p>${this.opened}</p>
  //   </button>
  //   `
  // }

  get computedTemplate() {
    if (this.opened == false) {
      return /*HTML*/`
      <button onclick="app.SandboxGiftController.openGift('${this.id}')" class="col-3 bg-success m-3 p-1 text-light text-center">
      <h4>${this.tag}</h4>
      <p>${this.opened}</p>
      </button>`
    } else {
      return /*HTML*/`
      <button onclick="app.SandboxGiftController.openGift('${this.id}')" class="col-3 bg-success m-3 p-1 text-light text-center">
      <h4>${this.tag}</h4>
      <p>${this.opened}</p>
      <img class="img-fluid" src="${this.url}"></img>
      </button>`
    }
  }
}