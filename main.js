window.onload = function(e){


  // var bgGif = document.getElementById('backgroundGif');

  // var gifUrl = bgGif.src;
  // bgGif.src = '';
  // bgGif.className = '';
  // bgGif.src = gifUrl;


  var tl = new TimelineMax();

  tl
    /*frame 1*/
    .from(adWrap, 0, {autoAlpha:0})
	.to(goggles, .8, {y:"+6", repeatDelay:.1, yoyo:true, repeat:3}, .1)

	.to(copy1, 1.5, {opacity:1}, .5)

    .to(goggles, 1.5, {top:615}, 1.5)

	.to(flap_left, 0.25, {skewX: -40}, 2.5)
	.to(flap_left, 0.25, {left:96}, 2.5)
	.to(flap_left, 0.25, {top:505}, 2.5)
	.to(flap_right, 0.25, {skewX: 60}, 2.5)
	.to(flap_right, 0.25, {left:261}, 2.5)
	.to(flap_right, 0.25, {top:510}, 2.5)
	.to(goggles, 0, {opacity:0 }, 2.7)

	.to(closed_box, 0, {opacity:1}, 2.75)
	.to(flap_left, 0.25, {opacity:0}, 2.75)
	.to(flap_right, 0.25, {opacity:0}, 2.75)
	.to(open_box, 0.25, {opacity:0}, 2.75)
	.to(box_top, 0.25, {opacity:0}, 2.75)

	.to(copy1, 0.25, {opacity:0 }, 4)

	/*frame 2*/
	.to(bg1, 0.25, {opacity:0 }, 4)
    .to(copy2, 1.5, {opacity:1}, 4.5)

	.to(lights, 0.1, {opacity:1 }, 4.8)
	.to(lights, 0.1, {opacity:0 }, 5.6)
	.to(lights, 0.1, {opacity:1 }, 6.4)
	.to(lights, 0.1, {opacity:0 }, 7.2)

	/*frame 3*/
	.to(closed_box, 0.25, {opacity:0}, 7.5)
	.to(copy2, 0.25, {opacity:0}, 7.5)
	.to(bg2, 0.25, {opacity:0 }, 7.5)

	.to(truck, .25, {opacity:1}, 7.5)
	.to(copy3, 1.5, {opacity:1}, 8)
	.to(truck, 1, {left:-1030}, 10)

	.to(closed_box, 0, {opacity:.99,left:100,top:625,width:100,height:60}, 10.5)

	/*frame 4*/
	.to(closed_box, 0.25, {opacity:0}, 11.5)
	.to(copy3, 0.25, {opacity:0}, 11.5)
	.to(bg3, 0.25, {opacity:0 }, 11.5)


	.to(copy4, 1.5, {opacity:1}, 11.5)

	.to(priorityyou, 1.5, {opacity:1}, 11.5)
	.to(copyright, 1.5, {opacity:1}, 11.5)

	.to(copy5, 1.5, {opacity:1}, 13)

	.to(cta, 1, {opacity:1}, 14);

  console.log("duration is: " + tl.duration());
}
