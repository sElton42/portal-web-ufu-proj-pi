import React from 'react';
import './CaixaLerProjeto.css';
import {useState} from 'react';
import ImagemModal from './ImagemModal';

function CaixaLerProjeto() {


    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isModalVisible2, setIsModalVisible2] = useState(false);
    const [isModalVisible3, setIsModalVisible3] = useState(false);

  return (
    <div className='caixalerprojeto'>
        <div className='caixalerprojeto-container'>

        <div className='caixalerprojeto-caixasuperior'>
          <div className='caixalerprojeto-caixasuperior-barra'></div>
          <div className='caixalerprojeto-caixasuperior-autorbox'>
            <p className='caixalerprojeto-caixasuperior-autorbox-p1'>Por:</p>
            <div className='caixalerprojeto-caixasuperior-autoxbox-fotouser'></div>
            <p className='caixalerprojeto-caixasuperior-autorbox-p2'>Elton Soares</p>
          </div>
        </div>

        <div className='caixalerprojeto-caixatitulo'>
          <div className='caixalerprojeto-caixatitulo-box'>
            <p className='caixalerprojeto-caixatitulo-ptitulo'>Circuito Transmissor FM</p>
          </div>
        </div>

        <div className='caixalerprojeto-caixadadosvaga'>
          <div className='caixalerprojeto-caixadadosvaga-box'>
            <p className='caixalerprojeto-caixadadosvaga-ptitulo'><b>Autor(es):</b> Nome dos Autor(es)</p>
          </div>
        </div>
        
        <div className='caixalerprojeto-caixadadosvaga'>
          <div className='caixalerprojeto-caixadadosvaga-box'>
            <p className='caixalerprojeto-caixadadosvaga-ptitulo'><b>Ano:</b> 2019</p>
          </div>
        </div>

        <div className='caixalerprojeto-caixaimagem'>
          <div className='caixalerprojeto-caixaimagem-box'>
              <div className='caixalerprojeto-caixaimagem-box-img'></div>
          </div>
        </div>

        <div className='caixalerprojeto-caixaconteudo'>
          <div className='caixalerprojeto-caixaconteudo-caixatexto'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae nulla imperdiet, semper odio et, laoreet enim. Sed purus mi, blandit eget aliquam vitae, congue nec nunc. Aliquam quis est leo. Cras maximus auctor ultrices. Mauris vel condimentum sem. Mauris sollicitudin consectetur turpis. Nunc in justo at velit scelerisque cursus. <br/><br/>

            Nulla ac malesuada elit. Suspendisse interdum sagittis purus, sed imperdiet justo tristique et. Quisque id tincidunt dolor. Donec non tellus nec nisl commodo fermentum. Cras posuere lorem mauris, a convallis neque porttitor vel. Fusce fermentum urna nisl.<br/><br/>

            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae nulla imperdiet, semper odio et, laoreet enim. Sed purus mi, blandit eget aliquam vitae, congue nec nunc. Aliquam quis est leo. Cras maximus auctor ultrices. Mauris vel condimentum sem. Mauris sollicitudin consectetur turpis. Nunc in justo at velit scelerisque cursus.<br/><br/>

            Nulla ac malesuada elit. Suspendisse interdum sagittis purus, sed imperdiet justo tristique et. Quisque id tincidunt dolor. Donec non tellus nec nisl commodo fermentum. Cras posuere lorem mauris, a convallis neque porttitor vel. Fusce fermentum urna nisl.
          </div>
        </div>

        <div className='caixalerprojeto-caixasuperior'>
          <div className='caixalerprojeto-caixasuperior-barra'></div>
          <div className='caixalerprojeto-caixasuperior-autorbox'>
            <p className='caixalerprojeto-caixasuperior-autorbox-p1'>Postado em: </p>
            <p className='caixalerprojeto-caixarodape-databox-p2'>11/01/2022</p>
          </div>
        </div>
        
        <div className='caixalerprojeto-caixagaleriaimgs'>
          <div className='caixalerprojeto-caixagaleriaimgs-titulobox'>
            <p className='caixalerprojeto-caixagaleriaimgs-titulobox-p'>Galeria de Imagens</p>
          </div>
          <div className='caixalerprojeto-caixagaleriaimgs-blocosimgs'>
            <button className='caixalerprojeto-caixagaleriaimgs-blocosimgs-button' onClick={ ()=>setIsModalVisible(true) } ><div className='caixalerprojeto-caixagaleriaimgs-blocosimgs-bloco1'><div className='caixalerprojeto-caixagaleriaimgs-blocosimgs-bloco1-img'></div></div></button>
            <button className='caixalerprojeto-caixagaleriaimgs-blocosimgs-button' onClick={ ()=>setIsModalVisible2(true) } ><div className='caixalerprojeto-caixagaleriaimgs-blocosimgs-bloco1meio'><div className='caixalerprojeto-caixagaleriaimgs-blocosimgs-bloco1meio-img'></div></div></button>
            <button className='caixalerprojeto-caixagaleriaimgs-blocosimgs-button' onClick={ ()=>setIsModalVisible3(true) } ><div className='caixalerprojeto-caixagaleriaimgs-blocosimgs-bloco1meio'><div className='caixalerprojeto-caixagaleriaimgs-blocosimgs-bloco1meio-img'></div></div></button>
          </div>
        </div>


        </div>

        {isModalVisible ?  (
        <ImagemModal onClose={ ()=>setIsModalVisible(false) } >
          <div className='caixalerprojeto-caixagaleriaimgs-blocosimgs-bloco1-img'></div>
        </ImagemModal>
        ) : null}

        {isModalVisible2 ?  (
            <ImagemModal onClose={ ()=>setIsModalVisible2(false) } >
            <div className='caixalerprojeto-caixagaleriaimgs-blocosimgs-bloco1meio-img'></div>
            </ImagemModal>
            ) : null}

        {isModalVisible3 ?  (
            <ImagemModal onClose={ ()=>setIsModalVisible3(false) } >
            <div className='caixalerprojeto-caixagaleriaimgs-blocosimgs-bloco1meio-img'></div>
            </ImagemModal>
            ) : null}

    </div>
  );
}

export default CaixaLerProjeto;