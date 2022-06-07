const flightPath = {
    curviness: 1.25,
    autoRotate: true,
    value: [
        { x: 100, y: -20 }, { x: 500, y: 40 }
    ]
}

const tween = new TimelineLite();

tween.add(
    TweenLite.to('trakdot-img', 1, {
        bezier: flightPath,
        ease: Power1.easeInOut
    })
);