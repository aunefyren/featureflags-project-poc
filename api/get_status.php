<?php
$features = utf8_encode(file_get_contents('../features/api/features.json'));
echo $features;