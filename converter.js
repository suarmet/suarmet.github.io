function id(e){return document.getElementById(e);}
function cl(e){return document.getElementsByClassName(e);}

function generate()
{
	var html=id("html").innerHTML;
    var n=cl("total").length;
    var res="";
    for (var i=0;i<n;i++)
    {
		var temp=html;
		temp=temp.replace("2279",cl("total")[i].value);
		temp=temp.replace("1519",cl("qmiles")[i].value);
		temp=temp.replace("AZ 786 X XSSCE MXP NRT ALITALIA",cl("string")[i].value);
		temp=temp.replace("06.10.2017",cl("date")[i].value);
		
		
		res+=temp;
		
	}
	
	id("text").innerHTML=res;
}


function add()
{
var tr = document.createElement('tr')

tr.innerHTML = '<td><input class="total" size="10" /></td><td><input class="qmiles" size="10" /></td><td><input class="string" size="50" /></td><td><input class="date" size="10" /></td>';
id("data").appendChild(tr)


}

