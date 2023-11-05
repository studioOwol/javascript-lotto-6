import Validator from './utils/Validator.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    try {
      this.#validate(numbers);
      Validator.validateLotto(numbers);
      this.#numbers = numbers;
    } catch (error) {
      throw error;
    }
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
  }

  // TODO: 추가 기능 구현
  getWinningNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
