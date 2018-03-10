<?php

  $type = $_POST["hidden"];
  $name =  $_POST["name"];
  $email = $_POST["email"];

  $subject = 'New Contact from ' . $name;

  $message = $name . ' contacted you for ' . $type . "." . ' Their email is ' . $email;

  mail("simao.nogueira66@gmail.com", $subject, $message, "jeK's Website Contact Form:");
  header('Location: /');
?>
