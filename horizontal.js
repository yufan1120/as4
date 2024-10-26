var winw = $(window).width();
var winh = $(window).height();
var doch = $(document).height();

// 設定橫向捲動的起始位置
var horizontalScrollStart = $(".banner-div").outerHeight(); // 第一個 div 的高度
var maxW; // 定義橫向捲動的最大寬度

$(document).ready(function () {
    // 預計算橫向捲動的最大寬度
    maxW = $("#horizontal").width() - winw;

    // 確保 #horizontal 的 CSS 屬性包含 transition 以平滑變化
    $("#horizontal").css({
        transition: 'left 0.3s ease' // 添加平滑效果
    });

    $(window).scroll(function () {
        var current_pos = $(window).scrollTop();

        // 檢查當前滾動位置是否已經到達橫向捲動的起始位置
        if (current_pos >= horizontalScrollStart) {
            var max_scroll = $(document).height() - winh;
            
            // 計算新的 left 值
            var new_left = (-1 * maxW * (current_pos - horizontalScrollStart)) / (max_scroll - horizontalScrollStart);
            $("#horizontal").css({
                left: new_left
            });

            // 如果當前滾動位置超過橫向捲動的結束位置，讓 #horizontal 固定在最左邊
            if (current_pos >= horizontalScrollStart + maxW) {
                requestAnimationFrame(function() {
                    $("#horizontal").css({
                        left: -maxW
                    });
                });
            }
        }
    });
});

$(window).scroll(function(){
  var current_pos = $(window).scrollTop();
  var new_width = (current_pos * winw) / (doch - winh);
  $("#statusbar").css({
    width: new_width
  });
});