import Para from '../Game/StyledComponent'
import './index.css'

const ScoreCard = props => {
  const {score} = props
  return (
    <div className="head">
      <h1>Rock Paper Scissors</h1>
      <div className="head1">
        <p>Score</p>
        <Para>{score}</Para>
      </div>
    </div>
  )
}

export default ScoreCard
