$(document).ready(function(){
	
    
    
    
    function payModal_reset_saved() {
        $("#paywith-credit-card").hide();
		$("#paywith-bank-acc").hide();
		$("#paywith-paypal").hide();
        $("#paywith-saved-credit-card").show();
        $(".payment-methods").hide();
        $("#make-payment-modal-conent").show();
        $("#make-payment-success-modal-conent").hide();
    }
	
	payModal_reset_saved();
    
    


    
    $("#paywith-saved-credit-card-change").click(function() {
		 $("#paywith-saved-credit-card").hide();
		 $(".payment-methods").show();
    });
    
    $("#payMethod-saved-credit-card01").click(function() {
		 $("#paywith-saved-credit-card").show();
		 $(".payment-methods").hide();
    });
	
	

    
    
    
    
    
    //make payment – load success screen
    $(".make-payment-btn").click(function() {
		 $("#make-payment-modal-conent").hide();
		 $("#make-payment-success-modal-conent").show();
        $("#myModal").scrollTop(0);
    });
    
    
    
    
    
    $(".dismiss-modal-btn").click(function() {
		 payModal_reset_saved();
    });
    
    
    
});
