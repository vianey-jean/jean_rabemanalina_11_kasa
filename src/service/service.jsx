import axios from 'axios'

export async function getData() {
  try {
    const response = await axios.get(`../datas/logement.json`)
    return response.data
  } catch (error) {
    console.log(error)
  }
}


