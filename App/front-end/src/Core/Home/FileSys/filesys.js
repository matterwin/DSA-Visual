import React, { useState, useEffect } from 'react';
import './filesys.css';
import Folder from './folder';

function Filesys({ focusOnto, handleClick }) {
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
    'Binary Tree': 3,
    'Binary Search Tree': 3,
    'Heap': 3,
    'Trie': 3,
    'AVL Tree': 3,
    'Red-Black Tree': 3,
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
      <a href="/" className='ref'>Reference</a>
      <div className='fs-folders-contain'>
        <Folder handleClick={handleClick} name='Sort' isOpen={openIndexes.includes(0)} file={focusOnto} handleOpen={handleOpen} index={0} items={['Merge','Quick','Insertion','Bubble','Heap','Selection','Topological']} />
        <Folder handleClick={handleClick} name='Search' isOpen={openIndexes.includes(1)} file={focusOnto} handleOpen={handleOpen} index={1} items={['Binary']} />
        <Folder handleClick={handleClick} name='Structs' isOpen={openIndexes.includes(2)} file={focusOnto} handleOpen={handleOpen} index={2} items={['Singly','Doubly','Stack','Queue','Priority Queue']} />
        <Folder handleClick={handleClick} name='Trees' isOpen={openIndexes.includes(3)} file={focusOnto} handleOpen={handleOpen} index={3} items={['Binary','BST','Heap','Trie','AVL','Red-Black']} />
        <Folder handleClick={handleClick} name='Traversals' isOpen={openIndexes.includes(4)} file={focusOnto} handleOpen={handleOpen} index={4} items={['BFS','DFS','Dijkstra','Bellman','Bidirectional','Prims','Kruskals']} />
        <Folder handleClick={handleClick} name='Complextities' isOpen={openIndexes.includes(5)} file={focusOnto} handleOpen={handleOpen} index={5} items={['Big-O','Big-Θ','Big-Ω','Space']} />
        <Folder handleClick={handleClick} name='Dynamic Programming' isOpen={openIndexes.includes(6)} file={focusOnto} handleOpen={handleOpen} index={6} items={['Greedy']} />
        <Folder handleClick={handleClick} name='Bit Manipulation' isOpen={openIndexes.includes(7)} file={focusOnto} handleOpen={handleOpen} index={7} items={['Kernighan']} />
        <Folder handleClick={handleClick} name='Advice' isOpen={openIndexes.includes(8)} file={focusOnto} handleOpen={handleOpen} index={8} items={['Interview Prep', 'Communication', 'Problem Approach', 'Leetcode', 'Projects']} />
        <Folder handleClick={handleClick} name='Math' isOpen={openIndexes.includes(9)} file={focusOnto} handleOpen={handleOpen} index={9} items={['Euclid']}/>
      </div>
    </div>
  );
};

export default Filesys;
