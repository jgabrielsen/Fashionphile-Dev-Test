var dataDump = $.getJSON( "https://www.fashionphile.com/json-data?date=17-5&model=Product&take=50", function() {
	var productObjects = dataDump.responseJSON.data;
	//console.log(productObjects);
	$.each( productObjects, function( i, product ) {
		//console.log(productObject);
		$(".products").append(
			"<li class='four columns product'>" +
	        '<p class="product-name">'+product.name+'</p>'+
        	'<p class="product-brand">'+product.brand+'</p>'+
			'<img class="product-image" src="http://www.fashionphile.com/'+product.images+'" alt="'+product.name+'" />'+
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