$(function () {
    $('#download').mouseenter(function () {
        $('.nav .qrCode').show();
    });
    $('.nav .qrCode').mouseleave(function () {
        $(this).hide();
    });
    //播放、暂停按钮
    $('.playMusic .control a').on('click', function () {
        console.log('点击了');
        if ($(this).hasClass('play')) {
            $(this).removeClass('play').addClass('pause');
            $('#music').get(0).play();
        } else if ($(this).hasClass('pause')) {
            $(this).removeClass('pause').addClass('play');
            $('#music').get(0).pause();
        }
    });
    var audio = $('audio').get(0);
    //音乐加载完成
    audio.oncanplay = function () {
        $('.playMusic .time .totalTime').html(formatTime(audio.duration));
    };
    //进度条点击
    $('.progress').on('click', function (e) {
        var width = $(this).width();
        console.log('width:' + width);
        /* e.offsetX e.offsetY 当前点击的地方 距离坐标的坐标和上边的坐标  相对于当前元素的 */
        var place = e.offsetX;
        console.log('place:' + place);
        /*计算播放时间*/
        var time = place / width * audio.duration;
        console.log('time:' + time);
        /*设置*/
        audio.currentTime = time;
    });
    //播放中
    audio.ontimeupdate = function () {
        $('.playMusic .time .currentTime').html(formatTime(audio.currentTime));
        /*进度显示  通过长度  百分比*/
        var ratio = audio.currentTime / audio.duration;
        var p = ratio * 100 + '%';
        $('.line').css('width', p);
    };
    //播放结束
    audio.onended = function () {
        audio.currentTime = 0;
        $('.playMusic .control a').removeClass('pause').addClass('play');
    };

    var formatTime = function (time) {
        /* 01:02:20  格式 */
        /*time 3666 => 01:01:06 */
        var h = Math.floor(time / 3600);
        var m = Math.floor(time % 3600 / 60);
        var s = Math.floor(time % 60);
        return (h >= 10 ? h : '0' + h) + ':' + (m >= 10 ? m : '0' + m) + ':' + (s >= 10 ? s : '0' + s);
    };
});