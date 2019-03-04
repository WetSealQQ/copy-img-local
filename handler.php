<?php 

ini_set('error_reporting', E_ALL);
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);

$data = @$_REQUEST['data'];

if( empty($data) ){
	die();
}


$count_data = count($data);

for ($i=0; $i < $count_data; $i++) { 

	$url_path = $data[$i]['url'];
	$local_path = ltrim($data[$i]['local'], '/');
	
	
	$dir_local = dirname($local_path);
	echo '<pre>';
	echo $dir_local;


	if( !file_exists($dir_local) ) mkdir(dirname($local_path), 0777, true);

	copy($url_path, $local_path);
	
}







 ?>