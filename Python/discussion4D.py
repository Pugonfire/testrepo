studentDatabase = {'DD1_01': '80',
                   'DD1_02': '82',
                   'DD1_03': '84',
                   'DD1_04': '86'}


def inputRecord(dataBase, group, iden, score):
    key = group + '_' + iden
    if dataBase == 'studentDatabase':
        studentDatabase[key] = score
    else:
        print(dataBase, "is not valid database")


inputRecord('studentDatabase', 'DD2', '01', 70)
print(studentDatabase)


def query(dataBase, group, iden):

    if dataBase == 'studentDatabase':
        pass
    else:
        print(dataBase, "is not a valid database")
        return  # exit function with No results

    key = group + '_' + iden

    for student in studentDatabase:
        if student == key:
            print(studentDatabase[student])
            return studentDatabase[student]
            # returns score
    else:
        print(key, "does not exists")
        return


query('studentDatabase', 'DD1', '03')


def listGrades(dataBase, group):

    if dataBase == 'studentDatabase':
        pass
    else:
        print(dataBase, "is not a valid database")
        return  # exit function with No results
    gradesList = []
    for student in studentDatabase:
        if group in student:
            gradesList.append(studentDatabase[student])

    print(gradesList)
    return gradesList


listGrades('studentDatabase', 'DD1')


def maxGrade(dataBase, group):
    groupList = listGrades('studentDatabase', 'DD1')
    print(max(groupList))
    return max(groupList)


maxGrade('studentDatabase', 'DD1')
