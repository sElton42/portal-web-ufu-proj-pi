import React from 'react';
import instancedb from '../apis/instancedb';
import ResultDisplayNewsOpts from './resultDisplayNewsOpts.js';

class resultFetchNews extends React.Component {

    state={
        results:[]
    }

    componentDidMount(){
        instancedb.get('/noticias.json')
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
                    <ResultDisplayNewsOpts
                        key = {result.id}
                        titulo = {result.titulo}
                    />
                ))}
            </select>
        )
    }

}

export default  resultFetchNews;