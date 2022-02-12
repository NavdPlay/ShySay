var urlParams;
function linkQuery() {
  var match,
    pl = /\+/g,  // Regex for replacing addition symbol with a space
    search = /([^&=]+)=?([^&]*)/g,
    decode = function (s) { return decodeURIComponent(s.replace(pl, " ")); },
    query = window.location.search.substring(1);

  urlParams = {};
  while (match = search.exec(query))
    urlParams[decode(match[1])] = decode(match[2]);

  urlParams.name = atob(urlParams.name);
  urlParams.rec = atob(urlParams.rec);
  urlParams.message = atob(urlParams.message);
  
  return urlParams;
}
