// Chapter 3 exercises

// minimum

function min (a,b) {
  return Math.min (a,b);
}
 
min (10,5);

// Recursion

function isEven(num) {
  if (num===0)
    return true;
  else if (num===1)
    return false;
  else if (num <0)
    return isEven (-num);
  else
    return isEven(num-2)
}

isEven (-3);

// Bean counter

//B counter

function countBs(string) {
  var counted = 0;
  for (var i = 0; i < string.length; i++)
    if (string.charAt(i)==="B")
      counted += 1;
  return counted;
}

countBs ("Big Black Bear Behind Bob");

// character counter
function countChar(string, a) {
  var counted = 0;
  for (var i = 0; i < string.length; i++)
    if (string.charAt(i)===a)
      counted += 1;
  return counted;
}

countChar ("Big Black Bear Behind Bob","e");