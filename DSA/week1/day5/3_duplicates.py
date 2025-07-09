# Check for Duplicates	Given an array of integers, determine if any value appears at least twice.

arr = [1, 2, 3, 4, 2]

duplicates = False

for i in range(len(arr)):
    for j in range(i + 1, len(arr)):
        if arr[i] == arr[j]:
            duplicates = True
            break
    if duplicates:
        break
print(duplicates)