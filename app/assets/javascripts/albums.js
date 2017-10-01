$(function(){
	$(document).on("click", ".more-info-tag, .go-back-btn", function(event){
		event.preventDefault();
		$.ajax({
			url: $(this).attr("href"),
			datatype: "HTML",
			method: 'GET',
			data: {
				is_ajax: true
			}
		})
		.done(function(data){
			$(".main-container-wrapper").fadeOut("slow", function(){
				$(".main-container-wrapper").html(data);
				$(".main-container-wrapper").fadeIn("slow", function() {});
			})
		})

		.fail(function(data){
			console.error(data)
		})
	});




	$(document).on("click", ".remove-album, .remove-photo", function(event){
		event.preventDefault();
		var self = $(this)
		$.ajax({
			url: self.attr("href"),
			datatype: "JSON",
			method: 'DELETE'
		})
		.done(function(data){
			console.log("this ", this);
			console.log("self ", self);
			if (data.is_success) {
				self.closest(".col").remove();
			}
		})
	});
})
