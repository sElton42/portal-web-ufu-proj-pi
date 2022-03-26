import React from 'react';
import './CaixaLerClassificado.css';
import {useState} from 'react';
import ImagemModal from './ImagemModal';

function CaixaLerClassificado() {

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isModalVisible2, setIsModalVisible2] = useState(false);
    const [isModalVisible3, setIsModalVisible3] = useState(false);

  return (
    <div className='caixalerclassificado'>

        <div className='caixalerclassificado-container'>

        <div className='caixalerclassificado-caixasuperior'>
          <div className='caixalerclassificado-caixasuperior-barra'></div>
          <div className='caixalerclassificado-caixasuperior-autorbox'>
            <p className='caixalerclassificado-caixasuperior-autorbox-p1'>Por:</p>
            <div className='caixalerclassificado-caixasuperior-autoxbox-fotouser'></div>
            <p className='caixalerclassificado-caixasuperior-autorbox-p2'>Elton Soares</p>
          </div>
        </div>

        <div className='caixalerclassificado-caixatitulo'>
          <div className='caixalerclassificado-caixatitulo-box'>
            <p className='caixalerclassificado-caixatitulo-ptitulo'>Design de PCBs</p>
          </div>
        </div>

        <div className='caixalerclassificado-caixaconteudo'>
          <div className='caixalerclassificado-caixaconteudo-caixatexto'>
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
        
        <div className='caixalerclassificado-caixagaleriaimgs'>
          <div className='caixalerclassificado-caixagaleriaimgs-titulobox'>
            <p className='caixalerclassificado-caixagaleriaimgs-titulobox-p'>Galeria de Imagens</p>
          </div>
          <div className='caixalerclassificado-caixagaleriaimgs-blocosimgs'>
            <button className='caixalerclassificado-caixagaleriaimgs-blocosimgs-button' onClick={ ()=>setIsModalVisible(true) } ><div className='caixalerclassificado-caixagaleriaimgs-blocosimgs-bloco1'><div className='caixalerclassificado-caixagaleriaimgs-blocosimgs-bloco1-img'></div></div></button>
            <button className='caixalerclassificado-caixagaleriaimgs-blocosimgs-button' onClick={ ()=>setIsModalVisible2(true) } ><div className='caixalerclassificado-caixagaleriaimgs-blocosimgs-bloco1meio'><div className='caixalerclassificado-caixagaleriaimgs-blocosimgs-bloco1meio-img'></div></div></button>
            <button className='caixalerclassificado-caixagaleriaimgs-blocosimgs-button' onClick={ ()=>setIsModalVisible3(true) } ><div className='caixalerclassificado-caixagaleriaimgs-blocosimgs-bloco1meio'><div className='caixalerclassificado-caixagaleriaimgs-blocosimgs-bloco1meio-img'></div></div></button>
          </div>
        </div>

        </div>

        {isModalVisible ?  (
        <ImagemModal onClose={ ()=>setIsModalVisible(false) } >
          <div className='caixalerclassificado-caixagaleriaimgs-blocosimgs-bloco1-img'></div>
        </ImagemModal>
        ) : null}

        {isModalVisible2 ?  (
            <ImagemModal onClose={ ()=>setIsModalVisible2(false) } >
            <div className='caixalerclassificado-caixagaleriaimgs-blocosimgs-bloco1meio-img'></div>
            </ImagemModal>
            ) : null}

        {isModalVisible3 ?  (
            <ImagemModal onClose={ ()=>setIsModalVisible3(false) } >
            <div className='caixalerclassificado-caixagaleriaimgs-blocosimgs-bloco1meio-img'></div>
            </ImagemModal>
            ) : null}   

    </div>
  );
}

export default CaixaLerClassificado;