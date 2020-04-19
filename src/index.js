import SubscriptionHandler from './SubscriptionHandler';

const shortcutifier = new SubscriptionHandler();

const unsub1 = shortcutifier.subscribe([17, 65], () => console.log('yeet callback1'))
const unsub2 = shortcutifier.subscribe([17, 90], () => console.log('yeet callback2'))

export default shortcutifier;