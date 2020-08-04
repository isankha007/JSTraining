

			
var pObj = new ProductLogic();
var indexSelected=0;
function  getId(element) {
				console.log("Cliked this row ");
				//alert("row "+element.id);
				var prodrowID=arrProd[element.id].ProductRowId;
				document.getElementById("prodID").value=arrProd[element.id].ProductId;
				document.getElementById("prodName").value=arrProd[element.id].ProductName;
				document.getElementById("selectCat").value=arrProd[element.id].CategoryName;
				document.getElementById("ProdDescription").value=arrProd[element.id].Description;
				document.getElementById("selectMan").value=arrProd[element.id].Manufacturer;
				document.getElementById("prodBasePrice").value=arrProd[element.id].BasePrice;
				var prod = { ProductRowId: prodrowID, ProductId: prodID, ProductName: prodName,CategoryName:prodCat,Manufacturer:prodManu,Description:ProdDescription,BasePrice:prodBasePrice};
				//pObj.updateProduct(prod);
			}	
			
			
 function deleteRow(element){
				 var myJSON = JSON.stringify(element);
                 console.log(myJSON);
				 alert("  "+element.id);
			    } 		


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
                    tr +=  '<td id="'+i+'" onclick="Javascript:getId(this)">'+arrProd[i][keys[j]];
					}
					//tr+= '</td>'+'<td><input type="button" value="Delete" id="'+j+'" "onclick="deleteRow()"></input></td></tr>';
					tr+= '</td>'+'<td><input type="button" value="Delete" id="'+i+'" onclick="deleteRow(this)"></input></td></tr>';
					//tr +=;
					document.getElementById('tbody').innerHTML = tr;
					
                }
			
               
            }				

function page_onload(){
			arrProd=pObj.getPorducts();
		    arrCat=pObj.getCategory();
		    arrMan=pObj.getManufacture();
		    selectOptCat(arrCat);
			selectOptMan(arrMan);
            gnerateTable(arrProd);
		
			document.getElementById('btnCreate').addEventListener('click', function() {

				var prodrowID=arrProd[arrProd.length-1].ProductRowId+1;
				var prodID=document.getElementById("prodID").value;
				var prodName=document.getElementById("prodName").value;
				var prodCat=document.getElementById("selectCat").value;
				var ProdDescription=document.getElementById("ProdDescription").value;
				var prodManu=document.getElementById("selectMan").value;
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
			   
			
			document.getElementById('sortIDs').addEventListener('change', function() {
				var ele = document.getElementsByName('sortID'); 
                for(i = 0; i < ele.length; i++) { 
                if(ele[i].checked) 
                // alert('Clicked '+ele[i].value);
			     var keyName= ele[i].value=="prodCat"?"CategoryName":"Manufacturer";
			     var arrS = pObj.sortProduct(keyName);
				 gnerateTable(arrS)
			     
            } 
               

            }, false);
			
			

}
