<?php
$features = utf8_encode(file_get_contents('features.json'));
$features = json_decode($features);

$data = json_decode(file_get_contents("php://input"));

$index = 0;

for($i = 0; $i < count($features->feature); $i++) {
    if($features->feature[$i]->name == $data->f_name) {
        $index = $i;
        break;
    }
}

$features->feature[$index]->name = $data->f_name;
$features->feature[$index]->error = $data->f_error;
$features->feature[$index]->message = $data->f_message;
$features->feature[$index]->status = $data->f_status;
$features->feature[$index]->comment = $data->f_comment;

$fp = fopen('./features.json', 'w');
fwrite($fp, json_encode($features));
fclose($fp);

echo json_encode(array("error" => "false"));

