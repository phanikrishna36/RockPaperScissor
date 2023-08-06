const ResultView = props => {
  const {
    userResult,
    isPlayingChange,
    opponentResult,
    result,
    choicesList,
  } = props
  const yourImg = choicesList.filter(i => i.id === userResult)[0].imageUrl

  const opponentImg = choicesList.filter(i => i.id === opponentResult)[0]
    .imageUrl
  const changeGame = () => {
    isPlayingChange()
  }
  return (
    <div className="ResultContainer">
      <div className="yourResultContainer">
        <img className="img" src={yourImg} alt="your choice" />
      </div>
      <div className="yourResultContainer">
        <img className="img" src={opponentImg} alt="opponent choice" />
      </div>
      <p>{result}</p>
      <button type="button" onClick={changeGame}>
        Play Again
      </button>
    </div>
  )
}

export default ResultView
