# Move Zeroes to End	Move all zeroes in the array to the end while maintaining the order.

arr = [10,20,3,0,1,5,0]

zeros = []
for i in range (len(arr)-1,-1,-1):
    if arr[i] ==0:
        zeros.append(arr.pop(i))

print(arr+zeros)

