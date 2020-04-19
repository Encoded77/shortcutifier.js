# Shortcutifer

- A small lib to help with registering shortcuts on a webpage

```javascript
import ShortcutHandler from 'shortcutifier';

const keys = [65, 90]; // array of keycodes
const callback = () => {console.log('A & Z were pressed a the same time')}; // callback when all keys are pressed simultaneously

const handler = new ShortcutHandler();
const unsubscribe = handler.subscribeShortcut(keys, callback);

unsubscribe(); // remove the shortcut
```