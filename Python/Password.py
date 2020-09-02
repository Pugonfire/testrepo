
# Check special character function still does not work


def checkLength(word, minchar):  # Check length, return boolean
    if len(word) < int(minchar):
        print("Error, password needs to be at least", minchar, "long.")
        return False
    else:
        return True


def checkSpec(word):  # Check special character
    special = False
    for char in word:
        # A-Z, 0-9, a-z
        numChar = ord(char)
        if 65 < numChar < 91 or 48 < numChar < 58 or 97 < numChar < 123:
            pass
        else:
            special = True
    if special:
        return True
    else:
        print("Error, password needs at least one special character")
        return False


def checkNum(word):  # Check number
    for char in word:
        if char.isdigit():
            return True
            break
        else:
            pass
    print("Error, password needs at least one number")
    return False


def checkCaps(word):  # Check Capital letters
    upper, lower = False, False
    for char in word:
        if char.isupper():
            upper = True
        elif char.islower():
            lower = True
        else:
            pass
    if upper and lower:
        return True
    else:
        print("Error, password needs a mix of upper and lowercase letters")
        return False


# main
print('''Password requirements:
1. Minimally 8 Characters
2. At least 1 Number
3. At least a Case Change (Uppercase, lowercase)
4. At least 1 Special Character''')

valid = False
while valid == False:
    password = input("Enter password here: ")
    if checkLength(password, 8) and checkSpec(password) and checkNum(password) and checkCaps(password):
        valid = True
    else:
        pass
print("Congrats,", password, "is a valid password")
