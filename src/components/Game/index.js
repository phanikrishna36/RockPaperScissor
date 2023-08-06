// import {Component} from 'react'
// import Popup from 'reactjs-popup'
// import {RiCloseLine} from 'react-icons/ri'
// import Para from './StyledComponent'
// import './index.css'

// class Game extends Component {
//   state = {
//     ComputerChoice: '',
//     playAgain: false,
//     count: 0,
//     result: '',
//     isPlaying: true,
//     userImg: '',
//     computerImg: '',
//   }

//   componentDidMount() {
//     this.getComputerChoice()
//   }

//   getComputerChoice = () => {
//     const {choicesList} = this.props
//     this.setState({
//       ComputerChoice:
//         choicesList[Math.ceil(Math.random() * choicesList.length - 1)],
//     })
//   }

//   onClicked = e => {
//     const {ComputerChoice} = this.state
//     const {choicesList} = this.props
//     const userImg = choicesList.filter(i => i.id === e.target.id)[0].imageUrl
//     const computerImg = ComputerChoice.imageUrl
//     console.log(ComputerChoice.id, e.target.id)
//     if (ComputerChoice.id === e.target.id) {
//       this.setState({
//         userImg,
//         computerImg,
//         isPlaying: false,
//         result: 'DRAW',
//         ComputerChoice:
//           choicesList[Math.floor(Math.random() * choicesList.length - 1)],
//       })
//     } else {
//       switch (true) {
//         case ComputerChoice.id === 'SCISSORS' && e.target.id === 'PAPER':
//           this.setState(i => ({
//             userImg,
//             computerImg,
//             isPlaying: false,
//             count: i.count - 1,
//             result: 'LOSE',
//             ComputerChoice:
//               choicesList[Math.ceil(Math.random() * choicesList.length - 1)],
//           }))
//           break

//         case ComputerChoice.id === 'SCISSORS' && e.target.id === 'ROCK':
//           this.setState(i => ({
//             userImg,
//             computerImg,
//             isPlaying: false,
//             count: i.count + 1,
//             result: 'WON',
//             ComputerChoice:
//               choicesList[Math.ceil(Math.random() * choicesList.length - 1)],
//           }))
//           break

//         case ComputerChoice.id === 'ROCK' && e.target.id === 'PAPER':
//           this.setState(i => ({
//             userImg,
//             computerImg,
//             isPlaying: false,
//             count: i.count + 1,
//             result: 'WON',
//             ComputerChoice:
//               choicesList[Math.ceil(Math.random() * choicesList.length - 1)],
//           }))
//           break
//         case ComputerChoice.id === 'PAPER' && e.target.id === 'ROCK':
//           this.setState(i => ({
//             userImg,
//             computerImg,
//             isPlaying: false,
//             count: i.count - 1,
//             result: 'LOSE',
//             ComputerChoice:
//               choicesList[Math.ceil(Math.random() * choicesList.length - 1)],
//           }))
//           break
//         case ComputerChoice.id === 'ROCK' && e.target.id === 'SCISSORS':
//           this.setState(i => ({
//             userImg,
//             computerImg,
//             isPlaying: false,
//             count: i.count - 1,
//             result: 'LOSE',
//             ComputerChoice:
//               choicesList[Math.ceil(Math.random() * choicesList.length - 1)],
//           }))
//           break
//         case ComputerChoice.id === 'PAPER' && e.target.id === 'SCISSORS':
//           this.setState(i => ({
//             userImg,
//             computerImg,
//             isPlaying: false,
//             count: i.count + 1,
//             result: 'WON',
//             ComputerChoice:
//               choicesList[Math.ceil(Math.random() * choicesList.length - 1)],
//           }))
//           break

//         default:
//           break
//       }
//     }
//   }

//   playAgain = () => {
//     this.setState({
//       userImg: '',
//       computerImg: '',
//       isPlaying: true,
//       result: '',
//     })
//   }

