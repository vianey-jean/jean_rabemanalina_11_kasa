import apropos from '../../assets/apropos.png'//import du photo a propos
import Collapse from '../../components/Collapse' //Import de la méthode collapse
import AproposDescriptions from '../../components/AproposDescription' //Import de la description de la page A propos
/**
 * Apropos page
 * @returns  {React.ReactElement} JSX.Element
 */

function Apropos() {
  return (
    <>
      <div className="banner">{/**Div pour la photo dans Apropos */}
        <div className="banner__image">
          <img
            src={apropos} //source dans import sur photo a propos
            alt="Kluane national park and reserve of canada, canada"
          />
        </div>
      </div>

      <div className="apropos">
        {AproposDescriptions.map((item, index) => (//Utilisation description
          <Collapse key={index} title={item.title} content={item.text} /> //prendre le collapse et mettre en place la description comme titre et text
        ))}
      </div>
    </>
  )
}

export default Apropos
