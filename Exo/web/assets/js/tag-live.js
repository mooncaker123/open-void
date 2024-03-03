(function(networkId) {
var cacheLifetimeDays = 30;

var customDataWaitForConfig = [
  { on: function() { return Invoca.Client.parseCustomDataField("ACCT_CHG_DISC", "Last", "URLParam", ""); }, paramName: "ACCT_CHG_DISC", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("ACCT_CHG_DOWNGRADE", "Last", "URLParam", ""); }, paramName: "ACCT_CHG_DOWNGRADE", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("ACCT_CHG_NEW_CONN", "Last", "URLParam", ""); }, paramName: "ACCT_CHG_NEW_CONN", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("ACCT_CHG_TRANSFER", "Last", "URLParam", ""); }, paramName: "ACCT_CHG_TRANSFER", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("ACCT_CHG_UPGRADE", "Last", "URLParam", ""); }, paramName: "ACCT_CHG_UPGRADE", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("adobe_id", "Last", "URLParam", ""); }, paramName: "adobe_id", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("AGENT_NETWORK_ID", "Last", "URLParam", ""); }, paramName: "AGENT_NETWORK_ID", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("calling_page", "Last", "JavascriptDataLayer", "window.location.hostname + window.location.pathname"); }, paramName: "calling_page", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("call_queue", "Last", "URLParam", ""); }, paramName: "call_queue", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("campcode", "Last", "URLParam", ""); }, paramName: "campcode", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("categorycarted", "Last", "JavascriptDataLayer", "window.utag_data[\"categoryCarted\"]"); }, paramName: "categorycarted", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("customer", "Last", "JavascriptDataLayer", "window.utag_data[“customerType”]"); }, paramName: "customer", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("customer_journey", "Multi", "JavascriptDataLayer", "location.pathname"); }, paramName: "customer_journey", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("customer_key", "Last", "URLParam", ""); }, paramName: "customer_key", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("customer_type", "Last", "URLParam", ""); }, paramName: "customer_type", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("IN_STORE_DURATION", "Last", "URLParam", ""); }, paramName: "IN_STORE_DURATION", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("landing_page", "First", "JavascriptDataLayer", "window.location.hostname + window.location.pathname"); }, paramName: "landing_page", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("logged_in", "Last", "JavascriptDataLayer", "window.utag_data[“cp.customer-type”]"); }, paramName: "logged_in", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("mcid", "First", "URLParam", ""); }, paramName: "mcid", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("NRPA_DISC_NET_REV", "Last", "URLParam", ""); }, paramName: "NRPA_DISC_NET_REV", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("NRPA_DOWN_NET_REV", "Last", "URLParam", ""); }, paramName: "NRPA_DOWN_NET_REV", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("NRPA_TRANSFER_NET_REV", "Last", "URLParam", ""); }, paramName: "NRPA_TRANSFER_NET_REV", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("optional_parameters", "Last", "JavascriptDataLayer", "window.location.search"); }, paramName: "optional_parameters", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("page_name", "Last", "JavascriptDataLayer", "window.document.title"); }, paramName: "page_name", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("product_carted", "Last", "JavascriptDataLayer", "window.utag_data[\"productCarted\"]"); }, paramName: "product_carted", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("Purpose", "Last", "URLParam", ""); }, paramName: "Purpose", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("query", "Last", "URLParam", ""); }, paramName: "query", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("sc_id", "Last", "URLParam", ""); }, paramName: "sc_id", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("serviceability", "Last", "JavascriptDataLayer", "window.utag_data[\"visitorServiceability\"]"); }, paramName: "serviceability", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("srchcampaign", "Last", "URLParam", ""); }, paramName: "srchcampaign", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("SRCHKW", "Last", "URLParam", ""); }, paramName: "SRCHKW", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("store_name", "Last", "URLParam", ""); }, paramName: "store_name", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("ua", "Last", "JavascriptDataLayer", "window.navigator.userAgent"); }, paramName: "ua", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("utm_medium", "Last", "URLParam", ""); }, paramName: "utm_medium", fallbackValue: function() { return Invoca.PNAPI.currentPageSettings.poolParams.utm_medium || null; } },
  { on: function() { return Invoca.Client.parseCustomDataField("utm_source", "Last", "URLParam", ""); }, paramName: "utm_source", fallbackValue: function() { return Invoca.PNAPI.currentPageSettings.poolParams.utm_source || null; } },
  { on: function() { return Invoca.Client.parseCustomDataField("WO_NBR", "Last", "URLParam", ""); }, paramName: "WO_NBR", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("zip_code", "Last", "JavascriptDataLayer", "window.utag_data[\"cp.cox-shop-zipcode\"]"); }, paramName: "zip_code", fallbackValue: null }
];

var defaultCampaignId = "664141";

var destinationSettings = {
  paramName: "invoca_detected_destination"
};

var numbersToReplace = {
  "+18004587154": "2353041"
};

var organicSources = true;

var reRunAfter = null;

var requiredParams = null;

var resetCacheOn = ['gclid', 'utm_source', 'utm_medium'];

var waitFor = 0;

var customCodeIsSet = (function() {
  Invoca.Client.customCode = function(options) {
    options.integrations = {
  adobeAnalytics: {username: "8C6767C25245AD1A0A490D4C@AdobeOrg"}
};

// Early exit for destinations to avoid discovering numbers on customer pages.
var PATHS_TO_NOT_RUN = ["/residential-shop/order-confirmation.html", "/resaccount/home.html", "/residential-shop/wls/lead-confirmation.html", "/myprofile/phone.html"];

for (var i=0; i < PATHS_TO_NOT_RUN.length; i++) {
  if (window.location.pathname == PATHS_TO_NOT_RUN[i]) {
    options.autoRun = false;
  }
}

return options;
  };

  return true;
})();

var generatedOptions = {
  autoSwap:            true,
  cookieDays:          cacheLifetimeDays,
  country:             "US",
  defaultCampaignId:   defaultCampaignId,
  destinationSettings: destinationSettings,
  disableUrlParams:    [],
  doNotSwap:           [],
  maxWaitFor:          waitFor,
  networkId:           networkId || null,
  numberToReplace:     numbersToReplace,
  organicSources:      organicSources,
  poolParams:          {},
  reRunAfter:          reRunAfter,
  requiredParams:      requiredParams,
  resetCacheOn:        resetCacheOn,
  waitForData:         customDataWaitForConfig
};

Invoca.Client.startFromWizard(generatedOptions);

})(1767);
