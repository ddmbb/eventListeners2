$( document ).ready(function() {
    console.log( "ready!" );

    //--------------- X Out List Items

    $('.container').on('click', '.shopping-item-toggle', function(){
      $(this).parents( ".shopping-list > li" ).toggleClass("shopping-item__checked");
    });

    //--------------- Delete List Items

    $('.container').on('click', '.shopping-item-delete', function() {  
      $(this).parents( ".shopping-list > li" ).remove();
    });

    //---------------- Add List Items

    $(function(){
      $('#js-shopping-list-form').submit(function(event) {
        event.preventDefault();
        const listItem = $('#shopping-list-entry').val();    
        $('#shopping-list-entry').val();
    
    
        $('.shopping-list').append(
          `<li>
            <span class="shopping-item">${listItem}</span>
            <div class="shopping-item-controls">
              <button class="shopping-item-toggle">
                <span class="button-label">check</span>
              </button>
              <button class="shopping-item-delete">
                <span class="button-label">delete</span>
              </button>
            </div>
          </li>`);
      });
      return false;
    });
  });

/*
    $('#js-shopping-list-form').submit(function(event){
      event.preventDefault();

      let $writtenItem = $('#shopping-list-entry').val();
   
    

      //$("ul li").addClass("shopping-item-controls");
      //$("ul li").append("shopping-item-controls");
      //$("ul li").closest("shopping-item").addClass("shopping-item-controls");
      //$(".shopping-item-controls").closest("shopping-item").addClass("shopping-item-controls");
      //$("ul li").parents( ".shopping-item" ).append(".shopping-item-controls");
      //$("ul li").parents( ".shopping-item" ).addClass(".shopping-item-controls");


      $('.shopping-list').append(
        `<li>
          <span class="shopping-item">${listItem}</span>
          <div class="shopping-item-controls">
            <button class="shopping-item-toggle">
              <span class="button-label">check</span>
            </button>
            <button class="shopping-item-delete">
              <span class="button-label">delete</span>
            </button>
          </div>
        </li>`);



    return false;
    });
*/