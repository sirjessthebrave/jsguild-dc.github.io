  window.onload = function() { init() };

  var public_spreadsheet_url = 'https://docs.google.com/spreadsheets/d/1mLgs_d3LAun6UGjzHDpE--Re5vS6kjuUdYf2Stiuc88/pubhtml';

  function init() {
    Tabletop.init( { key: public_spreadsheet_url,
                      callback: function(data, tabletop) { console.log(data) },
                      simpleSheet: true } )
  }

  function showInfo(data, tabletop) {

  data.forEach(function(proj, index) {
      if (index > 1 && proj.name && proj.description ) {
        var row = '<div class="row">';
        row += '<div class="name">' + proj.name + '</div>';
        row += '<div class="description">' + proj.description + '</div>';
        row += '</div>';
        
        $('#projects').append(row);
    }
  });
}