/**
 * This function should calculate the total amount of pet food that should be
 * ordered for the upcoming week.
 * @param numAnimals the number of animals in the store
 * @param avgFood the average amount of food (in kilograms) eaten by the animals
 * 				each week
 * @return the total amount of pet food that should be ordered for the upcoming
 * 				 week, or -1 if the numAnimals or avgFood are less than 0 or non-numeric
 */
function calculateFoodOrder(numAnimals, avgFood) {
  total = numAnimals * avgFood;
  if (total) {
    return total;
  } else {
    return -1;
  }
}

/**
 * Determines which day of the week had the most number of people visiting the
 * pet store. If more than one day of the week has the same, highest amount of
 * traffic, an array containing the days (in any order) should be returned.
 * (ex. ["Wednesday", "Thursday"]). If the input is null or an empty array, the function
 * should return null.
 * @param week an array of Weekday objects
 * @return a string containing the name of the most popular day of the week if there is only one most popular day, and an array of the strings containing the names of the most popular days if there are more than one that are most popular
 */

/* This was used to test mostPopularDays func.
function day(name, traffic) {
  //to be used by func. weekdays()
  return { name: name, traffic: traffic };
}

function weekdays(mon, tue, wed, thu, fri) {
  var Monday = day("Monday", mon);
  var Tuesday = day("Tuesday", tue);
  var Wednesday = day("Wednesday", wed);
  var Thursday = day("Thursday", thu);
  var Friday = day("Friday", fri);
  var list = [Monday, Tuesday, Wednesday, Thursday, Friday];
  return list;
}
*/

//example of input: [{name:Monday,traffic:3},{name:Tuesday, traffic:2}]
function mostPopularDays(week) {
  try {
    var maxValue = 0;
    var list = [];
    for (var i = 0; i < week.length; i++) {
      if (week[i].traffic > maxValue) {
        list = [];
        list.push(week[i].name);
        maxValue = week[i].traffic;
      } else if (week[i].traffic == maxValue) {
        list.push(week[i].name);
      } else {
      }
    }
    if (list.length == 1) {
      //returns a string
      return list[0];
    } else if (list.length > 1) {
      //returns a list
      return list;
    } else {
      //if input is empty array
      return null;
    }
  } catch {
    //if input is null
    return null;
  }
}

/**
 * Given three arrays of equal length containing information about a list of
 * animals - where names[i], types[i], and breeds[i] all relate to a single
 * animal - return an array of Animal objects constructed from the provided
 * info.
 * @param names the array of animal names
 * @param types the array of animal types (ex. "Dog", "Cat", "Bird")
 * @param breeds the array of animal breeds
 * @return an array of Animal objects containing the animals' information, or an
 *         empty array if the array's lengths are unequal or zero, or if any array is null.
 *
 * Test with this: ['Bob', 'Nip', 'Doug'],['Cat', 'Cow', 'Dog'],['Siamese', 'Brown', 'Pug']
 */

function createAnimalObjects(names, types, breeds) {
  list = [];
  try {
    if (names.length == types.length && names.length == breeds.length) {
      for (var i = 0; i < names.length; i++) {
        var obj = new Animal(names[i], types[i], breeds[i]);
        var info = { Name: obj.name, Type: obj.type, Breed: obj.breed };
        list.push(info);
      }
      return list;
    } else {
      //When input array lengths are unequal
      return list;
    }
  } catch {
    //When input are null arrays
    return list;
  }
}

/////////////////////////////////////////////////////////////////
//
//  Do not change any code below here!
//
/////////////////////////////////////////////////////////////////

/**
 * A prototype to create Weekday objects
 */
function Weekday(name, traffic) {
  this.name = name;
  this.traffic = traffic;
}

/**
 * A prototype to create Item objects
 */
function Item(name, barcode, sellingPrice, buyingPrice) {
  this.name = name;
  this.barcode = barcode;
  this.sellingPrice = sellingPrice;
  this.buyingPrice = buyingPrice;
}
/**
 * A prototype to create Animal objects
 */
function Animal(name, type, breed) {
  this.name = name;
  this.type = type;
  this.breed = breed;
}

/**
 * Use this function to test whether you are able to run JavaScript
 * from your browser's console.
 */
function helloworld() {
  return "hello world!";
}
