$(function() {
    /* construct prev/next button */
    $(".dialog div.dialogs").each(function (i) {
        var totalSize = $(".dialog div.dialogs").size() - 1;           
            if (i != 0) {
                prev = i - 1;
                $(this).append("<div class='prev_button'><a href='#tabs' class='prev-tab mover' rel='" + prev + "'>Previous</a></div>");
            }

             if (i != totalSize) {
                next = i + 1;
                $(this).append("<div class='next_button'><a href='#tabs' class='next-tab mover' rel='" + next + "'>Next</a></div>");
            }
});


    /* next button click */
    $('.next-tab').click(function () {
        var nextDialog= $(this).parent().parent().data("id") + 1;  
        var currentDialog = $(this).parent().parent(); currentDialog.dialog("close");
            $("#dialog"+ nextDialog).dialog();
});


    /* previous button click */
    $('.prev-tab').click(function () {
        var prevDialog = $(this).parent().parent().data("id") - 1;  
        var currentDialog = $(this).parent().parent(); currentDialog.dialog("close");
            $("#dialog"+ prevDialog).dialog();
});

/* first header dialog - dialog1 */
$(function() {
  $( "#dialog1" ).dialog({
  autoOpen: false,
  show: {
    easing: "swing"
  }
  });

  $( ".header-button" ).click(function() {
    $( "#dialog1" ).dialog( "open" );
  });
});

/* footer dialog - dialog */
$( "#dialog" ).dialog({
  autoOpen: false,
  show: {
    easing: "swing"
  }
});

$( ".footer-button" ).click(function() {
  $( "#dialog" ).dialog( "open" );
});

$( "#dialog" ).dialog({ closeText: "X" });
});

$('.ui-button-text').contents().filter(function() {
    return this.nodeType == 3
}).each(function(){
    this.textContent = this.textContent.replace('close','X');
});