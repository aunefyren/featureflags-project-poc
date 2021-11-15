var features;

$.ajax({
        url: "api/get_features.php",
        type : "POST",
        contentType : 'application/json',
        async: false,
        success : function(result) {
            features = JSON.parse(result);
        },

        // show error message to user
        error: function(){
            replace('alert', 'Could not reach API');
        }
});
