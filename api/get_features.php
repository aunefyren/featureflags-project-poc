<?php
/*
echo json_encode(array(     "error" => "false",
                            "message" => "No error.",
                            "sales" => array(
                                "error" => "false",
                                "message" => "No error.",
                                "status" => "true",
                                "comment" => "Turned on 05/10/20 by Larry David."
                                            ),
                            "status" => array(
                                "error" => "false",
                                "message" => "No error.",
                                "status" => "true",
                                "comment" => "Turned on 02/10/20 by Jerry Seinfeld."
                                            )
                            ));*/
$features = utf8_encode(file_get_contents('../features/api/features.json'));
//echo json_encode($features);
echo $features;