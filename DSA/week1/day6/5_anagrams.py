# Check Anagram	Given two strings, check if they are anagrams.

str1 = "listen"
str2 = "silent"

if len(str1) != len(str2):
    print("Not anagrams")
else:
    count1 = {}
    count2 = {}

    for char in str1:
        if char in count1:
            count1[char] += 1
        else:
            count1[char] = 1

    for char in str2:
        if char in count2:
            count2[char] += 1
        else:
            count2[char] = 1

    if count1 == count2:
        print("Anagram")
    else:
        print("Not anagram")
