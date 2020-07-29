function ProductLogic() {
    // private scoped to the function
	//ProductRowId, ProductId, ProductName, CategoryName, Manufacturer, Description, BasePrice
    var products = [
        { ProductRowId: 101, ProductId: 'P1', ProductName: 'p1',CategoryName:"C1",Manufacturer:"m1",Description:"D1",BasePrice:'BasePrice1'},
         { ProductRowId: 102, ProductId: 'P1', ProductName: 'p1',CategoryName:"C2",Manufacturer:"m2",Description:"D3",BasePrice:'BasePrice2'},
		  { ProductRowId: 103, ProductId: 'P1', ProductName: 'p1',CategoryName:"C3",Manufacturer:"m3",Description:"D2",BasePrice:'BasePrice3'},
		   { ProductRowId: 104, ProductId: 'P1', ProductName: 'p1',CategoryName:"C4",Manufacturer:"m4",Description:"D4",BasePrice:'BasePrice4'},
		    { ProductRowId: 105, ProductId: 'P1', ProductName: 'p1',CategoryName:"C5",Manufacturer:"m5",Description:"D5",BasePrice:'BasePrice5'},
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
        }
    };
}
