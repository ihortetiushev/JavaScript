function sighUpDropDownFunction(elementId) {
    document.getElementById(elementId).classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        let dropdowns = document.getElementsByClassName("dropdown-content");
        let i;
        for (i = 0; i < dropdowns.length; i++) {
            let openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}
let images = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg']
let currentIndex = 0;

//Кнопки вперёд / назад
function changeNextPic() {
    currentIndex++;
    if (currentIndex >= images.length) {
        currentIndex = 0;
    }
    let image = images[currentIndex]
    document.getElementById("pic1").src = 'slider/' + image
}

function changePreviousPic() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }
    let image = images[currentIndex]
    document.getElementById("pic1").src = 'slider/' + image
}


//Валидация
function validateName() {
    let regex = /^[a-zA-Zа-яА-ЯёЁ]{3,}$/;
    let nameValue = document.getElementById("input_name").value;
    if (nameValue.match(regex)) {
        return true;
    } else {
        alert("Поле \"Ім'я\" має містити не менше 3х букв")
        return false;
    }
}

function validateSurname() {
    let regex = /^[a-zA-Zа-яА-ЯёЁ]{3,}$/;
    let surnameValue = document.getElementById("input_surname").value;
    if (surnameValue.match(regex)) {
        return true;
    } else {
        alert("Поле \"Прізвище\" має містити не менше 3х букв")
        return false;
    }
}

function validateEmail() {
    let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let emailValue = document.getElementById("input_email").value;

    if (emailValue.match(regex)) {
        return true;
    } else {
        alert("Введіть правильну адресу електронної пошти")
        return false;
    }
}

function checkPhoneNumber() {
    let regex = /^\(\d\d\d\) \d\d\d-\d\d\d\d$/;
    let phoneValue = document.getElementById("input_phone").value;
    if (phoneValue.match(regex)) {
        return true;
    } else {
        alert("Введіть номер телефону у форматі: (_ _ _)  _ _ _ - _ _ _ _. Номер телефону введено неправильно!");
        return false;
    }
}

function checkComment() {
    let regex = /^.{10,}$/;
    let commentValue = document.getElementById("input_comment").value;
    if (commentValue.match(regex)) {
        return true;
    } else {
        alert("Коментар має містити мінімум 10 символів!");
        return false;
    }
}

function validate() {
    if (!validateName()) {
        return;
    }
    if (!validateSurname()) {
        return;
    }
    if (!validateEmail()) {
        return;
    }
    if (!checkPhoneNumber()) {
        return;
    }
    checkComment();
    alert("Ви зареєстровані!")
    window.location.href = "index.html";
}