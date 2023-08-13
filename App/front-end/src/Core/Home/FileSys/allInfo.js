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

  // Divide and conquer all the way to only having 1 element, 
  // and then merge and combine the two arrays recursively.
  mergeSort(l);
  mergeSort(r);
  merge(l, r, a);
}`
  };
  
  const quick = {
    title: 'Quick Sort',
    note: '• Divide and Conquer algorithm',
    desc: 'In-place Quick sort is an efficient, comparison-based sorting algorithm that follows the divide and conquer approach. Unlike the traditional Quick sort, it sorts the array in-place without requiring additional memory for new sub-arrays. It works by selecting a pivot element from the array and rearranging the elements around the pivot.',
    sections: [
        {
            title: 'Algorithm',
            content: [
                '1. Choose a pivot element from the array.',
                '2. Partition the array into two segments: elements less than the pivot and elements greater than the pivot.',
                '3. Move the pivot to its correct sorted position between the two segments.',
                '4. Recursively apply the in-place Quick sort algorithm to the left and right segments.',
            ]
        },
        {
            title: 'Time Complexity',
            content: 'The time complexity of in-place Quick sort depends on the choice of pivot and partitioning strategy. On average, it has a time complexity of O(n log n), where n is the number of elements in the array. In the worst case, it can degrade to O(n^2), which is rare with good pivot selection and partitioning techniques.'
        },
        {
            title: 'Space Complexity',
            content: 'In-place Quick sort has a space complexity of O(log n) for the recursive call stack. Since it sorts the array in-place without using additional memory for sub-arrays, its auxiliary space complexity is O(1), making it memory-efficient.'
        }
    ]
}



const insertion = {
  title: 'Insertion Sort',
  note: '• Comparison-based algorithm',
  desc: 'Insertion sort is a simple and intuitive sorting algorithm that builds the sorted array one element at a time. It works by repeatedly taking an element from the unsorted part of the array and inserting it into its correct position in the sorted part.',
  sections: [
      {
          title: 'Algorithm',
          content: [
              '1. Start with the first element as the sorted part.',
              '2. Iterate through the unsorted part of the array.',
              '3. Compare the current unsorted element with the elements in the sorted part and shift them to the right if they are greater.',
              '4. Insert the current element into its correct position in the sorted part.',
              '5. Repeat steps 2-4 until the entire array is sorted.',
          ]
      },
      {
          title: 'Time Complexity',
          content: 'The time complexity of insertion sort is O(n^2) in the worst case, where n is the number of elements in the array. However, it can perform efficiently for small datasets and partially sorted arrays, making it useful in certain scenarios.'
      },
      {
          title: 'Space Complexity',
          content: 'Insertion sort has a space complexity of O(1) as it only requires a constant amount of additional memory for temporary variables.'
      }
  ]
}


const bubble = {
  title: 'Bubble Sort',
  note: '• Comparison-based algorithm',
  desc: 'Bubble sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. The pass through the list is repeated until the list is sorted.',
  sections: [
      {
          title: 'Algorithm',
          content: [
              '1. Start by comparing the first two elements of the array.',
              '2. If the first element is greater than the second, swap them.',
              '3. Move to the next pair of elements and repeat step 2, continuing until the end of the array.',
              '4. After the first pass, the largest element will have "bubbled up" to the end of the array.',
              '5. Repeat steps 1-4 for the remaining elements, excluding the last one in each pass.',
              '6. The number of passes is equal to the number of elements minus the current pass number.',
          ]
      },
      {
          title: 'Time Complexity',
          content: 'The time complexity of bubble sort is O(n^2) in the worst and average cases, where n is the number of elements in the array. It is not very efficient for large datasets and is primarily used for educational purposes or for sorting small datasets.'
      },
      {
          title: 'Space Complexity',
          content: 'Bubble sort has a space complexity of O(1) as it only requires a constant amount of additional memory for temporary variables.'
      }
  ]
}


const heap = {
  title: 'Heap Sort',
  note: '• Comparison-based algorithm',
  desc: 'Heap sort is an efficient and comparison-based sorting algorithm that uses a binary heap data structure to build the sorted array. It works by repeatedly extracting the maximum (for max-heap) or minimum (for min-heap) element from the heap and placing it at the end of the sorted array.',
  sections: [
      {
          title: 'Algorithm',
          content: [
              '1. Build a binary heap from the input array.',
              '2. Extract the root (maximum or minimum) element from the heap and swap it with the last element.',
              '3. Reduce the heap size by one and restore the heap property.',
              '4. Repeat steps 2-3 until the heap is empty.',
              '5. The sorted array will be formed by the elements extracted from the heap.',
          ]
      },
      {
          title: 'Time Complexity',
          content: 'The time complexity of heap sort is O(n log n) in all cases, where n is the number of elements in the array. It guarantees consistent performance and is often used for sorting large datasets.'
      },
      {
          title: 'Space Complexity',
          content: 'Heap sort has a space complexity of O(1) as it only requires a constant amount of additional memory for temporary variables.'
      }
  ]
}
  
  const selection = {
    title: 'Selection Sort',
    note: '• Comparison-based algorithm',
    desc: 'Selection sort is a simple and intuitive sorting algorithm that divides the input list into two parts: the sorted part and the unsorted part. It repeatedly selects the smallest (or largest) element from the unsorted part and moves it to the end of the sorted part.',
    sections: [
        {
            title: 'Algorithm',
            content: [
                '1. Divide the input list into two parts: the sorted part and the unsorted part.',
                '2. Find the smallest element in the unsorted part and swap it with the first element in the unsorted part.',
                '3. Expand the sorted part by one element and reduce the unsorted part by one element.',
                '4. Repeat steps 2-3 until the entire list is sorted.',
            ]
        },
        {
            title: 'Time Complexity',
            content: 'The time complexity of selection sort is O(n^2) in the worst and average cases, where n is the number of elements in the list. It is not very efficient for large datasets and is primarily used for educational purposes or for sorting small datasets.'
        },
        {
            title: 'Space Complexity',
            content: 'Selection sort has a space complexity of O(1) as it only requires a constant amount of additional memory for temporary variables.'
        }
    ]
}


const topological = {
  title: 'Topological Sort',
  note: '• Graph-based algorithm',
  desc: 'Topological sort is an algorithm used to linearly order the nodes of a directed acyclic graph (DAG) in a way that preserves the partial order of the nodes. It is often used to schedule tasks that have dependencies, ensuring that a task is only executed after its prerequisites have been completed.',
  sections: [
      {
          title: 'Algorithm',
          content: [
              '1. Start with a DAG (directed acyclic graph) representing the tasks and their dependencies.',
              '2. Identify nodes with no incoming edges (nodes with no prerequisites) and add them to the sorted result.',
              '3. Remove the selected nodes from the graph along with their outgoing edges.',
              '4. Repeat steps 2-3 until all nodes have been included in the sorted result or it is determined that the graph has a cycle.',
              '5. If a cycle is detected, a topological ordering is not possible.',
          ]
      },
      {
          title: 'Time Complexity',
          content: 'The time complexity of topological sort is O(V + E), where V is the number of vertices (nodes) and E is the number of edges in the graph. It is a linear-time algorithm that is efficient for processing graphs with a moderate number of nodes and edges.'
      },
      {
          title: 'Space Complexity',
          content: 'Topological sort has a space complexity of O(V), where V is the number of vertices in the graph. This space is used to store the result of the topological ordering.'
      }
  ]
}


const binary = {
  title: 'Binary Search',
  note: '• Search algorithm',
  desc: 'Binary search is an efficient search algorithm used to find the position of a target value within a sorted array. It works by repeatedly dividing the search interval in half and narrowing down the possible locations of the target.',
  sections: [
      {
          title: 'Algorithm',
          content: [
              '1. Start with the entire sorted array as the search interval.',
              '2. Calculate the middle element of the interval.',
              '3. Compare the middle element with the target value.',
              '4. If the middle element is equal to the target, the search is successful; return its index.',
              '5. If the middle element is less than the target, narrow down the interval to the upper half and repeat steps 2-4.',
              '6. If the middle element is greater than the target, narrow down the interval to the lower half and repeat steps 2-4.',
              '7. Continue dividing and narrowing the interval until the target is found or the interval becomes empty.',
          ]
      },
      {
          title: 'Time Complexity',
          content: 'The time complexity of binary search is O(log n), where n is the number of elements in the sorted array. It significantly reduces the search space with each comparison, making it very efficient for large datasets.'
      },
      {
          title: 'Space Complexity',
          content: 'Binary search has a space complexity of O(1) as it only requires a constant amount of additional memory for storing indices and temporary variables.'
      }
  ]
}


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