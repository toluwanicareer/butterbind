$('.navbar-toggle').click(function(){
    $(this).toggleClass('collapsed');
})

function load_screen(){
     $('#home').css('display', 'none');
     $('footer').css('display', 'none');
     $('.loading-container').css('display', 'block');
   $('.line-1').css('display','block');
    setTimeout(function (){$('.line-1').css('color','#0B4E6B')}, 1000);
    setTimeout(function(){$('.line-2').removeClass('hidden-md')}, 1500);
    setTimeout(function(){$('.line-2').css('display', 'block')}, 1500);
    setTimeout(function(){$('.line-2').css('color','#0B4E6B')}, 2500);
    setTimeout(function(){$('.line-3').removeClass('hidden-md')}, 3000);
    setTimeout(function(){$('.line-3').css('display', 'block')}, 3000);
    setTimeout(function(){$('.line-3').css('color','#0B4E6B')}, 4000);
    setTimeout(function(){$('.line-5').removeClass('hidden-md')}, 4500);
    setTimeout(function(){$('.line-5').css('display','block')}, 4500);
    setTimeout(function(){$('.line-5').css('color','#0B4E6B')}, 5500);
    setTimeout(function(){$('#quote_page').submit()}, 5500);

}
$('#address_input').autocomplete({
    minLength:3,
    source: function(request, response){
        //console.log(request.term);
        $.get('/get_properties?term='+request.term).done(function(data){
          // console.log(data.data);
            response( data.data );
        })
    },
    select:function (event, ui) {
        $("#address_input").val(ui.item.name);
    }
});

$('#quotebutton').click(function (e) {
				e.preventDefault();
				address=$('#address_input').val();
				//console.log(address);
				if ( ! address){
				    $('.hero-error-label').css('display', 'block');
				    $('.hero-error-label').text('please enter address');

				    return false;
                }


				$.post('/', {'address':address}).done(function (data) {
					if (data.status){
                        start_load_screen(data)

					    //alert('Data premium Price is: ' +data.annual_premium)

					}
					else{
					    //console.log('fuck shit')
                        getPropertiesFromMd(data)
                        //show_error_modal();
					}
                })
            });


function start_load_screen(data){
    $('#addresskey').val(data.addresskey);
    $('#addressname').val(data.addressname);
    $('#quote_id').val(data.quote_id);
    load_screen()
}

function show_error_modal(){
    //console.log('im here ok');
    $('#errorModalTitle').text('SORRY');
    $('#errorModalBody').text('BetterBind cannot provide instant quote for this property yet. Please contact betterbind@gmail.com for a quote.');

    $('#errorModal').modal('show');
}

melissaDataId = "kRHdyhT2BSZfyqvY_xGcJB**";
function getPropertiesFromMd(mdata) {
    //var start = (new Date()).getTime();
    //var result =
    //console.log('anoda fuck shit')
    //console.log(mdata);
    $.getJSON("//expressentry.melissadata.net/jsonp/ExpressFreeForm?callback=?", {
        format: "jsonp",
        id: melissaDataId,
        FF: mdata.address,
        maxrecords: "30"
    }).done(function(data){
        //console.log(data)
        if (data.ErrorString=='') {
            //console.log(data.Results[0].Address.AddressKey);
            newdata = {'addresskey': data.Results[0].Address.AddressKey, 'address': mdata.addressname}
            $.post('/', newdata).done(function (data) {
                if (data.status) {
                    start_load_screen(data)

                    //alert('Data premium Price is: ' +data.annual_premium)
                }
                else{
                        //getPropertiesFromMd(data)
                        show_error_modal();
					}

            })
        }

    });
}

$(document).on('click', '.quote-element',
        function (e) {
            $(this).children('.element-row-md').children('.modify-info-ly').find('img').first().toggleClass('rotate-icon-st');
            $(this).children('.element-row-md').children('.modify-li-expanded-ly').slideToggle();
        });

function reload_slider(){
    $('.js-groups .slider-element').each(function(){
    console.log($(this).attr('min'));
    options={   max:parseInt($(this).attr('max')),


   min:parseInt($(this).attr('min')),

     step:parseInt($(this).attr('step')),

     value:parseInt($(this).attr('value')),
    };
    $(this).slider(options);
});

    $('.js-groups').on('slidechange','.slider-element',function(event, ui){
    //console.log(ui.value);
    name=$(this).attr('element-name');
    console.log(name);
    $('#'+name).text('$'+ui.value);
    get_quote(name, ui.value);
});

}

reload_slider();
