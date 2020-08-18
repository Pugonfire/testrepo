numBoys = int(input("Enter the number of boys: "))
numGirls = int(input("Enter the number of girls: "))

numTotal = numBoys + numGirls
perBoy = round(numBoys/numTotal*100)
perGirl = round(numGirls/numTotal*100)

print("Boys: " + str(perBoy) + "%")
print("Girls: " + str(perGirl) + "%")
