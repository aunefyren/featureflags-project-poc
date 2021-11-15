var id = 'search';
var t = new Date();
t.getTime();
console.log(id + " loading - " + t);

var text = "Search<br><input type=text>";

if(features.feature[2].status == "true") {
    replace(id, text);
} else if(features.feature[2].status == "shadow") {
    replace(id, feature_error);
} else {
    replace(id, error);
}

var t_2 = new Date();
t_2.getTime();
console.log(id + " was loaded. - " + t_2);
