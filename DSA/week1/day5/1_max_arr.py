# Find Maximum in Array	Given an array of integers, return the maximum element.

def find_max(arr):
    max_element = arr[0]
    for num in arr[1:]:
        if num > max_element:
            max_element = num
    return max_element

array = [3, 7, 2, 9, 5]
print(find_max(array))

# inbuilt function
arr = [10, 4, 23, 7, 18]
print(max(arr))


