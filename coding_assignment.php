<pre>


<?php

// FETCH ALL DATA FROM FILE
$review = file_get_contents('reviews.txt');

$myArray = explode(",\n", $review);
print_r($myArray);

$review = str_replace("\r\n"," ", $review);
$review = preg_replace('/[^a-zA-Z\s]/', '', $review);
$review = preg_replace('/(\s){2,}/',' ', $review);
$review = strtolower($review);
$review = explode(" ", $review);
$words = array_count_values($review);
arsort($words);


// REMOVE SHORT AND IRRELEVANT WORDS

$filter = array_flip(array( 'that','have','with','what','this','your','will','they','from','when','then','than','into','just','only','also','some','about','like','said'));

foreach ($words as $key => $value) {
  if (strlen($key) < 4 || isset($filter[$key])) {
    unset($words[$key]);
  }
}
print_r($words);

//  MAKING SHORTER ARRAY OF MOST POPULAR WORDS
$popular = array_slice($words, 0, 5, true);
print_r($popular);

// HIGHLIGHTING MOST POPULAR WORDS
function highlight_str($myArray, $keyword) {
$i = 0;

while ($myArray[$i]) {
$str = $myArray[$i];
$temp = explode(' ',$str);

foreach($temp as $find){
    if(stripos($find, $keyword) !== false) {
        if(!isset($highlight)) {
            $highlight[] = $find;
        }
        else
        {
            if(!in_array($find,$highlight)) {
                $highlight[] = $find;
            }
        }
    }
  }

  if(isset($highlight)) {
    foreach($highlight as $replace) {
      $str = str_replace($replace,'<mark>'.$replace.'</mark>',$str);
    }

  }
  $myArray[$i] = $str;
    $i++;
  }
  return $myArray;
}

foreach ($popular as $key => $value) {
  $myArray = highlight_str($myArray, $key);
}
print_r($myArray);

// FIND MOST RELEVANT REVIEWS AND PRINT
$occurance = array();
$j = 0;
foreach ($myArray as $key => $value) {
  $occurance[] = substr_count($value, "<mark>");
}
arsort($occurance);
print_r($occurance);





 ?>
 </pre>
