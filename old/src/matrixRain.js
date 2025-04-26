



function matrixRain() {
    var canvas = document.getElementById('matrixCanvas');
    var ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    var symbols = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%";
    symbols = symbols.split("");

    var font_size = 10;
    var columns = canvas.width/font_size; 
    var drops = [];

    for(var x = 0; x < columns; x++)
        drops[x] = 1; 

    function draw() {
        ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = "#0F0"; // Green text
        ctx.font = font_size + "px arial";
        
        for(var i = 0; i < drops.length; i++) {
            var text = symbols[Math.floor(Math.random()*symbols.length)];
            ctx.fillText(text, i*font_size, drops[i]*font_size);
            
            if(drops[i]*font_size > canvas.height && Math.random() > 0.975)
                drops[i] = 0;

            drops[i]++;
        }
    }

    setInterval(draw, 33);
}
