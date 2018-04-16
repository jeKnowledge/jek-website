<?php
$type = $_POST["hidden"];
$name =  $_POST["name"];
$email = $_POST["email"];

$subject = 'New Contact from ' . $name;

$message = $name . ' contacted you for ' . $type . "." . ' Their email is ' . $email;

$headers = "From: myplace@example.com\r\n";

if(isset($_POST['url']) && $_POST['url'] == ''){
  mail("tiagomartins282@gmail.com", $subject, $message, "jeK's Website Contact Form:", $headers);
}
header('Location: /');
?>
