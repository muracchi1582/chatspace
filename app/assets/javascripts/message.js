$(function(){
  function buildHTML(message){
    if ( message.image ) {
      var html =
       `<div class="right__contents--bellow__box" data-message-id=${message.id}>
            <div class="right__contents--bellow__box-name">
              ${message.user_name}
            </div>
            <div class="right__contents--bellow__box-time">
              ${message.created_at}
            </div>
            <div class="right__contents--bellow__box-message">
              <p class="right__contents--bellow_-box-message">
                ${message.content}
              </p>
              <img class = "lower-message__image" src="${message.image}">
            </div>
        </div>`
      return html;
    } else {
      var html =
      `<div class="right__contents--bellow__box" data-message-id=${message.id}>
          <div class="right__contents--bellow__box-name">
            ${message.user_name}
          </div>
          <div class="right__contents--bellow__box-time">
            ${message.created_at}
          </div>
          <div class="right__contents--bellow__box-message">
            <p class="right__contents--bellow_-box-message">
              ${message.content}
            </p>
          </div>
      </div>`
      return html;
    };
  }
  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action')
    $.ajax({
      url: url,
      type: "POST",
      data: formData,  
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
    })
  });
});