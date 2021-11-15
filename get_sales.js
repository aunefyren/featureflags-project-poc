var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var sales = JSON.parse(this.responseText);
        var id = 'sales';
        var t = new Date();
        t.getTime();
        console.log(id + " loading - " + t);

        var sum = Number(sales.north) + Number(sales.west) + Number(sales.east);
        var text = "North: " + number_format(sales.north) + "<br>West: " + number_format(sales.west) + "<br>East: " + number_format(sales.east) + "<br><br>Sum: " + number_format(sum);

        if(features.feature[0].status == "true") {
            replace(id, text);
        } else if(features.feature[0].status == "shadow") {
            replace(id, feature_error);
        } else {
            replace(id, error);
        }
        var t_2 = new Date();
        t_2.getTime();
        console.log(id + " was loaded. - " + t_2);

    }
};
xhttp.open("post", "api/get_sales.php", true);
xhttp.send();
