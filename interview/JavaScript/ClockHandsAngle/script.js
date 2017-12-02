

function doMath()
{
    // Capture the entered values of two input boxes
    var my_input1 = document.getElementById('hours').value;
    var my_input2 = document.getElementById('minutes').value;

    if (my_input1 > 12 || my_input2 >= 60) {
    result.innerHTML = "wrong numbers. Try again"
    return;
  }

  var angle = 30 * my_input1 - 5.5 * my_input2
  result.innerHTML = angle;

// my solution:

    // if (my_input1 == 12)
    // my_input1 = 0;
    //
    // var hourAngle = (my_input1 * 30) + (my_input2/2);
    // console.log(hourAngle);
    // var minuteAngle = my_input2 * 6;
    // console.log(minuteAngle);
    //
    //   if (hourAngle > minuteAngle)
    // var angle = hourAngle - minuteAngle;
    //   else
    //   var  angle = minuteAngle - hourAngle;
    //   // console.log(angle);
    //   result.innerHTML = angle;
     }
