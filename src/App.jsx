import React, { useState } from 'react';
import { useImmer } from 'use-immer';
import getModal from './modals/index.js';

const renderTask = (v, i, handleRenameModalShow, handleRemoveModalShow) => {
  const renderRemoveModal = () => {
    handleRemoveModalShow(i);
  };

  const renderRenameModal = () => {
    handleRenameModalShow(i);
  };

  return (
    <div key={i}>
      <span className="mr-3">{v}</span>
      <button type="button" className="border-0 btn-link mr-3 p-0" data-testid="item-rename" onClick={renderRenameModal}>rename</button>
      <button type="button" className="border-0 btn-link p-0" data-testid="item-remove" onClick={renderRemoveModal}>remove</button>
    </div>
  );
};

const App = () => {
  const [addModalShow, setAddModalShow] = useState(false);
  const [removeModalState, setRemoveModalState] = useState(null);
  const [renameModalState, setRenameModalState] = useImmer(null);
  const [tasks, setTasks] = useImmer(['First Task!', 'Second Task!']);

  const handleAddModalClose = () => setAddModalShow(false);
  const handleAddModalShow = () => setAddModalShow(true);
  const handleRemoveModalClose = () => setRemoveModalState(null);
  const handleRemoveModalShow = (id) => setRemoveModalState(id);
  const handleRenameModalClose = () => setRenameModalState(null);
  const handleRenameModalShow = (id) => setRenameModalState(id);

  const AddModal = getModal('adding');
  const RemoveModal = getModal('removing');
  const RenameModal = getModal('renaming');
  return (
    <>
      <div className="mb-3">
        <button type="button" onClick={handleAddModalShow} data-testid="item-add" className="btn btn-secondary">add</button>
      </div>

      <AddModal show={addModalShow} onHide={handleAddModalClose} tasks={tasks} setTasks={setTasks} />
      <RemoveModal show={removeModalState !== null} onHide={handleRemoveModalClose} tasks={tasks} setTasks={setTasks} id={removeModalState} />
      <RenameModal show={renameModalState !== null} onHide={handleRenameModalClose} tasks={tasks} setTasks={setTasks} id={renameModalState} />
      {tasks.map((v, i) => renderTask(v, i, handleRenameModalShow, handleRemoveModalShow))}
    </>
  );
};

export default App;
