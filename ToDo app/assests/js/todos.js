/// check of specific todos by clicking
//duži put preko if i else izjave gdje provjeravamo je li boja prava i tako
//postavljamo kod

// $("li").click(function(){
// 	if ($(this).css("color")==="rgb(128, 128, 128)") {
// 		$(this).css("color","black")
// 		$(this).css("text-decoration","none")
// 	}else{
// 		$(this).css("color","gray")
// 	    $(this).css("text-decoration","line-through")
// 	}
	
// })

//kraći put preko .completed klase i jQuery izjave toggleClass koji stavlja 
//klasu ako nije pridodana i miče ju ako je.
//on metoda spajamo sa tagom koji je tu kad se starnica loada prvi put
// ul je tu pa je onda on parent tag, a li dodajemo kasnije. On se odnosi na li
// $("li").on("click", function(){
// 	$(this).toggleClass("completed")
// }
//ovo ne bi radilo.. zato moramo staviti ul prvo pa onda on pa tek click pa li
//praktički nam govori da kod radi da kada stisnemo li unutar ul-a da ubaci completed klasu sa toggleom

$("ul").on("click","li", function(){
	$(this).toggleClass("completed")
})

//klick on x to delete todo
//stopPropagation funckija omogućava da se kada kliknemo na x on ne širi na li
//takozvani bubbling effect, sa tom funkcijom samo zagvaća označeni tag u ovom slučaju span
//,parent metoda nam omogućava da brišemo i roditeljski tag veći od onog koji smo
//onzačili, znači u ovom slučaju span i li
//praktički nam govori da kod radi da kada stisnemo li unutar ul-a da ubaci completed klasu sa toggleom
//isto kao i kod koda prije, ali sada tražimo da kada unutar ul, kliknemo span da izvrši kod
$("ul").on("click","span",function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove()
	});

	event.stopPropagation()
})


$("input[type='text']").keypress(function(event){
    if(event.which===13){
    	//grabing new todo from input with var todoText
        	var todoText=$(this).val()
        	//nakon što smo spremili value u varijablu todo čistimo input value
        	$(this).val("")
        //create a new todo in todo li and add to ul 
        $("ul").append("<li><span><i class='fa fa-trash-alt'></i></span> " + todoText + "</li>")
    }
})


// uređivanje nestanka i pojavljaivanja fadeout i in sa klikom na +

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
})


