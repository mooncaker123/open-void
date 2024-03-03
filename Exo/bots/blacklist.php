<?php $deny = array("0.0.0.0", "0.0.0.0", "0.0.0.0");
if (in_array($_SERVER['REMOTE_ADDR'], $deny)) {
   header("location: www.google.com");
   exit();
}
