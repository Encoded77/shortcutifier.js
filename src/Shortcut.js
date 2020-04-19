/**
 * @param {array} keys - array of keyCodes
 * @param {function} callback - callback to be call when keys are all pressed
 */
class Shortcut {
    constructor(keys, callback) {
        this.keys = keys;
        this.callback = callback;
        this.called = false; // Flag to avoid callback spam
    }

    toggleCall() {
        this.called = !this.called;
    }
}

export default Shortcut;