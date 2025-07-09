# Remove Even Numbers	Given an array, return a new array with all even numbers removed.

arr = [10, 15, 20, 25, 30, 35]
result = []
for i in arr:
    if i % 2 != 0:
        result.append(i)
print(result)
