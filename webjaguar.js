$(function() {
	
	// Off Canvas
	if($('#leftSidebar button[data-toggle="offcanvas"]').length) {
		$('#leftSidebar button[data-toggle="offcanvas"]').click(function() {
			$(".row-offcanvas").toggleClass("active");
		});
	}
	
	// init Bootstrap tooltip
	if($('[data-toggle="tooltip"]').length) {
		$('[data-toggle="tooltip"]').tooltip({
			container: "body"
		});
	}
	
	// init tab collaps for responsive tabs
	if($("#product-tabs").length) {
		$("#product-tabs").tabCollapse();
	}
	
});

$(function() {
	if($(".paymentMethod.radio input[type='radio']").length) {
		$(".paymentMethod.radio input[type='radio']").click(function() {
			if($("#creditCard_radio").is(':checked')) {
				$(".creditCardBox").slideDown({
					complete: function(){
						$('.shippingBox').css('height','auto');
						$('.paymentBox').css('height','auto');
						if($(window).width() > 767) {
							if($('.shippingBox').height() > $('.paymentBox').height()) {
								$('.paymentBox').height($('.shippingBox').height());
							}
							else if($('.shippingBox').height() < $('.paymentBox').height()) {
								$('.shippingBox').height($('.paymentBox').height());
							}
						}
					}
				});
			}
			else {
				$(".creditCardBox").slideUp({
					complete: function(){
						$('.shippingBox').css('height','auto');
						$('.paymentBox').css('height','auto');
						if($(window).width() > 767) {
							if($('.shippingBox').height() > $('.paymentBox').height()) {
								$('.paymentBox').height($('.shippingBox').height());
							}
							else if($('.shippingBox').height() < $('.paymentBox').height()) {
								$('.shippingBox').height($('.paymentBox').height());
							}
						}
					}
				});
			}
		});
		if($("#creditCard_radio").is(':checked')) {
			$(".creditCardBox").show();
		}
	}
});

