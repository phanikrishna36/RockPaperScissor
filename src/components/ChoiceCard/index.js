import './index.css'

const ChoiceCard = props => {
  const {itemDetails, updateChoice} = props
  const {imageUrl, id} = itemDetails
  const changeChoice = () => {
    updateChoice(id)
  }
  return (
    <div className="cont1">
      <button
        className="buttonShape"
        onClick={changeChoice}
        data-testid={`${id.toLowerCase()}Button`}
        type="button"
      >
        <img className="img" src={imageUrl} alt={id} />
      </button>
    </div>
  )
}

export default ChoiceCard
