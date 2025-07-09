# Toggle Case of Characters
# Convert uppercase letters to lowercase and vice versa.
str = "Case"

def to_upper(s):
    if s != str.lower():
        s = str.lower()
    print(s)

def to_lower(s):
    if s!=str.upper():
        s = str.upper()
    print(s)

to_lower(str)
to_upper(str)