$(function() {
	if($("#customer_address_country").length || $("#customer_address_phone").length || $("#customer_address_cellPhone").length) {
		$("#customer_address_country").change(function() {
			if ($(this).val() === "US") {
				$("#customer_address_state").removeAttr("disabled").show();
				$("#customer_address_ca_province").hide().attr("disabled", "disabled");
				$("#customer_address_stateProvince").hide().attr("disabled", "disabled");
				$("#customer_address_stateProvinceNA").hide().attr("disabled", "disabled");
				$("#stateProvinceNA").hide();
			} else if ($(this).val() === "CA") {
				$("#customer_address_state").hide().attr("disabled", "disabled");
				$("#customer_address_ca_province").removeAttr("disabled").show();
				$("#customer_address_stateProvince").hide().attr("disabled", "disabled");
				$("#customer_address_stateProvinceNA").hide().attr("disabled", "disabled");
				$("#stateProvinceNA").hide();
			} else {
				$("#customer_address_state").hide().attr("disabled", "disabled");
				$("#customer_address_ca_province").hide().attr("disabled", "disabled");
				$("#customer_address_stateProvince").removeAttr("disabled").show();
				$("#customer_address_stateProvinceNA").removeAttr("disabled").removeAttr("checked").show();
				$("#stateProvinceNA").show();
			}

			// Sync Phone Country Code with Country
			$("#customer_address_phone").intlTelInput("selectCountry", $(this).val().toLowerCase());
			// Sync Cell Phone Country Code with Country
			$("#customer_address_cellPhone").intlTelInput("selectCountry", $(this).val().toLowerCase());		
		});

		$("#customer_address_phone").change(function() {
			// Sync Country with Phone Country Code
			$("#customer_address_country").val(($(this).intlTelInput("getSelectedCountryData").iso2).toUpperCase()).change();
			// Sync Cell Phone Country Code with Phone Country Code
			$("#customer_address_cellPhone").intlTelInput("selectCountry", $(this).intlTelInput("getSelectedCountryData").iso2);
		});
		
		$("#customer_address_cellPhone").change(function() {
			// Sync Country with Cell Phone Country Code
			$("#customer_address_country").val(($(this).intlTelInput("getSelectedCountryData").iso2).toUpperCase()).change();
			// Sync Phone Country Code with Cell Phone Country Code
			$("#customer_address_phone").intlTelInput("selectCountry", $(this).intlTelInput("getSelectedCountryData").iso2);
		});

		// Trigger country change
		$("#customer_address_country").change();
	}

	// State/Province
	if($("#customer_address_stateProvinceNA").length && $("#customer_address_stateProvince").length) {
		$("#customer_address_stateProvinceNA").click(function() {
			if($(this).is(":checked")) {
				$("#customer_address_stateProvince").attr("disabled", "disabled");
			}
			else {
				$("#customer_address_stateProvince").removeAttr("disabled");
			}
		});
	}

	/* ---------------------------------------------------------------------------------------------------- */

	if($("#shipping_country").length || $("#shipping_phone").length || $("#shipping_cellPhone").length) {
		$("#shipping_country").change(function() {
			if ($(this).val() === "US") {
				$("#shipping_state").removeAttr("disabled").show();
				$("#shipping_ca_province").hide().attr("disabled", "disabled");
				$("#shipping_stateProvince").hide().attr("disabled", "disabled");
				$("#shipping_stateProvinceNA").hide().attr("disabled", "disabled");
				$("#stateProvinceNA_shipping").hide();
			} else if ($(this).val() === "CA") {
				$("#shipping_state").hide().attr("disabled", "disabled");
				$("#shipping_ca_province").removeAttr("disabled").show();
				$("#shipping_stateProvince").hide().attr("disabled", "disabled");
				$("#shipping_stateProvinceNA").hide().attr("disabled", "disabled");
				$("#stateProvinceNA_shipping").hide();
			} else {
				$("#shipping_state").hide().attr("disabled", "disabled");
				$("#shipping_ca_province").hide().attr("disabled", "disabled");
				$("#shipping_stateProvince").removeAttr("disabled").show();
				$("#shipping_stateProvinceNA").removeAttr("disabled").removeAttr("checked").show();
				$("#stateProvinceNA_shipping").show();
			}

			// Sync Phone Country Code with Country
			$("#shipping_phone").intlTelInput("selectCountry", $(this).val().toLowerCase());
			// Sync Cell Phone Country Code with Country
			$("#shipping_cellPhone").intlTelInput("selectCountry", $(this).val().toLowerCase());
		});
		
		$("#shipping_phone").change(function() {
			// Sync Country with Phone Country Code
			$("#shipping_country").val(($(this).intlTelInput("getSelectedCountryData").iso2).toUpperCase()).change();
			// Sync Cell Phone Country Code with Phone Country Code
			$("#shipping_cellPhone").intlTelInput("selectCountry", $(this).intlTelInput("getSelectedCountryData").iso2);
		});

		$("#shipping_cellPhone").change(function() {
			// Sync Country with Cell Phone Country Code
			$("#shipping_country").val(($(this).intlTelInput("getSelectedCountryData").iso2).toUpperCase()).change();
			// Sync Phone Country Code with Cell Phone Country Code
			$("#shipping_phone").intlTelInput("selectCountry", $(this).intlTelInput("getSelectedCountryData").iso2);
		});

		// Trigger country change
		$("#shipping_country").change();
	}

	// State/Province
	if($("#shipping_stateProvinceNA").length && $("#shipping_stateProvince").length) {
		$("#shipping_stateProvinceNA").click(function() {
			if($(this).is(":checked")) {
				$("#shipping_stateProvince").attr("disabled", "disabled");
			}
			else {
				$("#shipping_stateProvince").removeAttr("disabled");
			}
		});
	}

	/* ---------------------------------------------------------------------------------------------------- */

	if($("#giftCardOrder_billing_country").length || $("#giftCardOrder_billing_phone").length || $("#giftCardOrder_billing_cellPhone").length) {
		$("#giftCardOrder_billing_country").change(function() {
			if ($(this).val() === "US") {
				$("#giftCardOrder_billing_state").removeAttr("disabled").show();
				$("#giftCardOrder_billing_ca_province").hide().attr("disabled", "disabled");
				$("#giftCardOrder_billing_stateProvince").hide().attr("disabled", "disabled");
				$("#giftCardOrder_billing_stateProvinceNA").hide().attr("disabled", "disabled");
				$("#stateProvinceNA").hide();
			} else if ($(this).val() === "CA") {
				$("#giftCardOrder_billing_state").hide().attr("disabled", "disabled");
				$("#giftCardOrder_billing_ca_province").removeAttr("disabled").show();
				$("#giftCardOrder_billing_stateProvince").hide().attr("disabled", "disabled");
				$("#giftCardOrder_billing_stateProvinceNA").hide().attr("disabled", "disabled");
				$("#stateProvinceNA").hide();
			} else {
				$("#giftCardOrder_billing_state").hide().attr("disabled", "disabled");
				$("#giftCardOrder_billing_ca_province").hide().attr("disabled", "disabled");
				$("#giftCardOrder_billing_stateProvince").removeAttr("disabled").show();
				$("#giftCardOrder_billing_stateProvinceNA").removeAttr("disabled").removeAttr("checked").show();
				$("#stateProvinceNA").show();
			}

			// Sync Phone Country Code with Country
			$("#giftCardOrder_billing_phone").intlTelInput("selectCountry", $(this).val().toLowerCase());
			// Sync Cell Phone Country Code with Country
			$("#giftCardOrder_billing_cellPhone").intlTelInput("selectCountry", $(this).val().toLowerCase());		
		});

		$("#giftCardOrder_billing_phone").change(function() {
			// Sync Country with Phone Country Code
			$("#giftCardOrder_billing_country").val(($(this).intlTelInput("getSelectedCountryData").iso2).toUpperCase()).change();
			// Sync Cell Phone Country Code with Phone Country Code
			$("#giftCardOrder_billing_cellPhone").intlTelInput("selectCountry", $(this).intlTelInput("getSelectedCountryData").iso2);
		});
		
		$("#giftCardOrder_billing_cellPhone").change(function() {
			// Sync Country with Cell Phone Country Code
			$("#giftCardOrder_billing_country").val(($(this).intlTelInput("getSelectedCountryData").iso2).toUpperCase()).change();
			// Sync Phone Country Code with Cell Phone Country Code
			$("#giftCardOrder_billing_phone").intlTelInput("selectCountry", $(this).intlTelInput("getSelectedCountryData").iso2);
		});

		// Trigger country change
		$("#giftCardOrder_billing_country").change();
	}

	// State/Province
	if($("#giftCardOrder_billing_stateProvinceNA").length && $("#giftCardOrder_billing_stateProvince").length) {
		$("#giftCardOrder_billing_stateProvinceNA").click(function() {
			if($(this).is(":checked")) {
				$("#giftCardOrder_billing_stateProvince").attr("disabled", "disabled");
			}
			else {
				$("#giftCardOrder_billing_stateProvince").removeAttr("disabled");
			}
		});
	}
});

