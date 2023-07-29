import React, { useState, useEffect } from 'react';
import './filesys.css';
import Folder from './folder';

function Filesys({ focusOnto }) {
  const [openIndexes, setOpenIndexes] = useState([]);
  const file = focusOnto;

  useEffect(() => {
    // Find the index of the folder containing the focused file
    const foundIndex = findFolderIndex(focusOnto);

    // If the focusOnto file is found, open the folder corresponding to that file
    if (foundIndex !== -1) {
      setOpenIndexes((prevOpenIndexes) => {
        if (!prevOpenIndexes.includes(foundIndex)) {
          return [...prevOpenIndexes, foundIndex];
        }
        return prevOpenIndexes;
      });
    }
  }, [focusOnto]);

  const findFolderIndex = (file) => {
    // Loop through the items of each folder to find the index of the folder containing the file
    for (let i = 0; i < folders.length; i++) {
      const folderItems = folders[i].items;
      if (folderItems.includes(file)) {
        console.log(file + " matches " + folderItems[i]);
        return i;
      }
    }
    return -1; // File not found in any folder
  };

    // Define your folder data here with the respective items
    const folders = [
      { name: 'Sort', items: ['Merge Sort', 'Quick Sort', 'Insertion Sort', 'Bubble Sort', 'Heap Sort', 'Selection Sort', 'Topological Sort'] },
      { name: 'Search', items: ['Binary'] },
      // Add other folders with their items here
    ];

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
        <Folder name='Advice' isOpen={openIndexes.includes(8)} handleOpen={handleOpen} index={8} items={['Interview Prep', 'Communication', 'Problem Approach', 'Leetcode', 'Projects']} />
      </div>
    </div>
  );
};

export default Filesys;
