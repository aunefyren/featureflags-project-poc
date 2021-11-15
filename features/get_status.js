var id = "status";
var text = "";

text += "<div class='item'>";
    text += "<div class='title'>Name: </div>";
    text += "<div class='answer'>" + features.feature[1].name + "</div>"
text += "</div>";

text += "<div class='item'>";
    text += "<div class='title'>Error: </div>";
    text += "<div class='answer'>" + features.feature[1].error + "</div>"
text += "</div>";

text += "<div class='item'>";
    text += "<div class='title'>Message: </div>";
    text += "<div class='text'>" + features.feature[1].message + "</div>"
text += "</div>";

text += "<div class='item'>";
    text += "<div class='title'>Status: </div>";
    text += "<div class='answer'>" + features.feature[1].status;
    if(features.feature[1].status == "true") {
        text += "<div class='true' title='Feature is on'></div>";
    } else if(features.feature[1].status == "shadow") {
        text += "<div class='shadow' title='Feature is in shadow-mode'></div>";
    } else {
        text += "<div class='false' title='Feature is disabled'></div>";
    }
    text += "</div>";
text += "</div>";

text += "<div class='item'>";
    text += "<div class='title'>Comment: </div>";
    text += "<div class='text'>" + features.feature[1].comment + "</div>"
text += "</div>";

text += "<div class='form'>";
text += "</div>";

replace(id, text);







