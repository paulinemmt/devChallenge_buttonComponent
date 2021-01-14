// Disable box-shadow

$ (function () {

    let $buttonForBoxShadow = $('.parent-box-shadow').next();
    console.log($buttonForBoxShadow);

    $buttonForBoxShadow.click(function(){
        if(this.classList.contains('box-shadow')){
            $(this).removeClass('box-shadow');
            let $textToReplace = $(this).text().replace("Click to remove the shadow","Click to add the shadow");
            $(this).text($textToReplace);
    }else{
        $(this).addClass('box-shadow');
        let $textToReplace= $(this).text().replace("Click to add the shadow","Click to remove the shadow");
        $(this).text($textToReplace);
    }
    })
})