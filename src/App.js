import React from 'react';
import './App.css';

const list = [
  {
  title: 'React',
  url: 'https://facebook.github.io/react/',
  author: 'Jordan Walke',
  num_comments: 3,
  points: 4,
  objectID: 123,
  },
  {
  title: 'Redux',
  url: 'https://github.com/reactjs/redux',
  author: 'Dan Abramov, Andrew Clark',
  num_comments: 2,
  points: 5,
  objectID: 189,
  },
  {
    title: 'C# in Depth',
    url: 'https://www.google.com/',
    author: 'Jon Skeet',
    num_comments: 30,
    points: 49,
    objectID: 278,
    },
];


class App extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      books: list,
      searchtext: '',
      counter: 1
    }
  }

  dismissBook = (bookId) => {
    const updatedBooks = this.state.books.filter((book) => book.objectID !== bookId)
    this.setState({books: updatedBooks})
  }

  handleChange = (e) => {
    this.setState({searchtext: e.target.value})
  }

  isSearched = (searchtext) => (book) => !searchtext || book.title.toLowerCase().includes(searchtext.toLowerCase())

  render(){
    const {searchtext, books} = this.state
    return (
        <div className="App">
            <Search value={searchtext} onChange={this.handleChange} className="Search"> Search </Search>
            <Table books={books} pattern={searchtext} dismissBook={this.dismissBook} isSearched={this.isSearched} className="Table"/>
        </div>
    );
  }
  
}


function Search (props) {
  const { value, onChange, children, className } = props
  return(
    <form class={className}>
      {children} <input type="text" value={value} onChange={onChange}/>
    </form>
  )
}

function Table (props) {

    const { books, pattern, dismissBook, isSearched, className } = props

    return(
      <div className={className}>
        {
          books.filter(isSearched(pattern)).map( book => 
            <div key={book.objectID}>
              <span><a href={book.url}>{book.title}</a></span> &nbsp;
              <span>{book.author}</span>&nbsp;
              <span>{book.num_comments}</span>&nbsp;
              <span>{book.points}</span>&nbsp;
              {/* <button onClick={() => {dismissBook(book.objectID)}}> Dismiss </button> */}
              <Button onClick={() => {dismissBook(book.objectID)}} className=""> Dismiss </Button>
            </div>
          )
        }
      </div>
    )
  
}

function Button (props) {
  const {onClick, className, children} = props
  return(
    <button onClick={onClick} className={className} type="button"> {children} </button>
  )
}



export default App;
