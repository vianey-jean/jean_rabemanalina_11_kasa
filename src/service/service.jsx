import axios from 'axios'

/**
 * Get Chambre data from API
 * @async
 * @return {Promise<ChambreData>} The data from the URL.
 */

export async function getData() { //Export les donné reçu
  try {
    const response = await axios.get(`./api/logement.json`) //Prendre les donné dans le fichier json logement
    return response.data  //retourne le donné
  } catch (error) {  // si non erreur
    console.log(error)
  }
}

/**User information
 * @typedef {Object} ChambreData
 * @param {String} title
 * @param {String} cover
 * @param {Object[]} pictures
 * @param {String} description
 * @param {Object} host
 * @param {String} rating
 * @param {String} location
 * @param {Object[]} equipments
 * @param {Object[]} tags
 */
