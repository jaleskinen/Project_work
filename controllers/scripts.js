console.log("!! Project work console works OK !!");

/*$(document).ready(function () { 
    
    console.log("!! jquery onload triggered !!");

    var setting =  {
        
        method: "GET",
        url: "http://localhost:28017/testi/person/",
        dataType: "jsonp",
        jsonp: "jsonp"
        
    };
    
    
    $.ajax(setting).done(function(data) {
        console.log(data);
        for (i = 0; i < data.rows.length; i++) {
            
            var html = "<tr>" +
                        "<td>" + data.rows[i].name + "</td>" +
                        "<td>" + data.rows[i].address + "</td>" +
                        "<td>" + data.rows[i].age + "</td>" +
                        "</tr>";
            
            $(html).appendTo("tbody"); 
            
        }
    });
});*/