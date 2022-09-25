import './_tag.scss'


function Tag({ name }) { //Mise en forme des tags sous forme de boutton
  return <button className="tag">{name}</button>
}
export default Tag
