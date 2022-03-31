import React from 'react';
import instancedb from '../apis/instancedb';
import ResultDisplayClasOpts from './resultDisplayClasOpts';

class resultFetchClas extends React.Component {

    state={
        results:[]
    }

    componentDidMount(){
        instancedb.get('/classificados.json')
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
                    <ResultDisplayClasOpts
                        key = {result.id}
                        titulo = {result.titulo}
                    />
                ))}
            </select>
        )
    }

}

export default resultFetchClas;