      function diamond(c, n, x, y, r, color) {
        c.strokeStyle = color;

        c.beginPath();

        for (let i = 0; i < n; i++) {
          let t = (i * 2 * Math.PI) / n;

          for (let j = i + 1; j < n; j++) {
            let s = (j * 2 * Math.PI) / n;

            c.moveTo(x + r * Math.cos(t), y + r * Math.sin(t));

            c.lineTo(x + r * Math.cos(s), y + r * Math.sin(s));
          }
        }
        c.stroke();
      }
        let canvas = document.getElementById("mycanvas");
        let ctx = canvas.getContext("2d");
        diamond(ctx, 6, 170, 170, 150, "darkblue");
        diamond(ctx, 12, 490, 170, 150, "darkblue");
        diamond(ctx, 18, 810, 170, 150, "darkblue");