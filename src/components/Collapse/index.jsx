import React, { useState } from 'react'

/**
 * Collapse card
 * @param {{title : String, content: String}}    props
 * @returns  {React.ReactElement} JSX.Element
 */

function Collapse({ title, content }) {//Creaction du méthode collapse
  const [show, setShow] = useState(false) //méthode boolean
  const isArray = Array.isArray(content)//variable isArray comme tableau

  return (
    <>
      <div className="collapse">
        <div
          className={show ? 'collapse__title true' : 'collapse__title false'}
          onClick={() => setShow(!show)}//Pour le fonction clique sur la méthode setshow
        >
          <p>{title}</p>{/**le titre dans le data */}
        </div>
        <div
          className={
            show ? 'collapse__describle true' : 'collapse__describle false' //Ouvrir ou fermer apres clique
          }
        >
          {isArray ? (
            <ul>
              {content.map((item, index) => (
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
