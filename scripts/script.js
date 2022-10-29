// Находим кнопки открытия и закрытия поп-апа
let profileEditButton = document.querySelector(".profile__edit-button");
let popupCloseButton = document.querySelector(".popup__exit");
let popup = document.querySelector(".popup");

// Находим поля профиля
let profileName = document.querySelector(".profile__name");
let profileJob = document.querySelector(".profile__job");

// Находим форму и поля формы
let formElement = document.querySelector(".form");
let nameInput = document.querySelector(".form__input_info_name");
let jobInput = document.querySelector(".form__input_info_job");


// Функция открытия поп-апа
function openPopup() {
    popup.classList.add("popup_opened");
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
}

// Функция закрытия поп-апа
function closePopup() {
    popup.classList.remove("popup_opened");
}

// Обработчики событии (кликов) для открытия и закрытия поп-апа
profileEditButton.addEventListener("click", openPopup);
popupCloseButton.addEventListener("click", closePopup);

// Обработчик «отправки» формы, хотя пока она никуда отправляться не будет
function formSubmitHandler(form) {
    form.preventDefault();

    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;

    closePopup();
}

// Прикрепляем обработчик к форме: он будет следить за событием “submit” - «отправка»
formElement.addEventListener("submit", formSubmitHandler);
