# hello ray
myLst = [['db', 'gp1', '1', '10'],
         ['db', 'gp1', '2', '20'],
         ['db', 'gp1', '3', '30'],
         ['db', 'gp1', '4', '40'],
         ['db', 'gp1', '5', '50'],
         ['db', 'gp2', '6', '60']]


def query(dataBase, group, iden):

    for student in myLst:
        validDatabase = False
        validGroup = False
        validID = False
        if dataBase in student[0]:
            validDatabase = True
        else:
            pass

        if group in student[1]:
            validGroup = True
        else:
            pass

        if iden in student[2]:
            validID = True
        else:
            pass

        if validDatabase and validGroup and validID:
            return student
            break
        else:
            pass
