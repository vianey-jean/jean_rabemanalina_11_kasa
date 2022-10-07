

export async function getData() {
  try {
    const response = await fetch(`../datas/logement.json`)
    //const data  = await response.json()
    return await response.json()
  } catch (erreur) {
    console.log(erreur)
  }
}


