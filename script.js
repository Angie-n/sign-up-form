function validateForm() {    
    let confirmPw = document.getElementById("confirm-password");
    let pw = document.getElementById("password");
    if (confirmPw.value != pw.value) {
        confirmPw.setCustomValidity("Passwords do not match.");
        confirmPw.reportValidity();
        confirmPw.focus;
        confirmPw.classList.add("invalid");
        pw.classList.add("invalid");
        confirmPw.addEventListener('input', e => {
            confirmPw.setCustomValidity("");
            if(confirmPw.value == pw.value) {
                confirmPw.classList.remove("invalid");
                pw.classList.remove("invalid");
            }
        });
        return false;
    }
    return true;
}