import quiz from '../../resources/quiz';
import Render from './render';

const Stepper = {
  currentStep: 0,

  /** 
   * @type {number[]} 
   */
  lastSelected: [],
  
  /**
   *  @type {number[]} 
   */
  currentSelected: [],

  /**
   *  Render the first step HTML content.  
   */
  init() {
    return Render.firstStep();
  },

  /**
   * Generate the next step HTML content from the resource.
   */
  handleNextStep() {
    const nextStep = Stepper.currentStep + 1;
    
    Stepper.lastSelected = Stepper.lastSelected.concat(Stepper.currentSelected);
    Stepper.currentSelected = [];
    const selectedChoices = Stepper.lastSelected;
    console.log(selectedChoices);
    
    const quizWrapper = document.querySelector('.quiz');

    if (quizWrapper.classList.contains('quiz--is-first-step')) {
      quizWrapper.classList.remove('quiz--is-first-step');
    }

    quizWrapper.innerHTML = Render.generateContent(quiz, nextStep, selectedChoices);

    Stepper.currentStep = nextStep;
  },

  /**
   * Get the value from the target input and add it in the selected choices
   * array. 
   * @param {HTMLInputElement} target The target input
   */
  handleChoiceClick(target) {
    const nextButton = document.querySelector(".btn--next");
    const currentStep = Stepper.currentStep;
    const choice = +target.value;
    const MAX_SELECTED = currentStep < 3 ? 2 : 1;

    let checkedInputs = document.querySelectorAll(".step__choices input:checked");
    let selectedChoices = Stepper.currentSelected;

    if (!selectedChoices.includes(+choice)) {
      if (checkedInputs.length > MAX_SELECTED) {
        const shifted = selectedChoices.shift();

        checkedInputs.forEach(input => {
          if (+input.value === shifted) {
            input.checked = false;
            input.classList.add("answer__input--is-disabled");
          }
        });

        target.classList.remove("answer__input--is-disabled");
      }

      selectedChoices.push(choice);
    } else {
      Stepper.currentSelected = selectedChoices.filter((item) => item !== choice)
      selectedChoices = Stepper.currentSelected;
    }

    if (selectedChoices.length === MAX_SELECTED) {
      const inputsToDisable = document.querySelectorAll(".step__choices .answer__input:not(:checked)");

      inputsToDisable.forEach(input => input.classList.add("answer__input--is-disabled"));
    } else {
      const inputsToEnable = document.querySelectorAll(".step__choices .answer__input--is-disabled");
      
      if (inputsToEnable.length) {
        inputsToEnable.forEach(input => input.classList.remove("answer__input--is-disabled"));
      }
    }

    if (!selectedChoices.length) {
      nextButton.disabled = true;
    } else {
      nextButton.disabled = false;
    }
  },
}

export default Stepper;