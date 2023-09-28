window.onload = function () {
    pullDown();
    toTop();
    chartEight();
}

function toTop() {
    // 1.找到页面中的按钮
    const toTop = document.getElementById("btn");
    const mySidenav = document.getElementById("mySidenav");

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
            // toTop.style.display = "block";
            // mySidenav.style.display = "block";

            // toTop淡入
            $("#btn").fadeIn(1000);
            // mySidenav淡入
            $("#mySidenav").fadeIn(1000);
        } else {
            toTop.style.display = "none";
            mySidenav.style.display = "none";

            // // toTop淡出
            // $("#btn").fadeOut(1000);
        }
    }
}

function pullDown() {
    // 1.找到页面中的按钮
    const pullDown = document.getElementById("pull-down");

    let timer = null;

    // 2. 给按钮绑定点击事件
    pullDown.onclick = function () {
        // // 周期性定时
        // timer = setInterval(function () {
        //     // 获取浏览器顶部距离banner底部的距离
        //
        //     let bannerHeight = document.getElementById("banner").style.height;
        //
        //     // 越滚越慢
        //     let speedTop = bannerHeight / 5;
        //     document.documentElement.scrollTop = bannerHeight - speedTop;
        //     if (bannerHeight === 0) {
        //         clearInterval(timer);
        //     }
        // }, 30)

        // 点击按钮，页面滚动到banner底部
        // 获取浏览器顶部距离banner底部的距离
        let bannerHeight = document.getElementById("banner").style.height;
        document.documentElement.scrollTop = bannerHeight;
    }
}

function chartEight() {
    var chartDom = document.getElementById('main');
    var myChart = echarts.init(chartDom);
    var option;
    option = {
        title: {
            text: '中国每周工作时长',
            subtext: '数据来源：国家统计局'
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ["8", "9", "10", "11", "12", "1", "2", "3", "4", "5", "6", "7"]
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                data: [48, 47.8, 47.9, 47.7, 47.9, 47.9, 47.9, 48.7, 48.8, 48.6, 48.7, 48.7],
                type: 'line',
                areaStyle: {}
            }
        ]
    };
    option && myChart.setOption(option);
}