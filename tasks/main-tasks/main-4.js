const mixedArray = [3,13,74,14,66,15,22,4];

const isEven = num  => {
  return num % 2 == 0;
}

const filterArray = (arrayNeededFilter, filterFunction) => { 
      
    const filteredArray = [];

      arrayNeededFilter.forEach(element => {

          if (filterFunction(element))  {
              filteredArray.push(element);
          }

      })

      return filteredArray;
 }

console.log(filterArray(mixedArray, isEven));