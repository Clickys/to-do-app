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
    function clean(node)
    {
      for(var n = 0; n < node.childNodes.length; n ++)
      {
        var child = node.childNodes[n];
        if
        (
          child.nodeType === 8 
          || 
          (child.nodeType === 3 && !/\S/.test(child.nodeValue))
        )
        {
          node.removeChild(child);
          n --;
        }
        else if(child.nodeType === 1)
        {
          clean(child);
        }
      }
    }
    clean(document.body);
    (function () {
            function daysInThisMonth() {
                var now = new Date();
                return new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
            }

            var year = new Date().getFullYear();
            var month = new Date().getMonth() + 1;
    


            var day = new Date(year + "-" + month + "-01").getDay();
            day = (day === 0) ? 7 : day;
            var howManyDays = daysInThisMonth();
            var currentDay = new Date().getDate();
            
           
        


            var calendarTable = document.getElementById('calendarTable').tBodies[0];
            var rows = document.getElementById('calendarTable').tBodies[0].rows;

            function fillCalendar() {
                for (var i = 0; i < rows.length; i++) {
                    if (rows[i] == rows[0]) {
                        var k = 1;
                        for (var j = day; j < rows[i].cells.length; j++) {
                            if (k === currentDay) {
                                rows[i].cells[j].style.backgroundColor = 'white';
                            }
                            if (k <= howManyDays) {
                                rows[i].cells[j].innerHTML = k;
                                k++;
                            } else break;
                        }
                    } else {
                        for (var j = 0; j < rows[i].cells.length; j++) {
                            if (k === currentDay) {
                                rows[i].cells[j].style.backgroundColor = 'white';
                            }
                            if (k <= howManyDays) {
                                rows[i].cells[j].innerHTML = k;
                                k++;
                            } else break;
                        }
                    }


                }
                var calendarModal = document.getElementById('calendarModal');
                var calendarPos = document.getElementsByClassName('headerDate')[0];

                window.addEventListener('click', function (e) {
                    if (e.target == calendarModal) {
                        calendarModal.style.display = "none";
                    }
                })

                calendarPos.addEventListener('click', function (e) {
                    calendarModal.style.display = "block";
                })

                var getElPos = document.getElementsByClassName('calendarModalConTitle')[0];
                var monthsArray = ['Jan.', 'Feb.', 'Mar.', 'Apr.', 'May', 'Jun.', 'Jul.', 'Aug.', 'Sept.', 'Oct.', 'Nov.', 'Dec.'];
                var monthNow = new Date().getMonth();
                monthSpan = document.createElement('span');
                monthText = document.createTextNode(' ' + monthsArray[monthNow]);
                monthSpan.appendChild(monthText);
                monthSpan.className = 'monthString';

                getElPos.appendChild(monthSpan);
                var monthString = document.getElementsByClassName('monthString')[0];
                monthString.style.color = '#5cb85c';
            }
        (function (){
            var calendarCloseBtn = document.getElementsByClassName('doneClose')[1];
            var calendarModal = document.getElementById('calendarModal');
            
            calendarCloseBtn.addEventListener('click', function(){
                calendarModal.style.display = "none";    
            })
        })();
        
    fillCalendar();

    })();

})();
    function dragStart(event) {
            event.currentTarget.style.border = "dashed";
            event.currentTarget.style.opacity = "0.5";
            event.dataTransfer.setData('text/plain', event.target.id);
    }
    
    function dragOver(event) {
        event.preventDefault();
    }

    function dragDrop(event) {
        event.preventDefault();
        var data = event.dataTransfer.getData('text');
          event.target.style.opacity = "1";
        event.target.style.border = "none";
        event.target.appendChild(document.getElementById(data));
        
    }
    function dragEnd(event) {
        var el = event.dataTransfer.getData('text');
        event.target.style.opacity = "1";
        event.target.style.border = "none";
        event.dataTransfer.clearData();
    }