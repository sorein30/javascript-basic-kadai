$(function() {
  $('#toggle').on('click', function(){
    $('#target').toggleClass('sample');
  });

  // id属性がhasの要素がクリックされたら
  $('#has').on('click', function(){
    //id属性がtargetの要素にclass属性sampleがあるか取得する
    let result = $('#target').hasClass('sample');

    // 条件分岐してconsole.logを表示する
    if (result) {
      console.log('sampleクラスがあります');
    } else {
      console.log('sampleクラスがありません');
    }
  });
});