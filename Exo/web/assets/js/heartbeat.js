/**
 * @class CoxHeartBeat
 * 
 * Creates the Cox Heartbeat component
 * 
 * This script will pop a modal after 20 minutes of no user activity on a page to
 * alert the user that their session is about to expire. After 31 minutes, the script
 * will cause a page reload which should force the app to redirect to its login page.
 */

var CoxHeartBeat = window.CoxHeartBeat = new function() {
	console.log('CoxHeartBeat');
	// create timer of inactivity
	var __heartbeat;
	// first warning to user, pop up modal when time expires
	var __firstAlertTime = '00:20:00';
	// time has expired, log out user, redirect to login page
	var __expireHeartbeatTime = '00:31:30';
	// timeout title
	var __warningTitle = "Timeout Warning";
	// expired status
	var __isExpired = false;
	// content for first warning
	var __firstWarningMSG = "<p>Your application will time out soon.</p><p>For your safety and protection, your online session will be timed out if there is no additional activity. You will be redirected to the login screen.</p><p>If you are still working in your online session, simply click OK to continue.</p>";
	// url to css file
	var __heartbeatCSSFile = "//webcdn3.cox.com/content/dam/cox/common/scripts/heartbeat.css";
	
	// start up the heartbeat
	this.init = function() {
		//console.log('init');
		// start heartbeat
		this.startHeartbeat();

		// load css file
		this.loadHeartbeatCSS();
	};

	// set page expiration status
	this.isExpired = function () {
		return __isExpired;
	};
		
	// load css file
	this.loadHeartbeatCSS = function () {
		//console.log('loadHeartbeatCSS');
  		$('head').append('<link rel="stylesheet" href="'+ __heartbeatCSSFile +'" />');
	};
	
	// check for user click events
	this.checkForUserInteraction = function() {
		//console.log('checkForUserInteraction');
		$("#pf-underlay, .pf-btn-close").click(function(){
			CoxHeartBeat.removeModalDisplay();
			CoxHeartBeat.resetHeartbeat();
			CoxHeartBeat.makeAJAXAliveCall();
		});
	};
	
	this.makeAJAXAliveCall = function() {
		//console.log('makeAJAXAliveCall');
		$.ajax({
			url: location.url
		});
	};
	
	this.checkForInactivity = function(currentSeconds) {
		//console.log('checkForInactivity', currentSeconds);
		var currentHeartbeat = this.convertIntervalToTimeFormat(currentSeconds);
		// check if the user has been idle for the allowed time
		if (currentHeartbeat == __firstAlertTime) {
			// first warning
			this.notifyUserWithWarning("first");
		} else if (currentHeartbeat == __expireHeartbeatTime) {
			// stop heartbeat
			this.stopHeartbeat();
			// last warning, expired
			this.notifyUserWithWarning("last");
		}
	};
	
	this.resetHeartbeat = function() {
		//console.log('resetHeartbeat');
		// stop timer
		this.stopHeartbeat();
		// restart timer
		this.startHeartbeat();
	};
	
	this.startHeartbeat = function() {
		//console.log('startHeartbeat');
		var CoxHeartBeatObj = this;
		// start timer
		var seconds = 0;
		__heartbeat = setInterval(function() { seconds = seconds + 1; CoxHeartBeatObj.checkForInactivity(seconds); }, 1000);
	};
	
	this.stopHeartbeat = function() {
		//console.log('stopHeartbeat');
		// stop timer
		clearInterval(__heartbeat);
	};
	
	this.createModalDisplay = function() {
		//console.log('createModalDisplay');
		var modalDisplay = '<div id="pf-underlay" class="active"></div><div class="pf-dialog-component pf-dialog-component-active" tabindex="-1" role="dialog" aria-modal="true"><div class="pf-dialog-component-head"><span title="Close" class="pf-btn-close">x</span></div><div class="pf-dialog-component-title">' + __warningTitle + '</div><div class="pf-dialog-component-content" role="document" style="">' + __firstWarningMSG + '</div><div class="pf-dialog-component-footer"><a class="pf-dialog-button pf-btn-close">OK</a></div></div>';
		
		var currentModal = $("#pf-underlay");
		if (currentModal.length) {
			this.removeModalDisplay();
		}
		
		$('body').append(modalDisplay);

		this.checkForUserInteraction();
	};
		
	this.notifyUserWithWarning = function(notificationAttempt) {
		//console.log('notifyUserWithWarning');
		(notificationAttempt == "first") ? this.createModalDisplay() : this.signOutUser();
	};
	
	this.signOutUser = function() {
		//console.log('signOutUser');
		// set expired to true (so other apps can hit this API and determine state)
		__isExpired = true;
		// remove modal 
		this.removeModalDisplay();
		// reload current page to sign out the user automatically
		location.reload();
	};
	
	this.removeModalDisplay = function() {
		//console.log('removeModalDisplay');
		// remove underlay
		$("#pf-underlay").remove();
		// remove dialog
		$(".pf-dialog-component").remove();
	};
	
	this.convertIntervalToTimeFormat = function(totalSeconds) {
		//console.log('convertIntervalToTimeFormat');
		function displayTimeFormat(num) {
	  		return ( num < 10 ? "0" : "" ) + num;
		}
		
		var hours = Math.floor(totalSeconds / 3600);
		totalSeconds = totalSeconds % 3600;
		
		var minutes = Math.floor(totalSeconds / 60);
		totalSeconds = totalSeconds % 60;
		
		var seconds = Math.floor(totalSeconds);
		
		// Pad the minutes and seconds with leading zeros, if required
		hours = displayTimeFormat(hours);
		minutes = displayTimeFormat(minutes);
		seconds = displayTimeFormat(seconds);
		
		// Compose the string for display
		var currentTimeString = hours + ":" + minutes + ":" + seconds;
		
		return currentTimeString;
	};
	
	this.init();
};

// handle reset of the session on ajax components
$(document).on('ajaxComplete', function() {
   CoxHeartBeat.resetHeartbeat();
});

// handle reset of the session on ajax components generated by primefaces which do not support ajaxComplete
$(document).on('pfAjaxComplete', function() {
   CoxHeartBeat.resetHeartbeat();
});