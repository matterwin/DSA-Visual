const merge = {
    title: 'Merge Sort',
    note: '• Divide and Conquer algorithm',
    desc: 'Merge sort is an efficient, stable, and comparison-based sorting algorithm. It follows the divide and conquer approach to sort an array. The algorithm divides the input array into two halves, recursively sorts them, and then merges the sorted halves to produce the final sorted array.',
    sections: [
      {
        title: 'Algorithm',
        content: [
            '1. If the array has only one element or is empty, it is already sorted.',
            '2. Divide the array into two halves.',
            '3. Recursively sort the two halves.',
            '4. Merge the sorted halves to obtain the sorted array.',
        ]
      },
      {
        title: 'Time Complexity',
        content: 'The time complexity of merge sort is O(n log n) in all cases, where n is the number of elements in the array. It performs well even for large data sets and is widely used for sorting.'
      },
      {
        title: 'Space Complexity',
        content: 'Merge sort has a space complexity of O(n), where n is the number of elements in the array. It requires additional space to store the temporary arrays during the merging step.'
      }
    ],
    code:
`public static void merge(int[] l, int[] r, int[] a){
  int i=0, j=0;

  // Simply check which element to put back into a
  while(i+j < a.length){
      if(j == r.length || (i < l.length && l[i] < r[j]))
          a[i+j] = l[i++];
      else
          a[i+j] = r[j++];
  }
}
    
public static void mergeSort(int[] a){
  int len = a.length;
  if(len < 2) return;

  int mid = len / 2;
  int[] l = Arrays.copyOfRange(a, 0, mid);
  int[] r = Arrays.copyOfRange(a, mid, len);

  // Divide and conquer all the way to only having 1 element, and then merge and combine the two arrays recursively.
  mergeSort(l);
  mergeSort(r);
  merge(l, r, a);
}`
  };
  
  const quick = {
    title: 'Quick Sort',
    note: '• Divide and Conquer algorithm',
    desc: 'Quick sort is a highly efficient, comparison-based sorting algorithm. It follows the divide and conquer approach to sort an array. The algorithm selects an element called the pivot, partitions the array around the pivot, and recursively sorts the subarrays on either side of the pivot.',
    sections: [
      {
        title: 'Algorithm',
        content: '1. Choose a pivot element from the array.\n2. Partition the array such that all elements smaller than the pivot are placed before it, and all elements greater than the pivot are placed after it.\n3. Recursively apply the above steps to the subarrays on both sides of the pivot.'
      },
      {
        title: 'Time Complexity',
        content: 'The time complexity of quick sort depends on the choice of pivot and partitioning strategy. On average, it has a time complexity of O(n log n), where n is the number of elements in the array. In the worst case, it can have a time complexity of O(n^2). However, its average-case performance is generally very good.'
      },
      {
        title: 'Space Complexity',
        content: 'Quick sort has a space complexity of O(log n) for the recursive function calls, where n is the number of elements in the array. It performs in-place sorting, meaning it does not require additional space proportional to the input size.'
      }
    ]
  };

  const insertion = {
    title: 'Insertion Sort',
    note: '• Divide and Conquer algorithm',
    desc: 'Consequat fugiat Lorem et dolor non eu minim labore qui labore anim veniam. Quis ipsum nostrud nostrud reprehenderit incididunt. Nostrud velit ex elit mollit et officia aliqua sint culpa deserunt aliqua.',
    sections: [
      {
        title: 'Algorithm',
        content: '1. Choose a pivot element from the array.\n2. Partition the array such that all elements smaller than the pivot are placed before it, and all elements greater than the pivot are placed after it.\n3. Recursively apply the above steps to the subarrays on both sides of the pivot.'
      },
      {
        title: 'Time Complexity',
        content: 'The time complexity of quick sort depends on the choice of pivot and partitioning strategy. On average, it has a time complexity of O(n log n), where n is the number of elements in the array. In the worst case, it can have a time complexity of O(n^2). However, its average-case performance is generally very good.'
      },
      {
        title: 'Space Complexity',
        content: 'Quick sort has a space complexity of O(log n) for the recursive function calls, where n is the number of elements in the array. It performs in-place sorting, meaning it does not require additional space proportional to the input size.'
      }
    ]
  };

  
  const bubble = {
    title: 'Bubble Sort',
    note: '• Divide and Conquer algorithm',
    desc: 'Consequat fugiat Lorem et dolor non eu minim labore qui labore anim veniam. Quis ipsum nostrud nostrud reprehenderit incididunt. Nostrud velit ex elit mollit et officia aliqua sint culpa deserunt aliqua.',
    sections: [
      {
        title: 'Algorithm',
        content: '1. Choose a pivot element from the array.\n2. Partition the array such that all elements smaller than the pivot are placed before it, and all elements greater than the pivot are placed after it.\n3. Recursively apply the above steps to the subarrays on both sides of the pivot.'
      },
      {
        title: 'Time Complexity',
        content: 'The time complexity of quick sort depends on the choice of pivot and partitioning strategy. On average, it has a time complexity of O(n log n), where n is the number of elements in the array. In the worst case, it can have a time complexity of O(n^2). However, its average-case performance is generally very good.'
      },
      {
        title: 'Space Complexity',
        content: 'Quick sort has a space complexity of O(log n) for the recursive function calls, where n is the number of elements in the array. It performs in-place sorting, meaning it does not require additional space proportional to the input size.'
      }
    ]
  };

  const heap = {
    title: 'Heap Sort',
    note: '• Divide and Conquer algorithm',
    desc: 'Consequat fugiat Lorem et dolor non eu minim labore qui labore anim veniam. Quis ipsum nostrud nostrud reprehenderit incididunt. Nostrud velit ex elit mollit et officia aliqua sint culpa deserunt aliqua.',
    sections: [
      {
        title: 'Algorithm',
        content: '1. Choose a pivot element from the array.\n2. Partition the array such that all elements smaller than the pivot are placed before it, and all elements greater than the pivot are placed after it.\n3. Recursively apply the above steps to the subarrays on both sides of the pivot.'
      },
      {
        title: 'Time Complexity',
        content: 'The time complexity of quick sort depends on the choice of pivot and partitioning strategy. On average, it has a time complexity of O(n log n), where n is the number of elements in the array. In the worst case, it can have a time complexity of O(n^2). However, its average-case performance is generally very good.'
      },
      {
        title: 'Space Complexity',
        content: 'Quick sort has a space complexity of O(log n) for the recursive function calls, where n is the number of elements in the array. It performs in-place sorting, meaning it does not require additional space proportional to the input size.'
      }
    ]
  };

  
  const selection = {
    title: 'Selection Sort',
    note: '• Divide and Conquer algorithm',
    desc: 'Consequat fugiat Lorem et dolor non eu minim labore qui labore anim veniam. Quis ipsum nostrud nostrud reprehenderit incididunt. Nostrud velit ex elit mollit et officia aliqua sint culpa deserunt aliqua.',
    sections: [
      {
        title: 'Algorithm',
        content: '1. Choose a pivot element from the array.\n2. Partition the array such that all elements smaller than the pivot are placed before it, and all elements greater than the pivot are placed after it.\n3. Recursively apply the above steps to the subarrays on both sides of the pivot.'
      },
      {
        title: 'Time Complexity',
        content: 'The time complexity of quick sort depends on the choice of pivot and partitioning strategy. On average, it has a time complexity of O(n log n), where n is the number of elements in the array. In the worst case, it can have a time complexity of O(n^2). However, its average-case performance is generally very good.'
      },
      {
        title: 'Space Complexity',
        content: 'Quick sort has a space complexity of O(log n) for the recursive function calls, where n is the number of elements in the array. It performs in-place sorting, meaning it does not require additional space proportional to the input size.'
      }
    ]
  };


  const topological = {
    title: 'Topological Sort',
    note: '• Divide and Conquer algorithm',
    desc: 'Consequat fugiat Lorem et dolor non eu minim labore qui labore anim veniam. Quis ipsum nostrud nostrud reprehenderit incididunt. Nostrud velit ex elit mollit et officia aliqua sint culpa deserunt aliqua.',
    sections: [
      {
        title: 'Algorithm',
        content: '1. Choose a pivot element from the array.\n2. Partition the array such that all elements smaller than the pivot are placed before it, and all elements greater than the pivot are placed after it.\n3. Recursively apply the above steps to the subarrays on both sides of the pivot.'
      },
      {
        title: 'Time Complexity',
        content: 'The time complexity of quick sort depends on the choice of pivot and partitioning strategy. On average, it has a time complexity of O(n log n), where n is the number of elements in the array. In the worst case, it can have a time complexity of O(n^2). However, its average-case performance is generally very good.'
      },
      {
        title: 'Space Complexity',
        content: 'Quick sort has a space complexity of O(log n) for the recursive function calls, where n is the number of elements in the array. It performs in-place sorting, meaning it does not require additional space proportional to the input size.'
      }
    ]
  };

  const binary = {
    title: 'Binary Search',
    note: 'Divide and Conquer algorithm',
    desc: 'Consequat fugiat Lorem et dolor non eu minim labore qui labore anim veniam. Quis ipsum nostrud nostrud reprehenderit incididunt. Nostrud velit ex elit mollit et officia aliqua sint culpa deserunt aliqua.',
    sections: [
      {
        title: 'Algorithm',
        content: '1. Choose a pivot element from the array.\n2. Partition the array such that all elements smaller than the pivot are placed before it, and all elements greater than the pivot are placed after it.\n3. Recursively apply the above steps to the subarrays on both sides of the pivot.'
      },
      {
        title: 'Time Complexity',
        content: 'The time complexity of quick sort depends on the choice of pivot and partitioning strategy. On average, it has a time complexity of O(n log n), where n is the number of elements in the array. In the worst case, it can have a time complexity of O(n^2). However, its average-case performance is generally very good.'
      },
      {
        title: 'Space Complexity',
        content: 'Quick sort has a space complexity of O(log n) for the recursive function calls, where n is the number of elements in the array. It performs in-place sorting, meaning it does not require additional space proportional to the input size.'
      }
    ]
  };

  const singly = {
    title: 'Singly Linked List',
    note: '• Divide and Conquer algorithm',
    desc: 'Consequat fugiat Lorem et dolor non eu minim labore qui labore anim veniam. Quis ipsum nostrud nostrud reprehenderit incididunt. Nostrud velit ex elit mollit et officia aliqua sint culpa deserunt aliqua.',
    sections: [
      {
        title: 'Algorithm',
        content: '1. Choose a pivot element from the array.\n2. Partition the array such that all elements smaller than the pivot are placed before it, and all elements greater than the pivot are placed after it.\n3. Recursively apply the above steps to the subarrays on both sides of the pivot.'
      },
      {
        title: 'Time Complexity',
        content: 'The time complexity of quick sort depends on the choice of pivot and partitioning strategy. On average, it has a time complexity of O(n log n), where n is the number of elements in the array. In the worst case, it can have a time complexity of O(n^2). However, its average-case performance is generally very good.'
      },
      {
        title: 'Space Complexity',
        content: 'Quick sort has a space complexity of O(log n) for the recursive function calls, where n is the number of elements in the array. It performs in-place sorting, meaning it does not require additional space proportional to the input size.'
      }
    ]
  };

  const doubly = {
    title: 'Doubly Linked List',
    note: '• Divide and Conquer algorithm',
    desc: 'Consequat fugiat Lorem et dolor non eu minim labore qui labore anim veniam. Quis ipsum nostrud nostrud reprehenderit incididunt. Nostrud velit ex elit mollit et officia aliqua sint culpa deserunt aliqua.',
    sections: [
      {
        title: 'Algorithm',
        content: '1. Choose a pivot element from the array.\n2. Partition the array such that all elements smaller than the pivot are placed before it, and all elements greater than the pivot are placed after it.\n3. Recursively apply the above steps to the subarrays on both sides of the pivot.'
      },
      {
        title: 'Time Complexity',
        content: 'The time complexity of quick sort depends on the choice of pivot and partitioning strategy. On average, it has a time complexity of O(n log n), where n is the number of elements in the array. In the worst case, it can have a time complexity of O(n^2). However, its average-case performance is generally very good.'
      },
      {
        title: 'Space Complexity',
        content: 'Quick sort has a space complexity of O(log n) for the recursive function calls, where n is the number of elements in the array. It performs in-place sorting, meaning it does not require additional space proportional to the input size.'
      }
    ]
  };

  const stacks = {
    title: 'Stack',
    note: '• Divide and Conquer algorithm',
    desc: 'Consequat fugiat Lorem et dolor non eu minim labore qui labore anim veniam. Quis ipsum nostrud nostrud reprehenderit incididunt. Nostrud velit ex elit mollit et officia aliqua sint culpa deserunt aliqua.',
    sections: [
      {
        title: 'Algorithm',
        content: '1. Choose a pivot element from the array.\n2. Partition the array such that all elements smaller than the pivot are placed before it, and all elements greater than the pivot are placed after it.\n3. Recursively apply the above steps to the subarrays on both sides of the pivot.'
      },
      {
        title: 'Time Complexity',
        content: 'The time complexity of quick sort depends on the choice of pivot and partitioning strategy. On average, it has a time complexity of O(n log n), where n is the number of elements in the array. In the worst case, it can have a time complexity of O(n^2). However, its average-case performance is generally very good.'
      },
      {
        title: 'Space Complexity',
        content: 'Quick sort has a space complexity of O(log n) for the recursive function calls, where n is the number of elements in the array. It performs in-place sorting, meaning it does not require additional space proportional to the input size.'
      }
    ]
  };

  const queues = {
    title: 'Queue',
    note: '• Divide and Conquer algorithm',
    desc: 'Consequat fugiat Lorem et dolor non eu minim labore qui labore anim veniam. Quis ipsum nostrud nostrud reprehenderit incididunt. Nostrud velit ex elit mollit et officia aliqua sint culpa deserunt aliqua.',
    sections: [
      {
        title: 'Algorithm',
        content: '1. Choose a pivot element from the array.\n2. Partition the array such that all elements smaller than the pivot are placed before it, and all elements greater than the pivot are placed after it.\n3. Recursively apply the above steps to the subarrays on both sides of the pivot.'
      },
      {
        title: 'Time Complexity',
        content: 'The time complexity of quick sort depends on the choice of pivot and partitioning strategy. On average, it has a time complexity of O(n log n), where n is the number of elements in the array. In the worst case, it can have a time complexity of O(n^2). However, its average-case performance is generally very good.'
      },
      {
        title: 'Space Complexity',
        content: 'Quick sort has a space complexity of O(log n) for the recursive function calls, where n is the number of elements in the array. It performs in-place sorting, meaning it does not require additional space proportional to the input size.'
      }
    ]
  };

  const priorityqueues = {
    title: 'Priority Queue',
    note: '• Divide and Conquer algorithm',
    desc: 'Consequat fugiat Lorem et dolor non eu minim labore qui labore anim veniam. Quis ipsum nostrud nostrud reprehenderit incididunt. Nostrud velit ex elit mollit et officia aliqua sint culpa deserunt aliqua.',
    sections: [
      {
        title: 'Algorithm',
        content: '1. Choose a pivot element from the array.\n2. Partition the array such that all elements smaller than the pivot are placed before it, and all elements greater than the pivot are placed after it.\n3. Recursively apply the above steps to the subarrays on both sides of the pivot.'
      },
      {
        title: 'Time Complexity',
        content: 'The time complexity of quick sort depends on the choice of pivot and partitioning strategy. On average, it has a time complexity of O(n log n), where n is the number of elements in the array. In the worst case, it can have a time complexity of O(n^2). However, its average-case performance is generally very good.'
      },
      {
        title: 'Space Complexity',
        content: 'Quick sort has a space complexity of O(log n) for the recursive function calls, where n is the number of elements in the array. It performs in-place sorting, meaning it does not require additional space proportional to the input size.'
      }
    ]
  };

  const binaryTree = {
    title: 'Binary Tree',
    note: '• Divide and Conquer algorithm',
    desc: 'Consequat fugiat Lorem et dolor non eu minim labore qui labore anim veniam. Quis ipsum nostrud nostrud reprehenderit incididunt. Nostrud velit ex elit mollit et officia aliqua sint culpa deserunt aliqua.',
    sections: [
      {
        title: 'Algorithm',
        content: '1. Choose a pivot element from the array.\n2. Partition the array such that all elements smaller than the pivot are placed before it, and all elements greater than the pivot are placed after it.\n3. Recursively apply the above steps to the subarrays on both sides of the pivot.'
      },
      {
        title: 'Time Complexity',
        content: 'The time complexity of quick sort depends on the choice of pivot and partitioning strategy. On average, it has a time complexity of O(n log n), where n is the number of elements in the array. In the worst case, it can have a time complexity of O(n^2). However, its average-case performance is generally very good.'
      },
      {
        title: 'Space Complexity',
        content: 'Quick sort has a space complexity of O(log n) for the recursive function calls, where n is the number of elements in the array. It performs in-place sorting, meaning it does not require additional space proportional to the input size.'
      }
    ]
  };

  const bst = {
    title: 'Binary Search Tree',
    note: '• Divide and Conquer algorithm',
    desc: 'Consequat fugiat Lorem et dolor non eu minim labore qui labore anim veniam. Quis ipsum nostrud nostrud reprehenderit incididunt. Nostrud velit ex elit mollit et officia aliqua sint culpa deserunt aliqua.',
    sections: [
      {
        title: 'Algorithm',
        content: '1. Choose a pivot element from the array.\n2. Partition the array such that all elements smaller than the pivot are placed before it, and all elements greater than the pivot are placed after it.\n3. Recursively apply the above steps to the subarrays on both sides of the pivot.'
      },
      {
        title: 'Time Complexity',
        content: 'The time complexity of quick sort depends on the choice of pivot and partitioning strategy. On average, it has a time complexity of O(n log n), where n is the number of elements in the array. In the worst case, it can have a time complexity of O(n^2). However, its average-case performance is generally very good.'
      },
      {
        title: 'Space Complexity',
        content: 'Quick sort has a space complexity of O(log n) for the recursive function calls, where n is the number of elements in the array. It performs in-place sorting, meaning it does not require additional space proportional to the input size.'
      }
    ]
  };

  const heapTree = {
    title: 'Heap',
    note: '• Divide and Conquer algorithm',
    desc: 'Consequat fugiat Lorem et dolor non eu minim labore qui labore anim veniam. Quis ipsum nostrud nostrud reprehenderit incididunt. Nostrud velit ex elit mollit et officia aliqua sint culpa deserunt aliqua.',
    sections: [
      {
        title: 'Algorithm',
        content: '1. Choose a pivot element from the array.\n2. Partition the array such that all elements smaller than the pivot are placed before it, and all elements greater than the pivot are placed after it.\n3. Recursively apply the above steps to the subarrays on both sides of the pivot.'
      },
      {
        title: 'Time Complexity',
        content: 'The time complexity of quick sort depends on the choice of pivot and partitioning strategy. On average, it has a time complexity of O(n log n), where n is the number of elements in the array. In the worst case, it can have a time complexity of O(n^2). However, its average-case performance is generally very good.'
      },
      {
        title: 'Space Complexity',
        content: 'Quick sort has a space complexity of O(log n) for the recursive function calls, where n is the number of elements in the array. It performs in-place sorting, meaning it does not require additional space proportional to the input size.'
      }
    ]
  };

  const trie = {
    title: 'Trie',
    note: '• Divide and Conquer algorithm',
    desc: 'Consequat fugiat Lorem et dolor non eu minim labore qui labore anim veniam. Quis ipsum nostrud nostrud reprehenderit incididunt. Nostrud velit ex elit mollit et officia aliqua sint culpa deserunt aliqua.',
    sections: [
      {
        title: 'Algorithm',
        content: '1. Choose a pivot element from the array.\n2. Partition the array such that all elements smaller than the pivot are placed before it, and all elements greater than the pivot are placed after it.\n3. Recursively apply the above steps to the subarrays on both sides of the pivot.'
      },
      {
        title: 'Time Complexity',
        content: 'The time complexity of quick sort depends on the choice of pivot and partitioning strategy. On average, it has a time complexity of O(n log n), where n is the number of elements in the array. In the worst case, it can have a time complexity of O(n^2). However, its average-case performance is generally very good.'
      },
      {
        title: 'Space Complexity',
        content: 'Quick sort has a space complexity of O(log n) for the recursive function calls, where n is the number of elements in the array. It performs in-place sorting, meaning it does not require additional space proportional to the input size.'
      }
    ]
  };

  const avl = {
    title: 'AVL Tree',
    note: '• Divide and Conquer algorithm',
    desc: 'Consequat fugiat Lorem et dolor non eu minim labore qui labore anim veniam. Quis ipsum nostrud nostrud reprehenderit incididunt. Nostrud velit ex elit mollit et officia aliqua sint culpa deserunt aliqua.',
    sections: [
      {
        title: 'Algorithm',
        content: '1. Choose a pivot element from the array.\n2. Partition the array such that all elements smaller than the pivot are placed before it, and all elements greater than the pivot are placed after it.\n3. Recursively apply the above steps to the subarrays on both sides of the pivot.'
      },
      {
        title: 'Time Complexity',
        content: 'The time complexity of quick sort depends on the choice of pivot and partitioning strategy. On average, it has a time complexity of O(n log n), where n is the number of elements in the array. In the worst case, it can have a time complexity of O(n^2). However, its average-case performance is generally very good.'
      },
      {
        title: 'Space Complexity',
        content: 'Quick sort has a space complexity of O(log n) for the recursive function calls, where n is the number of elements in the array. It performs in-place sorting, meaning it does not require additional space proportional to the input size.'
      }
    ]
  };

  const redblack = {
    title: 'Red-Black Tree',
    note: '• Divide and Conquer algorithm',
    desc: 'Consequat fugiat Lorem et dolor non eu minim labore qui labore anim veniam. Quis ipsum nostrud nostrud reprehenderit incididunt. Nostrud velit ex elit mollit et officia aliqua sint culpa deserunt aliqua.',
    sections: [
      {
        title: 'Algorithm',
        content: '1. Choose a pivot element from the array.\n2. Partition the array such that all elements smaller than the pivot are placed before it, and all elements greater than the pivot are placed after it.\n3. Recursively apply the above steps to the subarrays on both sides of the pivot.'
      },
      {
        title: 'Time Complexity',
        content: 'The time complexity of quick sort depends on the choice of pivot and partitioning strategy. On average, it has a time complexity of O(n log n), where n is the number of elements in the array. In the worst case, it can have a time complexity of O(n^2). However, its average-case performance is generally very good.'
      },
      {
        title: 'Space Complexity',
        content: 'Quick sort has a space complexity of O(log n) for the recursive function calls, where n is the number of elements in the array. It performs in-place sorting, meaning it does not require additional space proportional to the input size.'
      }
    ]
  };

export const exports = {
    merge,
    quick,
    insertion,
    bubble,
    heap,
    selection,
    topological,
    binary,
    singly,
    doubly,
    stacks,
    queues,
    priorityqueues,
    binaryTree,
    bst,
    heapTree,
    trie,
    avl,
    redblack
};