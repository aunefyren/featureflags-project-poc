var id = 'log_in';
var t = new Date();
t.getTime();
console.log(id + " loading - " + t);

var text = "You are logged in as:<br>George Costanza<br>Log out";

if(features.feature[3].status == "true") {
    replace(id, text);
} else if(features.feature[3].status == "shadow") {
    replace(id, feature_error);
} else {
    replace(id, error);
}

var t_2 = new Date();
t_2.getTime();
console.log(id + " was loaded. - " + t_2);
