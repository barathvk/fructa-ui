import { inject, observer } from 'mobx-react'
import Play from './Play'
import Simulate from './Simulate'
@inject('store') @observer
export default class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }
  render () {
    return (
      <div className='fill flex-row pt-app pt-dark'>
        <div className='fill flex-column'>
          <Play />
          <Simulate />
        </div>
        <iframe className='fill flex-column iframe pt-card' frameBorder='0' src='http://metrics.fructa.ga/dashboard/db/game-metrics?refresh=5s&orgId=1&from=now-5m&to=now' />
      </div>
    )
  }
}
