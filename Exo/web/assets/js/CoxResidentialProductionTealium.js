var _bcvma = _bcvma || [];
var _bcct = _bcct || [];

try {

    var lmiAccountID = '807690351445127928';
    var lmiWebsiteID = '801950397597933140';
    var lmiConversionID = '801950292458400505';

    _bcvma.push(["setAccountID", lmiAccountID]);
    _bcvma.push(["setParameter", "WebsiteDefID", lmiWebsiteID]);

    /*
    
    I believe these are all undefined, so empty strings
    
    _bcvma.push(["setParameter", "VisitName", u.VisitName || ""]);
    _bcvma.push(["setParameter", "VisitPhone", u.VisitPhone || ""]);
    _bcvma.push(["setParameter", "VisitEmail", u.VisitEmail || ""]);
    _bcvma.push(["setParameter", "VisitRef", u.VisitRef || ""]);
    _bcvma.push(["setParameter", "VisitInfo", u.VisitInfo || ""]);
    _bcvma.push(["setParameter", "CustomUrl", u.CustomUrl || ""]);
    _bcvma.push(["setParameter", "WindowParameters", u.WindowParameters || ""]);
    */

    _bcvma.push(["setParameter", "VisitName", ""]);
    _bcvma.push(["setParameter", "VisitPhone", ""]);
    _bcvma.push(["setParameter", "VisitEmail", ""]);
    _bcvma.push(["setParameter", "VisitRef", ""]);
    _bcvma.push(["setParameter", "VisitInfo", ""]);
    _bcvma.push(["setParameter", "CustomUrl", ""]);
    _bcvma.push(["setParameter", "WindowParameters", ""]);
    _bcvma.push(["setParameter", "IframeUrl", "https://www.cox.com/content/dam/cox/common/cookie-jar.html"]);
    _bcvma.push(["pageViewed"]);



    // Bold Acquire Trigger Variables
    var customerType = utag_data.visitorType ? utag_data.visitorType : 'N/A';
    var noncustomerUDO = customerType.indexOf("noncustomer");

    var siteID = utag_data.siteID ? utag_data.siteID : 'N/A';
    var easyPay = utag_data.cEasyPayEnroll ? utag_data.cEasyPayEnroll : 'N/A';
    var flowName = utag_data.flowName ? utag_data.flowName : 'N/A';
    var flowProgram = utag_data.flowProgram ? utag_data.flowProgram : 'N/A';

    var customerSegment = utag_data.customerSegments ? utag_data.customerSegments : 'N/A';
    var CRO = customerSegment.indexOf("_CRO");
    var PendingDisco = customerSegment.indexOf("PENDING_DISCO");
    var CompFiber = customerSegment.indexOf("_COMPETITIVE");

    var TECodes = utag_data.serviceableCodes ? utag_data.serviceableCodes : 'N/A';
    //updated QuickConnect and CaresAct for net revene changes to reflect on reporting portal
    var QuickConnect = TECodes.indexOf("SEGMENTED_QC");
    var CaresAct = TECodes.indexOf("CARE"); 

    
    var cartTotal = utag_data.cartTotal ? utag_data.cartTotal : 'N/A';

    _bcvma.push(["setExtendedVisitorInfo", "siteID", siteID]);
    _bcvma.push(["setExtendedVisitorInfo", "easyPay", easyPay]);
    _bcvma.push(["setExtendedVisitorInfo", "flowName", flowName]);
    _bcvma.push(["setExtendedVisitorInfo", "flowProgram", flowProgram]);


    if (noncustomerUDO >= 0) {
        _bcvma.push(["setExtendedVisitorInfo", "noncustomerUDO", "true"]);
    }

    if (CRO >= 0) {
        _bcvma.push(["setExtendedVisitorInfo", "CRO", "true"]);
    }

    if (PendingDisco >= 0) {
        _bcvma.push(["setExtendedVisitorInfo", "PendingDisco", "true"]);
    }

    if (CompFiber >= 0) {
        _bcvma.push(["setExtendedVisitorInfo", "CompFiber", "true"]);
    }

    if (QuickConnect >= 0) {
        _bcvma.push(["setExtendedVisitorInfo", "QuickConnect", "true"]);
    }

    if (CaresAct >= 0) {
        _bcvma.push(["setExtendedVisitorInfo", "CaresAct", "true"]);
    }
    if (cartTotal >=0) {
  		_bcvma.push(["setExtendedVisitorInfo","cart", "true"]);
	}
    // End Bold Acquire Trigger Variables



    function applyWidgetCustomization() {
        window.nanorep = window.nanorep || {};
        nanorep.floatingWidget = nanorep.floatingWidget || {};
        nanorep.floatingWidget._calls = nanorep.floatingWidget._calls || [];
        nanorep.floatingWidget._calls.push(['init', function() {
            this.setStorageOptions({
                type: 'persistent',
                crossDomainHelper: 'https://coxtest.nanorep.co/web/assets/_storage.html'
            });
        }]);

        nanorep.floatingWidget._calls.push(['load', function() {
            nanorep.floatingWidget.on('$destroy', destroyHandler);
        }]);

        var destroyHandler = function() {
            nanorep.floatingWidget.off('$destroy', destroyHandler);
            applyWidgetCustomization();
        };
    }
    applyWidgetCustomization();

    /*
    
    
    Meta Tag Identification
    
    
    */


    // if meta tags are on the page, use those
    // document.head.querySelector("[name~=chat][content]").content;
    // <meta name="chat:float" content="sales" />
    // <meta name="chat:static" content="lpcarechat-contact|801942947109059451"/>

    // this is a flag to determine if we end up showing the floating chat
    // added only because we need to know if we add floating chat later using
    // an override - we don't want to add the JS function for triggering
    // chat via chat-trigger css class if the floating button isn't available on the page
    var floatingChatDisplay = false;


    // set up some definitions
    // can't bubble these into Tealium's interface :(

    var salesFloatingMobileID = "801961744363127947";
    var salesFloatingDesktopID = "801942939373257308";

    var careFloatingMobileID = "801961745492728620";
    var careFloatingDesktopID = "801961718445100954";
                
    // override if spanish:
    if (window.location.hostname === "espanol.cox.com") {
                
        var salesFloatingMobileID = "802045224996597663"; // spanish!
        var salesFloatingDesktopID = "802045225814162173"; // spanish!

        var careFloatingMobileID = "802045222725266533"; // spanish!
        var careFloatingDesktopID = "802045224153859061"; // spanish!
    }


    var chatFloating = document.querySelector('meta[name="chat:float"]') ? document.querySelector('meta[name="chat:float"]').content : false;
    var chatStatic = document.querySelector('meta[name="chat:static"]') ? document.querySelector('meta[name="chat:static"]').content : false;

    // if we found a chat:float meta tag, determine if it's sales or care and apply based on mobile vs desktop
    if (chatFloating == "sales") {
        floatingChatDisplay = true; // we will show floating chat
        if (utag.data.responsiveDisplayType == 'mobile') {
            _bcvma.push(["addFloat", {
                type: "chat",
                id: salesFloatingMobileID
            }]);
        } else {
            _bcvma.push(["addFloat", {
                type: "chat",
                id: salesFloatingDesktopID
            }]);
        }
    } else if (chatFloating == "care") {
        floatingChatDisplay = true; // we will show floating chat
        if (utag.data.responsiveDisplayType == 'mobile') {
            _bcvma.push(["addFloat", {
                type: "chat",
                id: careFloatingMobileID
            }]);
        } else {
            _bcvma.push(["addFloat", {
                type: "chat",
                id: careFloatingDesktopID
            }]);
        }
    }




    // now, if we found a static chat tag, we need to parse the values out (comma delimited string of pipe delimited strings)
    // eg: <meta name="chat:static" content="lpcarechat-contact|801942947109059451,lpcarechat-contact|801942947109059451"/>
    // the comma separates the two buttons, the pipe separates each button DIV ID with it's respective LMI chat id

    if (chatStatic !== false) {
        // split the value of the chat:static tag on the comma
        var staticTags = chatStatic.split(",");
        for (var i = 0; i < staticTags.length; i++) {
            // now split on the pipe: first is the targeted div, second is the bd id
            var divID = staticTags[i].split("|")[0];
            var bdID = staticTags[i].split("|")[1];
            _bcvma.push(["addStatic", {
                type: "chat",
                bdid: bdID,
                id: divID
            }]);
        }
    }




    /*
    
    Overrides go here
    
    */


    // these do not have meta tags added... yet...             
    if (
        window.location.href.indexOf("/activate") > -1 ||
        window.location.href.indexOf("/ibill") > -1 ||
        window.location.href.indexOf("/install") > -1 ||
        window.location.href.indexOf("/internet/mywifi") > -1 ||
        window.location.href.indexOf("/resaccount") > -1 ||
        window.location.href.indexOf("/selfinstall") > -1
    ) {

        floatingChatDisplay = true; // we will show floating chat

        if (utag.data.responsiveDisplayType == 'mobile') {
            _bcvma.push(["addFloat", {
                type: "chat",
                id: careFloatingMobileID
            }]);
        } else {
            _bcvma.push(["addFloat", {
                type: "chat",
                id: careFloatingDesktopID
            }]);
        }
    }

    // fix for broken ecom pages
    if (
        window.location.href.indexOf("/residential-shop/") > -1
    ) {

        floatingChatDisplay = true; // we will show floating chat

        if (utag.data.responsiveDisplayType == 'mobile') {
            _bcvma.push(["addFloat", {
                type: "chat",
                id: salesFloatingMobileID
            }]);
        } else {
            _bcvma.push(["addFloat", {
                type: "chat",
                id: salesFloatingDesktopID
            }]);
        }
    }

    /*
                 Sample static button override
                 if (window.location.href.indexOf("craig-chat-test") > -1 ||  window.location.href.indexOf("/residential/contactus.html") > -1 || window.location.href.indexOf("/residential/flex-2/flex/pages/test/contactus.html") > -1) {
                    
                    floatingChatDisplay = true; // we will show floating chat
                    _bcvma.push(["addStatic", {
                        type: "chat",
                        bdid: "25287016589062383",
                         id: 'lpcarechat-contact'
                     }]);
                }
                */


    // custom code to apply ability to add the class
    // chat-trigger to any link or graphic, etc
    // to trigger the chat window to open
    // REQUIRES FLOAT TO BE ON THE PAGE (so meta tag or override)
    if (floatingChatDisplay) {
        $(function() {
            $('body').on('click', '.chat-trigger', function(e) {
                // check if the chat container is loaded and if so, click it to launch the chat
                //if($('.bcFloat').length > 0) {
                    e.preventDefault();
                    $('.bcFloat a').click(); // click the chat icon

                    var chatText = $(this).data('chat-text') || ''; // grab any chat prefill text
                    if (chatText != '') {
                        // wait for the chat to open
                        waitForChat().then(function(element) {
                            console.log('Initiated chat with question : ' + chatText);
                            $('.query-field__input').val(chatText); // add text to chat
                            $('.query-field__button').click(); // submit text
                        });
                    }
               //}
       
              
            });

            // wait for chat
            function waitForChat() {
                //var selector = ".query-field__input";
                var selector = ".conversation-log__entry";
                var element = document.querySelector(selector);

                return new Promise(function(resolve, reject) {
                    if(element) {
                        resolve(element);
                    return;
                    }

                    var observer = new MutationObserver(function(mutations) {
                        mutations.forEach(function(mutation) {
                            var nodes = Array.from(mutation.addedNodes);
                            for(var node of nodes) {
                                if(node.matches && node.matches(selector)) {
                                    //console.log('******** found node match', selector);
                                    observer.disconnect();
                                    resolve(node);
                                    return;
                                }
                            };
                        });
                    });

                    observer.observe(document.documentElement, { childList: true, subtree: true });
                });
            }
        });
    }




    /*
    Conversion Snippet
    */




    if (window.location.href.toLowerCase().indexOf("confirmation") > -1) {
        // BoldChat Conversion Tracking HTML v5.10 (Website=Production,ConversionCode=Production)
        var productInstallCharge = String(utag.data.productInstallCharge.reduce(function(a, b) {
            return parseFloat(a) + parseFloat(b);
        }).toFixed(2)) ? String(utag.data.productInstallCharge.reduce(function(a, b) {
            return parseFloat(a) + parseFloat(b);
        }).toFixed(2)) : '0.00';
        var productOneTimeCharge = String(utag.data.productOneTimeCharge.reduce(function(a, b) {
            return parseFloat(a) + parseFloat(b);
        }).toFixed(2)) ? String(utag.data.productOneTimeCharge.reduce(function(a, b) {
            return parseFloat(a) + parseFloat(b);
        }).toFixed(2)) : '0.00';
        var productOfferName = utag.data.offerCarted.join() ? utag.data.offerCarted.join() : null;
        var lpQualifiedOrder = String(utag.data.lpQualifiedOrder) ? String(utag.data.lpQualifiedOrder) : null;

        // Not sure about this one - will need to test with purchsase workflow
        var purchaseId = window.utag_data["purchaseID"] ? window.utag_data["purchaseID"] : null;

        var lmiPageUrl = utag.data.URL ? utag.data.URL : null;
        var productTotalOfferMRC = utag.data.productTotalOfferMRC ? utag.data.productTotalOfferMRC : null;
        var psuCount = utag.data.lpPSUCount ? utag.data.lpPSUCount : null;
        var productId = utag.data.productID.join() ? utag.data.productID.join() : null;
        var visitorType = utag.data.visitorType ? utag.data.visitorType : null;
        var loginStatus = utag.data.visitorLoginStatus ? utag.data.visitorLoginStatus : null;
        var pageName = utag.data.pageName ? utag.data.pageName : null;
        //var netRevenue =  utag.data.netRevenue ?  utag.data.netRevenue : productTotalOfferMRC;
        var flowName =  utag.data.flowName ?  utag.data.flowName : null;
        var flowProgram =  utag.data.flowProgram ?  utag.data.flowProgram : null;

        //new conversion code changes
        var netRevenue =  utag.data.netRevenue ?  utag.data.netRevenue : productTotalOfferMRC;
        var flowName =  utag.data.flowName ?  utag.data.flowName : null;
        var flowProgram =  utag.data.flowProgram ?  utag.data.flowProgram : null;

        
        //updated the conversion bcvma code for net revene changes to reflect on reporting portal
        _bcvma.push(["addConversion", {
            VisitRef: lpQualifiedOrder,
            VisitInfo: psuCount,
            CustomUrl: pageName,
            ConversionAmount: productTotalOfferMRC,
            ConversionRef: purchaseId,
            ConversionInfo: 'ProductID=' + productId + '&InstallCharge=' + productInstallCharge + '&OneTimeCharge=' + productOneTimeCharge + '&OfferName=' + productOfferName + '&PSUCount=' + psuCount + '&VisitorType=' + visitorType + '&LoginStatus=' + loginStatus + '&NetRevenue=' + netRevenue + '&FlowName=' + flowName + '&FlowProgram=' + flowProgram,
            WebsiteID: lmiWebsiteID,
            ConversionCodeID: lmiConversionID
          }]);

    }
    // End of merged code
    // Check if VMS has been inserted with bcloaded flag
    var bcLoad = function() {
        if (window.bcLoaded) return;
        window.bcLoaded = true;
        var vms = document.createElement("script");
        vms.type = "text/javascript";
        vms.async = true;
        vms.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + "vmss.boldchat.com/aid/" + lmiAccountID + "/bc.vms4/vms.js";
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(vms, s);
    };
    if (window.pageViewer && pageViewer.load) pageViewer.load();
    else if (document.readyState == "complete") bcLoad();
    else if (window.addEventListener) window.addEventListener('load', bcLoad, false);
    else window.attachEvent('onload', bcLoad);
    //Bold360ai Picker Code
    (function(b, o, l, d) {
        l = b.createElement('script');
        l.defer = 1;
        l.src = o;
        d = b.getElementsByTagName('script')[0];
        d.parentNode.insertBefore(l, d);
    })(document, 'https://webcdn3.cox.com/content/dam/cox/residential/chat/bundle.js');
} catch (e) {
    console.log(e);
}