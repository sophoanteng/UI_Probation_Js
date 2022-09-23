function refresh() {    
    setTimeout(function () {
        location.reload()
    }, 100);
}
// Drop down
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  window.onclick = function(event) {
    if (!event.target.matches('.drop')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
// validation of form
function validate(){  
  var departName=document.f1.depart.value;  
  var departSort=document.f1.sort.value;  
  var status=false;  
  if(departName == ""){  
  document.getElementById("departmentShow").innerHTML=  
  "请输入部门名称"  
  status=false;
  }
  if(departSort == ""){  
  document.getElementById("departmentSort").innerHTML=  
  "请输入部门排序"  
  status=false; 
  }    
  return status;  
  }  
function validateEdit(){  
  var departName=document.f2.departEdit.value;  
  var departSort=document.f2.sortEdit.value;  
  var status=false;  
  if(departName == ""){  
  document.getElementById("departmentEdit").innerHTML=  
  "请输入部门名称"  
  status=false;
  }
  if(departSort == ""){  
  document.getElementById("departmentSortEdit").innerHTML=  
  "请输入部门排序"  
  status=false; 
  }    
  return status;  
  }  
// Zoom in
  var zoom = 1;
		
  $('.zoom').on('click', function(){
    zoom += 0.1;
    $('.target').css('transform', 'scale(' + zoom + ')');
  });
  $('.zoom-init').on('click', function(){
    zoom = 1;
    $('.target').css('transform', 'scale(' + zoom + ')');
  });
  $('.zoom-out').on('click', function(){
    zoom -= 0.1;
    $('.target').css('transform', 'scale(' + zoom + ')');
  });
// show column
function showHideRow(row) {
  $("#" + row).toggle();
}
