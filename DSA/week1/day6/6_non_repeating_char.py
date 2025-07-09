# Find First Non-Repeating Character	
# Find the first non-repeating character in a string.

s = "aabbcdd"
for char in s:
    if s.count(char) == 1:
        print("First non-repeating character:", char)
        break
else:
    print("No non-repeating character found")
