import { inject, observer } from 'mobx-react'
@inject('store') @observer
export default class Simulate extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
    this.setSize = e => {
      this.props.store.size = parseInt(e.target.value)
    }
    this.simulate = () => {
      this.props.store.simulate()
    }
  }
  render () {
    return (
      <div className='fill flex-column pt-card'>
        <div className='header flex-row flex-center'>Simulate</div>
        <div className='fill flex-column flex-center'>
          <div className='flex-column flex-center pt-card simulate'>
            <div className='pt-progress-bar pt-intent-primary pt-no-stripes'>
              <div className='pt-progress-meter' style={{width: `${this.props.store.progress}%`}} />
            </div>
            <div className='flex-row flex-center-align'>
              <div className='pt-select pt-large fill'>
                <select value={this.props.size} onChange={this.setSize} defaultValue='na'>
                  <option value='na'>Choose a simulation size</option>
                  <option value='10'>10</option>
                  <option value='100'>100</option>
                  <option value='1000'>1000</option>
                  <option value='10000'>10000</option>
                </select>
                <button className='pt-button pt-large' disabled={this.props.store.simulating || !this.props.store.size} onClick={this.simulate}>Simulate</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
