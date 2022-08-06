// import { Component } from 'react'
import Card from '../card/card.component.jsx'

// CUSTOM CSS FILES
import './card-list.styles.css'

const CardList = ({ monsters }) => (
  <div className="card-list">
    {monsters.map((monster) => {
      return <Card key={monster.id} monster={monster} />
    })}
  </div>
)

// class CardList extends Component {
//   render() {
//     // destructuring the this.props
//     const { monsters } = this.props
//     return (
//       <div className="card-list">
//         {monsters.map((monster) => {
//           return <Card key={monster.id} monster={monster} />
//         })}
//       </div>
//     )
//   }
// }

export default CardList
