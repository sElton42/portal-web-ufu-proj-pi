import React from 'react';
import instancedb from '../apis/instancedb';
import ResultDisplayVagasOpts from './resultDisplayVagasOpts';

class resultFetchVagas extends React.Component {

    state={
        results:[]
    }

    componentDidMount(){
        instancedb.get('/vagas.json')
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
                    <ResultDisplayVagasOpts
                        key = {result.id}
                        tipo = {result.tipo}
                        area = {result.area}
                        empresa = {result.empresa}
                        local = {result.local}
                    />
                ))}
            </select>
        )
    }

}

export default resultFetchVagas;