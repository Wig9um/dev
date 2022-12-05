var unsorted1 = [5, 7,  80, 1, 17, 44];
var unsorted2 = [99, 0, 11, 47473, 2, 2];

sortArray(unsorted1);
sortArray(unsorted2);

function sortArray(arrayToSort){
	var isSorted = false;
	 while(isSorted === false){
   	 isSorted = true;
     for(var i = 0; i < arrayToSort.length-1; i++)
     {
        var current = arrayToSort[i];
        var next = arrayToSort[i+1];

        if(current > next){
          //Swap next and current
          arrayToSort[i] = arrayToSort[i] + arrayToSort[i+1];
          arrayToSort[i+1] = arrayToSort[i] - arrayToSort[i+1]; 
          arrayToSort[i] = arrayToSort[i] - arrayToSort[i+1];
          isSorted = false;
        }

     }
   }
   console.log(arrayToSort)

}
