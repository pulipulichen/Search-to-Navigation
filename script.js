var getQueryVariable = function(variable, url) {
  if (url === undefined) {
      url = window.location.search;
  }
  var query = url.substring(1);
  var vars = query.split("&");
  for (var i=0;i<vars.length;i++) {
    var pair = vars[i].split("=");
    if (pair[0] === variable) {
      return pair[1];
    }
  } 
  //alert('Query Variable ' + variable + ' not found');
  return undefined;
}

// -----------------

$(function () {


var _search = getQueryVariable("search");

//alert(_search);

if (_search !== undefined 
            && _search.indexOf("pgfu") > -1 
            && _search.indexOf("n.tw") > -1) {
        //alert(decodeURIComponent(_search));
        _search = "?" + decodeURIComponent(_search).split("?")[1];
        
        var _lat = getQueryVariable("lat", _search);
        var _lon = getQueryVariable("lon", _search);
        _search = _lat + "," + _lon;
}

// https://www.google.com/maps/dir/?api=1&destination=25.0795219204473,121.615607575112
if (_search !== undefined && _search.trim() !== "") {
    var _navigation_url = "https://www.google.com/maps/dir/?api=1&destination=" + _search;
    //alert(_navigation_url);
    //document.write(_navigation_url);
    //$("body").empty();
    var _classname = "portrait";
    if ($(window).width() > $(window).height()) {
        _classname = "landscape";
    }
    
    $("body").html('<a target="_blank" data-rel="external" href="' + _navigation_url + '" class="' + _classname + '">' 
            + '<button type="button" style="width:100%;height: 100vh">' 
                // + _navigation_url 
                + '<img src="icons8-google-maps.svg" />'
            + '</button>' 
            + '</a>');
    //$("body div").text(_navigation_url);
    window.open(_navigation_url, "_blank");
    //console.log(_navigation_url);
    //$("body a").click();
    //$(window).close();
}
else {
    //alert("not found");
}
$(window).click(function () {
  $("body a").click();
});

});