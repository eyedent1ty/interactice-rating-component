const ratingButtons = document.querySelectorAll('.buttons button');
const submitBtn = document.querySelector('.submit-btn');
let selectedRating;
let currentSelectedBtn;

const submitHandler = () => {
  const card1 = document.querySelector('.card-1');
  const card2 = document.querySelector('.card-2');
  const result = document.querySelector('.card-2 > .result');
  card1.classList.add('hide');
  result.innerHTML = `You selected ${currentSelectedBtn.innerHTML} out of 5`;
  card2.classList.remove('hide');
};

const clickHandler = function () {
  if (currentSelectedBtn !== undefined) {
    currentSelectedBtn.classList.remove('selected-rate');
  }
  currentSelectedBtn = this;
  currentSelectedBtn.classList.add('selected-rate');
  submitBtn.classList.remove('disable');
};

const addClickHandler = (btns, callback) => {
  for (const btn of btns) {
    btn.addEventListener('click', clickHandler);
  }
};

addClickHandler(ratingButtons, clickHandler);
submitBtn.addEventListener('click', submitHandler);
