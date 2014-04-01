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

        /* intial dialog(first) */
        $( "#dialog1" ).dialog({
      autoOpen: false,
      show: {
        effect: "drop",
        duration: 500,
        direction: "up"
      },
      hide: {
        effect: "drop",
        duration: 500,
        direction: "down"
      }
    });

    $( ".header-button" ).click(function() {
      $( "#dialog1" ).dialog( "open" );
    });

    $( "#dialog1" ).dialog({ closeText: "X" });  
});

$(function() {
      $( "#dialog" ).dialog({
      autoOpen: false,
      show: {
        effect: "drop",
        duration: 500,
        direction: "up"
      },
      hide: {
        effect: "drop",
        duration: 500,
        direction: "down"
      }
    });
 
    $( ".footer-button" ).click(function() {
    $( "#dialog" ).dialog( "open" );
    });

    $( "#dialog" ).dialog({ closeText: "X" });
});