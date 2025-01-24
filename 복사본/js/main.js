$(document).ready(function(){
    const images = $("main .visual .item-box .img-box figure");
        
    const lerp = (a, b, n) => (1 - n) * a + n * b;
    const map = (x, a, b, c, d) => ((x - a) * (d - c)) / (b - a) + c;
    
    const getMousePosition = e => {
        let posX = e.clientX;
        let posY = e.clientY;

        return {
        x: posX,
        y: posY
        };
    };
    
    let mousePos = { x: $(window).width() / 2, y: $(window).height() / 2 };
    $(window).on("mousemove", function(e) {
        mousePos = getMousePosition(e);
    });

    // GSAP 애니메이션
    gsap.fromTo('main .visual .item-box .img-box figure', {
        ease: 'power3.inOut',
    }, {
        stagger: 0.1,
        duration: 2.5,
    });

    images.each(function() {
        let values = { x: 0, y: 0 };
        const xStart = gsap.utils.random(16, 64);
        const yStart = gsap.utils.random(-16, 64);

        const render = () => {
        values.x = lerp(
            values.x,
            map(mousePos.x, 0, $(window).width(), -xStart, xStart),
            0.07
        );

        values.y = lerp(
            values.y,
            map(mousePos.y, 0, $(window).height(), -yStart, yStart),
            0.07
        );

        $(this).css({
            transform: `translate(${values.x}px, ${values.y}px)`
        });

        requestAnimationFrame(render);
        };
        render();
    });
});