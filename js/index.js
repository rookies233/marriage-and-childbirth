// import {ScrollTrigger} from "./ScrollTrigger.min";

window.onload = function () {
    toTop();
}

function toTop() {
    // 1.找到页面中的按钮
    const toTop = document.getElementById("btn");
    const mySidenav = document.getElementById("mySidenav");

    toTop.style.display = "none";
    mySidenav.style.display = "none";

    // 设置临界值
    const pageHeight = 800;
    window.onscroll = function () {
        const backTop = document.documentElement.scrollTop ||
            document.body.scrollTop;
        if (backTop > pageHeight) {
            // toTop.style.display = "block";
            // mySidenav.style.display = "block";

            $("#btn").fadeIn(1000);
            $("#mySidenav").fadeIn(1000);
        } else {
            toTop.style.display = "none";
            mySidenav.style.display = "none";

            // // toTop淡出
            // $("#btn").fadeOut(1000);
        }
    }
}