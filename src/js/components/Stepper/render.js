const Render = {
  /**
   * Render the first step of the quiz.
   */
  firstStep () {
    return `<div class="quiz quiz--is-first-step">
      <section class="quiz__container">
        <h1 class="quiz__title">Pele linda<br /> começa aqui</h1>
  
        <p class="quiz__description">Encontre a rotina de cuidados<br /> com a pele certa para você.</p>
  
        <button type="button" class="btn btn--init" onclick="handleNextStep();">
          Comece nosso quiz
        </button>
      </section>
    <div>`;
  },
  
  /**
   * Render the middle steps of the quiz.
   * @param {Object} data
   * @param {string} data.name
   * @param {string} data.question
   * @param {string} data.description
   * @param {boolean} data.isLastStep
   * @param {Object[]} data.choices
   * @param {string} data.choices.text
   * @param {string} data.choices.description
   * @param {*} nextStepId 
   */
  middleStep (data, nextStepId) {
    const isBulletActive = (step) => (nextStepId === step) 
      ? ' step__navigation-bullet--is-active'
      : '';

    return `
      <div class="quiz__container step">
        <header class="step__question">
          <div class="step__navigation">
            <div class="step__navigation-bullet${isBulletActive(1)}"></div>
            <div class="step__navigation-bullet${isBulletActive(2)}"></div>
            <div class="step__navigation-bullet${isBulletActive(3)}"></div>
          </div>
  
          <h1 class="step__title">${data.question}</h1>
          <p class="step__description">${data.description || ''}</p>
        </header>
  
        <div class="step__choices step__choices--${data.choices.length < 4 ? 3 : 4}-columns">
          ${data.choices.map(choice => `
            <div class="step__answer answer">
              <input
                type="checkbox"
                class="answer__input"
                name="${data.name}"
                id="${choice.text.split(" ").join("")}"
                value="${choice.id}"
                onclick="handleChoiceClick(this)" 
              />
              <label class="answer__value" for="${choice.text.split(" ").join("")}">${choice.text}
              </label>
              ${choice.description ? `
                <div class="answer__description">
                  <ul>
                    ${choice.description.map(text => `
                      <li>${text}</li>
                    `).join("")}
                  </ul>
                </div>
              ` : ''}
            </div>
          `).join('')}
        </div>
  
        <button type="button" class="btn btn--next" onclick="handleNextStep()" disabled>
          Próximo
        </button>
      </div>
    `;
  },
  
  /**
   * Render the last step of the quiz with the result products.
   * @param {Object[]} products - The list of products to be rendered
   * @param {string} products[].thumb - The image of an product
   * @param {string} products[].title - The title of an product
   * @param {string} products[].url - The url of an product
   */
  result(products) {
    return `
      <div class="quiz__container result">
        ${products.map(product => `
          <a href="${product.url}">
            <h1>${product.title}</h1>
            <img src="${product.thumb}" title="thumb" alt="thumb" />
          </a>
        `)}
      </div>
    `;
  },


  /**
   * Generates the content of the quiz step according to the given step id. If its 
   * @param {Object[]} quiz
   * @param {string} quiz.name
   * @param {string} quiz.question
   * @param {string} quiz.description
   * @param {boolean} quiz.isLastStep
   * @param {Object[]} quiz.answer
   * @param {number[]} quiz.answer.selectedIds
   * @param {number} stepId 
   * @param {number[]} selectedChoices 
   */
  generateContent(quiz, stepId, selectedChoices) {
    const data = quiz.find(step => step.id === stepId);
    const { isLastStep } = data;

    if (!isLastStep && stepId >= 1) {
      return Render.middleStep(data, stepId);
    } else if (isLastStep) {
      const answer = data.answer.find((answer) => {
        const { selectedIds } = answer;
  
        if (!selectedIds.length) return;
        if (!selectedChoices.length) return;
        if (selectedIds.length < selectedChoices.length) return;
        
        return selectedIds.every((id) => selectedChoices.includes(id)) && answer;
      });
      console.log(Render.result(answer.products));
      return Render.result(answer.products);
    }

    return Render.firstStep();
  },
}


export default Render;