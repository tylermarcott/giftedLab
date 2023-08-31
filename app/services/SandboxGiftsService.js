import { AppState } from "../AppState.js";
import { Gift } from "../models/Gift.js";
import { api } from "../services/AxiosService.js";


class SandboxGiftService {
  async openGift(giftId) {
    let foundGift = AppState.sandboxGifts.find(gift => gift.id == giftId)
    if (!foundGift) return

    console.log(foundGift)

    foundGift.opened = true

    // console.log(foundGift.opened)

    await api.put(`/api/gifts/${foundGift.id}`, foundGift)

    AppState.emit('sandboxGifts')
  }




  async getSandboxGift() {
    const res = await api.get('/api/gifts')

    console.log('here is our data', res.data)

    let mappedArray = res.data.map(dataObj => new Gift(dataObj))

    AppState.sandboxGifts = mappedArray

    console.log(AppState.sandboxGifts);
  }
}




export const sandboxGiftService = new SandboxGiftService()