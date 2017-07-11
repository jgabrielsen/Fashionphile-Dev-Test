var dataDump = $.getJSON( "json/productData.json", function() {
	var productObjects = dataDump.responseJSON.data;
	$.each( productObjects, function( i, product ) {
		$(".products").append(
			"<li class='four columns product'>" +
			'<img class="product-image" src="https://www.fashionphile.com/'+product.images+'" alt="'+product.name+'" onError="this.onerror=null;this.src=\'images/noimage.png\';" />'+
			'<div class="product-info">'+
	        '<p class="product-name">'+product.name+'</p>'+
        	'<p class="product-brand">'+product.brand+'</p>'+
        	'</div>'+
			"</li>"
		)
	});
})
  .done(function() {
	console.log( "Call to product JSON successful" );
  })
  .fail(function() {
	console.log( "Unable to call product JSON" );
  })
  .always(function() {
	console.log( "Call complete" );
  });