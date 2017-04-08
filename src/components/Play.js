import { inject, observer } from 'mobx-react'
@inject('store') @observer
export default class Play extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
    this.spin = () => {
      this.props.store.spin(1)
    }
  }
  render () {
    return (
      <div className='fill flex-column pt-card'>
        <div className='header flex-row flex-center'>Play</div>
        <div className='body flex-center flex-row fill'>
          <div className='flex-column'>
            <div className='flex-row flex-center'>
              {
                [0, 1, 2].map(i => {
                  return (
                    <div className={`pt-card spinner ${this.props.store.result && this.props.store.result.win ? 'yellow animated tada' : ''}`} key={i}>
                      <span className={`animated slow infinite ${this.props.store.spinning ? 'fade' : ''}`}>{this.props.store.result ? this.props.store.result.result[i].substring(0, 1) : '?'}</span>
                    </div>
                  )
                })
              }
            </div>
            <button className='pt-button pt-large spin-button' onClick={this.spin}>Spin</button>
          </div>
          <div className={`pt-card flex-column spinner balance ${this.props.store.result && this.props.store.result.balance < 0 ? 'red' : ''}`}>
            {
              this.props.store.result && (
                <span className='animated fadeIn'>{this.props.store.result.balance}</span>
              )
            }
          </div>
        </div>
      </div>
    )
  }
}