// Set Default Country base on IP Address info
$(function() {
	if($("#customer_address_phone").length || $("#customer_address_cellPhone").length || 
		$("#shipping_phone").length || $("#shipping_cellPhone").length || 
		$("#giftCardOrder_billing_phone").length || $("#giftCardOrder_billing_cellPhone").length) {

		var utilsScript_URL = "";
		// var utilsScript_URL = "assets/js/libs/libphonenumber.js";

		if($("#customer_address_phone").length) {
			$("#customer_address_phone").intlTelInput({
				autoFormat: false,
				preferredCountries: ["us"],
				defaultCountry: 'us',
				utilsScript: utilsScript_URL
			});
			$("#customer_address_phone").change();
			$("#customer_address_phone").blur(function(){
				if ($.trim($("#customer_address_phone").val())) {
					if ($("#customer_address_phone").intlTelInput('isValidNumber')) {
						$(this).closest('.form-group').removeClass('has-error');
					}
					else {
						$(this).closest('.form-group').addClass('has-error');
					}
				}
			}).keydown(function(){
				$(this).closest('.form-group').removeClass('has-error');
			});
		}

		if($("#customer_address_cellPhone").length) {
			$("#customer_address_cellPhone").intlTelInput({
				autoFormat: false,
				preferredCountries: ["us"],
				defaultCountry: 'us',
				utilsScript: utilsScript_URL
			});
			$("#customer_address_cellPhone").change();
			$("#customer_address_cellPhone").blur(function(){
				if ($.trim($("#customer_address_cellPhone").val())) {
					if ($("#customer_address_cellPhone").intlTelInput('isValidNumber')) {
						$(this).closest('.form-group').removeClass('has-error');
					}
					else {
						$(this).closest('.form-group').addClass('has-error');
					}
				}
			}).keydown(function(){
				$(this).closest('.form-group').removeClass('has-error');
			});
		}

		if($("#shipping_phone").length) {
			$("#shipping_phone").intlTelInput({
				autoFormat: false,
				preferredCountries: ["us"],
				defaultCountry: 'us',
				utilsScript: utilsScript_URL
			});
			$("#shipping_phone").change();
			$("#shipping_phone").blur(function(){
				if ($.trim($("#shipping_phone").val())) {
					if ($("#shipping_phone").intlTelInput('isValidNumber')) {
						$(this).closest('.form-group').removeClass('has-error');
					}
					else {
						$(this).closest('.form-group').addClass('has-error');
					}
				}
			}).keydown(function(){
				$(this).closest('.form-group').removeClass('has-error');
			});
		}

		if($("#shipping_cellPhone").length) {
			$("#shipping_cellPhone").intlTelInput({
				autoFormat: false,
				preferredCountries: ["us"],
				defaultCountry: 'us',
				utilsScript: utilsScript_URL
			});
			$("#shipping_cellPhone").change();
			$("#shipping_cellPhone").blur(function(){
				if ($.trim($("#shipping_cellPhone").val())) {
					if ($("#shipping_cellPhone").intlTelInput('isValidNumber')) {
						$(this).closest('.form-group').removeClass('has-error');
					}
					else {
						$(this).closest('.form-group').addClass('has-error');
					}
				}
			}).keydown(function(){
				$(this).closest('.form-group').removeClass('has-error');
			});
		}

		if($("#giftCardOrder_billing_phone").length) {
			$("#giftCardOrder_billing_phone").intlTelInput({
				autoFormat: false,
				preferredCountries: ["us"],
				defaultCountry: 'us',
				utilsScript: utilsScript_URL
			});
			$("#giftCardOrder_billing_phone").change();
			$("#giftCardOrder_billing_phone").blur(function(){
				if ($.trim($("#giftCardOrder_billing_phone").val())) {
					if ($("#giftCardOrder_billing_phone").intlTelInput('isValidNumber')) {
						$(this).closest('.form-group').removeClass('has-error');
					}
					else {
						$(this).closest('.form-group').addClass('has-error');
					}
				}
			}).keydown(function(){
				$(this).closest('.form-group').removeClass('has-error');
			});
		}

		if($("#giftCardOrder_billing_cellPhone").length) {
			$("#giftCardOrder_billing_cellPhone").intlTelInput({
				autoFormat: false,
				preferredCountries: ["us"],
				defaultCountry: 'us',
				utilsScript: utilsScript_URL
			});
			$("#giftCardOrder_billing_cellPhone").change();
			$("#giftCardOrder_billing_phone").blur(function(){
				if ($.trim($("#giftCardOrder_billing_phone").val())) {
					if ($("#giftCardOrder_billing_phone").intlTelInput('isValidNumber')) {
						$(this).closest('.form-group').removeClass('has-error');
					}
					else {
						$(this).closest('.form-group').addClass('has-error');
					}
				}
			}).keydown(function(){
				$(this).closest('.form-group').removeClass('has-error');
			});
		}
	}
});

