import { useEffect, useState } from 'react'
import CardList from './components/card-list/card-list.component.jsx'
import SearchBox from './components/search-box/search-box.component.jsx'

import './App.css'

// FUNCTIONAL COMPONENTS
const App = () => {
  // array destructuring
  const [searchField, setSearchField] = useState('')
  const [monsters, setMonsters] = useState([])
  const [filteredMonsters, setFilteredMonsters] = useState(monsters)

  // two parameters: a callback function and an array of dependencies
  // 1. the callback function is the code/effect that we want to happen
  // inside of our functional component
  // 2. the array contains different dependencies mostly the state values
  // or the prop values
  // so any of the values inside of this dependency array change whenever
  // the callback function is called...
  // this array runs this callback for the very first time when our
  // functional component mounts... and then any subsequent re-render
  // of our functional component, this array call the callback function
  // only when any of its values changes...
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => setMonsters(users))
  }, [])

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField)
    })
    setFilteredMonsters(newFilteredMonsters)
  }, [monsters, searchField])

  const onSearchStringChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase()
    setSearchField(searchFieldString)
  }

  return (
    <div className="App">
      <h1 className="app-title">Monsters Rolodex</h1>
      <SearchBox
        className="monsters-search-box"
        onChangeHandler={onSearchStringChange}
        placeholder="Search Monsters"
      />
      <CardList monsters={filteredMonsters} />
    </div>
  )
}

// CLASS-BASED COMPONENT
// class App extends Component {
//   constructor() {
//     super()

//     this.state = {
//       monsters: [],
//       searchString: '',
//     }
//   }

//   componentDidMount() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then((response) => response.json())
//       .then((users) =>
//         this.setState(() => {
//           return { monsters: users }
//         }),
//       )
//   }

//   onSearchStringChange = (event) => {
//     this.setState(() => {
//       return { searchString: event.target.value.toLocaleLowerCase() }
//     })
//   }

//   render() {
//     const { monsters, searchString } = this.state
//     const { onSearchStringChange } = this
//     const filteredMonsters = monsters.filter((monster) => {
//       return monster.name.toLocaleLowerCase().includes(searchString)
//     })

//     return (
//       <div className="App">
//         <h1 className="app-title">Monsters Rolodex</h1>
//         <SearchBox
//           className="monsters-search-box"
//           onChangeHandler={onSearchStringChange}
//           placeholder="Search Monsters"
//         />
//         <CardList monsters={filteredMonsters} />
//       </div>
//     )
//   }
// }

export default App
