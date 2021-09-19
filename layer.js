/* =================================##==================================
#-----------------------------------#
# ULTRA CODEX MODELING
# AJAX SYS-LAYER LOADER
# AUTOR: 	Z=OM
# EMAIL: 	devops@blockchain-office.de
# VERSION: 	1.0.1:2021
#-----------------------------------#
#==================================================================== */
console.log("NT UCM");
/* INIT */
var xmlHttpObject = false;
if (typeof XMLHttpRequest != 'undefined') { xmlHttpObject = new XMLHttpRequest();}
if (!xmlHttpObject) {
    try { xmlHttpObject = new ActiveXObject("Msxml2.XMLHTTP");}
    catch(e) {
        try { xmlHttpObject = new ActiveXObject("Microsoft.XMLHTTP");}
        catch(e) { xmlHttpObject = null; }
    }
}
/* LAYER */
function LDL(){
  console.log("LD LYR");
  if (xmlHttpObject.readyState == 4){
	  var GetXON = xmlHttpObject.GetXIN;
	  document.getElementById(GetXON).innerHTML = xmlHttpObject.responseText;
  }
}
/* MODUL */
function LM(ID,TAG){
  console.log("LD MDL");
  var ID    = ID;
  var LL    = TAG;
  var sndX  ='w='+ID;

  xmlHttpObject.open('post','',true);
  xmlHttpObject.GetXIN = LL;
  xmlHttpObject.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xmlHttpObject.onreadystatechange = LDL;
  xmlHttpObject.send(sndX);
}
