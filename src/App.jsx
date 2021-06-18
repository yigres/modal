import React, { useState } from 'react';
import { useImmer } from 'use-immer';
import getModal from './modals/index';

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
  const [renameModalState, setRenameModalState] = useState(null);
  const [tasks, setTasks] = useImmer([]);

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

      {tasks.map((v, i) => renderTask(v, i, handleRenameModalShow, handleRemoveModalShow))}

      { !!addModalShow && (
        <AddModal handleClose={handleAddModalClose} setTasks={setTasks} />
      )}

      { removeModalState !== null && (
        <RemoveModal
          handleClose={handleRemoveModalClose}
          setTasks={setTasks}
          id={removeModalState}
          task={tasks[removeModalState]}
        />
      )}

      { renameModalState !== null && (
        <RenameModal
          handleClose={handleRenameModalClose}
          setTasks={setTasks}
          id={renameModalState}
          task={tasks[renameModalState]}
        />
      )}
    </>
  );
};

export default App;
