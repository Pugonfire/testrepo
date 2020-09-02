width = int(input("Please enter pattern width: "))

for i in range(0, width*2):
    if i <= width:
        print("*"*i)
    else:
        print("*"*(width*2-i))

"""print("nested for-loop method")
for i in range(0, width):
    for x in range(0, i):
        print("*", end="")
    print("", end="\n")

for i in range(width, 0, -1):
    for x in range(0, i):
        print("*", end="")
    print("", end="\n")"""

""" for i in range(0, width):
    print("*"*i)
for j in range(0, width):
    print("*"*(width-j)) """
