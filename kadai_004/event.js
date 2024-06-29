$(function() {
  //HTMLが読み込まれたとき
  $(window).on('load',() => {
    console.log('loadイベントが発生しました');
  });

  //画面がスクロールしたとき
  $(window).on('scroll',() => {
    console.log('scrollイベントが発生しました');
  });
});