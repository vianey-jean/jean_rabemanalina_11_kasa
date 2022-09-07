/**
 * Component - Loader
 * @returns {React.ReactElement} JSX.Element - loader element
 */

function Loader() {   //Création de la méthode loader
  return (
    <div className="lds-ripple">
      <div></div>
      <div></div>
    </div>
  )
}

export default Loader
