function openForm(evt, formName) {
    var i, tabcontent, tablinks;

    // Hide all tab contents
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Remove the active class from all tablinks
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab and add an active class to the button that opened the tab
    document.getElementById(formName).style.display = "block";
    evt.currentTarget.className += " active";
}

// No need to trigger a click event since we set the default display in HTML
document.getElementById("JismoniyShaxs").style.display = "block";

function clearForm() {
    document.getElementById('individualForm').reset();
    document.getElementById('legalEntityForm').reset();
}

function submitForm() {
    var formData;
    if (document.querySelector('.tablinks.active').innerText === "Jismoniy shaxs") {
        formData = $('#individualForm').serialize();
    } else {
        formData = $('#legalEntityForm').serialize();
    }
    // You can now submit formData using AJAX or any other method
    console.log(formData);
}
