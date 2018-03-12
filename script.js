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

var _search = getQueryVariable("search");

alert(_search);

if (_search.indexOf("pgfu") > -1 
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
    alert(_navigation_url);
    document.body.innerHTML = _navigation_url;
    window.open(_navigation_url);
}
else {
    alert("not found");
}