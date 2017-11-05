function id(e){return document.getElementById(e);}
function cl(e){return document.getElementsByClassName(e);}

function generate()
{
	var html=id("html").innerHTML;
	var web=id("web").innerHTML;
    var n=cl("total").length;
    var res="";
    for (var i=0;i<n;i++)
    {
		var temp=html;
		temp=temp.replace("2279",cl("total")[i].value);
		temp=temp.replace("1519",cl("qmiles")[i].value);
		temp=temp.replace("06.10.2017",cl("date")[i].value);
		temp=temp.replace("AZ 786",cl("flight")[i].value);
		temp=temp.replace("XSSCE",cl("fare")[i].value);
		temp=temp.replace("MXP",cl("from")[i].value);
		temp=temp.replace("NRT",cl("to")[i].value);
		temp=temp.replace("ALITALIA",cl("carrier")[i].value);
		temp=temp.replace("X",cl("basis")[i].value);
		
		
		res+=temp;
		
	}
	res+="\r\n\r\n-----------------------------------------------------------------------\r\n\r\n";
    for (var i=0;i<n;i++)
    {
		var temp=web;
		temp=temp.replace("2279",cl("total")[i].value);
		temp=temp.replace("1519",cl("qmiles")[i].value);
		temp=temp.replace("06.10.2017",cl("date")[i].value);
		temp=temp.replace("AZ 786",cl("flight")[i].value);
		temp=temp.replace("XSSCE",cl("fare")[i].value);
		temp=temp.replace("MXP",cl("from")[i].value);
		temp=temp.replace("NRT",cl("to")[i].value);
		temp=temp.replace("ALITALIA",cl("carrier")[i].value);
		temp=temp.replace("X",cl("basis")[i].value);
		
		
		res+=temp;
		
	}
	
	id("text").innerHTML=res;
}


function add()
{
var tr = document.createElement('tr')

tr.innerHTML = '<td><input class="date" size="10" /></td><td><input class="carrier" size="15" /></td><td><input class="flight" size="10" /></td><td><input class="from" size="10" /></td><td><input class="to" size="10" /></td><td><input class="basis" size="10" /></td><td><input class="fare" size="10" /></td><td><input class="total" size="10" /></td><td><input class="qmiles" size="10" /></td>';
id("data").appendChild(tr);


}

