


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
    this.tag = data.tag
    this.url = data.url
    this.opened = data.opened
    this.creatorId = data.creatorId
  }









  get sandboxGiftTemplate() {
    return /*HTML*/`
    <button onclick="app.SandboxGiftController.openGift(${this.tag})" class="col-3 bg-success m-3 p-1 text-light text-center">
      <h4>${this.tag}</h4>
    </button>
    `
  }
}