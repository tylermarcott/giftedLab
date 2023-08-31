import { AppState } from "../AppState.js";
import { Gift } from "../models/Gift.js";
import { api } from "../services/AxiosService.js";


class SandboxGiftService {
  openGift(tag) {

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