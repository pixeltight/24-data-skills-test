<!doctype html>
<html class="no-js" <?php language_attributes(); ?>>
  <head>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <title>24 Data Skills Test</title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <link href="<?php echo get_bloginfo('template_directory'); ?>/dist/css/style.css" rel="stylesheet">
  </head>
  <body>
    <header class="header">
      <h1 class="header__title">
        Front End Skills Test
      </h1>
    </header>
    <div class="container">
      <div class="row">
        <div class="col-md-7 align-center">
          <img 
            src="<?php echo get_bloginfo('template_directory'); ?>/dist/img/FrontEndSkillsTestIcon.png" 
            alt="frontend skills icon" 
            class="arrow-icon">
          <p class="body-text">
            This Icon Has Been Minified
          </p>
        </div>
        <div class="col-md-5 clearfix align-center" style="padding-top: 15px;">
          <p class="body-text" style="margin-bottom: 0">
            This is the Form
          </p>
          <form class="form" id="form" action="<?php echo get_bloginfo('template_directory'); ?>/process.php" method="POST">
            <input type="text" maxlength="20" name="first_name" id="firstNameInput" placeholder="Your First Name *">
            <div class="error-message" id="firstNameError">This field must be 20 characters long.</div>
            <input type="text" maxlength="20" name="last_name" id="lastNameInput" placeholder="Your Last Name *">
            <div class="error-message" id="lastNameError">This field must be 20 characters long.</div>
            <input type="text" maxlength="6" name="zip_code" id="zipCodeInput" placeholder="Your Zip Code *">
            <div class="error-message" id="zipCodeError">Please enter a valid Zip Code.</div>
            <input type="text" maxlength="14" name="phone_number" id="phoneNumberInput" placeholder="Contact Phone *">
            <div class="error-message" id="phoneNumberError">Please enter phone number<br> in (xxx) xxx-xxxx format.</div>
            <input type="text" maxlength="30" name="email" id="emailInput" placeholder="Your Email *">
            <div class="error-message" id="emailError">Please enter a valid email address.</div>
            <div class="disclaimer">
              <input type="checkbox" id="disclaimerInput"> I hereby consent to receive emails, text messages and other electronic communications at the telephone and email listed above.
              <div class="error-message" id="disclaimerError">Please accept terms by checking the box.</div>
            </div>
            <button class="submit-button" id="submitButton">
              Submit
            </button>
          </form>
        </div>
      </div>
      <div class="row validation-text">
        <p class="body-text margin-bottom-17">
          To check validatioin of the form above do the following:
        </p>
        <ul class="instructions">
          <li>Type more than 20 characters into the First Name field</li>
          <li>Type more than 20 characters into the Last Name field</li>
          <li>Add 6 digits consisting of letters, numbers, &amp; special characters to the Zip Code field</li>
          <li>Add letters and numbers to the Phone Number field and attempt to use this format: xxx-xxx-xxxx</li>
          <li>Enter an invalid email address into the Email Address Field (i.e. somename.com)</li>
          <li>Leave the Checkbox unchecked</li>
          <li>Click Submit</li>
        </ul>
      </div>
    </div>
    <script src="<?php echo get_bloginfo('template_directory'); ?>/dist/js/scripts.min.js"></script>
  </body>
</html>