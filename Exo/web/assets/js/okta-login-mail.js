
// loaded after Okta widget is initialized
var coxLogin = {
    init: function () {
        // move the helps links into the sign in box
        $('.auth-footer').replaceWith($('.login-help-links'));

        // check the remember me on page load
        $('input[name="remember"]').prop('checked', true);

        // remove white spaces from form fields
        $('input').blur(function () {
            $(this).val(
                $.trim($(this).val())
            );
        });

        // only load Tealium if a utag_data object is created on the page (so webmail does not load this)
        if (typeof utag_data !== 'undefined') {
            this.loadTeallium();
        }

        // outage messaging
        if (typeof outageMessage === 'undefined') {
            outageMessage = "";
        }
        // use query param value for testing first, then check for html if not present
        var debugOutage = this.queryParamsFromUrl("outage") || outageMessage;
        if (debugOutage === "minor") {
            $('#minor-outage').css('display','flex');
        } else if (debugOutage === "major") {
            $('#major-outage').css('display','flex');
            $('#no-outage').css('display','none');
        }
    },

    queryParamsFromUrl: function (queryParamKey) {
        var uri = window.location.href.split("?")[1];
        var queryParams = {};
        if (uri) {
            uri.replace(new RegExp("([^?=&]+)(=([^&]*))?", "g"), function ($0, $1, $2, $3) {
                queryParams[$1] = $3;
            });
        }
        var queryParamVal = queryParams[queryParamKey];
        if (queryParamVal) {
            return queryParamVal;
        } else {
            return "";
        }
    },

    // Check the given cookie for a value and return it.
    getCoxCookies: function (cookieName) {
        var cookies = document.cookie.split('; ');
        for (var i = 0, numCookies = cookies.length; i < numCookies; i++) {
            var parts = cookies[i].split('=');
            if (parts[0] === cookieName) {
                //return unescape(parts[1].replace(/\+/g, ' '));
                return unescape(parts[1].replace(/[^A-Za-z0-9\+\/\=]/g, ''));
            }
        };
        return "";
    },

    // create/destroy cox remember me cookie
    updateRememberMeCookie: function () {
        var userIDval = $("input[name='username']").val();
        var userPwdval = $("input[name='password']").val();
        if (userIDval != undefined && userPwdval != undefined) {
            // remove any @cox.net if it exists to prevent from being saved into cookie
            userIDval = userIDval.replace('@cox.net', '');
            // base64 encode the user id field
            userIDval = window.btoa(userIDval)

            var date = new Date();
            date.setTime(date.getTime() + (365 * 24 * 60 * 60 * 1000));
            var expiryCreate = "; expires=" + date.toGMTString();
            var expiryDestroy = "; expires=" + new Date(0).toGMTString();

            var theRememberCheckBox = $("input[name='remember']");
            var currentDomain = window.location.host;
            currentDomain = currentDomain.substring(currentDomain.indexOf('.'));

            if ($(theRememberCheckBox).is(":checked") == true) {
                if (navigator.cookieEnabled) {
                    document.cookie = "cox-rememberme-user=" + userIDval + expiryCreate + "; path=/; domain=" + currentDomain;
                }
            } else {
                document.cookie = "cox-rememberme-user=" + userIDval + expiryDestroy + "; path=/; domain=" + currentDomain;
            };
        }
    },

    loadTeallium: function () {
        utag_data.dateStamp = new Date().getTime();
        utag_data.visitCount = "";

        if (this.getCoxCookies("cox-current-zipcode")) {
            utag_data.zip = this.getCoxCookies("cox-current-zipcode");
        }

        if (this.getCoxCookies("tealiumMyAccount")) {
            var tealiumMyAccount = this.getCoxCookies("tealiumMyAccount");
            // remove leading quote
            tealiumMyAccount = tealiumMyAccount.replace('"', '');
            // get count from myAccountVisitCount=X and base64 decode it
            tealiumMyAccount = window.atob(tealiumMyAccount).split("=")[1];
            utag_data.visitCount = tealiumMyAccount;
        }

        // set the responsiveDisplayType
        if (window.matchMedia) {
            var respDesktopCheck = window.matchMedia("(min-width: 941px)");
            var respTabletCheck = window.matchMedia("(max-width: 940px) and (min-width: 768px)");
            var respMobileCheck = window.matchMedia("(max-width: 767px)");

            if (respDesktopCheck.matches) {
                utag_data.responsiveDisplayType = 'desktop';
            }
            if (respTabletCheck.matches) {
                utag_data.responsiveDisplayType = 'tablet';
            }
            if (respMobileCheck.matches) {
                utag_data.responsiveDisplayType = 'mobile';
            }
        }

        // load utag.js
        (function (a, b, c, d) {
            a = '//tags.tiqcdn.com/utag/cox/main/prod/utag.js';
            b = document;
            c = 'script';
            d = b.createElement(c);
            d.src = a;
            d.type = 'text/java' + c;
            d.async = true;
            a = b.getElementsByTagName(c)[0];
            a.parentNode.insertBefore(d, a);
        })();
    }

};

