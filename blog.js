var rowCount = 0;
$(document).ready(function(){
  addAjax();
});
function addAjax(){
  // addToggle();
    $.ajax({
    url: '/public/table.json',
    dataType: 'json',
    method: 'get',
    success: function (response){

        $.each(response, function(key, val) {




            console.log(val);

          var blankRow = $('.blank').clone();
          rowCount++;
          $(blankRow).find('.column-0').text(rowCount);
          $(blankRow).find('.column-1').text(parseInt(response.length+1));
          $(blankRow).find('.column-2').text(val.firstName);
          $(blankRow).find('.column-3').text(val.lastName);
          $(blankRow).find('.column-4').text(val.username);
          $(blankRow).removeClass('blank');
          $('table >tbody').append($(blankRow));
          $(blankRow).addClass('row-'+parseInt(response.length+1));



      })
    }
  })
}
function addColor(){
  var lineColor = $('.color').val();
  var lineNumber = $('.line-number').val();
  $(blankRow).find('.column-0').text(rowCount);
  $('.row-'+lineNumber).addClass(lineColor);


    console.log('.row-'+lineNumber);
  }

function addRow(){

    var firstName = $('.firstname').val();
    var lastName = $('.lastname').val();
    var userName = $('.username').val();
    rowCount++;
    var blankRow = $('.blank').clone();
    $(blankRow).find('.column-0').text(rowCount);
    $(blankRow).find('.column-2').text(firstName);
    $(blankRow).find('.column-3').text(lastName);
    $(blankRow).find('.column-4').text('@'+userName);
    $(blankRow).removeClass('blank');
    $('table >tbody').append($(blankRow));
    $(blankRow).addClass('row-'+rowCount);

     console.log('column-1 '+rowCount);
     console.log('column-2 '+firstName);
     console.log('column-3 '+lastName);
     console.log('column-4 '+userName);
     return false;
addJSON();
   }
