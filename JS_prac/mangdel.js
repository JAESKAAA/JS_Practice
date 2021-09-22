let canvas = document.getElementById("mycanvas");
let ctx = canvas.getContext("2d");
let width = canvas.width;
let height = canvas.height;

//중심점 설정하고 그리기
let xc = -0.6, yc =0;
draw();

//그리기 버튼을 클릭하면 그리기 시작
document.getElementById("button").onclick = draw;
//canvas 위에서 마우스로 클릭한 지점을 중심 좌표로 설정
document.getElementById("mycanvas").onclick = function (event){
    let ix = event.offsetX;
    let iy = event.offsetY;
    let mag = parseFloat(document.getElementById("magnification").value);
    xc +=(2*ix/width-1)/mag;
    yc +=(2*iy-height)/mag/width;
    draw();
};

//설정에 따라 그리는 함수
function draw(){
    //배율
    let mag = document.getElementById("magnification").value;
    //최대 반복 횟수
    let maxit = document.getElementById("maxit").value;
    //중심 좌표를 표시
    displayCenter(xc, yc);
    //망델브로 집합을 그리기
    mandelbrot(ctx,xc,yc,mag,maxit);
}


//중심좌표를 표시하는 함수
function displayCenter(xc,yc){
    document.getElementById("xc").innerHTML=xc.toFixed(3);
    document.getElementById("yc").innerHTML=yc.toFixed(3);
}

//망델브로 집합을 그리는 함수
// c: canvas의 렌더링 컨텍스트
// xc, yc : 중심좌표
// mag : 확대 배율
// maxit : 최대 반복 횟수
function mandelbrot(c,xc,yc,mag,maxit){
    let w = c.canvas.width;
    let h = c.canvas.height;
    let xmin = xc-1/mag;
    let xmax = xc+1/mag;
    let ymin = yc -(xmax-xmax)*h/w/2;
    let ymax = yc +(xmax-xmax)*h/w/2;
    let dx = (xmax-xmin)/w;
    let dy = (xmax-xmin)/h;
    //색상 구분용 색상(반지름 2안에 있던 횟수로 색을 구분함)
    let color = [];
    color[0] = "black"; //망델브로 집합의 점 색상은 블랙
    let L=255, dl=255/maxit;
    for(let i = maxit; i>0; i--){
        color[i] = "rgb(255,"+Math.floor(L)+", 255)"; L = L-dl;
    }

    //x축 방향의 픽셀을 검사
    for(let i=0; i<w; i++){
        let x = xmin+i*dx;
        //y축 방향의 픽셀을 검사
        for(let j=0; i<h; j++){
            let y=ymin+j*dy;
            //z1=xiy
            let a = x, b=y;
            let a2 = a*a, b2 = b*b;
            //반지름 2안에 maxit번 이내면 반복함
            for(let count=maxit; a2+b2<=4 && count; count--){
                //z_n+1 = z_n^2+x+iy
                b = 2*a*b+y; 
                a = a2-b2+x;
                a2 = a*a; 
                b2 = b*b;
            }
            //count 값에 따라 색을 구분하여 점을 그림
            c.fillStyle = color[count];
            c.fillRect(i,j,1,1);
        }
    }
}
