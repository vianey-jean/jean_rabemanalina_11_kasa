import apropos from '../../assets/apropos.png'
import Collapse from '../../components/Collapse'
import AproposDescriptions from '../../components/AproposDescriptions'

function Apropos() {//Création méthode apropos
  return ( //Retourn mise en forme l'appropos
    <>
      <div className="banner">
        <div className="banner__image">
          <img
            src={apropos}
            alt="Kluane national park and reserve of canada, canada"
          />
        </div>
      </div>

      <div className="apropos"> {/* Faire appel collapse pour le titre et la description */}
        {AproposDescriptions.map((item, index) => (
          <Collapse key={index} title={item.title} content={item.text} />
        ))}
      </div>
    </>
  )
}

export default Apropos
