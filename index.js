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

$.getScript("get_features.js", function(){
    if(features.error == "false") {

        if(features.feature[0].status != "false") {
            $.getScript("get_sales.js", function(){
            });
        } else {
          replace('sales', feature_error);
          console.log("sales not loaded.");
        }

        if(features.feature[1].status != "false") {
            $.getScript("get_status.js", function(){
            });
        } else {
          replace('status', feature_error);
          console.log("status not loaded.");
        }

        if(features.feature[2].status != "false") {
            $.getScript("search.js", function(){
            });
        } else {
          replace('search', feature_error);
          console.log("search not loaded.");
        }

        if(features.feature[3].status != "false") {
            $.getScript("log_in.js", function(){
            });
        } else {
          replace('log_in', feature_error);
          console.log("log_in not loaded.");
        }

    } else {
        alert("Website could not reach feature flag API. No features will work. Contact your administrator.");
    }
});
