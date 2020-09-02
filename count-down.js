
var date = "2021-01-01"
$('#pick').append("2021")
$('#time').countdown(date,function(event){  
var $clock = $(this).html(event.strftime(''+
'<div><span>%w</span><span>Weeks</span></div>'+
'<div><span>%d</span><span>Days</span></div>'+
'<div><span>%H</span><span>Hr</span></div>'+
'<div><span>%M</span><span>Min</span></div>'+
'<div><span>%S</span><span>Sec</span></div>'
    ))
});


