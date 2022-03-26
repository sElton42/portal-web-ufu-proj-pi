import React from 'react';
import "./News.css";
import { Link } from "react-router-dom";

function News() {
  return (
    <div className='news'>
        <div className='news-container'>
            <div className='news-leftside'>
                <Link className="linknoticias" to='/lernoticia'>
                    <div className='news-1'>
                        <div className='news-1-img'></div>
                        <p className='news-legenda-big'>UFU vai receber mais 4 milhões para continuidade da construção do primeiro bloco.</p>
                    </div>
                </Link>

                <Link className="linknoticias" to='/lernoticia'>
                    <div className='news-2'>
                        <div className='news-2-img'></div>
                        <p className='news-legenda-little'>UFU Patos de Minas vai realizar a 1ª Semana de Engenharia de Alimentos aberta ao público.</p>
                    </div>
                </Link>
                
                <Link className="linknoticias" to='/lernoticia'>
                    <div className='news-2'>
                        <div className='news-3-img'></div>
                        <p className='news-legenda-little'>UFU vai receber mais 4 milhões para continuidade da construção do primeiro bloco.</p>
                    </div>
                </Link>
            </div>

            <div className='news-rightside'>

                <Link className="linknoticias" to='/lernoticia'>
                    <div className='news-4'>
                        <div className='news-4-img'></div>
                        <p className='news-legenda-big'>UFU Patos de Minas vai realizar a 1ª Semana de Engenharia de Alimentos aberta ao público.</p>
                    </div>
                </Link>

                <Link className="linknoticias" to='/lernoticia'>
                    <div className='news-5'>
                        <div className='news-3-img'></div>
                        <p className='news-legenda-little'>UFU vai receber mais 4 milhões para continuidade da construção do primeiro bloco.</p>
                    </div>
                </Link>

                <Link className="linknoticias" to='/lernoticia'>
                    <div className='news-6'>
                        <div className='news-2-img'></div>
                        <p className='news-legenda-little'>UFU Patos de Minas vai realizar a 1ª Semana de Engenharia de Alimentos aberta ao público.</p>
                    </div>
                </Link>

                <div className='news-box-arrows'>
                    <div className='news-arrows'>
                        <div className='news-arrowleft'></div>
                        <div className='news-arrowright'></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default News;
