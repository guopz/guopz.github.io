/*
 * http://love.hackerzhou.me
 */

// variables
var $win = $(window);
var clientWidth = $win.width();
var clientHeight = $win.height();

$(window).resize(function () {
	var newWidth = $win.width();
	var newHeight = $win.height();
	if (newWidth != clientWidth && newHeight != clientHeight) {
		location.replace(location);
	}
});

(function ($) {
	$.fn.typewriter = function () {
		this.each(function () {
			var $ele = $(this), str = $ele.html(), progress = 0;
			$ele.html('');
			var timer = setInterval(function () {
				var current = str.substr(progress, 1);
				if (current == '<') {
					progress = str.indexOf('>', progress) + 1;
				} else {
					progress++;
				}
				$ele.html(str.substring(0, progress) + (progress & 1 ? '_' : ''));
				if (progress >= str.length) {
					clearInterval(timer);
				}
			}, 75);
		});
		return this;
	};
})(jQuery);

function timeElapse(date) {
	var current = Date();
	var dateJg = (Date.parse(current) - Date.parse(date));
	var seconds = dateJg / 1000;
	var days = Math.floor(seconds / (3600 * 24));
	seconds = seconds % (3600 * 24);
	var hours = Math.floor(seconds / 3600);
	if (hours < 10) {
		hours = "0" + hours;
	}
	seconds = seconds % 3600;
	var minutes = Math.floor(seconds / 60);
	if (minutes < 10) {
		minutes = "0" + minutes;
	}
	seconds = seconds % 60;
	if (seconds < 10) {
		seconds = "0" + seconds;
	}
	var result = "第 <span class=\"digit\">" + days + "</span> 天 <span class=\"digit\">" + hours + "</span> 小时 <span class=\"digit\">" + minutes + "</span> 分钟 <span class=\"digit\">" + seconds + "</span> 秒";
	$("#clock").html(result);
}

function transDate(minute, show_date = '') {
	var current = Date();
	var dateJg = (Date.parse(current) - Date.parse(minute));
	minute = dateJg / 1000 / 60;

	if (minute == 0 || isNaN(minute) || minute == null) {
		return 0;
	}

	var year, months, days, hours, minutes;
	if (minute / 60 / 24 / 30 >= 12) {
		year = parseInt(minute / 60 / 24 / 30 / 12);
	}
	if (minute % (60 * 24 * 30 * 12) != 0 && minute / 60 / 24 >= 30) {
		var t = minute / 60 / 24 / 30;
		if (show_date != "较远") {
			t = t - parseInt(minute / 60 / 24 / 30 / 12) * 12;
		}
		months = parseInt(t);
	}
	if (minute % (60 * 24 * 30) != 0 && minute / 60 >= 24) {
		var t = minute / 60 / 24;
		if (show_date != "较远") {
			t = t - parseInt(minute / 60 / 24 / 30) * 30;
		}
		days = parseInt(t);
	}
	if (minute % (60 * 24) != 0 && minute >= 60) {
		var t = minute / 60;
		if (show_date != "较远") {
			t = t - parseInt(minute / 60 / 24) * 24;
		}
		hours = parseInt(t);
	}
	if (minute % 60 != 0) {
		if (show_date != "较远") {
			minute = minute - parseInt(minute / 60) * 60;
		}
		minutes = parseInt(minute);
	}

	// return show_date;
	console.log(year, months, days, hours, minutes)

	var result = "<span class=\"digit\">" + year + "</span> 年 <span class=\"digit\">" + months + "</span> 月 <span class=\"digit\">" + days + "</span> 天 <span class=\"digit\">" + hours + "</span> 时 <span class=\"digit\">" + minutes + "</span> 分";
	$("#clock").html(result);
}