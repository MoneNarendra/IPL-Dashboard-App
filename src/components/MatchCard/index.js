import './index.css'

const MatchCard = props => {
  const {eachMatch} = props
  const {matchStatus, result, competingTeamLogo, competingTeam} = eachMatch
  const statusColor = matchStatus === 'Won' ? 'win' : 'loss'
  return (
    <li className="match-card-container">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="team-img"
      />
      <p className="team-name">{competingTeam}</p>
      <p className={`team-status ${statusColor}`}>{matchStatus}</p>
      <p className="team-result">{result}</p>
    </li>
  )
}

export default MatchCard
