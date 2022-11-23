$(document).ready(function() {
    $("#button1").click(function() {
        function displayfacts() {
            $.get("https://catfact.ninja/fact", function(data, stauts) {
                $("#div1").html(data.fact);
            });
        }
        setInterval(displayfacts, 10000);
    });
});