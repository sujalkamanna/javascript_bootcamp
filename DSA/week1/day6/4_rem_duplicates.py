str = "banana apple"

result = ""
arr = []

for char in str:
    if char not in arr:
        arr.append(char)
        result += char

print(result)
