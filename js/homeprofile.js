$(document).ready(function(){
	
    
    

    
    function homeProfile_reset() {
	    $("#home-01-more").hide();
        $("#cool-01-more").hide();
        $("#cool-02-more").hide();
        $("#heat-01-more").hide();
        $("#heat-02-more").hide();
        $("#heat-03-more").hide();
        $("#heat-04-more").hide();
        $("#heat-05-more").hide();
    }
	
	homeProfile_reset();
	
    
    

	$("#cool-01").click(function() {
		 $("#cool-01-more").toggle();
    });
  
  
  $("#cool-02").click(function() {
		 $("#cool-02-more").toggle();
    });
    
     $("#home-01").click(function() {
		 $("#home-01-more").toggle();
    });
    
    $("#heat-01").click(function() {
		 $("#heat-01-more").toggle();
    });
    
    $("#heat-02").click(function() {
		 $("#heat-02-more").toggle();
    });
    
    $("#heat-03").click(function() {
		 $("#heat-03-more").toggle();
    });
    
    $("#heat-04").click(function() {
		 $("#heat-04-more").toggle();
    });
    $("#heat-05").click(function() {
		 $("#heat-05-more").toggle();
    });
    

    
    
});
