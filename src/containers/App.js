import React, {Component} from 'react';
import SearchBox from './SearchBox';
import CardList from './CardList'

class App extends Component {
    constructor() {
        super()
        this.state={
            db: [],
            searchfield: ''
        }
    }

    componentDidMount () {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response=> response.json())
            .then(users => this.setState({db:users}));
        }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
    }
    render(){
        const filteredContacts = this.state.db.filter(db =>{
            return db.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        if (this.state.db.length === 0) {
            return <h1 className="tc">Loading contacts</h1>
        } else {
            return (
                <div className='tc'>
                    <h1>Contacts</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <CardList db={filteredContacts}/>
                </div>
            );
        }
    }
}
export default App;