/**
 * Displays the stars according to notes
 * @param {Number} numberOfStars
 * @returns {React.ReactElement} JSX.Element
 */

function Rating({ numberOfStars }) {
  return (
    <div className="rating article__rating">
      {[...Array(5)].map((item, index) => (
        <svg
          key={index + '-stars'}
          viewBox="0 0 16 16"
          fill={index < numberOfStars ? '#FF6060' : '#E3E3E3'}
        >
          <path d="M9.822 6.5 8 .5l-1.822 6H.5l4.635 3.307L3.373 15.5 8 11.982l4.635 3.518-1.762-5.693L15.5 6.5H9.822Z" />
        </svg>
      ))}
    </div>
  )
}

export default Rating
