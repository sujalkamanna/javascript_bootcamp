# Count Positives, Negatives, Zeros	Count how many positive, negative, and zero values are in an array.

arr = [0,10,21,-1,2,3,6]
positive = 0
negative = 0
zeros = 0

for i in arr:
    if i>0:
        positive+=1
    elif i<0:
        negative+=1 
    else :
        zeros+=1           

print(positive,negative,zeros)