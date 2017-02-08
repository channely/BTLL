<?php
    $pageid = $_GET['pageid'];
    $firstid = $_GET['firstID'];
    $first_json_string = file_get_contents('first.json');

    $second_json_string = file_get_contents('second.json');

		if($pageid == 'name'){
       echo $first_json_string;
    }else {
      if($firstid == 'safetyPolicy'){
      $jsonArr = json_decode($second_json_string,true);
          foreach ($jsonArr as $url){
            if( is_array( $url )){
              foreach($url as $ele){
                if($ele[id] == 'safetyPolicy'){
                  $ele = json_encode($ele);
                 echo $ele;
                }
              }
            }
         }
      }elseif($firstid == 'infoSafety'){
        $jsonArr = json_decode($second_json_string,true);
            foreach ($jsonArr as $url){
              if( is_array( $url )){
                foreach($url as $ele){
                  if($ele[id] == 'infoSafety'){
                    $ele = json_encode($ele);
                   echo $ele;
                  }
                }
              }
           }
        }elseif($firstid == 'construction'){
          $jsonArr = json_decode($second_json_string,true);
              foreach ($jsonArr as $url){
                if( is_array( $url )){
                  foreach($url as $ele){
                    if($ele[id] == 'construction'){
                      $ele = json_encode($ele);
                     echo $ele;
                    }
                  }
                }
             }
        }elseif($firstid == 'propertyControl'){
          $jsonArr = json_decode($second_json_string,true);
              foreach ($jsonArr as $url){
                if( is_array( $url )){
                  foreach($url as $ele){
                    if($ele[id] == 'propertyControl'){
                      $ele = json_encode($ele);
                     echo $ele;
                    }
                  }
                }
             }
          }
    }

    ?>