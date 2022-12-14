import React from 'react';
import { BallTriangle } from 'react-loader-spinner'
import { Overlay } from './Loader.styled'; 
import { createPortal } from 'react-dom';


const modalRoot = document.querySelector('#modal-root');

export default function Loader (props) {
  return createPortal(
      <Overlay>
      <BallTriangle
        height={100}
        width={100}
        radius={5}
        color="#4fa94d"
        ariaLabel="ball-triangle-loading"
        wrapperClass={{}}
        wrapperStyle=""
        visible={true}
      />
      </Overlay>,
      modalRoot,
    );
  }

