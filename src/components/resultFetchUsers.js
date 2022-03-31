import React from 'react';
import instancedb from '../apis/instancedb';
import ResultDisplayUsersOpts from './resultDisplayUsersOpts.js';

class resultFetchUsers extends React.Component {

    state={
        results:[]
    }

    componentDidMount(){
        instancedb.get('/usuarios.json')
        .then(response=>{
            console.log(response.data)
            const fetchedResults = [];
            for(let key in response.data) {
                fetchedResults.unshift(
                    {
                        ...response.data[key],
                        id:key
                    }
                )
            }
            this.setState({results:fetchedResults})
        })
    }

    render(){
        return(
            <select id="standard-select">
                {this.state.results.map(result =>(
                    <ResultDisplayUsersOpts
                        key = {result.id}
                        username = {result.username}
                    />
                ))}
            </select>
        )
    }

}

export default resultFetchUsers;