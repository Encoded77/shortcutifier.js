import Shortcut from './Shortcut';

/**
 * Main handler for shortcutifier
 */
class SubscriptionHandler {
    constructor() {
        this.registry = []; // registry of keys currently pressed
        this.subscribed = []; // Array of Shortcut objects
    }

    // Add a shortcut to the subscription list
    subscribe(keys, callback) {
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
    }

    logSub() {
        console.table(this.subscribed)
    }
}

export default SubscriptionHandler;