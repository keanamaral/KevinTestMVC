$(document).ready(function() {
  //first clear information in showTourInfo
  $("#showTourInfo").text("");
  //then create tour info table
  createTable();
});

function createTable(){
  //get data from api-routes
  $.get("/api/tourinfo").then(function (data, status) {
    // var tourinfo = html(data);
    $("#showTourInfo").html(data);
    // console.log("Tour Info in showTours: ", tourinfo);
    // console.log("Tour Name in api-routes: ", tourinfo[0].tname)
    alert(status);

      var cols = 12; var rows = 5;
      var table = $('<table>'), row, col;
      table.attr("class", "table table-bordered table-hover");
          //for header row
          head = $('<thead>');
          row = $('<tr>');
          row.attr("class", "danger");          
          for (var c = 0; c < cols; c++){
            if (c==0){
              hcell1 = $('<th>')
              hcell1.attr("scope", "col")
              hcell1.attr("class", "col-lg-2");
              hcell1.text("Header "+c);
              row.append(hcell1);
            } else {
              hcell2 = $('<th>')
              hcell2.attr("scope", "col");
              hcell2.text("Header "+c);
              row.append(hcell2);
            }
          }
          head.append(row);
          table.append(head);

          //for body rows
          body = $('<tbody>');
            for(var i = 0; i < rows; i++) {
              row = $('<tr>');
                if (i%2==0){
                  row.attr("class", "active");
                } else {
                  row.attr("class", "success");
                }
            for (var c = 0; c < cols; c++){
              if(c==0){
                // for image in col 1 of body
                tbcell1 = $('<th>');
                tIMG = $('<img src="">');
                tIMG.attr("class", "tourImage");
                tIMG.attr("alt", "Tour Image");
                tIMG.css("height", "140");
                tIMG.css("width", "200");
                tbcell1.append(tIMG);
                row.append(tbcell1);
            } else {
                row.append($('<td>', {html: "Body "+c}))      
            }
          }
        body.append(row);
      table.append(body);
      }
    $("#showTourInfo").append(table);
  });
}
