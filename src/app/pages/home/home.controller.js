(function () {
    'use strict';

    angular.module('adminlte').config(configFn);

    /**
     * @ngInject
     * @type {string[]}
     */
    configFn.$inject = ['$stateProvider'];

    /**
     * Config
     *
     * @param $stateProvider
     */
    function configFn($stateProvider) {
        $stateProvider.state('app.home', {
            url: '/',
            views: {
                'content@app': {
                    templateUrl: 'app/pages/home/home.html',
                    controller: ControllerFn,
                    controllerAs: 'vmHome'
                }
            }
        });
    }

    /**
     * Controller Function
     *
     * @constructor
     */
    function ControllerFn() {
        var vm = this;

        vm.smallBox1 = {
            background: "bg-aqua",
            title: "50",
            smallTitle: "New Orders",
            url: "#"
        };

        vm.smallBox2 = {
            background: "bg-green",
            title: "53%",
            smallTitle: "Bounce Rate",
            url: "#"
        };

        vm.smallBox3 = {
            background: "bg-yellow",
            title: "44",
            smallTitle: "User Registrations",
            url: "#"
        };

        vm.smallBox4 = {
            background: "bg-red",
            title: "65",
            smallTitle: "Unique Visitors",
            url: "#"
        };

        vm.activeChartTab = 2;
        vm.redraw = false;

        vm.chart1 = {
            element: 'revenue-chart',
            resize: true,
            data: [
                {y: '2011 Q1', item1: 2666, item2: 2666},
                {y: '2011 Q2', item1: 2778, item2: 2294},
                {y: '2011 Q3', item1: 4912, item2: 1969},
                {y: '2011 Q4', item1: 3767, item2: 3597},
                {y: '2012 Q1', item1: 6810, item2: 1914},
                {y: '2012 Q2', item1: 5670, item2: 4293},
                {y: '2012 Q3', item1: 4820, item2: 3795},
                {y: '2012 Q4', item1: 15073, item2: 5967},
                {y: '2013 Q1', item1: 10687, item2: 4460},
                {y: '2013 Q2', item1: 8432, item2: 5713}
            ],
            xkey: 'y',
            ykeys: ['item1', 'item2'],
            labels: ['Item 1', 'Item 2'],
            lineColors: ['#a0d0e0', '#3c8dbc'],
            hideHover: 'auto'
        };

        vm.chart2 = {
            element: 'sales-chart',
            resize: true,
            colors: ['#3c8dbc', '#f56954', '#00a65a'],
            data: [
                {label: 'Download Sales', value: 12},
                {label: 'In-Store Sales', value: 30},
                {label: 'Mail-Order Sales', value: 20}
            ],
            hideHover: 'auto'
        };

        vm.chart3 = {
            element: 'line-chart',
            resize: true,
            data: [
                {y: '2011 Q1', item1: 2666},
                {y: '2011 Q2', item1: 2778},
                {y: '2011 Q3', item1: 4912},
                {y: '2011 Q4', item1: 3767},
                {y: '2012 Q1', item1: 6810},
                {y: '2012 Q2', item1: 5670},
                {y: '2012 Q3', item1: 4820},
                {y: '2012 Q4', item1: 15073},
                {y: '2013 Q1', item1: 10687},
                {y: '2013 Q2', item1: 8432}
            ],
            xkey: 'y',
            ykeys: ['item1'],
            labels: ['Item 1'],
            lineColors: ['#efefef'],
            lineWidth: 2,
            hideHover: 'auto',
            gridTextColor: '#fff',
            gridStrokeWidth: 0.4,
            pointSize: 4,
            pointStrokeColors: ['#efefef'],
            gridLineColor: '#efefef',
            gridTextFamily: 'Open Sans',
            gridTextSize: 10
        };

        vm.chatBoxData = {
            user1: {
                image: "images/user2-160x160.jpg",
                name: "Alexander Pierce"
            },
            user2: {
                image: "images/user4-128x128.jpg",
                name: "Mike Doe"
            },
            chat: [
                {
                    user: "user1",
                    time: "2:15",
                    message: "I would like to meet you to discuss the latest news about\n" +
                        "the arrival of the new theme. They say it is going to be one the\n" +
                        "best themes on the market",
                    attachment: "Theme-thumbnail-image.jpg"
                },
                {
                    user: "user2",
                    time: "5:15",
                    message: "I would like to meet you to discuss the latest news about\n" +
                        "the arrival of the new theme. They say it is going to be one the\n" +
                        "best themes on the market",
                    attachment: null
                }
            ]
        };

        var date = new Date();
        vm.todoList = [
            {
                name: "Design a nice theme",
                time: date,
                is_completed: false
            },
            {
                name: "Make the theme responsive",
                time: new Date(new Date().setDate(date.getDate() + 1)),
                is_completed: true
            },
            {
                name: "Let theme shine like a star",
                time: new Date(new Date().setDate(date.getDate() + 2)),
                is_completed: false
            },
            {
                name: "Let theme shine like a star",
                time: new Date(new Date().setDate(date.getDate() + 3)),
                is_completed: false
            },
            {
                name: "Check your messages and notifications",
                time: new Date(new Date().setDate(date.getDate() + 4)),
                is_completed: true
            },
            {
                name: "Let theme shine like a star",
                time: new Date(new Date().setDate(date.getDate() + 5)),
                is_completed: false
            }
        ];

        // jvectormap data
        var visitorsData = {
            US: 398, // USA
            SA: 400, // Saudi Arabia
            CA: 1000, // Canada
            DE: 500, // Germany
            FR: 760, // France
            CN: 300, // China
            AU: 700, // Australia
            BR: 600, // Brazil
            IN: 800, // India
            GB: 320, // Great Britain
            RU: 3000 // Russia
        };
        vm.mapData = {
            map: 'world_mill_en',
            backgroundColor: 'transparent',
            regionStyle: {
                initial: {
                    fill: '#e4e4e4',
                    'fill-opacity': 1,
                    stroke: 'none',
                    'stroke-width': 0,
                    'stroke-opacity': 1
                }
            },
            series: {
                regions: [
                    {
                        values: visitorsData,
                        scale: ['#92c1dc', '#ebf4f9'],
                        normalizeFunction: 'polynomial'
                    }
                ]
            },
            onRegionLabelShow: function (e, el, code) {
                if (typeof visitorsData[code] != 'undefined')
                    el.html(el.html() + ': ' + visitorsData[code] + ' new visitors');
            }
        };

        vm.date = "";

        // sparkline datas
        vm.sparklineData1 = [1000, 1200, 920, 927, 931, 1027, 819, 930, 1021];
        vm.sparklineData2 = [515, 519, 520, 522, 652, 810, 370, 627, 319, 630, 921];
        vm.sparklineData3 = [15, 19, 20, 22, 33, 27, 31, 27, 19, 30, 21];
        vm.sparklineOptions = {
            type: 'line',
            lineColor: '#92c1dc',
            fillColor: '#ebf4f9',
            height: '50',
            width: '80'
        };

        vm.knob1 = 20;
        vm.knob2 = 45;
        vm.knob3 = 70;
        vm.knobOptions = {
            width: 60,
            height: 60,
            fgColor: "#39CCCC",
            readOnly: true
        };


        $(document).ready(function () {
            // Make the dashboard widgets sortable Using jquery UI
            $('.connectedSortable').sortable({
                placeholder: 'sort-highlight',
                connectWith: '.connectedSortable',
                handle: '.box-header, .nav-tabs',
                forcePlaceholderSize: true,
                zIndex: 999999
            });
            $('.connectedSortable .box-header, .connectedSortable .nav-tabs-custom').css('cursor', 'move');

            // bootstrap WYSIHTML5 - text editor
            $('.textarea').wysihtml5();

            /* jQueryKnob */
            $('.knob').knob({
                width: 60,
                height: 60,
                fgColor: "#39CCCC"
            });

            // The Calender
            $('#calendar').datepicker();
        });
    }
})();
