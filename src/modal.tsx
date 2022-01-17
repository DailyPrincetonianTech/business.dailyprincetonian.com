import React from 'react';

interface Props {
  hideModal: () => void,
  isVisible: boolean,
  title: string,
  description: string,
}

const Modal: React.FC<Props> = (props: Props) => (
  <div id="myModal" className={`Modal ${!props.isVisible ? 'is-hidden' : ''}`}>
    <div className="Modal-content">
      <span id="closeModal" className="Close" onKeyDown={() => { props.hideModal(); }} onClick={() => { props.hideModal(); }}>&times;</span>
      <h4 id="modal--header">{props.title}</h4>
      <br />
      <span id="modal--descrip">{props.description}</span>
    </div>
  </div>
);

export default Modal;
