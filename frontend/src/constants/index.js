const Status = {
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  REQUEST_TIMEOUT: 408,
  CONFLICT: 409,
  GONE: 410,
  INTERNAL_SERVER_ERROR: 500,
};

const Complexity = {
  EASY: 'Easy',
  MEDIUM: 'Medium',
  HARD: 'Hard',
};

const Language = {
  PYTHON: 'Python',
  JAVA: 'Java',
  JS: 'Javascript',
};

const Boilerplate = {
  PYTHON: `def main():
  # Write your code here

if __name__ == "__main__":
  main()
`,
  JAVA: `public class Main {
  public static void main(String[] args) {
    // Write your code here
  
  }
  
  // You may implement your methods here

}
`,
  JS: `function main() {
  // Write your code here

}

main();
`,
};

const Event = {
  Socket: {
    CONNECT: 'connection',
    DISCONNECT: 'disconnect',
    JOIN_ROOM: 'join-room',
    LEAVE_ROOM: 'leave-room',
    TERMINATE_ROOM: 'terminate-room',
  },
  Question: {
    CHANGE: 'question-change',
    UPDATE: 'question-update',
  },
  Code: {
    CHANGE: 'code-change',
    UPDATE: 'code-update',
    RESET: 'code-reset',
  },
  Language: {
    CHANGE: 'language-change',
    UPDATE: 'language-update',
  },
  Result: {
    CHANGE: 'result-change',
    UPDATE: 'result-update',
  },
  Button: {
    DISABLE_EXEC: 'disable-exec-button',
    UPDATE_EXEC: 'update-exec-button',
  },
  Mouse: {
    POSITION: 'mouse-position',
    LEAVE: 'mouse-leave',
  },
  Communication: {
    CHAT_SEND: 'chat-send',
    CHAT_RECEIVE: 'chat-receive',
    SYNCHRONIZE: 'synchronize',
  },
};

const Topics = {
  ALL: 'All',
  ARRAY: 'Array',
  BACKTRACKING: 'Backtracking',
  BINARY_SEARCH: 'Binary Search',
  BINARY_SEARCH_TREE: 'Binary Search Tree',
  BINARY_TREE: 'Binary Tree',
  BINARY_INDEXED_TREE: 'Binary Indexed Tree',
  BIT_MANIPULATION: 'Bit Manipulation',
  BITMASK: 'Bitmask',
  BREADTH_FIRST_SEARCH: 'Breadth-First Search',
  BRAINTEASER: 'Brainteaser',
  BUCKET_SORT: 'Bucket Sort',
  COMBINATORICS: 'Combinatorics',
  CONCURRENCY: 'Concurrency',
  COUNTING: 'Counting',
  COUNTING_SORT: 'Counting Sort',
  DATA_STREAM: 'Data Stream',
  DATABASE: 'Database',
  DEPTH_FIRST_SEARCH: 'Depth-First Search',
  DESIGN: 'Design',
  DIVIDE_AND_CONQUER: 'Divide and Conquer',
  DOUBLY_LINKED_LIST: 'Doubly-Linked List',
  DYNAMIC_PROGRAMMING: 'Dynamic Programming',
  EULERIAN_CIRCUIT: 'Eulerian Circuit',
  GAME_THEORY: 'Game Theory',
  GEOMETRY: 'Geometry',
  GRAPH: 'Graph',
  GREEDY: 'Greedy',
  HASH_FUNCTION: 'Hash Function',
  HASH_TABLE: 'Hash Table',
  HEAP_PRIORITY_QUEUE: 'Heap (Priority Queue)',
  INTERACTIVE: 'Interactive',
  ITERATOR: 'Iterator',
  LINE_SWEEP: 'Line Sweep',
  LINKED_LIST: 'Linked List',
  MATH: 'Math',
  MATRIX: 'Matrix',
  MEMOIZATION: 'Memoization',
  MERGE_SORT: 'Merge Sort',
  MINIMUM_SPANNING_TREE: 'Minimum Spanning Tree',
  MONOTONIC_QUEUE: 'Monotonic Queue',
  MONOTONIC_STACK: 'Monotonic Stack',
  NUMBER_THEORY: 'Number Theory',
  ORDERED_SET: 'Ordered Set',
  PREFIX_SUM: 'Prefix Sum',
  PROBABILITY_AND_STATISTICS: 'Probability and Statistics',
  QUEUE: 'Queue',
  QUICKSELECT: 'Quickselect',
  RADIX_SORT: 'Radix Sort',
  RANDOMIZED: 'Randomized',
  RECURSION: 'Recursion',
  REJECTION_SAMPLING: 'Rejection Sampling',
  RESERVOIR_SAMPLING: 'Reservoir Sampling',
  ROLLING_HASH: 'Rolling Hash',
  SEGMENT_TREE: 'Segment Tree',
  SHELL: 'Shell',
  SHORTEST_PATH: 'Shortest Path',
  SIMULATION: 'Simulation',
  SLIDING_WINDOW: 'Sliding Window',
  SORTING: 'Sorting',
  STACK: 'Stack',
  STRING: 'String',
  STRING_MATCHING: 'String Matching',
  STRONGLY_CONNECTED_COMPONENT: 'Strongly Connected Component',
  TOPOLOGICAL_SORT: 'Topological Sort',
  TREE: 'Tree',
  TRIE: 'Trie',
  TWO_POINTERS: 'Two Pointers',
  UNION_FIND: 'Union Find',
};

const Tables = {
  Questions: {
    DEFAULT_PAGE_LENGTH: 25,
    CustomSort: {
      ColumnNum: 3,
      ColumnName: 'Complexity',
      SortOrder: [
        // NOTE: this is very hardcoded, it's accordingly to the html output
        '<span class="badge bg-success">Easy</span>', 
        '<span class="badge bg-warning">Medium</span>', 
        '<span class="badge bg-danger">Hard</span>',
      ]
    }
  },
  Users: {
    DEFAULT_PAGE_LENGTH: 10,
  },
  Submissions: {
    DEFAULT_PAGE_LENGTH: 10,
  },
};

module.exports = {
  Status,
  Complexity,
  Language,
  Boilerplate,
  Event,
  Topics,
  Tables,
};
