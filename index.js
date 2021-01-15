$(function () {
  //Select button to change
  let $myButton = $("#myButton");

  // Type of button
  buttonType = function () {
    let $defaultButton = $("#default");
    $defaultButton.click(function () {
      $myButton.removeClass("outline");
      $myButton.removeClass("text");
    });

    let $outlineButton = $("#outline");
    $outlineButton.click(function () {
      if (myButton.classList.contains("outline")) {
        $myButton.removeClass("outline");
      } else {
        $myButton.addClass("outline");
        $myButton.removeClass("text");
      }
    });

    let $textButton = $("#text");
    $textButton.click(function () {
      if (myButton.classList.contains("text")) {
        $myButton.removeClass("text");
      } else {
        $myButton.addClass("text");
        $myButton.removeClass("outline");
      }
    });
  };

  // Disable box-shadow
  boxShadow = function () {
    let $buttonForBoxShadow = $(".parent-box-shadow").next();

    $buttonForBoxShadow.click(function () {
      if (this.classList.contains("box-shadow")) {
        $(this).removeClass("box-shadow");
        $myButton.removeClass("box-shadow");
        let $textToReplace = $(this)
          .text()
          .replace("Click to remove the shadow", "Click to add the shadow");
        $(this).text($textToReplace);
      } else {
        $(this).addClass("box-shadow");
        $myButton.addClass("box-shadow");
        let $textToReplace = $(this)
          .text()
          .replace("Click to add the shadow", "Click to remove the shadow");
        $(this).text($textToReplace);
      }
    });
  };

  //Disabled button
  disableButton = function () {
    let $disabledButton = $("#disabled");

    $disabledButton.click(function () {
      if (this.classList.contains("disabled")) {
        $myButton.removeAttr("disabled", "");
        $myButton.addClass("default");
        $(this).removeClass("disabled");
      } else {
        $myButton.attr("disabled", "");
        $myButton.removeClass("default");
        $(this).addClass("disabled");
      }
    });
  };

  //Function call
  buttonType();
  boxShadow();
  disableButton();
});
