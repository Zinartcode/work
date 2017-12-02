
var a = [34, 203, 3, 746, 200, 984, 198, 764, 10];
bubbleSort(a);

function bubbleSort(a)
{
    // var swapped;
    // do {
    //     swapped = false;
    //     for (var i=0; i < a.length-1; i++) {
    //         if (a[i] > a[i+1]) {
    //             var temp = a[i];
    //             a[i] = a[i+1];
    //             a[i+1] = temp;
    //             swapped = true;
    //         }
    //     }
    // } while (swapped);


    for (var i=0; i<a.length; i++) {
      for (var j=0; j<a.length-1; j++) {
        if (a[i] < a[j]) {
        var temp = a[i];
        a[i] = a[i+1];
        a[i+1] = temp;
      }
    }
  }
    console.log(a);
}
