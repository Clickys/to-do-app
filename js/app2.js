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
    var notesPositionToAdd = document.getElementById('notesPosition');
    var newNote = document.getElementById('newNoteForm');
    var notesTextareaBtn = document.getElementById('btnAddNotes');
    var noteAddedDate = new Date();
    var day = noteAddedDate.getDay();
    var dayOfMonth = noteAddedDate.getDate();
    var month = noteAddedDate.getMonth();
    var hours = noteAddedDate.getHours();
    var minutes = noteAddedDate.getMinutes();
    var year = noteAddedDate.getFullYear().toString().substr(-2);
    var daysArray = ['Sun,', 'Mon,', 'Thues,', 'Wed,', 'Thurs,', 'Fri,', 'Sat,'];
    var monthsArray = ['Jan.', 'Feb.', 'Mar.', 'Apr.', 'May', 'Jun.', 'Jul.', 'Aug.', 'Sept.', 'Oct.', 'Nov.', 'Dec.'];

    hours = (hours === 0 ? '12' : hours);
    minutes = (minutes < 10 ? '0' : '') + minutes;

    newNote.addEventListener('keydown', function (e) {
        if (e.keyCode === 13) {
            e.preventDefault();
            var notesTextarea = document.getElementById('addNotesTextarea').value;
            var newEl = document.createElement('div');
            var dateEl = document.createElement('span');
            var userTxt = document.createTextNode(notesTextarea);
            var dateTxt = dayOfMonth + ' ' + monthsArray[month] + ' ' + year + ' ' + hours + ':' + minutes;
            var dateNode = document.createTextNode(dateTxt);
            var closeIcon = document.createElement('i');
            var favourIcon = document.createElement('i');
            var checkIcon = document.createElement('i');
            var zoomIcon = document.createElement('i');
            var paragraphOfUserText = document.createElement('span');
            paragraphOfUserText.setAttribute('class', 'userTextAtNote');
        
            
            closeIcon.className += " fa fa-window-close";
            favourIcon.className = " fa fa-heart";
            checkIcon.setAttribute('class', 'fa fa-check');
            zoomIcon.setAttribute('class', 'fa fa-exclamation-circle');
            paragraphOfUserText.appendChild(userTxt);
            
            

            dateEl.appendChild(dateNode);
            dateEl.className += " noteDateAdded";
            
            
            newEl.appendChild(zoomIcon);
            newEl.appendChild(favourIcon);
            newEl.appendChild(checkIcon);
            newEl.appendChild(closeIcon);
            newEl.appendChild(paragraphOfUserText);
            newEl.appendChild(dateEl);
     
            newEl.className += " col-xl-2 col-lg-2 col-md-3 col-sm-4 col-12 notesDecoration";
            notesPositionToAdd.appendChild(newEl);
            document.getElementById("addNotesTextarea").value = "";
        };
    });
    
})();