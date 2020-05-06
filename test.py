print('test')


class pet(object):

    def __init__(self, name, age, species):
        self.name = name
        self.age = age
        self.species = species


def generatePet():
    name = input('Name: ')
    age = input('Age: ')
    species = input('Species: ')
    obj = pet(name, age, species)
    return obj


print(generatePet().name)
