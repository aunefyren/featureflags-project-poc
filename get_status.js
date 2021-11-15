var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var status = JSON.parse(this.responseText);
        var id = 'status';
        var t = new Date();
        t.getTime();
        console.log(id + " loading - " + t);

        status = JSON.parse(this.responseText);
        var text = "";

        text += "<div class='item'>";
            text += "<div class='server'>Search: </div>";
            if(status.feature[2].status == "true") {
                text += "<div class='true' title='Server was reached'></div>";
            } else {
                text += "<div class='false' title='Server was not reached'></div>";
            }
        text += "</div>";

        text += "<div class='item'>";
            text += "<div class='server'>Log in: </div>";
            if(status.feature[3].status == "true") {
                text += "<div class='true' title='Server was reached'></div>";
            } else {
                text += "<div class='false' title='Server was not reached'></div>";
            }
        text += "</div>";

        text += "<div class='item'>";
            text += "<div class='server'>Service status: </div>";
            if(status.feature[1].status == "true") {
                text += "<div class='true' title='Server was reached'></div>";
            } else {
                text += "<div class='false' title='Server was not reached'></div>";
            }
        text += "</div>";

        text += "<div class='item'>";
            text += "<div class='server'>Sale numbers API: </div>";
            if(status.feature[0].status == "true") {
                text += "<div class='true' title='Server was reached'></div>";
            } else {
                text += "<div class='false' title='Server was not reached'></div>";
            }
        text += "</div>";

        /*
        text += "<div class='item'>";
            text += "<div class='server'>Webstore: </div>";
            if(status.webstore == "true") {
                text += "<div class='true' title='Server was reached'></div>";
            } else {
                text += "<div class='false' title='Server was not reached'></div>";
            }
        text += "</div>";
        */

        if(features.feature[1].status == "true") {
            replace(id, text);
        } else if(features.feature[1].status == "shadow") {
            replace(id, feature_error);
        } else {
            replace(id, error);
        }

        var t_2 = new Date();
        t_2.getTime();
        console.log(id + " was loaded. - " + t_2);
    }
};
xhttp.open("post", "api/get_status.php", true);
xhttp.send();




