import React from 'react';
import './CaixaLerVagas.css';
import {useState} from 'react';
import ImagemModal from './ImagemModal';

function CaixaLerVagas() {

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isModalVisible2, setIsModalVisible2] = useState(false);
    const [isModalVisible3, setIsModalVisible3] = useState(false);

  return (
    <div className='caixalervagas'>
        <div className='caixalervagas-container'>

        <div className='caixalervagas-caixasuperior'>
          <div className='caixalervagas-caixasuperior-barra'></div>
          <div className='caixalervagas-caixasuperior-autorbox'>
            <p className='caixalervagas-caixasuperior-autorbox-p1'>Por:</p>
            <div className='caixalervagas-caixasuperior-autoxbox-fotouser'></div>
            <p className='caixalervagas-caixasuperior-autorbox-p2'>Elton Soares</p>
          </div>
        </div>

        <div className='caixalervagas-caixatitulo'>
          <div className='caixalervagas-caixatitulo-box'>
            <p className='caixalervagas-caixatitulo-ptitulo'>Estágio</p>
          </div>
        </div>

        <div className='caixalervagas-caixadadosvaga'>
          <div className='caixalervagas-caixadadosvaga-box'>
            <p className='caixalervagas-caixadadosvaga-ptitulo'><b>Área:</b> Redes de Computadores</p>
          </div>
        </div>
        
        <div className='caixalervagas-caixadadosvaga'>
          <div className='caixalervagas-caixadadosvaga-box'>
            <p className='caixalervagas-caixadadosvaga-ptitulo'><b>Empresa:</b> Nome da Empresa</p>
          </div>
        </div>

        <div className='caixalervagas-caixadadosvaga'>
          <div className='caixalervagas-caixadadosvaga-box'>
            <p className='caixalervagas-caixadadosvaga-ptitulo'><b>Local:</b> Patos de Minas/MG</p>
          </div>
        </div>

        <div className='caixalervagas-caixaconteudo'>
          <div className='caixalervagas-caixaconteudo-caixatexto'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae nulla imperdiet, semper odio et, laoreet enim. Sed purus mi, blandit eget aliquam vitae, congue nec nunc. Aliquam quis est leo. Cras maximus auctor ultrices. Mauris vel condimentum sem. Mauris sollicitudin consectetur turpis. Nunc in justo at velit scelerisque cursus. <br/><br/>

            Nulla ac malesuada elit. Suspendisse interdum sagittis purus, sed imperdiet justo tristique et. Quisque id tincidunt dolor. Donec non tellus nec nisl commodo fermentum. Cras posuere lorem mauris, a convallis neque porttitor vel. Fusce fermentum urna nisl.<br/><br/>

            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae nulla imperdiet, semper odio et, laoreet enim. Sed purus mi, blandit eget aliquam vitae, congue nec nunc. Aliquam quis est leo. Cras maximus auctor ultrices. Mauris vel condimentum sem. Mauris sollicitudin consectetur turpis. Nunc in justo at velit scelerisque cursus.<br/><br/>

            Nulla ac malesuada elit. Suspendisse interdum sagittis purus, sed imperdiet justo tristique et. Quisque id tincidunt dolor. Donec non tellus nec nisl commodo fermentum. Cras posuere lorem mauris, a convallis neque porttitor vel. Fusce fermentum urna nisl.
          </div>
        </div>

        <div className='caixalernoticia-caixasuperior'>
          <div className='caixalernoticia-caixasuperior-barra'></div>
          <div className='caixalernoticia-caixasuperior-autorbox'>
            <p className='caixalernoticia-caixasuperior-autorbox-p1'>Postado em: </p>
            <p className='caixalernoticia-caixarodape-databox-p2'>11/01/2022</p>
          </div>
        </div>
        
        <div className='caixalervagas-caixagaleriaimgs'>
          <div className='caixalervagas-caixagaleriaimgs-titulobox'>
            <p className='caixalervagas-caixagaleriaimgs-titulobox-p'>Galeria de Imagens</p>
          </div>
          <div className='caixalervagas-caixagaleriaimgs-blocosimgs'>
            <button className='caixalervagas-caixagaleriaimgs-blocosimgs-button' onClick={ ()=>setIsModalVisible(true) } ><div className='caixalervagas-caixagaleriaimgs-blocosimgs-bloco1'><div className='caixalervagas-caixagaleriaimgs-blocosimgs-bloco1-img'></div></div></button>
            <button className='caixalervagas-caixagaleriaimgs-blocosimgs-button' onClick={ ()=>setIsModalVisible2(true) } ><div className='caixalervagas-caixagaleriaimgs-blocosimgs-bloco1meio'><div className='caixalervagas-caixagaleriaimgs-blocosimgs-bloco1meio-img'></div></div></button>
            <button className='caixalervagas-caixagaleriaimgs-blocosimgs-button' onClick={ ()=>setIsModalVisible3(true) } ><div className='caixalervagas-caixagaleriaimgs-blocosimgs-bloco1meio'><div className='caixalervagas-caixagaleriaimgs-blocosimgs-bloco1meio-img'></div></div></button>
          </div>
        </div>

        </div>

        {isModalVisible ?  (
        <ImagemModal onClose={ ()=>setIsModalVisible(false) } >
          <div className='caixalervagas-caixagaleriaimgs-blocosimgs-bloco1-img'></div>
        </ImagemModal>
        ) : null}

        {isModalVisible2 ?  (
            <ImagemModal onClose={ ()=>setIsModalVisible2(false) } >
            <div className='caixalervagas-caixagaleriaimgs-blocosimgs-bloco1meio-img'></div>
            </ImagemModal>
            ) : null}

        {isModalVisible3 ?  (
            <ImagemModal onClose={ ()=>setIsModalVisible3(false) } >
            <div className='caixalervagas-caixagaleriaimgs-blocosimgs-bloco1meio-img'></div>
            </ImagemModal>
            ) : null}   

    </div>
  )
}

export default CaixaLerVagas;