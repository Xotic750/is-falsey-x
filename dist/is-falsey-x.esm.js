import toBoolean from 'to-boolean-x';
/**
 * This method tests if a given value is falsey.
 *
 * @param {*} [value] - The value to test.
 * @returns {boolean} `true` if the value is falsey: otherwise `false`.
 */

export default function isFalsey(value) {
  return !toBoolean(value);
}

//# sourceMappingURL=is-falsey-x.esm.js.map