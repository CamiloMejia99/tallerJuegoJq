
$(function() {
    $("#contenedor2").draggable();
    $("#contenedor3").droppable({
        drop: function(event, ui) {
            $(this)
                .addClass("ui-state-highlight")
                .find("p")
                .html("GOOOOOOOOOOOOOOOL!");
        }
    });
    $("#contenedor4").droppable({
        drop: function(event, ui) {
            $(this)
                .addClass("ui-state-highlight")
                .find("p")
                .html("GOOOOOOOOOOOOOOOL!");
        }
    });
});

  $( function() {
    var spinner = $( "#spinner" ).spinner();
 
    $( "#disable" ).on( "click", function() {
      if ( spinner.spinner( "option", "disabled" ) ) {
        spinner.spinner( "enable" );
      } else {
        spinner.spinner( "disable" );
      }
    });
    $( "#destroy" ).on( "click", function() {
      if ( spinner.spinner( "instance" ) ) {
        spinner.spinner( "destroy" );
      } else {
        spinner.spinner();
      }
    });
    $( "#getvalue" ).on( "click", function() {
      alert( spinner.spinner( "value" ) );
    });
    $( "#setvalue" ).on( "click", function() {
      spinner.spinner( "value", 5 );
    });
 
    $( "button" ).button();
  } );


  $( function() {
    $( "#button" ).on( "click", function() {
      $( "#effect" ).addClass( "newClass", 1000, callback );
    });
 
    function callback() {
      setTimeout(function() {
        $( "#effect" ).removeClass( "newClass" );
      }, 1500 );
    }
  } );
