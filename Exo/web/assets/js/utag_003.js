//tealium universal tag - utag.741 ut4.0.202102102329, Copyright 2021 Tealium.com Inc. All Rights Reserved.
try{(function(id,loader){var u={"id":id};utag.o[loader].sender[id]=u;if(utag.ut===undefined){utag.ut={};}
var match=/ut\d\.(\d*)\..*/.exec(utag.cfg.v);if(utag.ut.loader===undefined||!match||parseInt(match[1])<41){u.loader=function(o,a,b,c,l,m){utag.DB(o);a=document;if(o.type=="iframe"){m=a.getElementById(o.id);if(m&&m.tagName=="IFRAME"){b=m;}else{b=a.createElement("iframe");}o.attrs=o.attrs||{};utag.ut.merge(o.attrs,{"height":"1","width":"1","style":"display:none"},0);}else if(o.type=="img"){utag.DB("Attach img: "+o.src);b=new Image();}else{b=a.createElement("script");b.language="javascript";b.type="text/javascript";b.async=1;b.charset="utf-8";}if(o.id){b.id=o.id;}for(l in utag.loader.GV(o.attrs)){b.setAttribute(l,o.attrs[l]);}b.setAttribute("src",o.src);if(typeof o.cb=="function"){if(b.addEventListener){b.addEventListener("load",function(){o.cb();},false);}else{b.onreadystatechange=function(){if(this.readyState=="complete"||this.readyState=="loaded"){this.onreadystatechange=null;o.cb();}};}}if(o.type!="img"&&!m){l=o.loc||"head";c=a.getElementsByTagName(l)[0];if(c){utag.DB("Attach to "+l+": "+o.src);if(l=="script"){c.parentNode.insertBefore(b,c);}else{c.appendChild(b);}}}};}else{u.loader=utag.ut.loader;}
if(utag.ut.typeOf===undefined){u.typeOf=function(e){return({}).toString.call(e).match(/\s([a-zA-Z]+)/)[1].toLowerCase();};}else{u.typeOf=utag.ut.typeOf;}
u.ev={"view":1,"link":1};u.isEmptyObject=function(o,a){for(a in o){if(utag.ut.hasOwn(o,a))return false;}
return true;};u.toBoolean=function(val){val=val||"";return val===true||val.toLowerCase()==="true"||val.toLowerCase()==="on";};u.hasgtagjs=function(){window.gtagRename=window.gtagRename||""||"gtag";if(utag.ut.gtagScriptRequested){return true;}
var i,s=document.getElementsByTagName("script");for(i=0;i<s.length;i++){if(s[i].src&&s[i].src.indexOf("gtag/js")>=0){return true;}}
var data_layer_name=""||"dataLayer";window[data_layer_name]=window[data_layer_name]||[];if(typeof window[window.gtagRename]!=="function"){window[window.gtagRename]=function(){window[data_layer_name].push(arguments);};var cross_track=u.toBoolean("false"),cross_track_domains="cox.com,coxcable.com,theconnectionsproject.com";if(cross_track&&cross_track_domains!==""){window[window.gtagRename]("set","linker",{domains:cross_track_domains.split(","),accept_incoming:true});}
window[window.gtagRename]("js",new Date());}
return false;};u.scriptrequested=u.hasgtagjs();u.o=window[window.gtagRename];u.map_func=function(arr,obj,item){var i=arr.shift();obj[i]=obj[i]||{};if(arr.length>0){u.map_func(arr,obj[i],item);}else{obj[i]=item;}};u.setGlobalProperties=function(data,reset,custom_property){var map={"user_id":{"name":"user_id","type":"exists","reset":true},"page_path":{"name":"page_path","type":"exists","reset":true},"page_title":{"name":"page_title","type":"exists","reset":true},"page_location":{"name":"page_location","type":"exists","reset":false}},prop,g={};if(custom_property&&reset){g[custom_property]="";}
for(prop in utag.loader.GV(map)){if(reset&&map[prop].reset){g[map[prop].name]="";}else{if(map[prop].type==="bool"){if(data[prop]==true||data[prop]==="true"){g[map[prop].name]=true;}}
else if(map[prop].type==="exists"){if(data[prop]){g[map[prop].name]=data[prop];}}}}
if(!u.isEmptyObject(g)){u.o("set",g);}};u.item=function(imp,len){var g={},i,j,key,items=[];if(imp===true){len=len||u.data.impression_id.length||u.data.impression_name.length;for(i=0;i<len;i++){g={};g.id=(u.data.impression_id[i]?u.data.impression_id[i]:"");g.name=(u.data.impression_name[i]?u.data.impression_name[i]:"");g.brand=(u.data.impression_brand[i]?u.data.impression_brand[i]:"");g.variant=(u.data.impression_variant[i]?u.data.impression_variant[i]:"");g.category=(u.data.impression_category[i]?u.data.impression_category[i]:"");g.price=(u.data.impression_price[i]?u.data.impression_price[i]:"");g.list_name=(u.data.impression_list_name?u.data.impression_list_name:"");g.list_position=(u.data.impression_list_position[i]?u.data.impression_list_position[i]:"");items.push(g);}}else{len=len||u.data.product_id.length||u.data.product_name.length;for(i=0;i<len;i++){g={};if(u.data.autofill_params==="true"){for(j=0;j<u.data.product_id.length;j++){u.data.product_name[j]=u.data.product_name[j]||u.data.product_id[j];u.data.product_unit_price[j]=u.data.product_unit_price[j]||"1.00";u.data.product_quantity[j]=u.data.product_quantity[j]||"1";}}
g.id=u.data.product_id[i];g.name=(u.data.product_name[i]?u.data.product_name[i]:"");g.brand=(u.data.product_brand[i]?u.data.product_brand[i]:"");g.category=(u.data.product_category[i]?u.data.product_category[i]:"");g.coupon=(u.data.product_promo_code[i]?u.data.product_promo_code[i]:"");g.price=(u.data.product_unit_price[i]?u.data.product_unit_price[i]:"");g.quantity=(u.data.product_quantity[i]?u.data.product_quantity[i]:"");g.variant=(u.data.product_variant[i]?u.data.product_variant[i]:"");g.list_position=(u.data.product_list_position[i]?u.data.product_list_position[i]:"");g.list_name=(u.data.product_list_name?u.data.product_list_name:"");for(key in u.data.cdm_product_scope){g[key]=u.data.cdm_product_scope[key];}
items.push(g);}}
return items;};u.promotion=function(len){var f,g,promo=[];len=len||u.data.promo_id.length;for(f=0;f<len;f++){g={};g.id=u.data.promo_id[f];g.name=(u.data.promo_name[f]?u.data.promo_name[f]:u.data.promo_id[f]);g.creative_name=(u.data.promo_creative_name[f]?u.data.promo_creative_name[f]:"");g.creative_slot=(u.data.promo_creative_slot[f]?u.data.promo_creative_slot[f]:"");promo.push(g);}
return promo;};u.event_map={"add_to_cart":[{"name":"value"},{"name":"currency"},{"name":"items"}],"add_to_wishlist":[{"name":"value"},{"name":"currency"},{"name":"items"}],"begin_checkout":[{"name":"value"},{"name":"currency"},{"name":"items"},{"name":"coupon"}],"checkout_progress":[{"name":"value"},{"name":"currency"},{"name":"items"},{"name":"coupon"},{"name":"checkout_step"}],"exception":[{"name":"description"},{"name":"fatal"}],"generate_lead":[{"name":"value"},{"name":"currency"},{"name":"transaction_id"}],"login":[{"name":"method"}],"purchase":[{"name":"transaction_id","required":true},{"name":"value"},{"name":"currency"},{"name":"tax"},{"name":"shipping"},{"name":"affiliation"},{"name":"coupon"},{"name":"items"}],"refund":[{"name":"transaction_id","required":true},{"name":"value"},{"name":"currency"},{"name":"tax"},{"name":"shipping"},{"name":"affiliation"},{"name":"coupon"},{"name":"items"}],"remove_from_cart":[{"name":"value"},{"name":"currency"},{"name":"items"}],"screen_view":[{"name":"screen_name"}],"search":[{"name":"search_term"}],"select_content":[{"name":"content_type"},{"name":"items"},{"name":"promotions"}],"set_checkout_option":[{"name":"checkout_step"},{"name":"checkout_option"}],"share":[{"name":"method"},{"name":"content_type"},{"name":"content_id"}],"sign_up":[{"name":"method"}],"timing_complete":[{"name":"name","required":true},{"name":"value","required":true},{"name":"event_category"},{"name":"event_label"}],"view_item":[{"name":"items"}],"view_item_list":[{"name":"items"}],"view_promotion":[{"name":"promotions"}],"view_search_results":[{"name":"search_term"}]};u.std_params={"transaction_id":function(){return u.data.order_id;},"affiliation":function(){return u.data.order_store;},"value":function(event){if(event==="timing_complete"){return u.data.event.value;}
return u.data.order_total;},"currency":function(){return u.data.order_currency;},"tax":function(){return u.data.order_tax;},"shipping":function(){return u.data.order_shipping;},"coupon":function(){return u.data.order_coupon_code;},"description":function(){return u.data.event.description;},"fatal":function(){return u.toBoolean(u.data.event.fatal);},"screen_name":function(){return u.data.event.screen_name;},"method":function(){return u.data.event.method;},"search_term":function(){return u.data.event.search_term;},"content_type":function(){return u.data.event.content_type;},"content_id":function(){return u.data.event.content_id;},"promotions":function(event){if(event==="select_content"&&u.data.event.content_type!=="product"){return u.promotion(1);}else if(event!=="select_content"){return u.promotion();}},"name":function(){return u.data.event.name;},"event_category":function(){return u.data.event.event_category;},"event_label":function(){return u.data.event.event_label;},"checkout_step":function(){return u.data.checkout_step;},"checkout_option":function(){return u.data.checkout_option;},"items":function(event){if(event==="view_item"||event==="add_to_cart"||event==="remove_from_cart"){return u.item(false);}
if(event==="view_item_list"){return u.item(true);}
if(event==="select_content"&&u.data.event.content_type){return u.item(false,1);}
return u.item();}};u.map={"ga_account_id":"tracking_id","pageName":"cdm.dimension1--all","dom.url":"cdm.dimension2--all","pageType":"cdm.dimension3--all,cdm.content_group1--all","pageType:checkout":"begin_checkout","businessUnit":"cdm.dimension4--all,cdm.content_group2--all","responsiveDisplayType":"cdm.dimension5--all","siteID":"cdm.dimension6--all","purchaseStep":"cdm.dimension9--all","purchaseStep:order":"purchase","purchaseStep:checkout":"begin_checkout","_gaVisitorType":"cdm.dimension10--all","visitorServiceability":"cdm.dimension11--all","visitorLoginStatus":"cdm.dimension12--all","cidm":"customer_id,cdm.dimension13--all","zip":"cdm.dimension14--all","_productOfferName":"cdm.dimension15--all","campaign":"cdm.dimension16--all","campaignCodeInternal":"cdm.dimension17--all","_productSubscribed":"cdm.dimension18--all","_productSubscribed2":"cdm.dimension19--all","eventNames:moveServiceForm":"cst","eventNames:userRegister":"cst","eventNames:leadForm":"cst","eventNames:downloadFile":"cst","eventNames:cartAdd":"add_to_cart","ga_event_category":"event.event_category","ga_event_action":"event_name","ga_event_label":"event.event_label","productOffer_add_to_cart":"cdm.metric1--add_to_cart","productOffer_checkout":"cdm.metric2--begin_checkout","productOffer_purchase":"cdm.metric3--purchase","_order_productTotalMRC":"cdm.metric4--purchase","searchTerm":"event.search_term","offerorder_productTotalOfferMRC":"cdm.metric5--purchase","ga_eventNames:cartAdd":"add_to_cart","ga_eventNames:checkout":"begin_checkout","_subscriptionCodes_MarketingID_Customer":"cdm.dimension20--all","_subscriptionCodes_MarketingID_House":"cdm.dimension21--all","_subscriptionCodes_MarketingID":"cdm.dimension22--all","_subscriptionCodes_Has":"cdm.dimension23--all","_subscriptionCodes_Has1":"cdm.dimension24--all","_subscriptionCodes_Has2":"cdm.dimension25--all","_subscriptionCodes_PrismCode":"cdm.dimension26--all","_subscriptionCodes_PrismCode1":"cdm.dimension27--all","_subscriptionCodes_PrismCode2":"cdm.dimension28--all","_subscriptionCodes_Other":"cdm.dimension29--all","_subscriptionCodes_Other1":"cdm.dimension30--all","_subscriptionCodes_Other2":"cdm.dimension31--all","_sm_741_42":"cdm.dimension34-clientId","dom.referrer":"cdm.dimension35--all","_sessionLandingPageURL":"cdm.dimension37--all","_ga_cross_domain":"config.linker.domains"};u.extend=[function(a,b){try{b['_sm_741_42']="clientId";}catch(e){utag.DB(e);}},function(a,b){try{if((typeof b['eventNames']!='undefined'&&b['eventNames'].toString().indexOf('cartAdd')>-1)){try{b['sc_events']=u.addEvent("scAdd")}catch(e){};b['_productMRCCartAdd']=b['productMRC'];b['_addToCartDate']=b['_formattedDate'];b['_cartAdd_productPSU']=b['productPSU'];b['_cartAdd_productMRCSavings']=b['productMRCSavings'];b['_productOfferName']=b['productOfferName'];b['_cartadd_productBundleDiscount']=b['_productBundleDiscountPortion'];b['_cartadd_productNewPSU']=b['_productNewPSU'];b['_cartadd_productUptierPSU']=b['_productUptierPSU'];b['ga_eventNames']='cartAdd'}}catch(e){utag.DB(e);}},function(a,b){try{if(b['purchaseStep']=='checkout'){b['_productMRCCheckout']=b['productMRC'];b['_checkout_productPSU']=b['productPSU'];b['_checkout_productMRCSavings']=b['productMRCSavings'];b['_productOfferName']=b['productOfferName'];b['_checkout_productBundleDiscount']=b['_productBundleDiscountPortion'];b['_checkout_productNewPSU']=b['_productNewPSU'];b['_checkout_productUptierPSU']=b['_productUptierPSU']}}catch(e){utag.DB(e);}},function(a,b){try{if(b['purchaseStep']=='order'||b['purchaseStep']=='gig shop order'){b['_order_productOfferMRC']=b['productOfferMRC'];b['_order_productOfferMRCSavings']=b['productMRCSavings'];b['_order_productOfferMonths']=b['productOfferMonths'];b['_order_productOneTimeCharge']=b['productOneTimeCharge'];b['_order_productInstallChargePro']=b['productInstallChargePro'];b['_order_productInstallChargeSelfDropShip']=b['productInstallChargeSelfDropShip'];b['_order_productInstallChargeSelfPickUp']=b['productInstallChargeSelfPickUp'];b['_order_productInstallChargeProSavings']=b['productInstallChargeProSavings'];b['_order_productInstallChargeSelfDropShipSavings']=b['productInstallChargeSelfDropShipSavings'];b['_order_productInstallChargeSelfPickUpSavings']=b['productInstallChargeSelfPickUpSavings'];b['_order_productOneTimeChargeSavings']=b['productOneTimeChargeSavings'];b['_order_productBundleDiscountMonths']=b['productBundleDiscountMonths'];b['_order_productBundleDiscount']=b['_productBundleDiscountPortion'];b['_order_productMRCSavings']=b['productMRCSavings'];b['_order_productInstallCharge']=b['productInstallCharge'];b['_order_productPSU']=b['productPSU'];b['_order_productInstallChargeSavings']=b['productInstallChargeSavings'];b['_productOfferName']=b['productOfferName'];b['_order_productDepositAmount']=b['_productDepositAmountPortion'];b['_order_productTotalDueNowPortion']=b['_productTotalDueNowPortion'];b['_order_productNewPSU']=b['_productNewPSU'];b['_order_productUptierPSU']=b['_productUptierPSU'];b['productTotalOfferMRC_purchase']=b['productTotalOfferMRC'];b['_order_productTotalMRC']=b['productTotalMRC']}}catch(e){utag.DB(e);}},function(a,b,c,d){try{if(1){c=[b['dom.domain'],b['dom.pathname']];b['url_path']=c.join('/')}}catch(e){utag.DB(e);}},function(a,b){try{if((typeof b['eventNames']!='undefined'&&b['eventNames'].toString().toLowerCase().indexOf('downloadFile'.toLowerCase())>-1)){b['ga_event_category']='download';b['ga_event_action']='file download'}}catch(e){utag.DB(e);}},function(a,b){try{if((typeof b['eventNames']!='undefined'&&b['eventNames'].toString().toLowerCase().indexOf('moveServiceForm'.toLowerCase())>-1)){b['ga_event_category']='transfer lead form';b['ga_event_action']='form submit';b['ga_event_label']=b['dom.url']}}catch(e){utag.DB(e);}},function(a,b){try{if((typeof b['eventNames']!='undefined'&&b['eventNames'].toString().toLowerCase().indexOf('userRegister'.toLowerCase())>-1)){b['ga_event_category']='User Registration';b['ga_event_action']='registration'}}catch(e){utag.DB(e);}},function(a,b){try{if((typeof b['eventNames']!='undefined'&&b['eventNames'].toString().toLowerCase().indexOf('leadForm'.toLowerCase())>-1)){b['ga_event_category']='Business Lead Form';b['ga_event_action']='form submit';b['ga_event_label']=b['dom.url']}}catch(e){utag.DB(e);}},function(a,b){try{if((typeof b['_productOfferName']!='undefined'&&typeof b['_productOfferName']!='undefined'&&b['_productOfferName']!=''&&typeof b['eventNames']!='undefined'&&b['eventNames'].toString().indexOf('cartAdd')>-1)||(typeof b['_productOfferName']!='undefined'&&typeof b['_productOfferName']!='undefined'&&b['_productOfferName']!=''&&typeof b['ga_eventNames']!='undefined'&&b['ga_eventNames'].toString().toLowerCase().indexOf('cartAdd'.toLowerCase())>-1)){b['productOffer_add_to_cart']='1'}}catch(e){utag.DB(e);}},function(a,b){try{if((typeof b['ga_eventNames']!='undefined'&&b['ga_eventNames'].toString().toLowerCase().indexOf('checkout'.toLowerCase())>-1&&typeof b['_productOfferName']!='undefined'&&typeof b['_productOfferName']!='undefined'&&b['_productOfferName']!='')||(typeof b['_productOfferName']!='undefined'&&typeof b['_productOfferName']!='undefined'&&b['_productOfferName']!=''&&typeof b['eventNames']!='undefined'&&b['eventNames'].toString().indexOf('checkout')>-1)||(typeof b['_productOfferName']!='undefined'&&typeof b['_productOfferName']!='undefined'&&b['_productOfferName']!=''&&typeof b['purchaseStep']!='undefined'&&b['purchaseStep'].toString().indexOf('checkout')>-1)){b['productOffer_checkout']='1'}}catch(e){utag.DB(e);}},function(a,b){try{if((typeof b['purchaseStep']!='undefined'&&b['purchaseStep'].toString().indexOf('order')>-1&&typeof b['_productOfferName']!='undefined'&&typeof b['_productOfferName']!='undefined'&&b['_productOfferName']!='')||(typeof b['ga_eventNames']!='undefined'&&b['ga_eventNames'].toString().toLowerCase().indexOf('purchase'.toLowerCase())>-1&&typeof b['_productOfferName']!='undefined'&&typeof b['_productOfferName']!='undefined'&&b['_productOfferName']!='')){b['productOffer_purchase']='1';b['offerorder_productTotalOfferMRC']=b['productTotalOfferMRC']}}catch(e){utag.DB(e);}},function(a,b,c,d,e,f,g){if(1){d=b['dom.domain'];if(typeof d=='undefined')return;c=[{'webteam.cci.cox.com':'UA-139134705-4'},{'preprod':'UA-139134705-4'},{'preview':'UA-139134705-4'},{'qa':'UA-139134705-4'},{'local':'UA-139134705-4'},{'dev':'UA-139134705-4'},{'mobile.store.cox.com':'UA-139134705-3'},{'coxvalue.com':'UA-139134705-2'},{'internet.cox.com':'UA-139134705-1'},{'cox-ondemand.com':'UA-139134705-1'},{'coxcable.com':'UA-139134705-1'},{'cox.com':'UA-139134705-1'},{'coxbusiness.com':'UA-139134705-7'},{'coxblue.com':'UA-139134705-7'},{'theconnectionsproject.com':'UA-139134705-1'}];var m=false;for(e=0;e<c.length;e++){for(f in utag.loader.GV(c[e])){if(d.toString().indexOf(f)>-1){b['ga_account_id']=c[e][f];m=true};};if(m)break};if(!m)b['ga_account_id']='UA-139134705-4';}},function(a,b){try{if((typeof b['visitorType']!='undefined'&&typeof b['visitorType']!='undefined'&&b['visitorType']!='')){b['_gaVisitorType']=b['visitorType']}}catch(e){utag.DB(e);}},function(a,b){try{if(typeof b['_gaVisitorType']=='undefined'||typeof b['_gaVisitorType']!='undefined'&&b['_gaVisitorType']==''){b['_gaVisitorType']='unknown'}}catch(e){utag.DB(e);}},function(a,b){try{if(1){data=b['productSubscribed'];if(data.join(',').length>150){temp=[];chunked=false;var chunk=150;for(var i=0;i<data.length;i++){temp.push(data[i])
if(temp.join(',').length>chunk&&!chunked){b['_productSubscribed']=temp.slice(0,-1).join(',')
val=temp.slice(-1);temp=[]
temp.push(val)
chunked=true;}}
b['_productSubscribed2']=temp.join(',')}else{b['_productSubscribed']=data.join(',')
b['_productSubscribed2']=""}}}catch(e){utag.DB(e)}},function(a,b){try{if(1){if(typeof utag.data.serviceableCodes!="undefined"&&utag.data.serviceableCodes!==""){data=utag.data.serviceableCodes.split(',');param_lookup={"cmid":"_subscriptionCodes_MarketingID_Customer","mid":"_subscriptionCodes_MarketingID","hmid":"_subscriptionCodes_MarketingID_House","psm":"_subscriptionCodes_PrismCode","has":"_subscriptionCodes_Has","other":"_subscriptionCodes_Other"}
values={};values.cmid=[];values.hmid=[];values.mid=[];values.psm=[]
values.has=[];values.other=[];for(var i=0;i<data.length;i++){if(data[i].indexOf('CUSTOMER_MARKETINGID_')>-1){values.cmid.push(data[i].split('CUSTOMER_MARKETINGID_')[1])}else if(data[i].indexOf('HOUSE_MARKETINGID_')>-1){values.hmid.push(data[i].split('HOUSE_MARKETINGID_')[1])}else if(data[i].indexOf('MARKETINGID_')>-1){values.mid.push(data[i].split('MARKETINGID_')[1])}else if(data[i].indexOf('PRISMCODE_')>-1){values.psm.push(data[i].split('PRISMCODE_')[1])}else if(data[i].indexOf('HAS_')>-1){values.has.push(data[i].split('HAS_')[1])}else{values.other.push(data[i])}}
for(var x in values){chunks={};index=0
temp=[];var chunk=150;if(values[x].join(',').length>chunk){array_size=values[x].length;for(var i=0;i<values[x].length;i++){temp.push(values[x][i])
if(temp.join(',').length>chunk){b[param_lookup[x]+(index<1?"":index)]=temp.slice(0,-1).join(',')
val=temp.slice(-1);temp=[]
index++
temp.push(val)}else if(array_size==i+1){b[param_lookup[x]+(index<1?"":index)]=temp.join(',')}}}else{b[param_lookup[x]]=values[x].join(',');}}}}}catch(e){utag.DB(e)}},function(a,b){try{if((b['dom.domain'].toString().toLowerCase().indexOf('mobile.store.cox.com'.toLowerCase())>-1&&typeof b['productCarted']!='undefined'&&typeof b['productCarted']!='undefined'&&b['productCarted']!=''&&b['dom.pathname'].toString().toLowerCase().indexOf('configure.html'.toLowerCase())>-1)||(b['dom.domain'].toString().toLowerCase().indexOf('www.coxvalue.com'.toLowerCase())>-1&&typeof b['productCarted']!='undefined'&&typeof b['productCarted']!='undefined'&&b['productCarted']!=''&&b['dom.pathname'].toString().toLowerCase().indexOf('configure.html'.toLowerCase())>-1)){b['_productMRCCartAdd']=b['productMRC'];b['_addToCartDate']=b['_formattedDate'];b['_cartAdd_productPSU']=b['productPSU'];b['_cartAdd_productMRCSavings']=b['productMRCSavings'];b['_productOfferName']=b['productOfferName'];b['_cartadd_productBundleDiscount']=b['_productBundleDiscountPortion'];b['_cartadd_productNewPSU']=b['_productNewPSU'];b['_cartadd_productUptierPSU']=b['_productUptierPSU'];b['ga_eventNames']='cartAdd'}}catch(e){utag.DB(e);}},function(a,b){try{if((b['dom.domain'].toString().toLowerCase().indexOf('mobile.store.cox.com'.toLowerCase())>-1&&typeof b['productCarted']!='undefined'&&typeof b['productCarted']!='undefined'&&b['productCarted']!=''&&b['dom.pathname'].toString().toLowerCase().indexOf('checkout.html'.toLowerCase())>-1)||(b['dom.domain'].toString().toLowerCase().indexOf('www.coxvalue.com'.toLowerCase())>-1&&typeof b['productCarted']!='undefined'&&typeof b['productCarted']!='undefined'&&b['productCarted']!=''&&b['dom.pathname'].toString().toLowerCase().indexOf('checkout.html'.toLowerCase())>-1)){b['_productMRCCheckout']=b['productMRC'];b['_checkout_productPSU']=b['productPSU'];b['_checkout_productMRCSavings']=b['productMRCSavings'];b['_productOfferName']=b['productOfferName'];b['_checkout_productBundleDiscount']=b['_productBundleDiscountPortion'];b['_checkout_productNewPSU']=b['_productNewPSU'];b['_checkout_productUptierPSU']=b['_productUptierPSU'];b['ga_eventNames']='checkout'}}catch(e){utag.DB(e);}},function(a,b){try{if((typeof b['purchaseID']!='undefined'&&typeof b['purchaseID']!='undefined'&&b['purchaseID']!=''&&b['dom.domain'].toString().toLowerCase().indexOf('coxvalue.com'.toLowerCase())>-1&&b['dom.pathname'].toString().toLowerCase().indexOf('confirmation.html'.toLowerCase())>-1)||(typeof b['purchaseID']!='undefined'&&typeof b['purchaseID']!='undefined'&&b['purchaseID']!=''&&b['dom.domain'].toString().toLowerCase().indexOf('mobile.store.cox.com'.toLowerCase())>-1&&b['dom.pathname'].toString().toLowerCase().indexOf('confirmation.html'.toLowerCase())>-1)){b['_order_productOfferMRC']=b['productOfferMRC'];b['_order_productOfferMRCSavings']=b['productMRCSavings'];b['_order_productOfferMonths']=b['productOfferMonths'];b['_order_productOneTimeCharge']=b['productOneTimeCharge'];b['_order_productInstallChargePro']=b['productInstallChargePro'];b['_order_productInstallChargeSelfDropShip']=b['productInstallChargeSelfDropShip'];b['_order_productInstallChargeSelfPickUp']=b['productInstallChargeSelfPickUp'];b['_order_productInstallChargeProSavings']=b['productInstallChargeProSavings'];b['_order_productInstallChargeSelfDropShipSavings']=b['productInstallChargeSelfDropShipSavings'];b['_order_productInstallChargeSelfPickUpSavings']=b['productInstallChargeSelfPickUpSavings'];b['_order_productOneTimeChargeSavings']=b['productOneTimeChargeSavings'];b['_order_productBundleDiscountMonths']=b['productBundleDiscountMonths'];b['_order_productBundleDiscount']=b['_productBundleDiscountPortion'];b['_order_productMRCSavings']=b['productMRCSavings'];b['_order_productInstallCharge']=b['productInstallCharge'];b['_order_productPSU']=b['productPSU'];b['_order_productInstallChargeSavings']=b['productInstallChargeSavings'];b['_productOfferName']=b['productOfferName'];b['_order_productDepositAmount']=b['_productDepositAmountPortion'];b['_order_productTotalDueNowPortion']=b['_productTotalDueNowPortion'];b['_order_productNewPSU']=b['_productNewPSU'];b['_order_productUptierPSU']=b['_productUptierPSU'];b['productTotalOfferMRC_purchase']=b['productTotalOfferMRC'];b['_order_productTotalMRC']=b['productTotalMRC'];b['ga_eventNames']='purchase'}}catch(e){utag.DB(e);}},function(a,b){try{if((typeof b['eventNames']!='undefined'&&b['eventNames'].toString().indexOf('cartSave')>-1)){b['ga_event_category']='ecommerce';b['ga_event_action']='cart_save'}}catch(e){utag.DB(e);}},function(a,b){try{if(/^\/business\//i.test(b['dom.pathname'])){b['ga_account_id']='UA-139134705-7'}}catch(e){utag.DB(e);}},function(a,b){try{if(/^\/business\//i.test(b['dom.pathname'])||b['dom.domain'].toString().indexOf('coxbusiness.com')>-1||b['dom.domain'].toString().indexOf('coxblue.com')>-1){try{b['_ga_cross_domain']=['cox.com','coxbusiness.com','coxblue.com']}catch(e){}}}catch(e){utag.DB(e);}},function(a,b){try{if((typeof b['ut.event']!='undefined'&&b['ut.event'].toString().toLowerCase()=='view'.toLowerCase())){setTimeout(function(){if((typeof b['ut.event']!='undefined'&&b['ut.event'].toString().toLowerCase()=='view'.toLowerCase())){if((typeof b['visitorType']!='undefined'&&typeof b['visitorType']!='undefined'&&b['visitorType']!='')){gtag('event',b.visitorType,{'event_category':'visitor type','event_label':b["dom.url"]});}else if(typeof b['visitorType']=='undefined'||typeof b['visitorType']!='undefined'&&b['visitorType']==''){gtag('event','unknown',{'event_category':'visitor type','event_label':b["dom.url"]});}}},1500);}}catch(e){utag.DB(e)}}];u.send=function(a,b){if(u.ev[a]||u.ev.all!==undefined){utag.DB("send:741");utag.DB(b);var c,d,e,f,h,i,cdm,cdm_event_flag,event_param,prop;u.data={"qsp_delim":"&","kvp_delim":"=","base_url":"https://www.googletagmanager.com/gtag/js?id=##utag_tracking_id##","tracking_id":"UA-139134705-1","cross_track":"false","cross_track_domains":"cox.com,coxcable.com,theconnectionsproject.com","allow_display_features":"true","screen_view":"false","anonymize_ip":"false","clear_global_vars":"false","optimize_id":"","use_amp_client_id":"false","data_layer_name":"","checkout_step":"","checkout_option":"","product_action_list":"","product_list_position":"","product_variant":[],"impression_id":[],"impression_name":[],"impression_price":[],"impression_category":[],"impression_brand":[],"impression_variant":[],"impression_list_name":[],"impression_list_position":[],"promo_id":[],"promo_name":[],"promo_creative_name":[],"promo_creative_slot":[],"product_id":[],"product_name":[],"product_sku":[],"product_brand":[],"product_category":[],"product_subcategory":[],"product_quantity":[],"product_unit_price":[],"product_discount":[],"product_promo_code":[],"cdm_product_scope":{},"page_view_event_data":{},"set":{},"config":{"custom_map":{}},"event":{},"items":[]};for(c=0;c<u.extend.length;c++){try{d=u.extend[c](a,b);if(d==false)return}catch(e){}};utag.DB("send:741:EXTENSIONS");utag.DB(b);for(d in utag.loader.GV(u.map)){if(b[d]!==undefined&&b[d]!==""){e=u.map[d].split(",");for(f=0;f<e.length;f++){u.map_func(e[f].split("."),u.data,b[d]);}}else{h=d.split(":");if(h.length===2&&b[h[0]]===h[1]){if(u.map[d]){u.data.event_name=u.map[d];}}}}
utag.DB("send:741:MAPPINGS");utag.DB(u.data);u.data.order_id=u.data.order_id||b._corder||"";u.data.order_total=u.data.order_total||b._ctotal||"";u.data.order_subtotal=u.data.order_subtotal||b._csubtotal||"";u.data.order_shipping=u.data.order_shipping||b._cship||"";u.data.order_tax=u.data.order_tax||b._ctax||"";u.data.order_store=u.data.order_store||b._cstore||"";u.data.order_currency=u.data.order_currency||b._ccurrency||"";u.data.order_coupon_code=u.data.order_coupon_code||b._cpromo||"";u.data.customer_id=u.data.customer_id||b._ccustid||"";if(u.data.product_id.length===0&&b._cprod!==undefined){u.data.product_id=b._cprod.slice(0);}
if(u.data.product_name.length===0&&b._cprodname!==undefined){u.data.product_name=b._cprodname.slice(0);}
if(u.data.product_sku.length===0&&b._csku!==undefined){u.data.product_sku=b._csku.slice(0);}
if(u.data.product_brand.length===0&&b._cbrand!==undefined){u.data.product_brand=b._cbrand.slice(0);}
if(u.data.product_category.length===0&&b._ccat!==undefined){u.data.product_category=b._ccat.slice(0);}
if(u.data.product_subcategory.length===0&&b._ccat2!==undefined){u.data.product_subcategory=b._ccat2.slice(0);}
if(u.data.product_quantity.length===0&&b._cquan!==undefined){u.data.product_quantity=b._cquan.slice(0);}
if(u.data.product_unit_price.length===0&&b._cprice!==undefined){u.data.product_unit_price=b._cprice.slice(0);}
if(u.typeOf(u.data.tracking_id)==="string"&&u.data.tracking_id!==""){u.data.tracking_id=u.data.tracking_id.replace(/\s/g,"").split(",");}
if(!u.data.tracking_id){utag.DB(u.id+": Tag not fired: Required attribute not populated");return;}
for(i=0;i<u.data.tracking_id.length;i++){if(!/^[a-zA-Z]{2}-/.test(u.data.tracking_id[i])){u.data.tracking_id[i]="UA-"+u.data.tracking_id[i];}}
u.data.base_url=u.data.base_url.replace("##utag_tracking_id##",u.data.tracking_id[0]);if(u.data.data_layer_name){u.data.base_url=u.data.base_url+"&l="+u.data.data_layer_name;}
u.data.event.send_to=u.data.event.send_to||u.data.tracking_id;if(u.data.customer_id){u.data.config.user_id=u.data.customer_id;}
if(u.toBoolean(u.data.clear_global_vars)){u.setGlobalProperties(u.data.config,true);for(prop in utag.loader.GV(u.data.set)){u.setGlobalProperties(u.data.set,true,prop);}}
u.setGlobalProperties(u.data.config,false);u.setGlobalProperties(u.data.set,false);if(!u.data.event_name&&u.data.order_id){u.data.event_name="purchase";}
cdm=[];for(d in u.data.cdm){cdm_event_flag=false;cdm=d.split("-");cdm[0]=cdm[0].replace("contentGroup","content_group");if(cdm[0].indexOf("content_group")>=0){u.data.config[cdm[0]]=u.data.cdm[d];}else{cdm[1]=cdm[1]||cdm[0];u.data.config.custom_map[cdm[0]]=cdm[1];if(cdm[2]==="all"){u.data.config[cdm[1]]=u.data.cdm[d];}else if(cdm[2]==="link"&&a==="link"){cdm_event_flag=true;}else if(cdm[2]==="ecom"&&u.data.event_name&&u.data.event_name.match(/add_payment_info|add_to_cart|add_to_wishlist|begin_checkout|checkout_progress|purchase|refund|remove_from_cart|product_click|promotion_click|set_checkout_option|view_item|view_item_list|view_promotion/)){cdm_event_flag=true;}else if(cdm[2]==="prod"){u.data.cdm_product_scope[cdm[0]]=u.data.cdm[d];}else if(cdm[2]==="page_view"){u.data.page_view_event_data[cdm[0]]=u.data.cdm[d];}else if(u.data.event_name===cdm[2]){cdm_event_flag=true;}
if(cdm_event_flag){u.data.event[cdm[1]]=u.data.cdm[d];}}}
if(u.toBoolean(u.data.anonymize_ip)&&u.data.config.anonymize_ip===undefined){u.data.config.anonymize_ip=true;}
if(u.toBoolean(u.data.cross_track)&&u.data.config.linker===undefined){u.data.config.linker={"accept_incoming":u.toBoolean(u.data.cross_track),"domains":u.data.cross_track_domains};}
if(u.data.allow_display_features==="false"&&u.data.config.allow_display_features===undefined){u.data.config.allow_display_features=false;}
if(u.toBoolean(u.data.enhanced_link_attribution)&&!u.data.config.link_attribution){u.data.config.link_attribution=true;}
if(u.data.optimize_id&&u.data.config.optimize_id===undefined){u.data.config.optimize_id=u.data.optimize_id;}
if(u.data.use_amp_client_id&&u.data.config.use_amp_client_id===undefined){u.data.config.use_amp_client_id=u.data.use_amp_client_id;}
u.data.config.send_page_view=false;if(a==="view"){for(i=0;i<u.data.tracking_id.length;i++){u.o("config",u.data.tracking_id[i],u.data.config);}
if(u.toBoolean(u.data.screen_view)){u.o("event","screen_view",u.data.event);}else{u.o("event","page_view",u.data.page_view_event_data);}}
if(u.data.event_name){if(u.data.event_name==="product_click"&&a==="link"){u.data.event.content_type="product";u.data.event_name="select_content";}else if(u.data.event_name==="promotion_click"&&a==="link"){u.data.event_name="select_content";}
if(u.data.event.non_interaction){u.data.event.non_interaction=true;}
if(u.event_map[u.data.event_name]){for(i=0;i<u.event_map[u.data.event_name].length;i++){event_param=u.event_map[u.data.event_name][i];u.data.event[event_param.name]=u.std_params[event_param.name](u.data.event_name);if(u.data.event[event_param.name]===undefined&&event_param.required){utag.DB(u.id+": Event: "+u.data.event_name+": Required attribute not populated");}}}
if(u.data.event_name!=="product_click"&&u.data.event_name!=="promotion_click"){u.o("event",u.data.event_name,u.data.event);}}
if(!u.hasgtagjs()){u.scriptrequested=true;utag.ut.gtagScriptRequested=true;u.loader({"type":"script","src":u.data.base_url,"cb":null,"loc":"script","id":"utag_741","attrs":{}});}
utag.DB("send:741:COMPLETE");}};utag.o[loader].loader.LOAD(id);}("741","cox.main"));}catch(error){utag.DB(error);}