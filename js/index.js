window.onload = function () {
    // 1.找到页面中的按钮
    const toTop = document.getElementById("btn");
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
        } else {
            toTop.style.display = "none";
        }
    }

    figureOne();
}

function figureOne() {
    var ROOT_PATH = 'https://echarts.apache.org/examples';

    var chartDom = document.getElementById('chart-one');
    var myChart = echarts.init(chartDom);
    var option;

    myChart.showLoading();
    $.get(
        ROOT_PATH + '/data/asset/data/obama_budget_proposal_2012.list.json',
        function (obama_budget_2012) {
            myChart.hideLoading();
            option = {
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow',
                        label: {
                            show: true
                        }
                    }
                },
                toolbox: {
                    show: true,
                    feature: {
                        mark: { show: true },
                        dataView: { show: true, readOnly: false },
                        magicType: { show: true, type: ['line', 'bar'] },
                        restore: { show: true },
                        saveAsImage: { show: true }
                    }
                },
                calculable: true,
                legend: {
                    data: ['Growth', 'Budget 2011', 'Budget 2012'],
                    itemGap: 5
                },
                grid: {
                    top: '12%',
                    left: '1%',
                    right: '10%',
                    containLabel: true
                },
                xAxis: [
                    {
                        type: 'category',
                        data: obama_budget_2012.names
                    }
                ],
                yAxis: [
                    {
                        type: 'value',
                        name: 'Budget (million USD)',
                        axisLabel: {
                            formatter: function (a) {
                                a = +a;
                                return isFinite(a) ? echarts.format.addCommas(+a / 1000) : '';
                            }
                        }
                    }
                ],
                dataZoom: [
                    {
                        show: true,
                        start: 94,
                        end: 100
                    },
                    {
                        type: 'inside',
                        start: 94,
                        end: 100
                    },
                    {
                        show: true,
                        yAxisIndex: 0,
                        filterMode: 'empty',
                        width: 30,
                        height: '80%',
                        showDataShadow: false,
                        left: '93%'
                    }
                ],
                series: [
                    {
                        name: 'Budget 2011',
                        type: 'bar',
                        data: obama_budget_2012.budget2011List
                    },
                    {
                        name: 'Budget 2012',
                        type: 'bar',
                        data: obama_budget_2012.budget2012List
                    }
                ]
            };
            myChart.setOption(option);
        }
    );

    option && myChart.setOption(option);
}