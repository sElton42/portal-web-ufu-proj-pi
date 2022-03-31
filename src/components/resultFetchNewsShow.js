import React from 'react';
import instancedb from '../apis/instancedb';
import ResultDisplayNewsShow from './resultDisplayNewsShow.js';

class resultFetchNewsShow extends React.Component {

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
            <div>
                {this.state.results.map(result =>(
                    <ResultDisplayNewsShow
                        key = {result.id}
                        titulo = {result.titulo}
                        conteudo = {result.conteudo}
                        ilustracoes = {result.ilustracoes}
                    />
                ))}
            </div>
        )
    }

}

export default  resultFetchNewsShow;