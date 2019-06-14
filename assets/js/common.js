var value ="<div class=\"container\"><div class=\"row appended-div\">";
$(document).ready(function(){
 ajaxToView();
});


$('.add-button').click(function(){
    var title = $('.title-text').val();
    var subtitle = $('.subtitle-text').val();
    if(title =="" || subtitle ==""){
      alert("One of the fields (title or subtitle) are invalid");
    }else{
      $.ajax({
        url: "https://cloud-assignment-orm.herokuapp.com/title/post744?title="+title+"&sublist="+subtitle,
        dataType:'json',
        beforeSend: function( xhr ) {
            $('.loading-div').hide();
            $('.add-button').html("Loading ...");
          xhr.overrideMimeType( "text/plain; charset=x-user-defined" );
        }
      })
        .done(function( data ) {
            var value ="";
            $('.add-button').html("Add");
            if(data.message == 1){
              alert("Data added successfully");              
              value = value + "<div class=\"col-sm-6 margin-top-10 class-"+"1"+"\"><div class=\"card\"><div class=\"card-body\"><h5 class=\"card-title\">"+title+"</h5><p class=\"card-text\">"+subtitle+"</p><button type=\"button\" class=\"btn btn-danger delete-button\" id=\""+"1"+"\">Delete</button></div></div></div>";  
              $('.appended-div').append(value);
              }else{
                    
              }            
    })
    }


    
});

$(document).on("click", "button.delete-button" , function() {
  var currentId = $(this).attr('id');
  var finalID = "class-"+currentId;
  $('.'+finalID).remove();
  $.ajax({
    url: "https://cloud-assignment-orm.herokuapp.com/title/delete744?titleId="+currentId,
    dataType:'json',
    beforeSend: function( xhr ) {
      xhr.overrideMimeType( "text/plain; charset=x-user-defined" );
    }
  })
    .done(function( data ) {
       if(data.message == "1"){
          alert("Message deleted successfully");
       }
});
 
});


function ajaxToView(){
    $.ajax({
        url: "https://cloud-assignment-orm.herokuapp.com/title/get744",
        dataType:'json',
        beforeSend: function( xhr ) {
            $('.loading-div').hide();
            $('.unloading-div').html('');
          xhr.overrideMimeType( "text/plain; charset=x-user-defined" );
        }
      })
        .done(function( data ) {
            $.each(data,function(k,v){
              value = value + "<div class=\"col-sm-6 margin-top-10 class-"+v.id+"\"><div class=\"card\"><div class=\"card-body\"><h5 class=\"card-title\">"+v.sublist+"</h5><p class=\"card-text\">"+v.titlesublist.sublist+"</p><button type=\"button\" class=\"btn btn-danger delete-button\" id=\""+v.id+"\">Delete</button></div></div></div>";
            })
            value = value + "</div></div>";
            $('.unloading-div').html(value);
    });
}

$('.search-button-search').click(function(){
  var inputField = $('.search-input').val();
  value = "";
  if(title =="" || subtitle ==""){
    alert("Search input is empty");
  }else{
  }
  $.ajax({
    url: "https://cloud-assignment-orm.herokuapp.com/title/searchResults744?search="+inputField,
    dataType:'json',
    beforeSend: function( xhr ) {
        $('.unloading-div-search').html('');
      xhr.overrideMimeType( "text/plain; charset=x-user-defined" );
    }
  })
    .done(function( data ) {
        $.each(data,function(k,v){
          value = value + "<div class=\"col-sm-6 margin-top-10 class-"+v.id+"\"><div class=\"card\"><div class=\"card-body\"><h5 class=\"card-title\">"+v.sublist+"</h5><p class=\"card-text\">"+v.titlesublist.sublist+"</p><button type=\"button\" class=\"btn btn-danger delete-button\" id=\""+v.id+"\">Delete</button></div></div></div>";
        })
        value = value + "</div></div>";
        $('.unloading-div-search').html(value);
});
})

