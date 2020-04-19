# Shortcutifier

A small lib to help with registering shortcuts on a webpage without impacting performance


# Code example:
The callback is called when all key specified in the shortcut are pressed simultaneously
```javascript
import ShortcutHandler from 'shortcutifier';

const keys = [65, 90]; // array of keycodes
const callback = () => {console.log('A & Z were pressed a the same time')}; // callback when all keys are pressed simultaneously

const handler = new ShortcutHandler();
handler.subscribeShortcut(keys, callback);

```
The subscribeShortcut method also return a function to remove the shortcut
```javascript

const unsubscribe = handler.subscribeShortcut(keys, callback);
unsubscribe(); // remove the shortcut
```

# Infos
The event handler automatically remove the keypress listeners when no shortcuts are currently subscribed.

Callback is only called once per shortcut press to avoid mistakenly spamming when holding the shortcut.