import React, { useState } from 'react'
import './_slide.scss'


function Slider({ allPictures }) { //Création de la fonction Slider
  const [currentPicture, setCurrentPicture] = useState(0)
  const length = allPictures.length

  function slideSuivant() { //Création de la fonction photo suivante
    setCurrentPicture(currentPicture === length - 1 ? 0 : currentPicture + 1)
  }

  function slidePrecedent() { //Création de la fonction des photo précédent
    setCurrentPicture(currentPicture === 0 ? length - 1 : currentPicture - 1)
  }

  return (
    <section className="slider"> {/* Si le nombre de photo >1 alors on met le slide précedent ou slide suivant */}
      {length > 1 && (
        <><div>
          <div className="slider__arrowLeft" onClick={slidePrecedent}>
            <svg
              width="35"
              height="55"
              viewBox="0 0 48 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M47.04 7.78312L39.92 0.703125L0.359985 40.3031L39.96 79.9031L47.04 72.8231L14.52 40.3031L47.04 7.78312Z"
                fill="white"
              />
            </svg>
          </div>
          <div className="slider__arrowRight" onClick={slideSuivant}>
            <svg
              width="35"
              height="55"
              viewBox="0 0 48 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.960022 72.3458L8.04002 79.4258L47.64 39.8258L8.04002 0.22583L0.960022 7.30583L33.48 39.8258L0.960022 72.3458V72.3458Z"
                fill="white"
              />
            </svg>
          </div>
          </div>
        </>
      )} {/* Si non je met le photo en question */}

      {allPictures.map((picture, index) => (
        <div className={index} key={index}>
          {index === currentPicture && (
            <img
              src={picture}
              alt="intèrieur du logement"
              className="slider__img"
            />
          )}
        </div>

      ))}
      <span className="slider__counter">
            {currentPicture + 1 + " / " + length}
      </span>
    
    </section>
  )
}

export default Slider
