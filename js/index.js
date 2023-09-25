window.onload = function () {
    // 1.找到页面中的按钮
    const toTop = document.getElementById("btn");
    // const mySidenav = document.getElementById("mySidenav");

    toTop.style.display = "none";
    let timer = null;

    // 2. 给按钮绑定点击事件
    toTop.onclick = function () {
        // 周期性定时
        timer = setInterval(function () {
            // 3.获取滚动条距离浏览器顶端的距离
            const backTop = document.documentElement.scrollTop ||
                document.body.scrollTop;

            // 越滚越慢
            let speedTop = backTop / 5;
            document.documentElement.scrollTop = backTop - speedTop;
            if (backTop === 0) {
                clearInterval(timer);
            }
        }, 30)
    }

    // 设置临界值
    const pageHeight = 750;
    window.onscroll = function () {
        const backTop = document.documentElement.scrollTop ||
            document.body.scrollTop;
        if (backTop > pageHeight) {
            toTop.style.display = "block";

            // mySidenav.style.display = "block";
        } else {
            toTop.style.display = "none";

            // mySidenav.style.display = "none";
        }
    }
}

window.onscroll = function () {

    // const topScroll = document.body.scrollTop;//滚动的距离,距离顶部的距离
    // const mySidenav = document.getElementById("mySidenav");//获取到导航栏id
    //
    // if (topScroll <= 250) {
    //     //当滚动距离小于250的时候执行下面的内容，也就是让导航栏恢复原状
    //     mySidenav.style.position = 'static';
    // } else {
    //     //当滚动距离大于250px时执行下面的东西
    //     mySidenav.style.position = 'fixed';
    //     // mySidenav.style.top = '6%';
    //     // mySidenav.style.right = '6%';
    //     console.log(topScroll)
    // }
}