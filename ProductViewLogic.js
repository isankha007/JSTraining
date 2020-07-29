function page_onload(){
	 var pObj = new ProductLogic();
		   arrProd=pObj.getPorducts();
		    selectOptCat(pObj.getCategory());
            gnerateTable(arrProd);
			
			///Generate options
			/*function selectOpt(){
				var limitOfRows=16;
				var positions = 0;
				var slStr="<select id='positions' onchange='onClickSelect()'>";
				//document.write("<select id='positions' onchange='onClickSelect()'>");
				for (var i=0; i <limitOfRows; i++)
				{
				positions++;
				slStr+="<option>" + positions + "</option>";
				}
                slStr+="</select>"
               document.getElementById('select').innerHTML = slStr;
			}*/
			
			///Generate options
			function selectOptCat(){
				var limitOfRows=16;
				var positions = 0;
				var slStr="<select id='positions' onchange='onClickSelect()'>";
				//document.write("<select id='positions' onchange='onClickSelect()'>");
				for (var i=0; i <limitOfRows; i++)
				{
				positions++;
				slStr+="<option>" + positions + "</option>";
				}
                slStr+="</select>"
               document.getElementById('selectCat').innerHTML = slStr;
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
                    tr +=  '<td>'+arrProd[i][keys[j]]+ '</td>';// + arrProd[keys] + '</td><td>' + arrProd[i] + '</td></tr>';
					}
					tr+='</tr>';
					//tr +=;
					document.getElementById('tbody').innerHTML = tr;
                }
				
                
            }
}
