if (document.getElementById) {
 document.write('<style type="text/css">.texter {display:none; border-left:white 20px solid; color:#404040; font-family:verdana,arial,helvetica,sans-serif; font-size:9pt} @media print {.texter {display:block;}}</style>') }

 var divNum = new Array("a1","a2","a3");  // at the left you should add a1, a2 etc. for each header you wish to include
                                          // so if you want 4 headers you should add a1, a2, a3, a4 in the format shown
                                          // enclosed in double quotes
function openClose(theID) {
 for(var i=0; i < divNum.length; i++) {
  if (divNum[i] == theID) {
   if (document.getElementById(divNum[i]).style.display == "block") { document.getElementById(divNum[i]).style.display = "none" }
   else { document.getElementById(divNum[i]).style.display = "block" }
  }
  else { document.getElementById(divNum[i]).style.display = "none"; }
 }
}

function openAll() {
 for(var i=0; i < divNum.length; i++) {
   document.getElementById(divNum[i]).style.display = "block";
 }
}

function closeAll() {
 for(var i=0; i < divNum.length; i++) {
   document.getElementById(divNum[i]).style.display = "none";
 }
}