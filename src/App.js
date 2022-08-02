import { Component } from 'react'
import CardList from './components/card-list/card-list.component.jsx'
import SearchBox from './components/search-box/search-box.component.jsx'

import './App.css'

class App extends Component {
  constructor() {
    super()

    this.state = {
      monsters: [],
      searchString: '',
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) =>
        this.setState(() => {
          return { monsters: users }
        }),
      )
  }

  onSearchStringChange = (event) => {
    this.setState(() => {
      return { searchString: event.target.value.toLocaleLowerCase() }
    })
  }

  render() {
    const { monsters, searchString } = this.state
    const { onSearchStringChange } = this
    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchString)
    })

    return (
      <div className="App">
        <SearchBox onChange={onSearchStringChange} />
        <CardList monsters={filteredMonsters} />
      </div>
    )
  }
}

export default App
