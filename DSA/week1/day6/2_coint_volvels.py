# Count Vowels	Count the number of vowels in a given string.

str = "this is a string and it may contains vovels"

vovels = ['a','e','i','o','u']
count = 0
for i in str.lower():
    if i in vovels:
        count+=1

print(count)