sendEmail = () => {
	
    const response = document.forms.response

    if (response.name.value == "") {
        return alert("Invalid name")
    } else if (!response.email.checkValidity()) {
        return alert("Invalid email")
    } else if (response.message.value == "") {
        return alert("Invalid message")
    }

    alert("successfully sent")
}