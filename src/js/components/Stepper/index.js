import quiz from '../../resources/quiz';
import Render from './render';

const Stepper = {
  currentStep: 0,

  /** 
   * @type {number[]} 
   */
  choices: [],

  /**
   * @typedef Selected
   * @type {object}
   * @property {string} id
   * @property {number[]} choices
   */

  /** @type {Selected[]} */
  prevSelected: [],

  /** @type {Selected[]} */
  currentSelected: [],

  /**
   *  Render the first step content.  
   */
  init() {
    return Render.firstStep();
  },

  /**
   * Generate the next step content from the decision tree.
   * @param {number} stepId
   */
  handleStepBack(stepId) {
    if (stepId > Stepper.currentStep) {
      return;
    }

    const previousStep = stepId ? stepId : Stepper.currentStep - 1;
    
    if (previousStep === 1) {
      Stepper.choices = [];
      Stepper.prevSelected = [];
      Stepper.currentSelected = [];
    } else {
      const prevSelected = Stepper.prevSelected.find(({ stepId }) => stepId === previousStep - 1);
      Stepper.choices = prevSelected.choices;
      Stepper.prevSelected = [prevSelected];
      Stepper.currentSelected = [];
    }

    const quizWrapper = document.querySelector('.quiz');
    quizWrapper.innerHTML = Render.generateContent(quiz, previousStep);
  
    Stepper.currentStep = previousStep;
  },

  /**
   * Generate the next step content from the decision tree.
   */
  handleNextStep() {
    if (Stepper.currentStep > 0) {
      Stepper.choices = Stepper.choices.concat(Stepper.currentSelected);
      Stepper.prevSelected.push({ stepId: Stepper.currentStep, choices: Stepper.currentSelected });
      Stepper.currentSelected = [];
    }
 
    const nextStep = Stepper.currentStep + 1;
    
    const quizWrapper = document.querySelector('.quiz');

    if (quizWrapper.classList.contains('quiz--is-first-step')) {
      quizWrapper.classList.remove('quiz--is-first-step');
    }

    quizWrapper.innerHTML = Render.generateContent(quiz, nextStep, Stepper.choices);

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