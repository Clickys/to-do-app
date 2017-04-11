(function(){
   
    (function(){
        var getFavourPos = document.getElementById('favourOpenModal');
        getFavourPos.addEventListener('click', function(e){
           var getModalPos = document.getElementById('favourModal');
            getModalPos.style.display = "block";
         
            getModalPos.addEventListener('click', function(e){
                if (e.target == getModalPos) {
                    getModalPos.style.display = "none";
                }
            });
        });
        var getImportantPos = document.getElementById('importantOpenModal');
        getImportantPos.addEventListener('click', function(e){
            var getModalPos = document.getElementById('zoomModal');
            getModalPos.style.display = "block";
            
            getModalPos.addEventListener('click', function(e){
               if (e.target = getModalPos){
                   getModalPos.style.display ="none";
               } 
            });
        });
        
        var getDonePos = document.getElementById('doneOpenModal');
        getDonePos.addEventListener('click', function(e){
           let getModalPos = document.getElementById('doneModal');
            getModalPos.style.display = "block";
            
            getModalPos.addEventListener('click', function(e){
               if (e.target == getModalPos) {
                   getModalPos.style.display = 'none';
               } 
            });
        });
        
    })();
    
    
    
    
})();