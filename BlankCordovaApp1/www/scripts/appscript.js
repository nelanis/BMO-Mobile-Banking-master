//Must use 'data.json'. Using '../data.json' to point to the exact location
//doesn't work on device because device isn't using server path'
jQuery(document).on('pageinit', function () {


})
jQuery(document).on('pagecreate', function () {
    jQuery.getJSON("data.json", function (data) {
        jQuery.each(data.person, function (i, j) {
            jQuery("#tbl-body").append('<tr><td>' + j.Company + '</td><td>' + j.Product + '</td><td>' + j.Amount + '</td><td>' + j.Date + '</td><td></tr>');

            jQuery('table#myTable')
                .table("refresh") //Refreshes the table to reflect content added dynamically. Filtering doesn't work without this'
            /*.trigger('create'); would need this if markup contained links/buttons that needs to be enhanced*/
        });

    });
    $("#myTable").on("filterablefilter", function (event, ui) {
        var sum = 0.0;
        jQuery('tbody tr:visible td:nth-child(3)').each(function (i, data) {
            sum += parseFloat(jQuery(data).html());
        });
        sum = sum.toFixed(2);
        jQuery('#sum').text(sum);
    });

});
jQuery("#input-filter").on('keyup', function () {
});