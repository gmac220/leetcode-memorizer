const algorithms = [
  {
    id: "sliding_window",
    name: "Sliding Window",
    when: `Contiguous subarrays / substrings with constraints
    def findMaxAverage(nums: list[int], k: int) -> float:
    # 1. Calculate the sum of the first window of size k
    current_window_sum = sum(nums[:k])
    max_sum = current_window_sum

    # 2. Slide the window from the second element onwards
    for i in range(k, len(nums)):
        # Add the new element entering the window (nums[i])
        # and subtract the element leaving the window (nums[i - k])
        current_window_sum += nums[i] - nums[i - k]
        
        # Update the maximum sum found so far
        max_sum = max(max_sum, current_window_sum)

    # 3. Return the maximum average
    return max_sum / k
    Average: 51/4=12.75
    `,
    template: `def sliding_window(arr):
    left = 0
    for right in range(len(arr)):
        while condition:
            left += 1
    `
  },
  {
    id: "two_pointers",
    name: "Two Pointers",
    when: `Sorted arrays, pairs, inward shrinking
    example arr [1, 2, 3, 4, 6]
    target is 7
    return tuple of numbers
    answer is (1,6)
    `,
    template: `def two_pointers(arr, target):
    left, right = 0, len(arr) - 1
    while left < right:
        current_sum = arr[left] + arr[right]

        if current_sum == target:
            return (arr[left], arr[right])
        elif current_sum < target:
            left += 1
        else:
            right -= 1

    return None
    `
  },
  {
    id: "binary_search",
    name: "Binary Search",
    when: "Sorted or monotonic search space",
    template: `def binary_search(arr, target):
    left, right = 0, len(arr) - 1
    while left <= right:
        mid = (left + right) // 2

        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1

    return -1
    `
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
	queue = deque([root])
	visited = set([root])
	
	while queue:
		current_node = queue.popleft()
	
    for neighbor in get_neighbors(current_node):
      if neighbor not in visited:
        queue.append(neighbor)
        visited.add(neighbor)
    `
  },
  {
    id: "heap",
    name: "Heap / Priority Queue",
    when: `Top K, min/max retrieval
    def findKthLargest(self, nums: List[int], k: int) -> int:
        # Initialize a min-heap
        min_heap = []
        
        for num in nums:
            # Push the current number onto the heap
            heapq.heappush(min_heap, num)
            
            # If the heap size exceeds k, pop the smallest element
            # This ensures the heap always contains the k largest elements seen so far
            if len(min_heap) > k:
                heapq.heappop(min_heap)
                
        # The root of the min-heap (smallest of the k largest) is the kth largest element
        return min_heap[0]
    `,
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
    template: `def find_subsets(nums):
    result = []
    subset = []

    def backtrack(index):
        # Base case: we've explored all elements, add the current subset to the result
        result.append(subset[:])

        for i in range(index, len(nums)):
            subset.append(nums[i])
            backtrack(i + 1)
            subset.pop()
            
    backtrack(0)
    return result 
    `
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

