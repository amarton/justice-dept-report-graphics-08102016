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
                        text: 'Percent'
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
$(document).ready(function(){
	dataproject.init();
	console.log("connected");
});
