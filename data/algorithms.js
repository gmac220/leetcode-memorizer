const algorithms = [
  {
    id: "two_pointers",
    name: "Two Pointers",
    when: "When working with sorted arrays or pairs",
    template: `def two_pointers(arr):
    left, right = 0, len(arr) - 1

    while left < right:
        if condition:
            left += 1
        else:
            right -= 1
`
  },
  {
    id: "sliding_window",
    name: "Sliding Window",
    when: "When dealing with contiguous subarrays or substrings",
    template: `def sliding_window(arr):
    left = 0

    for right in range(len(arr)):
        # expand window
        while condition:
            left += 1
`
  }
]
