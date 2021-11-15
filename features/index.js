function replace(div, string) {
    $('#' + div).html(string);
}

function number_format(number) {
    var format = number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    return format;
}

var feature_error = "This feature is disabled.";
var api_error = 'Could not reach API.';
var error = "There was an error.";

$.getScript("../get_features.js", function(){
    if(features.error == "false") {

        $.getScript("get_sales.js", function(){
        });

        $.getScript("get_status.js", function(){
        });

        $.getScript("get_search.js", function(){
        });

        $.getScript("get_log_in.js", function(){
        });

        $.getScript("set_feature.js", function(){
        });

    } else {
        alert("Website could not reach feature flag API script. No features will work. Contact your administrator.");
    }
});
