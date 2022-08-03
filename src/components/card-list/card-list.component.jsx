import { Component } from 'react'
import Card from './card.component.jsx'

// CUSTOM CSS FILES
import './card-list.styles.css'

class CardList extends Component {
  render() {
    // destructuring the this.props
    const { monsters } = this.props
    return <Card monsters={monsters} />
  }
}

export default CardList
