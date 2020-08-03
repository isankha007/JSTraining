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
                    tr +=  '<td onclick="getId(this)">'+arrProd[i][keys[j]];
					}
					tr+= '</td>'+'<td><input type="button" id="delPOIbutton" value="Delete" onclick="deleteRow(this)"/></td></tr>';
					//tr +=;
					document.getElementById('tbody').innerHTML = tr;
                }
				
                
            }
			
			document.getElementById('btnCreate').addEventListener('click', function() {
				//var table = document.getElementById('table1');
				//var lastRow = table.rows[ table.rows.length - 1 ];
				//var column5Row3 = table.rows[lastRow].cells[0].innerHTML;
				var prodrowID=arrProd[arrProd.length-1].ProductRowId+1;
				var prodID=document.getElementById("prodID").value;
				var prodName=document.getElementById("prodName").value;
				var prodCat=document.getElementById("prodCat").value;
				var ProdDescription=document.getElementById("ProdDescription").value;
				var prodManu=document.getElementById("prodManu").value;
				var prodBasePrice=document.getElementById("prodBasePrice").value;
                var prod = { ProductRowId: prodrowID, ProductId: prodID, ProductName: prodName,CategoryName:prodCat,Manufacturer:prodManu,Description:ProdDescription,BasePrice:prodBasePrice};
				pObj.addProduct(prod);
				arrProd=pObj.getPorducts();
				arrCat=pObj.getCategory();
				arrMan=pObj.getManufacture();
				selectOptCat(arrCat);
				selectOptMan(arrMan);
				gnerateTable(arrProd);

            }, false);
			
			document.getElementById('btnUpdate').addEventListener('click', function() {
              /* var prodrowID=arrProd[arrProd.length-1].ProductRowId+1;
				var prodID=document.getElementById("prodID").value;
				var prodName=document.getElementById("prodName").value;
				var prodCat=document.getElementById("prodCat").value;
				var ProdDescription=document.getElementById("ProdDescription").value;
				var prodManu=document.getElementById("prodManu").value;
				var prodBasePrice=document.getElementById("prodBasePrice").value;
                var prod = { ProductRowId: prodrowID, ProductId: prodID, ProductName: prodName,CategoryName:prodCat,Manufacturer:prodManu,Description:ProdDescription,BasePrice:prodBasePrice};
				pObj.addProduct(prod);
				arrProd=pObj.getPorducts();
				arrCat=pObj.getCategory();
				arrMan=pObj.getManufacture();
				selectOptCat(arrCat);
				selectOptMan(arrMan);
				gnerateTable(arrProd);*/

            }, false);
			
			function  getId(element) {
				console.log("Cliked this row ");
				alert("row" + element.parentNode.parentNode.rowIndex + 
				" - column" + element.parentNode.cellIndex);
			}
			
			   
			
			document.getElementById('sortIDs').addEventListener('change', function() {
                alert('Clicked prodCat');

            }, false);
			
			
			//Comparer Function    
		  function GetSortOrder(prop) {    
			return function(a, b) {    
				if (a[prop] > b[prop]) {    
					return 1;    
				} else if (a[prop] < b[prop]) {    
					return -1;    
				}    
				return 0;    
			}    
}    
}