//   render() {
//     const {
//       ComputerChoice,
//       result,
//       count,
//       isPlaying,
//       userImg,
//       computerImg,
//     } = this.state
//     console.log(ComputerChoice)
//     return (
//       <div className="cont">
//         <div className="head">
//           <h1>Rock Paper Scissors</h1>
//           <div className="head1">
//             <Para>Score</Para>
//             <Para>{count}</Para>
//           </div>
//         </div>
//         {isPlaying ? (
//           <div>
//             <div className="cont1">
//               <div>
//                 <button
//                   data-testid="rockButton"
//                   type="button"
//                   onClick={this.onClicked}
//                   id="ROCK"
//                   className="btn"
//                 >
//                   <img
//                     src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png"
//                     alt="ROCK"
//                     id="ROCK"
//                     className="img"
//                   />
//                 </button>
//               </div>
//               <div>
//                 <button
//                   data-testid="scissorsButton"
//                   type="button"
//                   onClick={this.onClicked}
//                   id="SCISSORS"
//                   className="btn"
//                 >
//                   <img
//                     src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png"
//                     alt="SCISSORS"
//                     id="SCISSORS"
//                     className="img"
//                   />
//                 </button>
//               </div>
//             </div>
//             <div className="cont2">
//               <button
//                 data-testid="paperButton"
//                 type="button"
//                 onClick={this.onClicked}
//                 id="PAPER"
//                 className="btn"
//               >
//                 <img
//                   src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png"
//                   alt="PAPER"
//                   id="PAPER"
//                   className="img"
//                 />
//               </button>
//             </div>
//           </div>
//         ) : (
//           <>
//             <div className="cont1">
//               <div>
//                 <h1>You</h1>
//                 <img src={userImg} className="img" alt="your choice" />
//               </div>
//               <div>
//                 <h1>Opponent</h1>
//                 <img src={computerImg} className="img" alt="opponent choice" />
//               </div>
//             </div>
//             <div>
//               <p>{result === 'DRAW' ? 'IT IS DRAW' : `YOU ${result}`}</p>
//               <button type="button" onClick={this.playAgain}>
//                 PLAY AGAIN
//               </button>
//             </div>
//           </>
//         )}
//         <div>
//           <Popup modal trigger={<button type="button">Rules</button>}>
//             {close => (
//               <div>
//                 <button
//                   type="button"
//                   className="trigger-button"
//                   onClick={() => close()}
//                 >
//                   <RiCloseLine />
//                 </button>
//                 <div className="popup">
//                   <img
//                     src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
//                     alt="rules"
//                   />
//                 </div>
//               </div>
//             )}
//           </Popup>
//         </div>
//       </div>
//     )
//   }
// }

// export default Game
import {Component} from 'react'
import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'
import GameView from '../GameView'
import ResultView from '../ResultView'
import ScoreCard from '../ScoreCard'

import './index.css'

class Game extends Component {
  state = {
    score: 0,
    isPlaying: true,
    result: '',
    opponentResult: '',
    userResult: '',
  }

  isPlayingChange = () => {
    this.setState(i => ({isPlaying: true}))
  }

  updateChoice = id => {
    const {score} = this.state
    const {choicesList} = this.props
    const opponentsSelection = choicesList[Math.floor(Math.random() * 3)].id
    let finalResult
    let FinalScore = score
    if (id === 'ROCK' && opponentsSelection === 'SCISSORS') {
      finalResult = 'YOU WON'
    } else if (id === 'SCISSORS' && opponentsSelection === 'PAPER') {
      finalResult = 'YOU WON'
    } else if (id === 'PAPER' && opponentsSelection === 'ROCK') {
      finalResult = 'YOU WON'
    } else if (id === 'ROCK' && opponentsSelection === 'ROCK') {
      finalResult = 'IT IS DRAW'
    } else if (id === 'SCISSORS' && opponentsSelection === 'SCISSORS') {
      finalResult = 'IT IS DRAW'
    } else if (id === 'PAPER' && opponentsSelection === 'PAPER') {
      finalResult = 'IT IS DRAW'
    } else {
      finalResult = 'YOU LOSE'
    }
    if (finalResult === 'YOU WON') {
      FinalScore += 1
    } else if (finalResult === 'YOU LOSE') {
      FinalScore -= 1
    }

    this.setState({
      userResult: id,
      opponentResult: opponentsSelection,
      result: finalResult,
      score: FinalScore,
      isPlaying: false,
    })
  }

  render() {
    const {score, isPlaying, userResult, opponentResult, result} = this.state
    const {choicesList} = this.props
    return (
      <div className="cont">
        <ScoreCard score={score} />
        {isPlaying ? (
          <GameView
            isPlayingChange={this.isPlayingChange}
            choicesList={choicesList}
            updateChoice={this.updateChoice}
          />
        ) : (
          <ResultView
            isPlayingChange={this.isPlayingChange}
            userResult={userResult}
            opponentResult={opponentResult}
            result={result}
            choicesList={choicesList}
          />
        )}
        <Popup modal trigger={<button type="button">Rules</button>}>
          {close => (
            <div>
              <button type="button" onClick={() => close()}>
                <RiCloseLine />
              </button>
              <img
                src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                alt="rules"
              />
            </div>
          )}
        </Popup>
      </div>
    )
  }
}

export default Game
