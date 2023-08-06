import ChoiceCard from '../ChoiceCard'
import './index.css'

const GameView = props => {
  const {isPlayingChange, choicesList, updateChoice} = props
  return (
    <div className="cont1">
      {choicesList.map(i => (
        <ChoiceCard key={i.id} itemDetails={i} updateChoice={updateChoice} />
      ))}
    </div>
  )
}

export default GameView
