<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Disposition, Content-Type, Content-Length, Accept-Encoding");
header("Content-type:application/json");
$_POST = json_decode(file_get_contents("php://input"));
echo "received data";

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
$email_subject = "New Form submission";
$email_body = "You have received a new message from: $name.\n".
    "Here is the message:\n $message".
    
$to = "developer@davidhalcampbell.com";//<== update the email address
$headers = "From: $email_from \r\n";
$headers .= "Reply-To: $visitor_email \r\n";
//Send the email!
$success=mail($to,$email_subject,$email_body,$headers);
//done. redirect to thank-you page.
// header('Location: thank-you.html');
if ($success) {
  echo "Mail Sent!";
  echo $name;
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