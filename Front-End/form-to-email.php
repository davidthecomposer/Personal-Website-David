<?php

$name = $_POST['name'];
$visitor_email = $_POST['email'];
$message = $_POST['userMessage'];

//Validate first

if(IsInjected($visitor_email))
{
    echo "Bad email value!";
    exit;
}

$email_from = $visitor_email;//<== update the email address
$email_subject = "New Message from visitor at developer.davidhalcampbell.com";
$to = "developer@davidhalcampbell.com";//<== update the email address
$headers = "From: $email_from \r\n";
$headers .= "Reply-To: $visitor_email \r\n";
//Send the email!
$email_body= `
<html>
        <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
            <title></title>
        </head>
        <body>
            <div id="email-wrap" style='background: #151515;color: #FFF;'>
            <p>Hi, David</p><br>
            <p>$name has sent you a message:</p><br>
            <p>$message</p>
            <p>Thank you,</p>
            <p>Developer@davidhalcampbell.com</p>
            </div>
        </body>
        </html>
        `;



$success=mail($to,$email_subject,$email_body,$headers);
//done. redirect to thank-you page.
// header('Location: thank-you.html');
if ($success) {
  echo "Mail Sent!";
}
else {
  echo "Mail not sent";
}

// Function to validate against any email injection attempts
function IsInjected($str)
{
  $injections = array('(\n+)',
              '(\r+)',
              '(\t+)',
              '(%0A+)',
              '(%0D+)',
              '(%08+)',
              '(%09+)'
              );
  $inject = join('|', $injections);
  $inject = "/$inject/i";
  if(preg_match($inject,$str))
    {
    return true;
  }
  else
    {
    return false;
  }
}
   
?> 