function verifyRequired(inputControl, errorMessage, surround) {
  if ($(inputControl).val() === '') {
    $(errorMessage).show();
    $(surround).addClass('in-error');
  } else {
    $(errorMessage).hide();
    $(surround).removeClass('in-error');
  }
}

function verifyEmail(inputControl, errorMessage, surround)
{
	if(!/^[-_a-zA-Z0-9]+@([-_a-zA-Z0-9]+\.)+[a-zA-Z]+$/.test($(inputControl).val()))
	{
		$(errorMessage).show();
		$(surround).addClass('in-error');
	}
	else
	{
	   	$(errorMessage).hide();
		$(surround).removeClass('in-error');
	}
}

function checkAnswers(NumQues,Que){
	var Right=0;
	var Wrong=0;
	for (var X=1; X<=NumQues; X++){
		var Qs=document.getElementsByName("VariableQ"+X);
		var Answered=false;
		for (var Y=0; Y<Qs.length; Y++){
			if (Qs[Y].checked){
				Answered=true;
				if (Qs[Y].id){
					Right++;
				} else {
					Wrong++;
				}
			}
		}
		if (!Answered){
			Wrong++;
		}
	}
	alert("Right: "+Right+"\nWrong: "+Wrong);
}