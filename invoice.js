function getprint(id) {
    window.print();
}

function btnAdd(id) {
   var v = $("#trow").clone().appendTo("#tbody");
   $(v).find("input").val('');
   $(v).removeClass("d-none");
}

function btndelete(value) {
    $(value).parent().parent().remove();
}


function calculations(v) {
    var index = $(v).parent().parent().index();
    var qty = document.getElementsByName("qua") [index].value;
    var rate = document.getElementsByName("rate") [index].value;
    var amt =qty * rate;
    document.getElementsByName("amt") [index].value = amt;
}