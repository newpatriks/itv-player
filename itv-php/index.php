<?
$url = "http://mercury.itv.com/api/json/dotcom/programme/searchatoz/".$_GET['param'];

//  Initiate curl
$ch = curl_init();
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_URL,$url);
$result=curl_exec($ch);
curl_close($ch);

// Will dump a beauty json :3
header('Content-Type: application/json');
print_r($result);
?>