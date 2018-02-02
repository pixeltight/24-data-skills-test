<?php

$recipient = "kimberlys@24datainc.com";
$subject = "Frontend Skills Test Submission"; // Email Subject

$message = "- Name: " . $_POST['first_name'] . "\r\n";
$message = "- Last Name: " . $_POST['last_name'] . "\r\n";
$message .= "- Email: " . $_POST['email'] . "\r\n";
$message .= "- Zip Code: " . $_POST['zip_code'] . "\r\n";
$message .= "- Phone Number: " . $_POST['phone_number'] . " \r\n";   

/* additional headers */
$headers = "From: " . $_POST['first_name'] . ' ' . $_POST['last_name'] . " <" . $_POST['email'] . "> \r\n";
$headers .= "Reply-To: ". $_POST['email'] ."\r\n";

/* and now mail it */
mail($recipient, $subject, $message, $headers);

?>