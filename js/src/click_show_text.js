var a_idx = 0,
b_idx = 0;
c_idx = 0;
jQuery(document).ready(function($) {
    $("body").click(function(e) {
        var a = new Array("欢迎您", "么么哒", "你真好", "棒棒哒", "真可爱", "好厉害", "喜欢你", "真聪明", "爱你哦", "太强了", "祝福你", "666"),
        b = new Array("#09ebfc", "#ff6651", "#ffb351", "#51ff65", "#5197ff", "#a551ff", "#ff51f7", "#ff518e", "#ff5163", "#efff51"),
        c = new Array("12", "14", "16", "18", "20", "22", "24", "26", "28", "30");
        var $i = $("<span/>").text(a[a_idx]);
        a_idx = (a_idx + 1) % a.length;
        b_idx = (b_idx + 1) % b.length;
        c_idx = (c_idx + 1) % c.length;
        var x = e.pageX,
        y = e.pageY;
        $i.css({
            "z-index": 5,
            "top": y - 20,
            "left": x,
            "position": "absolute",
            "font-weight": "bold",
            "font-size": c[c_idx] + "px",
            "color": b[b_idx]
        });
        $("body").append($i);
        $i.animate({
            "top": y - 180,
            "opacity": 0
        },
			3000,
			function() {
			    $i.remove();
			});
    });
    setTimeout('delay()', 2000);
});

function delay() {
    $(".buryit").removeAttr("onclick");
}
