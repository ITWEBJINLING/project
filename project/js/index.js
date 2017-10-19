 // 背景
    let canvas=document.querySelector('canvas');console.log(canvas);
    let ctx=canvas.getContext('2d');
    for(let i=0;i<30;i++){
        duobianxing();
    }
    function duobianxing(){
        let r=Math.floor(Math.random()*11+8);
        let n=Math.floor(Math.random()*6+3);
        let x1=Math.floor(Math.random()*1350);
        let y1=Math.floor(Math.random()*500);
        let deg=2*Math.PI/n;
        ctx.beginPath();
        for(let i=0;i<n;i++){
            let x=x1+r*Math.cos(deg*i);
            let y=y1+r*Math.sin(deg*i);
            ctx.lineTo(x,y);
        }
        ctx.fillStyle=`rgb(${Math.floor(Math.random()*256)},${Math.floor((Math.random()*256))},${Math.floor(Math.random()*256)})`;
        ctx.closePath();
        ctx.fill();
    }