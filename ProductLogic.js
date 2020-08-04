function ProductLogic() {
    // private scoped to the function
	//ProductRowId, ProductId, ProductName, CategoryName, Manufacturer, Description, BasePrice
    var products = [
        { ProductRowId: 101, ProductId: 'P1', ProductName: 'p1',CategoryName:"C1",Manufacturer:"m1",Description:"D1",BasePrice:'BasePrice1'},
         { ProductRowId: 102, ProductId: 'P2', ProductName: 'p2',CategoryName:"C6",Manufacturer:"m5",Description:"D3",BasePrice:'BasePrice2'},
		  { ProductRowId: 103, ProductId: 'P3', ProductName: 'p3',CategoryName:"C3",Manufacturer:"m4",Description:"D2",BasePrice:'BasePrice3'},
		   { ProductRowId: 104, ProductId: 'P4', ProductName: 'p4',CategoryName:"C4",Manufacturer:"m2",Description:"D4",BasePrice:'BasePrice4'},
		    { ProductRowId: 105, ProductId: 'P5', ProductName: 'p5',CategoryName:"C2",Manufacturer:"m3",Description:"D5",BasePrice:'BasePrice5'},
    ];
	


    // returning an Object
    return {
        getPorducts: function() {
            return products;
        },
		getCategory:function(){
			var arrCat=[];
			for(p in products ){
			   arrCat.push(products[p].CategoryName);
			}
			return arrCat;
		},
		getManufacture:function(){
			var arrManu=[];
			for(p in products ){
			   arrManu.push(products[p].Manufacturer);
			}
			return arrManu;
		},
        addProduct: function(prd) {
            products.push(prd);
            return products;
        },
		updateProduct: function(prd) {
            for(p in products ){
				if(products[p].ProductRowId==prd.ProductRowId){
			       products[p]=prd;
				}
			}
            return products;
        },
		sortProduct: function(key) {
            //sort logic here with the key
					function compareCat( a, b ) {
					if ( a.CategoryName < b.CategoryName ){
					return -1;
					}
					if ( a.CategoryName > b.CategoryName ){
						return 1;
					}
						return 0;
					 }
					 function compareMan( a, b ) {
					if ( a.Manufacturer < b.Manufacturer ){
					return -1;
					}
					if ( a.Manufacturer > b.Manufacturer ){
						return 1;
					}
						return 0;
					 }
            if(key=="CategoryName"){
				products.sort( compareCat );
			}else{
				products.sort( compareMan );
			}
			
            return products;
        },
		deleteProduct: function(prd) {
            for(p in products ){
				if(products[p].ProductRowId==prd.ProductRowId){
					products.splice(p, 1);;
			      // products[p]=prd;
				  //remove object
				  break;
				}
			}
            return products;
        },
    };
}
