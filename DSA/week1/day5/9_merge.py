# Merge Two Sorted Arrays	Merge two sorted arrays into one sorted array (without using sort function).

arr1 = [41,14,85,23,9]
arr2 = [78,45,63,78]

arr3 = arr1+arr2
print(arr3)

for i in range(len(arr3)):
    for j in range(0,len(arr3)-1-i):
        if arr3[j] > arr3[j + 1]:
            arr3[j], arr3[j + 1] = arr3[j + 1], arr3[j]
print(arr3)
