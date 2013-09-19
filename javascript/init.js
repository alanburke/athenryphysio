$(document).ready( function() {
    $('a[href="map.html"]').click( function() {
        window.open( $(this).attr('href'), '', 'menubar=0,resizable=1,scrollbars=1,status=0,titlebar=0,toolbar=0,width=650,height=500' );
        return false;
    });
});
