function page_onload(){
	       var pObj = new ProductLogic();
		   arrProd=pObj.getPorducts();
		   arrCat=pObj.getCategory();
		   arrMan=pObj.getManufacture();
		    selectOptCat(arrCat);
			selectOptMan(arrMan);
            gnerateTable(arrProd);
			
			///Generate options
			function selectOptCat(arrCat){
				var slStr//="<select id='selectCat' onchange='onClickSelect()'>";
				for (var i=0; i <arrCat.length; i++)
				{
				slStr+="<option>" + arrCat[i] + "</option>";
				}
                slStr+="</select>"
               document.getElementById('selectCat').innerHTML = slStr;
			}
			
			function selectOptMan(arrMan){
				var slStr//="<select id='selectMan' onchange='onClickSelect()'>";
				for (var i=0; i <arrMan.length; i++)
				{
				slStr+="<option>" + arrMan[i] + "</option>";
				}
                slStr+="</select>"
               document.getElementById('selectMan').innerHTML = slStr;
			}
            // a function to generate table
            function gnerateTable(arrProd) {
               
				var keys1=Object.keys(arrProd[0]);
				var thsrt='<thead>';
				 thsrt += '<tr>' 
				 for(var j = 0; j < keys1.length; j++)
				 {
                    thsrt +=  '<th>'+keys1[j]+ '</th>';// + arrProd[keys] + '</td><td>' + arrProd[i] + '</td></tr>';
			      }
				  thsrt += '</tr></th></thead>';
				 // document.getElementById('tbody').innerHTML = thsrt;
				 var tr = '';
				 tr=thsrt;
                for (var i = 0; i < arrProd.length; i++) {
				var keys=Object.keys(arrProd[i]);
				   tr += '<tr>'; 
				   for(var j = 0; j < keys.length; j++){
                    tr +=  '<td>'+arrProd[i][keys[j]];
					}
					tr+= '</td>'+'<td><input type="button" id="delPOIbutton" value="Delete" onclick="deleteRow(this)"/></td></tr>';
					//tr +=;
					document.getElementById('tbody').innerHTML = tr;
                }
				
                
            }
			
			document.getElementById('btnCreate').addEventListener('click', function() {
                var prod = { ProductRowId: 110, ProductId: 'P1', ProductName: 'p1',CategoryName:"C1",Manufacturer:"m1",Description:"D1",BasePrice:'BasePrice1'};
				pObj.addProduct(prod);
				 arrProd=pObj.getPorducts();
				arrCat=pObj.getCategory();
				arrMan=pObj.getManufacture();
				selectOptCat(arrCat);
				selectOptMan(arrMan);
				gnerateTable(arrProd);
                //gnerateTable(arrEmps);

            }, false);
			
		document.getElementById('btnUpdate').addEventListener('click', function() {
           

            }, false);
}
