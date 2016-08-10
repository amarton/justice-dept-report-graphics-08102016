var dataproject = {
    init: function(){
        //dataproject.share();
    },
    share: function(){
        $(".icon-twitter").on("click", function(){
            var tweet = ""; //Tweet text
            var url = ""; //Interactive URL
            var twitter_url = "https://twitter.com/intent/tweet?text="+tweet+"&url="+url+"&tw_p=tweetbutton";
            window.open(twitter_url, 'mywin','left=200,top=200,width=500,height=300,toolbar=1,resizable=0'); return false;
        });
        $(".icon-facebook").on("click", function(){
            var picture = ""; //Picture URL
            var title = ""; //Post title
            var description = ""; //Post description
            var url = ""; //Interactive URL
            var facebook_url = "https://www.facebook.com/dialog/feed?display=popup&app_id=310302989040998&link="+url+"&picture="+picture+"&name="+title+"&description="+description+"&redirect_uri=http://www.facebook.com";            
            window.open(facebook_url, 'mywin','left=200,top=200,width=500,height=300,toolbar=1,resizable=0'); return false;
        });
    }
}
        $(function chart1() {
            $('#chart1').highcharts({
                chart: {
                    type: 'column'
                },
                title: {
                    text: ''
                },
                subtitle: {
                    text: 'Source: Department of Justice'
                },
                xAxis: {
                    categories: [
                        'Stops per 1,000 African-American residents',
                        'Stops per 1,000 Caucasian residents'
                    ],
                },
                tooltip: {
                    enabled: false
                },
                yAxis: {
                    min: 0,
                    max: 600,
                    tickInterval: 100,
                    title: {
                        text: ''
                    }
                },
                series: [{
                    name: 'Stops per 1,000 residents',
                    data: [530, 280]
                }]
            });
        });
        $(function chart2() {
            $('#chart2').highcharts({
                chart: {
                    type: 'column'
                },
                title: {
                    text: ''
                },
                subtitle: {
                    text: 'Source: Department of Justice'
                },
                xAxis: {
                    categories: [
                        'Western',
                        'Eastern',
                        'Southwest',
                        'Northwest',
                        'Northeast',
                        'Central',
                        'Southern',
                        'Northern',
                        'Southeast'
                    ],
                },
                tooltip: {
                    enabled: false
                },
                yAxis: {
                    min: 0,
                    max: 100,
                    title: {
                        text: 'Percent'
                    }
                },
                series: [{
                    name: 'Percent African-American stops',
                    data: [96, 93, 86, 96, 90, 83, 61, 83, 67]
                },
                {
                    name: 'Percent African-American population',
                    data: [96, 90, 78, 75, 64, 57, 42, 41, 23]

                }]
            });
        });
        $(function chart3() {
            $('#chart3').highcharts({
                chart: {
                    type: 'column'
                },
                title: {
                    text: ''
                },
                subtitle: {
                    text: 'Source: Department of Justice'
                },
                xAxis: {
                    categories: [
                        'Pedestrian stops',
                        'Vehicle stops'
                    ],
                },
                tooltip: {
                    enabled: false
                },
                yAxis: {
                    min: 0,
                    max: 10,
                    tickInterval: 1,
                    title: {
                        text: 'Percent of searches that find contraband'
                    }
                },
                series: [{
                    name: 'Searches of African-Americans',
                    data: [2.5, 3.8]
                },
                {
                    name: 'Searches of people of other races',
                    data: [3.8, 8.8]
                }
                ]
            });
        });
        $(function chart4() {
            $('#chart4').highcharts({
                chart: {
                    type: 'column'
                },
                title: {
                    text: ''
                },
                subtitle: {
                    text: 'Source: Department of Justice'
                },
                xAxis: {
                    categories: [
                        'False statement',
                        'Failure to obey',
                        'Hindering',
                        'Resisting',
                        'Tresspassing',
                        'Disorderly conduct'
                    ],
                },
                tooltip: {
                    enabled: false
                },
                yAxis: {
                    min: 0,
                    max: 14,
                    tickInterval: 2,
                    title: {
                        text: 'Charges per 1,000 residents'
                    }
                },
                series: [{
                    name: 'Charges per 1,000 African-American residents',
                    data: [3, 8.5, 2.5, 7.5, 7.8, 13.8]
                },
                {
                    name: 'Charges per 1,000 Non-African American residents',
                    data: [0.8, 2.4, 0.8, 1.9, 1.8, 5]

                }]
            });
        });
        $(function chart5() {
            $('#chart5').highcharts({
                chart: {
                    type: 'column'
                },
                title: {
                    text: ''
                },
                subtitle: {
                    text: 'Source: Department of Justice'
                },
                xAxis: {
                    categories: [
                        'Disorderly conduct',
                        'Failure to obey',
                        'False statement',
                        'Resisting',
                        'Tresspassing',
                        'Disturbing the peace'
                    ],
                },
                tooltip: {
                    enabled: false
                },
                yAxis: {
                    min: 0,
                    max: 30,
                    tickInterval: 5,
                    title: {
                        text: 'Percent of charges dismissed'
                    }
                },
                series: [{
                    name: 'African-American arrests',
                    data: [21, 24.5, 6, 4.5, 4.5, 26]
                },
                {
                    name: 'Arrests of people of other races',
                    data: [18, 18, 3, 3, 3, 7]

                }]
            });
        });
        $(function chart6() {
            $('#chart6').highcharts({
                chart: {
                    type: 'column'
                },
                title: {
                    text: ''
                },
                subtitle: {
                    text: 'Source: Department of Justice'
                },
                xAxis: {
                    categories: [
                        'Charges per 1,000 African-American residents',
                        'Charges per 1,000 residents of other races'
                    ],
                },
                tooltip: {
                    enabled: false
                },
                yAxis: {
                    min: 0,
                    max: 300,
                    tickInterval: 50,
                    title: {
                        text: ''
                    }
                },
                series: [{
                    name: 'Charges per 1,000 residents',
                    data: [252, 51]
                }]
            });
        });
        $(function chart7() {
            $('#chart7').highcharts({
                chart: {
                    type: 'column'
                },
                title: {
                    text: ''
                },
                subtitle: {
                    text: 'Source: Department of Justice'
                },
                xAxis: {
                    categories: [
                        'Baltimore',
                        'U.S. Average',
                        'Atlanta',
                        'Cleveland',
                        'Detroit',
                        'Memphis',
                        'Milwaukee'
                    ],
                },
                tooltip: {
                    enabled: false
                },
                yAxis: {
                    min: 0,
                    max: 120,
                    tickInterval: 20,
                    title: {
                        text: ''
                    }
                },
                series: [{
                    name: 'Arrest per 1,000  African-American residents',
                    data: [115, 45, 61, 37, 13, 25, 45]
                }]
            });
        });
$(document).ready(function(){
    dataproject.init();
    console.log("connected");
});