// OKTA sign in scripts
$(document).ready(function () {

    var HOST_NAME = location.hostname;
    var BASE_URL = 'https://login.cox.com/';
    var ON_SUCCESS_URL = "https://myemail.cox.net/";
    var INTERCEPT_URL = "https://" + HOST_NAME + "/residential/intercept-mail.html";
    
    // grab the fromURI query param and store it to set the onSuccessURL variable
    var onSuccessUrl = decodeURIComponent(coxLogin.queryParamsFromUrl('fromURI'));

    if (onSuccessUrl === "") {
        onSuccessUrl = ON_SUCCESS_URL;
    }

    // add the intercept between the login and final onsuccess url, skip if intercept=false in the url
    if (onSuccessUrl.indexOf('intercept%3Dfalse') === -1) {
        onSuccessUrl = INTERCEPT_URL + "?onsuccess=" + onSuccessUrl;
    }

    // get the remember me cookie value, base-64 decode it store it to set the signInWidgetConfig.username variable for prefill
    var coxUserID;
    var coxRememberCookie = coxLogin.getCoxCookies("cox-rememberme-user");
    if (coxRememberCookie != "") {
        coxUserID = window.atob(coxRememberCookie);
    }

    function loadLoginWidget() {
        $("body").on("submit", "#widget-container form", function (event) {
            coxLogin.updateRememberMeCookie();
        });

        signInWidgetConfig = {
            logo: '',
            language: 'en',
            i18n: {
                // language overrides (full list: https://github.com/okta/okta-signin-widget/blob/master/packages/%40okta/i18n/src/properties/login.properties)
                'en': {
                    // Page Specific Title
                    'primaryauth.title': 'Cox email login (cox.net)',

                    // Login Overrides
                    'primaryauth.username.placeholder': 'User ID',
                    'primaryauth.username.tooltip': 'User ID',
                    'error.username.required': 'Please enter a user ID',
                    'remember': 'Remember user ID',
                    'rememberDevice': 'Remember this device',
                    'rememberDevice.timebased': 'Remember this device for the next {0}',
                    'rememberDevice.devicebased': 'Always remember this device',
                    'primaryauth.submit': 'Sign in',
                    
                    // Error Overrides
                    'errors.E0000004': 'An invalid User ID or Password was entered. Please try again.',
                    'errors.E0000069': 'Your account is locked because of too many authentication attempts. Please try again in 30 minutes.',
                    'errors.expired.session': 'Your session has expired. Please sign in again.',

                    // Enroll Choices
                    'enroll.choices.title': 'Set up two-step verification',
                    'enroll.choices.description.generic': 'Choose at least one option on where you want to receive your verification code.',
                    'enroll.choices.optional': 'You can configure any additional optional factor or click finish.',
                    'enroll.choices.list.setup': 'Set up required',
                    'enroll.choices.list.enrolled': ' ',
                    'enroll.choices.list.optional': ' ',
                    'enroll.choices.setup': 'Set up',
                    'enroll.choices.setup.another': 'Set up another',
                    'enroll.choices.submit.finish': 'Finish',
                    'enroll.choices.submit.configure': 'Configure factor',
                    'enroll.choices.submit.next': 'Configure next factor',
                    'enroll.choices.cardinality.setup': '({0} set up)',
                    'enroll.choices.cardinality.setup.remaining': '({0} of {1} set up)',
                    'enroll.choices.setup.skip': 'Skip set up',

                    // Email enrollment and verification
                    'email.button.send': 'Email code',
                    'email.button.resend': 'Send again',
                    'email.code.label': 'Verification code',
                    'email.code.not.received': 'Haven\'t received an email?',
                    'email.enroll.title': 'Receive a code via email',
                    'email.enroll.description': 'Send a verification code to your registered email. Must be different from your @cox.net email address.',
                    'email.link.terminal.msg': 'To finish signing in, return to the screen where you requested the email link.',
                    'email.mfa.title': 'Verify with Email Authentication',
                    'email.mfa.description': 'Send a verification code to {0}.',
                    'email.mfa.email.sent.description': 'A verification code was sent to {0}. Check your email and enter the code below.',
                    'email.mfa.email.sent.description.sentText': 'A verification code was sent to',
                    'email.mfa.email.sent.description.emailCodeText': 'Check your email and enter the code below.',

                    // Enroll SMS
                    'enroll.sms.setup': 'Receive a code via text message',
                    'enroll.sms.try_again': 'The number you entered seems invalid. If the number is correct, please try again.',

                    // Enroll CALL
                    'enroll.call.setup': 'Follow instructions via phone call',

                    // Factors
                    'factor.sms': 'SMS',
                    'factor.sms.description': 'Enter a verification code sent to your mobile phone.',
                    'factor.sms.time.warning': 'Haven\'t received a text? To try again, click <span style="font-weight:bold">Re-send code</span>.',
                    'factor.call': 'Voice call',
                    'factor.call.description': 'Use a phone to authenticate by following voice instructions.',
                    'factor.call.time.warning': 'Haven\'t received a voice call? To try again, click <span style="font-weight:bold">Redial</span>.',
                    'factor.email': 'Email',
                    'factor.email.description': 'Enter a verification code sent to your email.',

                    // Common properties
                    'signout': 'Sign Out',
                    'signin': 'Sign In',
                    'signup': 'Sign Up',
                    'mfa.challenge.verify': 'Verify',
                    'mfa.challenge.answer.placeholder': 'Answer',
                    'mfa.challenge.answer.tooltip': 'Answer',
                    'mfa.challenge.answer.showAnswer': 'Show',
                    'mfa.challenge.answer.hideAnswer': 'Hide',
                    'mfa.challenge.enterCode.placeholder': 'Enter code',
                    'mfa.challenge.enterCode.tooltip': 'Enter code',
                    'mfa.challenge.password.placeholder': 'Password',
                    'mfa.backToFactors': 'Back',
                    'mfa.phoneNumber.placeholder': 'Phone number',
                    'mfa.phoneNumber.ext.placeholder': 'Extension',
                    'mfa.sendCode': 'Send code',
                    'mfa.sent': 'Sent',
                    'mfa.resendCode': 'Re-send code',
                    'mfa.call': 'Call me',
                    'mfa.calling': 'Calling',
                    'mfa.redial': 'Redial',
                    'mfa.sendEmail': 'Send email',
                    'mfa.resendEmail': 'Re-send email',
                    'mfa.noAccessToEmail': 'Can\'t access email',
							
					// MFA Factors
					'mfa.factors.dropdown.title' : 'Select a verification method'
                }
            },
            // Changes to widget functionality
            features: {
                rememberMe: true, // remember me
                multiOptionalFactorEnroll: true, // MFA
                showPasswordToggleOnSignInPage: true
            },
            baseUrl: BASE_URL,
            username: coxUserID,
            transformUsername: function (username, operation) {
                // remove any @cox.net before submitting
                return username.replace('@cox.net', '');
            }
        };

        var signInWidget = new OktaSignIn(signInWidgetConfig);
        //Sign the user out of okta if a session is active
        signInWidget.authClient.session.close();

            signInWidget.renderEl({
                el: '#widget-container'
            }, function success(res) {
                console.log(res);
                if (res.status === 'SUCCESS') {
                    console.log('User %s successfully authenticated %o', res.user.profile.login, res.user);
                    res.session.setCookieAndRedirect(onSuccessUrl);
                }
            }, function error(err) {
                // handle errors as needed
                console.error(err);
            });

        // init coxLogin after the okta widget has loaded
        signInWidget.on('ready', function () {
            coxLogin.init();
        });

        // fires with each pane update 
        signInWidget.on('afterRender', function (context) {
            // Change the forgot Password link
            if (context.controller == 'primary-auth') {
                var links = $('.login-help-links').clone();
                $(links).removeClass("d-none");
                $('.auth-footer').replaceWith($(links));
            }
            // hide the bads post login form
            if (context.controller == 'enroll-choices' || context.controller == 'mfa-verify') {
                $('.contentBlockRight').remove();
                $('.contentBlockLeft').removeClass('outer-container');
                $('.contentBlockLeft').toggleClass('col-lg-6 col-lg-8');
            }
            return;
        });
    }

    loadLoginWidget();
});