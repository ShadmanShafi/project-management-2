import { Modal } from 'bootstrap';
import React from 'react'
import ReactDOM from 'react-dom';
import ReactModal from 'react-modal';


export default function DeleteTask({handleDelete, hideModal, showModal}) {
  console.log("Hello from modal")
  return (
    <ReactModal isOpen={showModal}>
      <text>Do you want to delete</text>
      <button onClick={handleDelete}>Yes</button>
      <button onClick={hideModal}>no</button>
    </ReactModal>
  )
}
