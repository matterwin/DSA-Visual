import React, { useState, useEffect } from 'react';
import './filesys.css';
import Folder from './folder';

function Filesys({ focusOnto }) {
  const [openIndexes, setOpenIndexes] = useState([]);

  useEffect(() => {
    // Find the index of the folder containing the focused file
    const foundIndex = findFolderIndex(focusOnto);

    // Close the previously opened folder, if any
    setOpenIndexes((prevOpenIndexes) => {
      if (foundIndex !== -1 && !prevOpenIndexes.includes(foundIndex)) {
        // If the focusOnto file is found and the folder is not already open, close the previous folder and open the current one
        return [foundIndex];
      } else {
        // If the focusOnto file is not found or the folder is already open, keep the previous open folders as they are
        return prevOpenIndexes;
      }
    });
  }, [focusOnto]);

  const findFolderIndex = (file) => {
    const folderIndex = folders[file];
    if (folderIndex !== undefined) {
      // console.log(file + " matches " + folders2[folderIndex].name);
      return folderIndex;
    }
    return -1; // File not found in any folder
  };

  const folders = {
    'Merge Sort': 0,
    'Quick Sort': 0,
    'Insertion Sort': 0,
    'Bubble Sort': 0,
    'Heap Sort': 0,
    'Selection Sort': 0,
    'Topological Sort': 0,
    'Binary Search': 1,
    'Singly Linked List': 2,
    'Doubly Linked List': 2,
    'Stack': 2,
    'Queue': 2,
    'Priority Queue': 2,
    'Binary Tree': 2,
    'Binary Search Tree': 2,
    'Heap': 2,
    'Trie': 2,
    'AVL Tree': 2,
    'Red-Black Tree': 2,
  };

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
