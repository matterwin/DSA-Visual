import React, { useState } from 'react';
import './filesys.css';
import Folder from './folder';

const list = ['Merge','Quick','Insertion','Bubble','Heap','Selection', 'Binary', 'Singly','Doubly','Stacks','Queues','Priority Queues', 'Binary','BST','Heap','Trie','AVL','Red-Black', 'BFS','DFS','Dijkstra','Bellman','Bidirectional', 'Big-O','Big-Θ','Big-Ω','Dijkstra','Bellman','Bidirectional'];

function Filesys({ handleFocusedFile }) {
  // console.log(focusedFile);
  const [openIndexes, setOpenIndexes] = useState([]);

  const handleOpen = (index) => {
    if (openIndexes.includes(index)) {
      setOpenIndexes(openIndexes.filter((i) => i !== index));
    } else {
      setOpenIndexes([...openIndexes, index]);
    }
  };

  return (
    <div className='fs-contain'>
      <p className='ref'>Reference</p>
      <div className='fs-folders-contain'>
        <Folder name='Sort' isOpen={openIndexes.includes(0)} handleOpen={handleOpen} index={0} items={['Merge','Quick','Insertion','Bubble','Heap','Selection','Topological']} list={list}/>
        <Folder name='Search' isOpen={openIndexes.includes(1)} handleOpen={handleOpen} index={1} items={['Binary']} list={list}/>
        <Folder name='Structs' isOpen={openIndexes.includes(2)} handleOpen={handleOpen} index={2} items={['Singly','Doubly','Stacks','Queues','Priority Queues']} list={list}/>
        <Folder name='Trees' isOpen={openIndexes.includes(3)} handleOpen={handleOpen} index={3} items={['Binary','BST','Heap','Trie','AVL','Red-Black']} list={list}/>
        <Folder name='Traversals' isOpen={openIndexes.includes(4)} handleOpen={handleOpen} index={4} items={['BFS','DFS','Dijkstra','Bellman','Bidirectional','Prims','Kruskals']} list={list}/>
        <Folder name='Complextities' isOpen={openIndexes.includes(5)} handleOpen={handleOpen} index={5} items={['Big-O','Big-Θ','Big-Ω','Space']} list={list}/>
        <Folder name='Dynamic Programming' isOpen={openIndexes.includes(6)} handleOpen={handleOpen} index={6} items={['Greedy']} list={list}/>
      </div>
    </div>
  );
};

export default Filesys;
