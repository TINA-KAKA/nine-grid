window.onload=function () {
    var start=document.getElementById("start");
    var end=document.getElementById("end");
    var timer;
    function randomColor() {
        var r=Math.floor(Math.random()*256);
        var g=Math.floor(Math.random()*256);
        var b=Math.floor(Math.random()*256);
        return "rgb("+r+','+g+','+b+")";//所有方法的拼接都可以用ES6新特性`其他字符串{$变量名}`替换
    }

    function getRandomArrayElements(arr, count) {
        var shuffled = arr.slice(0), i = arr.length, min = i - count, temp, index;
        while (i-- > min) {
            index = Math.floor((i + 1) * Math.random());
            temp = shuffled[index];
            shuffled[index] = shuffled[i];
            shuffled[i] = temp;
        }
        return shuffled.slice(min);
    }


    function randomDiv() {
        var box=document.getElementById("box");
        var total=box.getElementsByTagName("div").length;
        console.log(total);
        var arr=[];


        for(var i=0;i<total;i++) {
            arr.push(i);

            if(i==8){
                console.log(arr);
               var a=getRandomArrayElements(arr, 3) ;
                console.log(a);
                var one=box.getElementsByTagName("div")[a[0]];
                console.log(one);
                var two=box.getElementsByTagName("div")[a[1]];
                var three=box.getElementsByTagName("div")[a[2]];

                console.log(randomColor());

                one.style.backgroundColor=randomColor();
                two.style.backgroundColor=randomColor();
                three.style.backgroundColor=randomColor();
                console.log(one.style.color);


            }
        }
            }




    start.onclick=function () {
        clearInterval(timer);
       sta();
    }
    end.onclick=function () {
        clearInterval(timer);
        init();
    }

    function init() {
        var box=document.getElementById("box");
        var bb =box.getElementsByTagName("div");
        bb[0].style.backgroundColor="#fda501";
        bb[1].style.backgroundColor="#fda501";
        bb[2].style.backgroundColor="#fda501";
        bb[3].style.backgroundColor="#fda501";
        bb[4].style.backgroundColor="#fda501";
        bb[5].style.backgroundColor="#fda501";
        bb[6].style.backgroundColor="#fda501";
        bb[7].style.backgroundColor="#fda501";
        bb[8].style.backgroundColor="#fda501";

    }
    function sta() {
        timer=setInterval(function () {
        init();
        randomDiv();
    },1000)
}

}
