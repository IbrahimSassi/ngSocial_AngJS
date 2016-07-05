$(document).ready(function() { 
  
      $("#form1").show();
      $("#form2").hide();  
      $("#form3").hide(); 
      $("#form4").hide(); 
      
     
}); 
$(document).ready(function() { 
  $("[id=statut]").each(function(i) { 
    $(this).change(function(){ 
      divId = $(this).val(); 
      $("#form1").show();
      $("#form2").hide();
      
       
     
    }); 
  }); 
});
$(document).ready(function() { 
  $("[id=image]").each(function(i) { 
    $(this).change(function(){ 
      divId = $(this).val(); 
      $("#form2").show();
      $("#form1").hide();
    
      
       
     
    }); 
  }); 
});