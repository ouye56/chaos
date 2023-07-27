function rnd_btw(min, max) {return fxrand() * (max - min) + min;}
function rnd_btwexp(min, max) {return fxrand()**2 * (max - min) + min;}
function rnd_int(min, max) {min = Math.ceil(min);max = Math.floor(max);return Math.floor(fxrand() * (max - min + 1)) + min;}





e1=rnd_btwexp(3,11)
e2=rnd_btwexp(1,5)
e3=rnd_btwexp(1,5)
e4=rnd_btwexp(1,5)
e5=rnd_btwexp(0.125,0.225)
e6=rnd_btwexp(3,9)
e7=rnd_btwexp(3,9)
e8=rnd_btwexp(2,22)
e9=rnd_btwexp(2,25)
e10=rnd_btwexp(22,222)
e11=rnd_btwexp(22,222)
e12=rnd_btwexp(1,9)
e13=rnd_btwexp(0.1,1.9)
e14=rnd_btwexp(0.1,1.9)




e1=rnd_btwexp(1,22)
e2=rnd_btwexp(1,11)
e3=rnd_btwexp(1,22)
e4=rnd_btwexp(1,222)
e5=rnd_btwexp(2,5)
e6=rnd_btwexp(3,11)
e7=rnd_btwexp(3,9)
e8=rnd_btwexp(1,4)
e9=rnd_btwexp(1,4)
e10=rnd_btwexp(1,4)
e11=rnd_btwexp(2,22)
e12=rnd_btwexp(2,222)
e13=rnd_btwexp(3,21)
e14=rnd_btwexp(2,11)
e15=rnd_btwexp(222,555)
e16=rnd_btwexp(120,190)
e17=rnd_btwexp(3,53)
e18=rnd_btwexp(2,6)
e19=rnd_btwexp(0.1,1.5)
e20=rnd_btwexp(0.001,2)




speed = 23
src(o0)
  .modulateHue(src(o0).scale(e15),25)
  .layer(osc(e12,e13,e14)
  .mask(shape( () => Math.sin(time/e16)*52 , () => Math.sin(time/e17)/1200 )))
.invert(e18)


  .out(o0)