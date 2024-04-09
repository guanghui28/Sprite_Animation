window.addEventListener("load", () => {
    const ctx = canvas.getContext("2d");
    canvas.width = 500;
    canvas.height = 500;

    class Mandrake {
        constructor(canvasWidth, canvasHeight) {
            this.image = mandrake;
            this.canvasWidth = canvasWidth;
            this.canvasHeight = canvasHeight;
            this.spriteWidth = 256;
            this.spriteHeight = 256;
            this.width = this.spriteWidth;
            this.height = this.spriteHeight;
            this.scale = 2;
            this.x = this.canvasWidth / 2 - (this.width * this.scale) / 2;
            this.y = this.canvasHeight / 2 - (this.height * this.scale) / 2;
            this.minFrame = 0;
            this.maxFrame = 355;
            this.frameX = 0;
            this.frameY = 0;
            this.frame = 0;
        }
        draw(ctx) {
            ctx.drawImage(
                this.image,
                this.frameX * this.spriteWidth,
                this.frameY * this.spriteHeight,
                this.spriteWidth,
                this.spriteHeight,
                this.x,
                this.y,
                this.width * this.scale,
                this.height * this.scale
            );
        }
        update() {
            this.frame =
                this.frame < this.maxFrame ? this.frame + 1 : this.minFrame;
            this.frameX = this.frame % 18;
            this.frameY = Math.floor(this.frame / 18);
        }
        setAnimation(newMinFrame, newMaxFrame) {
            this.minFrame = newMinFrame;
            this.maxFrame = newMaxFrame;
            this.frame = this.minFrame;
        }
    }

    const mandrakeObj = new Mandrake(canvas.width, canvas.height);

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        mandrakeObj.draw(ctx);
        mandrakeObj.update();
        requestAnimationFrame(animate);
    }
    animate();

    all.addEventListener("click", () => {
        mandrakeObj.setAnimation(0, 355);
    });
    grow.addEventListener("click", () => {
        mandrakeObj.setAnimation(0, 75);
    });
    wink.addEventListener("click", () => {
        mandrakeObj.setAnimation(76, 112);
    });
    float.addEventListener("click", () => {
        mandrakeObj.setAnimation(113, 262);
    });
    hide.addEventListener("click", () => {
        mandrakeObj.setAnimation(263, 355);
    });
});
