<?php 
$useremail = $_POST['user-email'];
$username = $_POST['user-name'];
$emailcontent = $_POST['email-content'];

$formcontent="From: $username at $useremail \n Message:  $emailcontent;
$recipient = "davidthecomposer@gmail.com";
$subject = "Contact Form";
$mailheader = "From: $username at $useremail \r\n";
mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
echo "<script type='text/javascript'>alert('Mail sent successfully!')</script>";
?>