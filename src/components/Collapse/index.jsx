import React, { useState } from 'react'

/**
 * Collapse card
 * @param {{title : String, content: String}}    props
 * @returns  {React.ReactElement} JSX.Element
 */

function Collapse({ title, content }) {
  const [show, setShow] = useState(false)
  const isArray = Array.isArray(content)

  return (
    <>
      <div className="collapse">
        <div
          className={show ? 'collapse__title true' : 'collapse__title false'}
          onClick={() => setShow(!show)}
        >
          <p>{title}</p>
        </div>
        <div
          className={
            show ? 'collapse__describle true' : 'collapse__describle false'
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
