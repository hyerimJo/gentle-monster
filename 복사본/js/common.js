$(document).ready(function(){
	//aos
	AOS.init({
		duration: 1200,
		once:true,
	});

    // text seperate
	$(".split").each(function(i) {
        const txt = $(this).text().replace(/./g, "<span>$&</span>").replace(/\s/g, "<span class='space'>&nbsp;</span>");
    
        $(this).html(txt);
    
        const span = $(this).find("span");
        for (let j = 0; j < span.length; j++) {
            // 랜덤으로 animation-delay 값 설정
            const randomDelay = Math.random() * 500; // 최대 500ms까지 랜덤으로 설정
            $(this).find("span").eq(j).css("animation-delay", randomDelay + "ms");
        }
    });
});