jQuery(document).ready(function(){

  // Hide Summary on shopping cart
    jQuery('.shoppingCartDetails .cartHeader').each(function(i,v){
       var detailsBtn = jQuery(this).find('div.hideProdDetails');
	   var cartHeader = jQuery(this);
       var productOptions = jQuery(this).find('div.productOptions');
	   jQuery(this).next().find('div.cartName').after(detailsBtn);
       jQuery(this).next().find('div.cartName').after(productOptions);

       jQuery(this).hide();
     });

//add class .white text
    jQuery('.cartItemSkuNameWrapper.decoration').addClass('whitetext');

// Hide Summary on review cart
      jQuery('.invoiceDetails .cartHeader').each(function(i,v){
        var detailsBtn = jQuery(this).find('div.hideProdDetails');
        var productOptions = jQuery(this).find('div.productOptions');

        jQuery(this).next().find('div.cartName').after(detailsBtn);
        jQuery(this).next().find('div.cartName').after(productOptions);
		jQuery(this).hide();
      });

//Adds classes to help sync style between cart and review page
	  jQuery('.invoiceDetails [id^=prod_det_]').each(function(i,v){
		  jQuery(this).find('div.cartNameContent').addClass('cartItemSkuNameWrapper decoration whitetext bluebox-override');

	  });


// hide the grey sku text
      jQuery('.cartItemSkuNameWrapper.decoration').each(function(){
        var skuTxt = jQuery(this).find('.shoppingcart_item_sku');
        skuTxt.addClass('whitetext');
      });

// move text into placeholder on quote
jQuery(document).ready(function($){
  $(".myQuoteListWrapper #contactInformationForm #contact_message").attr("placeholder", "Please enter Imprint Instructions below ( # Of Imprint Colors, Locations)").val("").focus().blur();
  });
  $('.quoteMes h4:nth-child(2)').hide();
});

/****************************************************************************
* Adding html in product page bar, so can be animated (Jerry)
*****************************************************************************/
// build sliding color background on bar in products pages
// build sliding color background on bar in products pages
jQuery(document).ready(function($){
  var fired = 0;
  $(window).scroll(function() {
     var scroll = $(window).scrollTop();
     if(scroll >= 400 && fired == 0) {
        fired = 1;
        $('#product_details_15 .details_desc .hotline_wrapper').html('<div class="hotline_wrapper"><div class="animated-bar"></div><div class="text-holder">We will BEAT any competitors price on the same product with our <strong>LOW PRICE GUARANTEE</strong>!</div></div>');
      $('.animated-bar').animate({width: '100%'}, 1500, "swing", function(){
      $('.text-holder').append('&nbsp; <i class="fa fa-smile-o" aria-hidden="true"></i>');
    });
     }
  });

  //product page contact box
  $('#productContactUs .text-content').html('<p><span id="customize">Customize any product! We can create a unique design for you!</span></p><p style="font-size:14px">Contact us at <a href="mailto:sales@promotionalproducts.net" style="color:rgba(51,153,255,1);">sales@promotionalproducts.net</a></p>');
});