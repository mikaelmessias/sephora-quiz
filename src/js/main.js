import Stepper from './components/Stepper';

(function () {
  document.getElementById('quizPage').innerHTML = Stepper.init();
  window.handleNextStep = Stepper.handleNextStep;
  window.handleChoiceClick = Stepper.handleChoiceClick;
})();
