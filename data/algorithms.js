const algorithms = [
  {
    id: "sliding_window",
    name: "Sliding Window",
    when: "Contiguous subarrays / substrings with constraints",
    template: `def sliding_window(arr):
    left = 0
    for right in range(len(arr)):
        while condition:
            left += 1`
  },
  {
    id: "two_pointers",
    name: "Two Pointers",
    when: "Sorted arrays, pairs, inward shrinking",
    template: `def two_pointers(arr):
    left, right = 0, len(arr)-1
    while left < right:
        l += 1
        r -= 1
    `
  },
  {
    id: "binary_search",
    name: "Binary Search",
    when: "Sorted or monotonic search space",
    template: `def binary_search(arr, target):
    l, r = 0, len(arr)-1
    while l <= r:
        mid = (l+r)//2`
  },
  {
    id: "dfs",
    name: "DFS",
    when: "Trees, graphs, recursion, backtracking",
    template: `def dfs(node):
    if not node: return
    dfs(node.left)
    dfs(node.right)`
  },
  {
    id: "bfs",
    name: "BFS",
    when: "Shortest path, level order traversal",
    template: `from collections import deque
def bfs(root):
	q = deque([root])
	visited = set([root])
	
	while q:
		current_node = q.popleft()
	
	for element in get_neighbors(q):
		if element not in visited:
			q.append(element)
			visited.add(element)
    `
  },
  {
    id: "heap",
    name: "Heap / Priority Queue",
    when: "Top K, min/max retrieval",
    template: `import heapq
heap = []
heapq.heappush(heap, x)`
  },
  {
    id: "dynamic_programming",
    name: "Dynamic Programming",
    when: "Overlapping subproblems",
    template: `dp = [0]*(n+1)
for i in range(1, n+1):
    dp[i] = dp[i-1]`
  },
  {
    id: "backtracking",
    name: "Backtracking",
    when: "Permutations, combinations",
    template: `def backtrack(path):
    if condition: return
    for i in choices:
        backtrack(path)`
  },
  {
    id: "recursion",
    name: "Recursion",
    when: "",
    template: `def recurse(params):
    if base_case: return
    recurse(next_params)
    `
  },
];

