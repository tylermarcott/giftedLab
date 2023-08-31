





// AUTH SETTINGS
import { AppState } from "../AppState.js";
import { sandboxGiftService } from "../services/SandboxGiftsService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";

// Domain: codeworksclassroom.auth0.com
// Audience: https://codeworksclassroom.com
// Client Id: pOXw2OGv1LsYi7LEBmDF04RLkXQvldml


function _drawSandboxGifts() {
  let content = ''
  AppState.sandboxGifts.forEach(gift => content += gift.sandboxGiftTemplate)
  setHTML('gift-template', content)
  console.log('drawing gifts');
}

export class SandboxGiftController {

  constructor() {
    this.getSandboxGift()
    AppState.on('sandboxGifts', _drawSandboxGifts)
  }


  async openGift(tag) {
    try {
      sandboxGiftService.openGift(tag)
    } catch (error) {
      Pop.error(error)
    }
  }


  async getSandboxGift() {
    try {
      await sandboxGiftService.getSandboxGift()
    } catch (error) {
      Pop.error(error)
    }
  }
}