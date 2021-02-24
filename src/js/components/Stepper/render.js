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
   * @param {Object} content - The current step content
   * @param {string} content.name
   * @param {string} content.question
   * @param {string} content.description
   * @param {boolean} content.isLastStep
   * @param {Object[]} content.choices
   * @param {string} content.choices.text
   * @param {string} content.choices.description
   * @param {number} stepId - The current step id
   */
  middleStep (content, stepId) {
    const isBulletActive = (step) => (stepId === step) 
      ? ' step__navigation-bullet--is-active'
      : '';

    return `
      <div class="quiz__container step">
        <header class="step__question">
          <div class="step__navigation">
            <button
              class="step__navigation-bullet${isBulletActive(1)}"
              onClick={handleStepBack(1)}
            />
            <button
              class="step__navigation-bullet${isBulletActive(2)}"
              onClick={handleStepBack(2)}
            />
            <button
              class="step__navigation-bullet${isBulletActive(3)}"
            />
          </div>
  
          <h1 class="step__title">${content.question}</h1>
          <p class="step__description">${content.description || ''}</p>
        </header>
  
        <div class="step__choices step__choices--${content.choices.length < 4 ? 3 : 4}-columns">
          ${content.choices.map(choice => `
            <div class="step__answer answer">
              <input
                type="checkbox"
                class="answer__input"
                name="${content.name}"
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
  
        <div class="step__buttons">
          ${stepId > 1 ? `
            <button type="button" class="btn btn--back" onclick="handleStepBack()">
              Voltar
            </button>
          ` : ''}

          <button type="button" class="btn btn--next" onclick="handleNextStep()" disabled>
            ${stepId < 3 ? `Próximo` : 'Ver resultados'}
          </button>
        </div>
      </div>
    `;
  },
  
  /**
   * Render the last step of the quiz with the result products.
   * @param {Object[]} products - The list of products to be rendered
   * @param {string} products[].thumb
   * @param {string} products[].title
   * @param {string} products[].url
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
   * Generate content for the current step.
   * @param {Object[]} quiz - The decision tree
   * @param {string} quiz.name
   * @param {string} quiz.question
   * @param {string} quiz.description
   * @param {boolean} quiz.isLastStep
   * @param {Object[]} quiz.answer
   * @param {number[]} quiz.answer.selectedIds
   * @param {number} stepId - The current step
   * @param {number[]} selectedChoices - The previous selected choices
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

      return Render.result(answer.products);
    }

    return Render.firstStep();
  },
}


export default Render;