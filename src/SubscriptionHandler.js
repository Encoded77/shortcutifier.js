import Shortcut from './Shortcut';

/**
 * Main handler for shortcutifier
 */
class SubscriptionHandler {
    constructor() {
        this.registry = []; // registry of keys currently pressed
        this.subscribed = []; // Array of Shortcut objects
        this.listening = false; // flag on wether shortcutifier is listening to key presses

        this.init();
    }

    addListeners() {
        this.listening = true;
        window.addEventListener('keydown', this.handleKeyPresses);
        window.addEventListener('keyup', this.handleKeyUps);

    }

    removeListeners() {
        window.removeEventListener('keydown', this.handleKeyPresses);
        window.removeEventListener('keyup', this.handleKeyUps);
        this.listening = false;
    }

    handleKeyPresses(e) {

    }

    handleKeyUps(e) {

    }

    // Add a shortcut to the subscription list
    subscribe(keys, callback) {
        // Only add listeners if there are shortcuts subscribed
        if (this.subscribed.length === 0 && !this.listening) {
            this.addListeners();
        }

        const shortcutId = Symbol('Shortcut ID');
        this.subscribed[shortcutId] = new Shortcut(keys, callback);

        // return method to unsubscribe the shortcut
        return () => {
            console.log(this)
            this.unsubscribe(shortcutId)
        };
    }

    // Remove shortcut from subscription list
    unsubscribe(symbol) {
        delete this.subscribed[symbol];

        // if there is no shortcuts subscribed, stop listening to key events
        if (this.subscribed.length === 0 && this.listening) {
            this.removeListeners();
        }
    }
}

export default SubscriptionHandler;