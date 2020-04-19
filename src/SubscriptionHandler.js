import Shortcut from './Shortcut';

/**
 * Main handler for shortcutifier
 */
class SubscriptionHandler {
    constructor() {
        this.registry = []; // registry of keys currently pressed
        this.subscribed = []; // Array of Shortcut objects
        this.listening = false; // flag on wether shortcutifier is listening to key presses

        this.handleKeyPresses = this.handleKeyPresses.bind(this)
        this.handleKeyUps = this.handleKeyUps.bind(this)
    }

    getSubscribedSymbols() {
        return Object.getOwnPropertySymbols(this.subscribed);
    }

    wereShortcutsPressed() {
        const symbols = this.getSubscribedSymbols();
        return this.subscribed[symbols[0]];
    }

    addListeners() {
        this.listening = true;
        window.addEventListener('keydown', this.handleKeyPresses);
        window.addEventListener('keyup', this.handleKeyUps);

    }

    removeListeners() {
        window.removeEventListener('keydown', this.handleKeyPresses);
        window.removeEventListener('keyup', this.handleKeyUps);
        console.log('ee')

        this.listening = false;
    }

    handleKeyPresses(e) {
        if (this.registry[e.keyCode]) return; // Protect from spamming on when keys are held
        this.registry[e.keyCode] = 1;

        let shortcut = undefined;
        if(shortcut = this.wereShortcutsPressed()) {
            shortcut.callback();
        }
    }

    handleKeyUps(e) {
        delete this.registry[e.keyCode];
    }

    // Add a shortcut to the subscription list
    subscribe(keys, callback) {
        // Only add listeners if there are shortcuts subscribed
        if (this.getSubscribedSymbols.length === 0 && !this.listening) {
            this.addListeners();
        }

        const shortcutId = Symbol('Shortcut ID');
        this.subscribed[shortcutId] = new Shortcut(keys, callback);

        // return method to unsubscribe the shortcut
        return () => {
            this.unsubscribe(shortcutId)
        };
    }

    // Remove shortcut from subscription list
    unsubscribe(symbol) {
        delete this.subscribed[symbol];

        // if there is no shortcuts subscribed, stop listening to key events
        if (this.getSubscribedSymbols.length === 0 && this.listening) {
            this.removeListeners();
        }
    }
}

export default SubscriptionHandler;