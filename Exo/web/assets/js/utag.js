//tealium universal tag - utag.58 ut4.0.202010062213, Copyright 2020 Tealium.com Inc. All Rights Reserved.
if(typeof utag.ut=="undefined"){utag.ut={};}
utag.ut.libloader2=function(o,a,b,c,l){a=document;b=a.createElement('script');b.language='javascript';b.type='text/javascript';b.src=o.src;if(o.id){b.id=o.id};if(typeof o.cb=='function'){b.hFlag=0;b.onreadystatechange=function(){if((this.readyState=='complete'||this.readyState=='loaded')&&!b.hFlag){b.hFlag=1;o.cb()}};b.onload=function(){if(!b.hFlag){b.hFlag=1;o.cb()}}}
l=o.loc||'head';c=a.getElementsByTagName(l)[0];if(c){if(l=='script'){c.parentNode.insertBefore(b,c);}else{c.appendChild(b)}
utag.DB("Attach to "+l+": "+o.src)}}
try{(function(id,loader,u){u=utag.o[loader].sender[id]={};u.ev={'view':1};u.initialized=false;u.data={};u.data.google_conversion_id=1034109468;u.data.google_conversion_label="";u.data.pagetype="other";u.data.value="";u.data.google_remarketing_only=true;u.data.base_url="//www.googleadservices.com/pagead/conversion_async.js";u.map={"visitorType":"custom.u11,u34","categorySubscribed":"custom.u13,u36","categoryCarted":"custom.u16,u21","categoryPurchased":"custom.u10,u22"};u.extend=[function(a,b){function addLoadEvent(func){var oldonload=window.onload;if(typeof window.onload!='function'){window.onload=func;}else{window.onload=function(){if(oldonload){oldonload();}
func();};}}
utag.onload_flag=utag.onload_flag||{};if(!utag.onload_flag[id]){if(document.readyState!="complete"){addLoadEvent(function(){utag.loader.cfg[id].load=1;utag.view(utag_data,null,[id]);});return false;}
utag.onload_flag[id]=1;}}];u.send=function(a,b){if(u.ev[a]||typeof u.ev.all!="undefined"){for(c=0;c<u.extend.length;c++){try{d=u.extend[c](a,b);if(d==false)return}catch(e){}};var c,d,e,f,g;g={};u.data.google_custom_params={};for(d in utag.loader.GV(u.map)){if(typeof b[d]!="undefined"&&b[d]!=""){e=u.map[d].split(",");for(f=0;f<e.length;f++){if(e[f].indexOf("custom.")==0){u.data.google_custom_params[e[f].substr(7)]=b[d];}else{u.data[e[f]]=b[d];}}}}
u.data.google_conversion_id=parseInt(u.data.google_conversion_id);g.google_conversion_id=u.data.google_conversion_id;if(u.data.google_conversion_label){g.google_conversion_label=u.data.google_conversion_label;}
if(b._corder){u.data.pagetype="purchase";}
u.data.prod=u.data.prod||(typeof b._cprod!="undefined"?b._cprod.slice(0):[]);u.data.value=u.data.value||b._csubtotal;u.data.google_custom_params.ecomm_prodid=u.data.prod;u.data.google_custom_params.ecomm_pagetype=u.data.pagetype;u.data.google_custom_params.ecomm_value=u.data.value;g.google_custom_params=u.data.google_custom_params;if(u.data.google_remarketing_only){g.google_remarketing_only=u.data.google_remarketing_only;}
utag.ut.is_email=utag.ut.is_email||function isEmail(email){return/^\S+(@|(\%40))\S+\.\S+$/.test(email);}
utag.ut.remove_email_from_qp=utag.ut.remove_email_from_qp||function(str){var before_str='';if(str.indexOf('?')>-1){before_str=str.split('?')[0]+'?';str=str.split('?')[1];}
var qp=str.split('&');for(var i=0;i<qp.length;i++){var key_value=qp[i].split('=');if(key_value.length===2){var key=key_value[0];var value=key_value[1];if(utag.ut.is_email(value)){value='blocked';}
key_value=key+'='+value;}
qp[i]=key_value}
return before_str+qp.join('&');}
g.google_conversion_page_url=utag.ut.remove_email_from_qp(b['dom.url']);g.google_conversion_referrer_url=utag.ut.remove_email_from_qp(b['dom.referrer']);u.gac_callback=function(){window.google_trackConversion(g);}
if(!u.initialized){u.initialized=true;utag.ut.libloader2({src:u.data.base_url,cb:u.gac_callback});}else{u.gac_callback();}}}
utag.o[loader].loader.LOAD(id);})('58','cox.main');}catch(e){}
