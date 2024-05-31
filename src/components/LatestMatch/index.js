import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props

  const {
    umpires,
    result,
    manOfTheMatch,

    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
  } = latestMatchDetails
  return (
    <div className="latest-match-contianer">
      <div className="latest-match-top-section">
        <div className="left-text-continer">
          <p className="competing-team">{competingTeam}</p>
          <p className="date">{date}</p>
          <p className="latest-match-details">{venue}</p>
          <p className="latest-match-details">{result}</p>
        </div>
        <img
          src={competingTeamLogo}
          alt={`latest match ${competingTeam}`}
          className="competing-team-logo"
        />
      </div>
      <div className="right-text-contianer">
        <h1 className="latest-match-headings">First Innings</h1>
        <p className="latest-match-details">{firstInnings}</p>
        <h1 className="latest-match-headings">Second Innings</h1>
        <p className="latest-match-details">{secondInnings}</p>
        <h1 className="latest-match-headings">Man of The Match</h1>
        <p className="latest-match-details">{manOfTheMatch}</p>
        <h1 className="latest-match-headings">Umpires</h1>
        <p className="latest-match-details">{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
