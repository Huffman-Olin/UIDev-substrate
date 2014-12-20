 /* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/* I have had no experience with JSON or JQuery so I went to YouTube and the internet to 
 * find info. 
 */

$.getJSON( "picGallery.json", function( data ) {
var items = [];
$.each( data, function( key, val ) {
items.push( "<a href='" + key + "'>");
});
$( "<ul/>", {
"class": "my-new-list",
html: items.join( "" )
}).appendTo( "body" );
});


