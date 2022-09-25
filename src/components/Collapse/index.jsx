import React, { useState } from 'react'
import './_collapse.scss';



function Collapse({ title, content }) {//Création Fonction collapse
  const [show, setShow] = useState(false) //Variable show et setshow
  const isArray = Array.isArray(content) //Tableau des contenants

  return (
    <>
      <div className="collapse">
        <div
          className={show ? 'collapse__title true' : 'collapse__title false'}
          onClick={() => setShow(!show)} //Apres le clique, on decouvre
        >
          <p>{title}</p>
        </div>
        <div
          className={
            show ? 'collapse__describle true' : 'collapse__describle false' //Apres le clique, on le ferme la description
          }
        >
          {isArray ? (
            <ul>
              {content.map((item, index) => (//on montre le contenant avec la méthode map
                <li key={index}>{item}</li>
              ))}
            </ul>
          ) : (
            <p>{content}</p>
          )}
        </div>
      </div>
    </>
  )
}

export default Collapse