function openW(thisURL) {
	var width = 550;
	var height = 300;
	var left = (screen.width/2) - (width/2);
	var top = (screen.height/2) - (height/2);

	var options="toolbar=no, location=no, directories=no, status=no,"
		+ "menubar=no, scrollbars=yes, resizable=no, copyhistory=no,"
		+ "width="+ width +","
		+ "height="+ height +","
		+ "top="+ top +","
		+ "left=" + left;
	cvv2 = window.open(thisURL,"CVV2",options);
	cvv2.focus();
	return true;
}

/***************************************************************************
* Scroll To Top
***************************************************************************/
(function($) {
	$.fn.scrollToTop = function() {
		var config = {
			speed : 1000,
			distance : 300
		};

		return this.each(function() {
			var $this = $(this);

			if ($(this).attr('data-speed')) {
				$.extend(config, {
					speed : parseInt($(this).attr('data-speed'))
				});
			}
			if ($(this).attr('data-distance')) {
				$.extend(config, {
					distance : parseInt($(this).attr('data-distance'))
				});
			}

			$(window).scroll(function() {
				if ($(this).scrollTop() > config.distance) {
					$this.fadeIn();
				} else {
					$this.fadeOut();
				}
			});

			$this.click(function(e) {
				e.preventDefault();
				$("body, html").animate({
					scrollTop : 0
				}, config.speed);
			});
		});
	};

	$(function() {
		var $scrollToTop = $("#scrollToTop");
		if ($scrollToTop.length > 0) {
			$scrollToTop.scrollToTop();
		}
	});
})(jQuery);

