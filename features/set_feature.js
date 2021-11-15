var id = "form_div";

var text = `
            <form id="feature_form" onsubmit="return false" action="" method="post">
                <div class="form-group">
                    <label for="f_name">Feature: </label>
                    <select class="input" id="f_name" name="f_name" form="feature_form" required>
                        <option value=""></option>
            `;
var i;
for(i = 0; i < features.feature.length; i++) {
    text += '<option value="' + features.feature[i].name + '">' + features.feature[i].name + '</option>';
}

text += `
                    </select>
                </div>

                <div class="form-group">
                    <label for="f_error">Error: </label>
                    <select class="input" id="f_error" name="f_error" form="feature_form" required>
                        <option value="false">False</option>
                        <option value="true">True</option>
                    </select>
                </div>

                <div class="form-group">
                    <label for="f_message">Message: </label>
                    <input class="input" type="text" class="form-control" name="f_message" id="f_message" required />
                </div>

                <div class="form-group">
                    <label for="f_status">Status: </label>
                    <select class="input" id="f_status" name="f_status" form="feature_form" required>
                        <option value="true">True</option>
                        <option value="false">False</option>
                        <option value="shadow">Shadow</option>
                    </select>
                </div>

                <div class="form-group">
                    <label for="f_comment">Comment: </label>
                    <input class="input" type="text" class="form-control" name="f_comment" id="f_comment" required />
                </div>

                <div class="form-group4">
                    <button class="input" type="submit" class="btn btn-primary">
                        <div id="change">Change </div>
                    </button>
                </div>


            </form>
        `;

replace(id, text);

$(document).on('submit', '#feature_form', function(){

    var f_name = document.getElementById("f_name").value;
    var f_error = document.getElementById("f_error").value;
    var f_message = document.getElementById("f_message").value;
    var f_status = document.getElementById("f_status").value;
	//console.log(f_status);
    var f_comment = document.getElementById("f_comment").value;

    var feature_form = { "f_name" : f_name,
                        "f_error" : f_error,
                        "f_message" : f_message,
                        "f_status" : f_status,
                        "f_comment" : f_comment
                        };

    var feature_data = JSON.stringify(feature_form);

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var result = JSON.parse(this.responseText);

            if(result.error == "false") {
                alert("Feature changed.");
                location.reload();
            } else {
                alert("Error! Not changed.");
                location.reload();
            }


        }
    };
    xhttp.open("post", "api/set_feature.php", true);
    xhttp.send(feature_data);
});
