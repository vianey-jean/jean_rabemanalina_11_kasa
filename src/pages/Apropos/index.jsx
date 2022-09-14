import apropos from '../../assets/apropos.png'
import Collapse from '../../components/Collapse'
import AproposDescriptions from '../../components/AproposDescriptions'

function Apropos() {
  return (
    <>
      <div className="banner">
        <div className="banner__image">
          <img
            src={apropos}
            alt="Kluane national park and reserve of canada, canada"
          />
        </div>
      </div>

      <div className="apropos">
        {AproposDescriptions.map((item, index) => (
          <Collapse key={index} title={item.title} content={item.text} />
        ))}
      </div>
    </>
  )
}

export default Apropos
