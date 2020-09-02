n = 0
# Define variables 1 and 2 with the first two values
val1 = 0
val2 = 1
while n < 1000:
    print(val2)
    # multiple assignment
    val1, val2 = val2, (val1+val2)
    n += 1
