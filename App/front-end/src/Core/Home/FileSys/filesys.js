import React, { useState } from 'react';
import './filesys.css';
import Folder from './folder';

function Filesys() {
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
        <Folder name='Sort' isOpen={openIndexes.includes(0)} handleOpen={handleOpen} index={0} items={['Merge','Quick','Insertion','Bubble','Heap','Selection','Topological']} />
        <Folder name='Search' isOpen={openIndexes.includes(1)} handleOpen={handleOpen} index={1} items={['Binary']} />
        <Folder name='Structs' isOpen={openIndexes.includes(2)} handleOpen={handleOpen} index={2} items={['Singly','Doubly','Stacks','Queues','Priority Queues']} />
        <Folder name='Trees' isOpen={openIndexes.includes(3)} handleOpen={handleOpen} index={3} items={['Binary','BST','Heap','Trie','AVL','Red-Black']} />
        <Folder name='Traversals' isOpen={openIndexes.includes(4)} handleOpen={handleOpen} index={4} items={['BFS','DFS','Dijkstra','Bellman','Bidirectional','Prims','Kruskals']} />
        <Folder name='Complextities' isOpen={openIndexes.includes(5)} handleOpen={handleOpen} index={5} items={['Big-O','Big-Θ','Big-Ω','Space']} />
        <Folder name='Dynamic Programming' isOpen={openIndexes.includes(6)} handleOpen={handleOpen} index={6} items={['Greedy']} />
        <Folder name='Bit Manipulation' isOpen={openIndexes.includes(7)} handleOpen={handleOpen} index={7} items={['Kernighan']} />
      </div>
    </div>
  );
};

export default Filesys;
