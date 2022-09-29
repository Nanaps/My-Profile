var snowsrc=”snow.gif”
// Configure below to change number of snow to render
var no = 10;
// Configure whether snow should disappear after x seconds (0=never):
var hidesnowtime = 0;
// Configure how much snow should drop down before fading (“windowheight” or “pageheight”)
var snowdistance = “pageheight”;
 
///////////Stop Config//////////////////////////////////
 
var ie4up = (document.all) ? 1 : 0;
var ns6up = (document.getElementById&amp;&amp;!document.all) ? 1 : 0;
function iecompattest(){return (document.compatMode &amp;&amp; document.compatMode!=”BackCompat”)? document.documentElement : document.body}var dx, xp, yp; // coordinate and position variables
var am, stx, sty; // amplitude and step variables
var i, doc_width = 800, doc_height = 600;if (ns6up) {
doc_width = self.innerWidth;
doc_height = self.innerHeight;
} else if (ie4up) {
doc_width = iecompattest().clientWidth;
doc_height = iecompattest().clientHeight;
}
 
dx = new Array();
xp = new Array();
yp = new Array();
am = new Array();
stx = new Array();
sty = new Array();
snowsrc=(snowsrc.indexOf(“dynamicdrive.com”)!=-1)? “snow.gif” : snowsrc
for (i = 0; i &lt; no; ++ i) {
dx = 0; // set coordinate variables
xp = Math.random()*(doc_width-50); // set position variables
yp = Math.random()*doc_height;
am = Math.random()*20; // set amplitude variables
stx = 0.02 + Math.random()/10; // set step variables
sty = 0.7 + Math.random(); // set step variables
 
if (ie4up||ns6up) {
if (i == 0) {
document.write(“&lt;div id=”dot”+ i +”” style=”POSITION: absolute; Z-INDEX: “+ i +”; VISIBILITY: visible; TOP: 15px; LEFT: 15px;”&gt;&lt;a href=”http://dynamicdrive.com”&gt;&lt;img src=’”+snowsrc+”‘ border=”0”&gt;&lt;/a&gt;&lt;/div&gt;”);
} else {
document.write(“&lt;div id=”dot”+ i +”” style=”POSITION: absolute; Z-INDEX: “+ i +”; VISIBILITY: visible; TOP: 15px; LEFT: 15px;”&gt;&lt;img src=’”+snowsrc+”‘ border=”0”&gt;&lt;/div&gt;”);
}
}
}function snowIE_NS6() { // IE and NS6 main animation function
doc_width = ns6up?window.innerWidth-10 : iecompattest().clientWidth-10;
 
doc_height=(window.innerHeight &amp;&amp; snowdistance==”windowheight”)? window.innerHeight : (ie4up &amp;&amp; snowdistance==”windowheight”)? iecompattest().clientHeight : (ie4up &amp;&amp; !window.opera &amp;&amp; snowdistance==”pageheight”)? iecompattest().scrollHeight : iecompattest().offsetHeight;
for (i = 0; i &lt; no; ++ i) { // iterate for every dot
yp += sty;
if (yp &gt; doc_height-50) {
xp = Math.random()*(doc_width-am-30);
yp = 0;
stx = 0.02 + Math.random()/10;
sty = 0.7 + Math.random();
}
dx += stx;
document.getElementById(“dot”+i).style.top=yp+”px”;
document.getElementById(“dot”+i).style.left=xp + am*Math.sin(dx)+”px”;
}
snowtimer=setTimeout(“snowIE_NS6()”, 10);
}function hidesnow(){
if (window.snowtimer) clearTimeout(snowtimer)
for (i=0; i&lt;no; i++) document.getElementById(“dot”+i).style.visibility=”hidden”
}
if (ie4up||ns6up){
snowIE_NS6();
 
if (hidesnowtime&gt;0)
setTimeout(“hidesnow()”, hidesnowtime*1000)
}











