

/*****Selecte*****/
function gets_id(objName){
 if(document.getElementById){
  return eval('document.getElementById("' + objName + '")');
 }else if(document.layers){
  return eval("document.layers['" + objName +"']");
 }else{
  return eval('document.all.' + objName);
 }
}
function clicked(dest)
{
 if(gets_id('hh_'+dest).style.display=='none')
 {
  gets_id('hh_'+dest).style.display='';
 }
 else
 {
  gets_id('hh_'+dest).style.display='none';
 }
}
//赋值
function gets_value(str,dest)
{
	 //document.getElementById("class"+dest).value=str;
gets_id('class_'+dest).value=str;
 gets_id('hh_'+dest).style.display='none';
}