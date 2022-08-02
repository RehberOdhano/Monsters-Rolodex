import { Component } from 'react'

class SearchBox extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <input
          className="search-box"
          type="search"
          placeholder="search monsters"
          onChange={this.props.onChange}
        />
      </div>
    )
  }
}

export default SearchBox
