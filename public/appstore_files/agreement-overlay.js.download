
'use strict';

(function(window, $, undefined) {
	
	function getOverlayByAgreementId(id) {
		
		return ui.overlays.filter('[data-agreement-id="' + id + '"]');
		
	}
		
	function toggleOverlay(overlay, visible) {
		
		return overlay.toggleClass('visible', visible);
		
	}
		
	function validateForm(form) {
		
		var checkbox = form.data().agree;
		
		var checked = checkbox.is(':checked');
		
		// Update the input's (boolean) value
		
		checkbox.val(checked); 
		
		// Conditioanlly toggle the input's validation message 
		
		checkbox.closest('label').toggleClass('error', !checked);
		
		return checked;
		
	}
	
	function resetForm(form, file) {
		
		// Clear validation errors
		
		form.find('label.error').removeClass('error');
			
		// Reset the agreement checkbox
		
		form.data().agree.attr('checked', false);
		
		return form;
		
	}
	
	// Cache UI elements
	
	var ui = {};
	
	// Initialize
	
	(function init() {
		
		// On document ready
		
		$(function() {
	
			// Cache UI elements
	
			ui.body = $('body');
			
			ui.links 		= ui.body.find('a[data-agreement-id]');  
			ui.overlays 	= ui.body.find('.agreement-overlay');
			ui.agreements 	= ui.overlays.find('.agreement-text');
			ui.forms		= ui.overlays.find('.agreement-form');
			ui.dimmers 		= ui.overlays.next('.agreement-overlay-dimmer');
			
			// Store dataset references to each overlay's form and dimmer
			
			ui.overlays.map(function(index, overlay) {
				
				overlay = $(overlay);
				
				overlay.data().form   = overlay.find('.agreement-form');
				overlay.data().dimmer = overlay.next('.agreement-overlay-dimmer');
				
			});
			
			// Store dataset references to each form's checkbox input
			
			ui.forms.map(function(index, form) {
				
				form = $(form);
				
				form.data().file  = form.find('input[name="file"]');
				form.data().agree = form.find('input[name="agree"]');
				
			});
			
			// User event handlers
			
			var handlers = {};
			
			handlers.onClickProtectedLink = function(e) {
			
				e.preventDefault();
			
				var data = e.currentTarget.dataset;
				
				var targetOverlay = getOverlayByAgreementId(data.agreementId);
				
				var targetForm = targetOverlay.find('.agreement-form');
				
				// Clear the hidden file (key) input
		
				targetForm.data().file.val(data.file);
				
				if(targetForm.data().accepted) {
					
					if (typeof s !== 'undefined') {
						s.tl(true, 'd', 'file-'.concat(targetForm.data().file.val()));
					}
					
					return targetForm.trigger('submit');
					
				}
				
				// Reset all forms, displaying only the corresponding form
				
				var isMatch,
					form;
				
				ui.overlays.map(function(index, overlay) {
					
					overlay = $(overlay);
					
					form = overlay.data().form;
					
					// Check whether the overlay corresponds
					
					isMatch = overlay.is(targetOverlay); 
					
					if(!form.accepted) {
						
						// Conditionally toggle the overlay
						
						toggleOverlay(overlay, isMatch);
						
						// Reset the form, conditionally setting it's 'file' input value
						
						resetForm(form, isMatch ? data.file : null);
						
					}
					
				});
				
			};
			
			handlers.onClickSubmitButton = function(e) {
			
				var form = $(e.delegateTarget);
					
				if(!validateForm(form)) {
					
					e.preventDefault();
					
				} else {
					
					var overlay = form.closest('.agreement-overlay');
					
					toggleOverlay(overlay, false);
					
					form.data().accepted = true;
					
					if (typeof s !== 'undefined') {
						s.tl(true,'d', 'file-'.concat(form.data().file.val()));
					}
					
				}
				
			};
			
			handlers.onClickCancelButton = function(e) {
				
				e.preventDefault();
				
				var form = $(e.delegateTarget);
				
				resetForm(form);
				
				var overlay = form.closest('.agreement-overlay');
				
				toggleOverlay(overlay, false);
				
			}
			
			handlers.onClickDimmer = function(e) {
				
				var dimmer = $(e.currentTarget);
				
				var overlay = dimmer.prev('.agreement-overlay');
				
				toggleOverlay(overlay, false);
				
			};
			
			// User event listeners
			
			ui.links.on('click', handlers.onClickProtectedLink);
			
			ui.forms.on('click', 'button[type="submit"]', handlers.onClickSubmitButton);
			
			ui.forms.on('click', 'button[type="cancel"]', handlers.onClickCancelButton);
			
			ui.dimmers.on('click', handlers.onClickDimmer);
			
			// Prevent page scrolling from an agreement
			
			$.preventScrollPropagation('.agreement-text, .agreement-overlay-dimmer');
			
		});
		
	}());
	
}(window, window.jQuery));
