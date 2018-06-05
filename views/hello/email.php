<?php
$type = $_POST["hidden"];
$name =  $_POST["name"];
$email = $_POST["email"];

$subject = 'New Contact from ' . $name;

$message = $name . ' contacted you for ' . $type . "." . ' Their email is ' . $email;

$headers = "From: website@jeknowledge.com\r\n";

mail("simao.nogueira@jeknowledge.com", $subject, $message, "jeK's Website Contact Form:", $headers);

header('Location: /');
?>
