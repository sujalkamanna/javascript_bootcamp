# Find Second Largest Element	Given an array, find the second largest element without sorting.
arr = [10,20,50,47,23]
largest = second_largest = float('-inf')

for num in arr:
    if num > largest:
        second_largest = largest
        largest = num
    elif num > second_largest and num != largest:
        second_largest = num
print(second_largest)

z = arr.sort()
max_no = arr.pop()
second_largest = arr.pop()

print("Second largest element is:", second_largest)