import React, { useState } from 'react';
import { useImmer } from 'use-immer';
import 'bootstrap/dist/css/bootstrap.css';

import Task from './Task';
import AddModal from './modals/AddModal';
import RemoveModal from './modals/RemoveModal';
import RenameModal from './modals/RenameModal';

const App = () => {
  const [showAdd, setShowAdd] = useState(false);
  const [renameId, setRenameId] = useState(null);
  const [removeId, setRemoveId] = useState(null);
  const [tasks, setTasks] = useImmer(['First Task!', 'Second Task!']);

  const taskToRename = tasks[renameId] || '';
  const taskToRemove = tasks[removeId] || '';

  const addTask = (task) => {
    setTasks((draft) => {
      draft.push(task);
    });
  };

  const renameTask = (task) => {
    setTasks((draft) => {
      draft[renameId] = task;
    });
  };

  const removeTask = () => {
    setTasks((draft) => {
      delete draft[removeId];
    });
  };

  const hideAddModal = () => setShowAdd(false);
  const hideRenameModal = () => setRenameId(null);
  const hideRemoveModal = () => setRemoveId(null);

  const showAddModal = () => setShowAdd(true);
  const createShowRenameModal = (id) => () => setRenameId(id);
  const createShowRemoveModal = (id) => () => setRemoveId(id);

  return (
    <>
      <div className="mb-3">
        <button type="button" onClick={showAddModal} data-testid="item-add" className="btn btn-secondary">add</button>
      </div>
      <AddModal show={showAdd} onHide={hideAddModal} addTask={addTask} />
      <RemoveModal onHide={hideRemoveModal} task={taskToRemove} removeTask={removeTask} />
      <RenameModal onHide={hideRenameModal} task={taskToRename} renameTask={renameTask} />
      {tasks.map((task, i) => (
        <Task
          key={task}
          title={task}
          remove={createShowRemoveModal(i)}
          rename={createShowRenameModal(i)}
        />
      ))}
    </>
  );
};

export default App;
