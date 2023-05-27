s=(S,A=3,T='black,red,green,yellow,blue,magenta,cyan,white'.split`,`)=>T.map((a,i)=>module.exports[a+S]=t=>`\x1b[${i+A*10}m${t}\x1b[0m`)&&s
s('')('Bg',4)('BrBg',10)('Br',9)('',0,'reset,bold,dim,italic,underline,blink,,reverse,hide,strike'.split`,`)
