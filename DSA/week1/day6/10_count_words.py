# Count Words in a Sentence	
# Return the number of words in a sentence (words are separated by space).	

str = 'Return the number of words in a sentence'
count=0
words = str.split()
for i in words:
    count+=1
print(count)
