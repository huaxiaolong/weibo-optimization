/**
 * @author huaxiaolong
 */
$("#plc_frame").bind('DOMNodeInserted', function (e) {
    // 昵称链接到热门微博的地址替换为所有微博的地址
    $('a.W_f14.W_fb.S_txt1').each(function () {
        if (!$(this).data('replaced')) {
            $(this).data('replaced', 1);
            var href = $(this).attr('href') + '&is_all=1';
            $(this).attr('href', href);
        }
    });
    // 干掉提示框
    $(".W_layer_tips").remove();
    // 干掉排行榜
    $('#v6_pl_rightmod_rank').remove();
});
