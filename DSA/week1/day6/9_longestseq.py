# Longest Word in a Sentence	
# Find the longest word in a given sentence.

str = "this is a string with words"
words = str.split()

longest_word = max(words , key=len)
print(longest_word)