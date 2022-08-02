import { Component } from 'react'

class CardList extends Component {
  render() {
    // destructuring the this.props
    const { monsters } = this.props
    return (
      <div>
        {monsters.map((monster) => (
          <h1 key={monster.id}>{monster.name}</h1>
        ))}
      </div>
    )
  }
}

export default CardList
