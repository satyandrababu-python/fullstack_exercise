var items = {};
    $.getJSON("get_guide/", function( data ) {
    
        $.each( data, function( key, val ) {
            for (i = 0; i < val.length; i++) {
                // debugger;
                items['myClass'+val[i]['id']] = val[i]
            }
        });

    });

  /*$(document).ready(function(){
    $("#body_id div").click(function(){
        var class_name = $(this).attr('class');
        var elem_id = $(this).attr('id');
        if(elem_id == 'close_modal'){
            $(".popup-overlay, .popup-content").removeClass("active");
            return false;
        }
        console.log(items);
        // if(typeof class_name !== 'undefined'){
        var elem = $('div.'+class_name)
        var elem_position = elem.position();
        $('div#pop_model').css('left', elem_position.left);
        $('div#pop_model').css('top', elem_position.top);
        // alert(class_name);   
        $("."+class_name).on("click", function(){
            $(".popup-overlay, .popup-content").addClass("active");

          });
          
          //removes the "active" class to .popup and .popup-content when the "Close" button is clicked 
        //   $(".close, .popup-overlay").on("click", function(){
        //     $(".popup-overlay, .popup-content").removeClass("active");
        //   });
        // }
        });
  });*/
  $(document).ready(function(){
    var target_divs = $('div[class^="myClass"]');
    for(i=1;i<target_divs.length;i++){
        // var div_class = target_divs[i].className;
        target_divs[i].style.pointerEvents = 'none';
        // $('div.'+div_class).unbind("click");
    }
  });

  $(document).on("click", function(e){
        var elem_id = e.target.id
        if(elem_id == 'close_modal'){
            $(".popup-overlay, .popup-content").removeClass("active");
            return false;
        }
        if(e.target.tagName == 'DIV'){
            var class_name = e.target.className;
            console.log(items);
            var target_divs = $('div[class^="myClass"]');
            var display_txt =  items[class_name].content;
            $('div.popup-content p').text(display_txt);
            $('div.popup-content p').next('button').remove();
            $('div.popup-content p').after('<button class="'+items[class_name].next+'">Next</button>');
            var elem = $('div.'+class_name)
            var elem_position = elem.position();
            $('div#pop_model').css('left', elem_position.left);
            $('div#pop_model').css('top', elem_position.top);
            $(".popup-overlay, .popup-content").addClass("active");
        }
        if(e.target.tagName == 'BUTTON'){
            var div_number = e.target.className;
            if(div_number=="null"){
                div_number = '1';
            }
            var class_name = 'myClass'+div_number;
            var display_txt =  items[class_name].content;
            $('div.popup-content p').text(display_txt);
            $('div.popup-content p').next('button').remove();
            $('div.popup-content p').after('<button class="'+items[class_name].next+'">Next</button>');
            var elem = $('div.'+class_name)
            var elem_position = elem.position();
            $('div#pop_model').css('left', elem_position.left);
            $('div#pop_model').css('top', elem_position.top);
            $(".popup-overlay, .popup-content").addClass("active");
        }
  })