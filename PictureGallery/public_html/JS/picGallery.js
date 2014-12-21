
/* I have had no experience with JSON or JQuery so I went to YouTube and the internet to 
 * find info. Although it is not working, I feel it is close.  
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


