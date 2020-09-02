Lst1 = [n*3 for n in range(10, 20)]
Lst2 = [n*2 for n in range(15, 25)]

# Calculating Average
avg1 = sum(Lst1)/len(Lst1)
avg2 = sum(Lst2)/len(Lst2)

# Comparing average scores
if avg1 > avg2:
    print("Class 1 has the highest average score of", avg1)
elif avg1 == avg2:
    print("Average are tied at", avg1)
else:
    print("Class 2 has the highest average score of", avg2)

# Comparing maximum score
if max(Lst1) > max(Lst2):
    print("Class 1 has the highest maximum score of", max(Lst1))
elif max(Lst1) == max(Lst2):
    print("Both classes have the same maximum score of", max(Lst1))
else:
    print("Class 2 has the highest maximum score of", max(Lst2))
