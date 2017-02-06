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
