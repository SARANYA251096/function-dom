var L1=label("label","for","firstname","Firstname");
var br1=linebreaker("br");
var I1=inputelement("input","type","first","id","firstname");
var br2=linebreaker("br");
var L2=label("label","for","middlename","Middlename");
var br3=linebreaker("br");
var I2=inputelement("input","type","middle","id","middlename");
var br4=linebreaker("br");
var L3=label("label","for","lastname","Lastname");
var br5=linebreaker("br");
var I3=inputelement("input","type","last","id","lastname");
var br6=linebreaker("br");
var L4=label("label","for","email","Email");
var br7=linebreaker("br");
var I4=inputelement("input","type","email","id","email");
var br8=linebreaker("br");
var L5=label("label","for","contact","Contact");
var br9=linebreaker("br");
var I5=inputelement("input","type","contact","id","contact");
var br10=linebreaker("br");
document.body.append(L1,br1,I1,br2,L2,br3,I2,br4,L3,br5,I3,br6,L4,br7,I4,br8,L5,br9,I5);


function label(tagname,attrname,attrvalue,content){
var ele=document.createElement(tagname);
 ele.setAttribute(attrname,attrvalue);
 ele.innerHTML=content;
 return ele;
 
}
function linebreaker(element){
var ele=document.createElement(element);
return ele;
}

function inputelement(tagname,attrname,attrvalue,attrname1,attrvalue1){
var ele=document.createElement(tagname);
ele.setAttribute(attrname,attrvalue);
ele.setAttribute(attrname1,attrvalue1);
return ele;

}