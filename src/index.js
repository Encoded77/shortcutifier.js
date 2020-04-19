import SubscriptionHandler from './SubscriptionHandler';

const shortcutifier = new SubscriptionHandler();

const unsub1 = shortcutifier.subscribe([1, 34, 54], () => console.log('yeet callback1'))
const unsub2 = shortcutifier.subscribe([2, 34, 54], () => console.log('yeet callback2'))
const unsub3 = shortcutifier.subscribe([3, 34, 54], () => console.log('yeet callback3'))
const unsub4 = shortcutifier.subscribe([4, 34, 54], () => console.log('yeet callback4'))
const unsub5 = shortcutifier.subscribe([5, 34, 54], () => console.log('yeet callback5'))

export default shortcutifier;
