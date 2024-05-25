'use client'
import React from 'react'
import { useGlobalState } from '../../app/context/globalProvider'

interface Props {
    content: React.ReactNode;
}

function Modal({content}: Props) {
    const {closeModal} = useGlobalState();

  return (
    <div>
        <div className="modal-overlay" onClick={closeModal}></div>
        {content}
    </div>
  );
}
export default Modal