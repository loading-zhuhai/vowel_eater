wordwithoutvowels = ""

userword = input("Enter your word USER!: ")
userword = userword.upper()

for letter in userword:
    if letter == "A":
        continue
    elif letter == "E":
        continue
    elif letter == "I":
        continue
    elif letter == "O":
        continue
    elif letter == "U":
        continue
    wordwithoutvowels += letter

print(f"This is your voweless word USER:\n {wordwithoutvowels}")


