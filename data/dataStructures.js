const dataStructures = [
    {
        id: "array",
        name: "Array/ List",
        when: `iteration, two pointers, sliding window
        Time: access O(1), insert/delete middle O(n)
        `,
        template: `arr = []
        arr.append(x)
        arr.pop()
        `
    },
    {
        id: "hash_map",
        name: "Hash Map",
        when: `Counting, lookups, caching 
        Time: O(1) average
        `,
        template: `freq = {}
        freq[x] = freq.get(x, 0) + 1
        `
    },
    {
        id: "set",
        name: "Set",
        when: `uniqueness, fast membership
        `,
        template: ` seen = set
        seen.add(x)
        `
    },
    {
        id: "stack",
        name: "Stack",
        when: `parentheses, monotonic stack, DFS
        `,
        template: `stack = []
        stack.append(x)
        stack.pop()
        `
    },
    {
        id: "queue_deque",
        name: "Queue / Deque",
        when: `BFS level traversal
        `,
        template: `from collections import deque
        q = deque()
        q.append(x)
        q.popleft()
        `
    },
    {
        id: "heap",
        name: "Heap (Priority Queue)",
        when: `top K, scheduling
        Min-heap by default
        `,
        template: `import heapq
        heap = []
        heapq.heappush(heap, x)
        heapq.heappop(heap)
        `
    },
    {
        id: "linked_list",
        name: "Linked list",
        when: `pointer manipulation, cycle detection
        `,
        template: `class ListNode:
            def __init__(self, val=0, next=None):
                self.val = val
                self.next = next
        `
    },
    {
        id: "binary_tree",
        name: "Binary Tree",
        when: `Traversal:
            DFS: recursion/stack
            BFS: queue
        `,
        template: `class TreeNode:
            def __init__(self, val=0, left=None, right=None):
                self.val = val
                self.left = left
                self.right = right

        `
    },
    {
        id: "graph",
        name: "graph",
        when: `Traversal:
            DFS: recursion/stack
            BFS: queue
        `,
        template: `graph = {node: [neighbors]}
        `
    },
]