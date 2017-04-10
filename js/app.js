/**
 * Created by clickys on 3/16/2017.
 */

(function () {
    
    setInterval(intervalFunctions,1000);
    
    function intervalFunctions() {
        updateClock();
    }
    
    
    
    function updateClock() {
        var currentTime = new Date();
        
        var currentHours = currentTime.getHours();
        var currentMinutes = currentTime.getMinutes();
        var currentSeconds = currentTime.getSeconds();
        var currentDay = currentTime.getDay();
        var currentMonth = currentTime.getMonth();
        var currentYear = currentTime.getFullYear();
        var currentDayOfMonth = currentTime.getDate();
        
        var daysArray = ['Sun,', 'Mon,', 'Thues,', 'Wed,', 'Thurs,', 'Fri,', 'Sat,'];
        var monthsArray = ['Jan.', 'Feb.', 'Mar.', 'Apr.', 'May', 'Jun.', 'Jul.', 'Aug.', 'Sept.', 'Oct.', 'Nov.', 'Dec.'];
        
        currentMinutes = (currentMinutes < 10 ? '0' : '') + currentMinutes;
        currentSeconds = (currentSeconds < 10 ? '0' : '') + currentSeconds;
        currentHours = (currentHours == 0 ) ? '12' : currentHours;
        currentDay = daysArray[currentDay];
        currentMonth = monthsArray[currentMonth];
        
        
        var currentTimeString = currentHours + ':' + currentMinutes + ':' + currentSeconds;
        var dateLocationInHeader = document.getElementsByClassName('headerDate')[0];
        dateLocationInHeader.innerHTML = currentDay + ' ' + currentDayOfMonth + ' ' + currentMonth + ' ' + currentYear + '<br>' ;
        dateLocationInHeader.innerHTML += currentTimeString;
        
    }
  

  
    
    //IIFE Function for coding the add note button to create a new div with notes
    
    (function(){
        var notesPositionToAdd = document.getElementById('notesPosition');
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
        
        notesTextareaBtn.addEventListener('click', function(e){
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
     
           
//            newEl.innerHTML =  checkIcon.outerHTML + closeIcon.outerHTML + favourIcon.outerHTML  + userTxt.textContent + ' <br> ' + '<br>' + dateEl.outerHTML;
            newEl.className += " col-xl-2 col-lg-2 col-md-3 col-sm-4 col-12 notesDecoration";
            notesPositionToAdd.appendChild(newEl);
            document.getElementById("addNotesTextarea").value = "";
        
//            $('.fa-window-close').on('click', function(event){
//                event.preventDefault();
//                console.log($(this).parents('div')[0]);
//                $(this).parents('div')[0].remove();
//                
//            });
//      
            
        });
    })();



    // #addNotesButton functions on click to create a note 

    (function () {
        
        var $addNoteButton = $('#addNotesButton');
        var $addNotesForm = $('#newNoteForm');
        var $addNotesLabel = $('#newNoteForm > .form-group > label');
        var $insertNotesButton = $('#newNoteForm > .form-group > #insertNoteButton');
        var $addNotesTextarea = $('#addNotesTextarea');
        $addNotesForm.hide();

        $addNoteButton.on('click', function (e) {
            if ($addNotesTextarea.is(':visible')) {
                $addNotesForm.hide();
            } else {
                $addNotesForm.slideDown().animate({
                    width: "100%",
                }, 1500);
            }
        });
        
        $('#newNoteForm').submit(function (e) {
            e.preventDefault();

            if ($addNotesForm.is(':visible')) {
                var $textAreaValue = $('#addNotesTextarea');
                $textAreaValue.val('');
                $addNotesForm.hide();
            }
        });
    })();
    
    // MODAL CREATION AND CUSTOMIZATION 
    (function(){
        // Get the modal
        var modal = document.getElementById('myModal');

        // Get the button that opens the modal
        var btn = document.getElementById("addNotesButton");

        // Get the <span> element that closes the modal
        var span = document.getElementsByClassName("close")[0];

        // When the user clicks on the button, open the modal 
        btn.onclick = function() {
            modal.style.display = "block";

        }

        // When the user clicks on <span> (x), close the modal
        span.onclick = function() {
            modal.style.display = "none";
        }

        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }

        var textAreaUserInput =  document.getElementById('addNotesTextarea');

        textAreaUserInput.addEventListener('input', function(){
            let spanCount = document.getElementsByClassName('wordCount')[0];
            let notesTextarea = document.getElementById('addNotesTextarea').value;

            spanCount.innerHTML = notesTextarea.length;
        })
    })();

     (function () {
         
         document.addEventListener('click', function (e) {
             if (e.target.closest('.notesDecoration') && e.target.matches('.fa-heart')) {
                 var cloneFavourNode = e.target.closest('.notesDecoration').cloneNode(true);
                 var favourModal = document.getElementById('favourModal');
                 var favourCon = document.getElementsByClassName('favourModalCon')[0];
                 var favourClose = document.getElementsByClassName('favourClose')[0];
                 var createFavourIcon = document.createElement('i');
                
                 createFavourIcon.setAttribute('class', 'fa fa-heart favourIconNodes')
                 cloneFavourNode.appendChild(createFavourIcon);
                 cloneFavourNode.setAttribute('class', 'favourNotesModal');
                 favourCon.appendChild(cloneFavourNode);
                 favourModal.style.display = "block";
                 for (var i = 2; i >= 0; i--) {
                     cloneFavourNode.removeChild(cloneFavourNode.childNodes[i]);
                 }
                 e.target.closest('.notesDecoration').parentNode.removeChild(e.target.parentNode);

                 favourClose.addEventListener('click', function () {
                     favourModal.style.display = "none";
                 });
                 
                 window.addEventListener('click', function(e){
                     if (e.target == favourModal){
                         favourModal.style.display = "none";
                     }
                 })

             }
         });
         document.addEventListener('click', function (e) {
             if (e.target.closest('.notesDecoration') && e.target.matches('.fa-check')) {
                 var doneModal = document.getElementById('doneModal');
                 var doneModalCon = document.getElementsByClassName('doneModalCon')[0];
                 var cloneDoneNode = e.target.closest('.notesDecoration').cloneNode(true);
                 var doneClose = document.getElementsByClassName('doneClose')[0];
                 var createCheckIcon = document.createElement('i');
                 
                 createCheckIcon.setAttribute('class', 'fa fa-check checkIconNodes');
                 cloneDoneNode.appendChild(createCheckIcon);
                 cloneDoneNode.setAttribute('class', 'doneNotesModal');
                 doneModalCon.appendChild(cloneDoneNode);

                 doneModal.style.display = "block";
                 for (var i = 2; i >= 0; i--) {
                     cloneDoneNode.removeChild(cloneDoneNode.childNodes[i]);
                 }
                 e.target.closest('.notesDecoration').parentNode.removeChild(e.target.parentNode);
                
                 window.addEventListener('click', function(e){
                     if (e.target == doneModal){
                         doneModal.style.display = "none";
                     }
                 });
                 doneClose.addEventListener('click', function(e){
                    doneModal.style.display = "none"; 
                 });
             }
         });
             
         
         
         document.addEventListener('click', function (e) {
             if (e.target.closest('.notesDecoration') && e.target.matches('.fa-exclamation-circle')) {
                 var zoomModal = document.getElementById('zoomModal');
                 var zoomCon = document.getElementsByClassName('zoomModalCon')[0];
                 var zoomClose = document.getElementsByClassName('zoomClose')[0];
                 var cloneNode = e.target.closest('.notesDecoration').cloneNode(true);
                 var importantNode = document.createElement('i');
                 importantNode.setAttribute('class', 'fa fa-exclamation-circle modalIconNodes');

                 cloneNode.appendChild(importantNode);
                 cloneNode.className = "importantNodes";

                 for (var i = 2; i >= 0; i--) {
                     cloneNode.removeChild(cloneNode.childNodes[i]);
                 }

                 zoomCon.appendChild(cloneNode);
                 zoomModal.style.display = "block";
                 e.target.closest('.notesDecoration').parentNode.removeChild(e.target.parentNode);

                 zoomClose.addEventListener('click', function () {
                     zoomModal.style.display = "none";
                 });
                 window.addEventListener('click', function (e) {
                     if (e.target == zoomModal) {
                         zoomModal.style.display = "none";
                     }
                 })


             }
         });
         document.addEventListener('click', function (e) {
             if (e.target.closest('.importantNodes') && e.target.matches('.fa.fa-window-close')) {
                 e.target.closest('.importantNodes').parentNode.removeChild(e.target.parentNode);
             } else if (e.target.closest('.favourNotesModal') && e.target.matches('.fa.fa-window-close')) {
                 e.target.closest('.favourNotesModal').parentNode.removeChild(e.target.parentNode);
             } else if (e.target.closest('.doneNotesModal') && e.target.matches('.fa.fa-window-close')) {
                 e.target.closest('.doneNotesModal').parentNode.removeChild(e.target.parentNode);
             }


         });
         

     })();
    
})();