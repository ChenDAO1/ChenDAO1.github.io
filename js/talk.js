new TypeIt("#zhwzxy", {
        loop: true,
        cursorSpeed: 1000,
        speed: 100
    })
    .type("ZHW && ZXY")
    .pause(2000)
    .delete(null, {
        delay: 500
    })
    .type("友谊地久天长.....")
    .pause(3000)
    .go();

new TypeIt('#talkToZhw', {
    lifeLike: true,
    cursorSpeed: 1000,
    waitUntilVisible: true,
    speed: 100
}).go();