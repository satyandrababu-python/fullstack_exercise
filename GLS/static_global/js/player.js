var items = {};
    $.getJSON("get_guide/", function( data ) {
    
        $.each( data, function( key, val ) {
            for (i = 0; i < val.length; i++) {
                items[val[i]['id']] = val[i]
            }
        });

    });
  $(document).on("click", function(e){
        var elem_id = e.target.id
        var final_selector = 'div:eq(2)'
        var display_txt = 'tip on third div.'
        var next_item = "null"
        if(elem_id == 'close_modal'){
            $(".popup-overlay, .popup-content").removeClass("active");
            return false;
        }
        if(e.target.tagName == 'DIV'){
            var class_name = e.target.className;
            var div_id = e.target.id;    
            Object.keys(items).forEach(function(key,index){
                if(items[key].selector == '.'+class_name){
                    final_selector = items[key].selector;
                    display_txt = items[key].content;
                    next_item = items[key].next
                }
                if(items[key].selector == '#'+div_id){
                    final_selector = items[key].selector;
                    display_txt = items[key].content;
                    next_item = items[key].next
                }   
            });
            $('div.popup-content p').text(display_txt);
            $('div.popup-content p').next('button').remove();
            $('div.popup-content p').after('<button class="'+next_item+'">Next</button>');
            //var elem = $('div.'+class_name)
            var elem = $(final_selector)
            var elem_position = elem.position();
            $('div#pop_model').css('left', elem_position.left);
            $('div#pop_model').css('top', elem_position.top);
            $(".popup-overlay, .popup-content").addClass("active");
        }
        if(e.target.tagName == 'BUTTON'){
            var div_number = e.target.className;
            display_txt = items[div_number].content;
            next_item = items[div_number].next;
            final_selector = items[div_number].selector;
            $('div.popup-content p').text(display_txt);
            $('div.popup-content p').next('button').remove();
            if(div_number!="3"){
                $('div.popup-content p').after('<button class="'+next_item+'">Next</button>');
            }
            var elem = $(final_selector)
            var elem_position = elem.position();
            $('div#pop_model').css('left', elem_position.left);
            $('div#pop_model').css('top', elem_position.top);
            $(".popup-overlay, .popup-content").addClass("active");
        }
  })