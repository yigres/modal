import React, { useState } from 'react';
import { useImmer } from 'use-immer';
import getModal from './modals/index';

const renderItem = ({ item, showModal }) => (
  <div key={item.id}>
    <span className="mr-3">{item.body}</span>
    <button type="button" className="border-0 btn-link mr-3 p-0" data-testid="item-rename" onClick={() => showModal('renaming', item)}>rename</button>
    <button type="button" className="border-0 btn-link p-0" data-testid="item-remove" onClick={() => showModal('removing', item)}>remove</button>
  </div>
);

const renderModal = ({ modalInfo, hideModal, setItems }) => {
  if (!modalInfo.type) {
    return null;
  }

  const Component = getModal(modalInfo.type);
  return <Component modalInfo={modalInfo} setItems={setItems} onHide={hideModal} />;
};

const App = () => {
  const [items, setItems] = useImmer([]);
  const [modalInfo, setModalInfo] = useState({ type: null, item: null });
  const hideModal = () => setModalInfo({ type: null, item: null });
  const showModal = (type, item = null) => setModalInfo({ type, item });

  return (
    <>
      <div className="mb-3">
        <button type="button" onClick={() => showModal('adding')} data-testid="item-add" className="btn btn-secondary">add</button>
      </div>
      {items.map((item) => renderItem({ item, showModal }))}
      {renderModal({ modalInfo, hideModal, setItems })}
    </>
  );
};

export default App;
