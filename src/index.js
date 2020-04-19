import SubscriptionHandler from './SubscriptionHandler';

const shortcutifier = new SubscriptionHandler();

const unsub1 = shortcutifier.subscribe([65, 90], () => console.log('yeet callback1'))
const unsub2 = shortcutifier.subscribe([2, 34, 54], () => console.log('yeet callback2'))
const unsub3 = shortcutifier.subscribe([3, 34, 54], () => console.log('yeet callback3'))


export default shortcutifier;