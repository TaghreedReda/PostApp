import React , { Component }from 'react';
import PostsList from './postsList';
import {humans} from './humans.js';
import SearchBox from './SearchBox.js';
import Scroll from './scroll.js'

 class App extends Component {
     constructor(){
         super()
         this.state={
            humans : [],
            searchfield:''
         }
     }

     componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(Response =>Response.json())

        .then(users => {
            this.setState ({humans : users})
        });
     }
     onSearchChange = (event) => {
         this.setState({searchfield:event.target.value})
      
      
     
     }
    render(){
        const filteredhumans = this.state.humans.filter(humans=>{
            return humans.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
    return (
        <div className='tc'>
        <h1 className='f2'>Humans of FCIS</h1>
        <SearchBox searchChange={this.onSearchChange}/>
        <Scroll>
        <PostsList humans={filteredhumans}/>
        </Scroll>
        </div> 
    );
}
}
export default App ;