/***************************************************************************
* Scroll To Target
***************************************************************************/
(function($) {
	$.fn.scrollToTarget = function() {
		var config = {
			speed : 1000,
			offset : 0
		};
		return this.each(function() {
			var $this = $(this);

			if ($(this).attr('data-speed')) {
				$.extend(config, {
					speed : parseInt($(this).attr('data-speed'))
				});
			}
			if ($(this).attr('data-offset')) {
				$.extend(config, {
					offset : parseInt($(this).attr('data-offset'))
				});
			}

			if(!$(this).attr('data-target')) {
				return false;
			}
			else {
				var target = $(this).attr('data-target');
				$this.click(function(e) {
					e.preventDefault();
					$("body, html").animate({
						scrollTop : $(target).offset().top + config.offset
					}, config.speed);
				});
			}
		});
	};

	$(function() {
		var $scrollToTarget = $(".scrollToTarget");
		var count = Object.keys($scrollToTarget).length;
		if (count > 0) {
			$scrollToTarget.scrollToTarget();
		}
	});
})(jQuery);

/***************************************************************************
* Swap Image
***************************************************************************/
(function($) {
	$.fn.swapImage = function() {
		return this.each(function() {
			var target = $(this).attr('data-target');
			var src = $(this).attr('href');
			$(target).attr('src', src);
		});
	};
	$(function() {
		$('[data-click="swap-img"]').click(function(e) {
			e.preventDefault();
			$(this).swapImage();
		});
		$('[data-hover="swap-img"]').hover(function() {
			$(this).swapImage();
		}).click(function(e) {
			e.preventDefault();
			$(this).swapImage();
		});
	});
})(jQuery);

/*****************************************************************************
* Adding text below form on product pages
*****************************************************************************/
jQuery(document).ready(function(){
  jQuery('.details_desc')
  .after('<div class="text-under-form">Additional imprint instructions may be added at checkout screen under Special Instructions,<br /><em>IE. Requested Custom Text to be Added, Specific Fonts, Layout, Colors, Etc.</em> </p><p>If you need to send more than one logo file, please email them with your company name to : artwork@promotionalproducts.net</div>');
});
