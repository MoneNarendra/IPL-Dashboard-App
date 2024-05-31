import {Component} from 'react'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

class TeamMatches extends Component {
  state = {teamMatches: [], isLoading: true}

  componentDidMount() {
    this.getTeamMatchDetails()
  }

  getConvertedData = match => ({
    umpires: match.umpires,
    result: match.result,
    manOfTheMatch: match.man_of_the_match,
    id: match.id,
    date: match.date,
    venue: match.venue,
    competingTeam: match.competing_team,
    competingTeamLogo: match.competing_team_logo,
    firstInnings: match.first_innings,
    secondInnings: match.second_innings,
    matchStatus: match.match_status,
  })

  getTeamMatchDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    console.log(id)
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()

    const recentMatches = data.recent_matches.map(eachMatch =>
      this.getConvertedData(eachMatch),
    )
    const latestMatchDetails = this.getConvertedData(data.latest_match_details)
    const teamBannerUrl = data.team_banner_url
    const allData = {teamBannerUrl, recentMatches, latestMatchDetails}
    this.setState({teamMatches: allData, isLoading: false})
  }

  getRenderDate = () => {
    const {teamMatches} = this.state
    const {teamBannerUrl, latestMatchDetails, recentMatches} = teamMatches
    return (
      <div className="team-match-inner-container">
        <img src={teamBannerUrl} alt="team banner" className="banner-img" />
        <p className="latest-match-heading">Latest Matches</p>
        <LatestMatch latestMatchDetails={latestMatchDetails} />
        <ul className="recent-matchs-container">
          {recentMatches.map(eachMatch => (
            <MatchCard key={eachMatch.id} eachMatch={eachMatch} />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const {isLoading} = this.state
    return (
      <div className={`team-match-container ${id}`}>
        {isLoading ? (
          <div>
            <Loader type="Oval" color="#ffffff" height={50} />
          </div>
        ) : (
          this.getRenderDate()
        )}
      </div>
    )
  }
}

export default TeamMatches
