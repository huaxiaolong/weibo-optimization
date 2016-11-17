/**
 * @author huaxiaolong
 */
// 昵称链接到热门微博的地址替换为所有微博的地址
function replace_nickname_hotfeed_href() {
    $("#plc_frame").bind('DOMNodeInserted', function(e){
        $('a.W_f14.W_fb.S_txt1').each(function(){
            if (!$(this).data('replaced')) {
                $(this).data('replaced', 1);
                var href = $(this).attr('href') + '&is_all=1';
                $(this).attr('href', href);
            }
        });
    });
}

// 干掉图书排行榜
function kill_rightmod_rank() {
    $("#plc_frame").bind('DOMNodeInserted', function(e){
        $('#v6_pl_rightmod_rank').remove();
    });
}

replace_nickname_hotfeed_href();
kill_rightmod_rank();
