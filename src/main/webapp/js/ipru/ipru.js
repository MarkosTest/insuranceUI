$(document).ready(function(){
	
	$("#getUser").click(function(){
		$.ajax({
			url: "//192.168.239.1:8081/insurance/customer/test", 
			//accepts:"application/json",
			success: function(result){
				alert(result);
			}
		});
	});
	
});