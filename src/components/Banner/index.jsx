import banner from '../../assets/banner.png'


function Banner() {
  return (
    <>
      <div className="banner__image">
        <img src={banner} alt="Samuel h. boardman state scenic corridor, usa" />
      </div>
      <h1 className="banner__title">Chez vous, partout et ailleurs</h1>
    </>
  )
}

export default Banner
