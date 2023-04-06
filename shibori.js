$(function() {
    // 初期表示
  //   $('.item').show();

  //   var date = new Date("2021-05-21");
  //   $("#data-accident").val(date.getFullYear() + "-" + ("0" + (date.getMonth() + 1)).slice(-2) + "-" + ("0" + date.getDate()).slice(-2));
    
  //   $('#datestart, #dateend').on('change', function() {
  //     // 選択された開始日と終了日を取得する
  //     var startDate = $('#datestart').val();
  //     var endDate = $('#dateend').val();

  //     // li要素を全て取得する
  //     var items = $('.item');

  //     // li要素をループして絞り込む
  //     items.each(function()  {
  //        var accidentDate = $(this).data('accident');

  //        // 範囲内の場合は表示する
  //        if (accidentDate < startDate || accidentDate > endDate){
  //           $(this).hide();
  //        } else {
  //           $(this).show();
  //        }
  //     });
  //  });


    $('#accidentdatestart, #accidentdateend').on('change', function() {
      // 開始日・終了日を取得
      const start = $('#datestart').val() || '0000-01-01';
      const end = $('#dateend').val() || '9999-12-31';
      
      // すべてのアイテムを非表示にする
       $('.item').hide();
      
      // 開始日・終了日の範囲内のアイテムを表示する
      $('.item').each(function() {
        const date = $(this).data('accident');
        if (date >= start && date <= end) {
          $(this).show();
        }
      });
    });


    
    $('#starttime, #endtime').on('change', function(){
      const starttime = parseInt($('#starttime').val());
      const endtime = parseInt($('#endtime').val());
      $('.item').hide();
      for(let i=starttime; i<=endtime; i++){
      $('.item[data-time="' + i + '時"]').show();
      }
      });
    
      // liタグのdate-accident属性値が絞り込み範囲内であれば表示、それ以外は非表示にする
      // $('li[data-accident]').each(function() {
      //   var date = $(this).attr('data-accident');
      //   if (date >= datestart && date <= dateend) {
      //     $(this).show();
      //   } else {
      //     $(this).hide();
      //   }
      // });
      // });

    $("#input-text").on("input", function() {
      // 入力された値
      var filterText = $(this).val().trim().toLowerCase();
      // リストを初期化
      $("#list > li").hide();
      // 値が一致する要素を表示
      $("#list > li").filter(function() {
        return $(this).data("filter").toLowerCase().indexOf(filterText) > -1;
      }).show();
    });

  
    $('input[type="checkbox"]').change(function() {
      const color = [];
      const sizefirst = [];
      const sizesecond = [];
      const sizethird = [];
  
      // 選択された色を配列に格納
      $('input[name="color"]:checked').each(function() {
        color.push($(this).val());
      });
  
      // 選択されたサイズを配列に格納
      $('input[name="sizefirst"]:checked').each(function() {
        sizefirst.push($(this).val());
      });

      $('input[name="sizesecond"]:checked').each(function() {
        sizesecond.push($(this).val());
      });

      $('input[name="sizethird"]:checked').each(function() {
        sizethird.push($(this).val());
      });
  
      // 全てのアイテムを非表示にする
      $('.item').hide();
  
      // 選択された条件に合致するアイテムを表示する
      $('.item').each(function() {
        const item_color = $(this).data('color');
        const item_sizefirst = $(this).data('sizefirst');
        const item_sizesecond = $(this).data('sizesecond');
        const item_sizethird = $(this).data('sizethird');

        if ($.inArray(item_color, color) !== -1){ 
            $(this).show();
          }

        if($.inArray(item_sizefirst, sizefirst) !== -1){
            $(this).show();
          }

        if($.inArray(item_sizesecond, sizesecond) !== -1){
            $(this).show();
          }

        if($.inArray(item_sizethird, sizethird) !== -1){
            $(this).show();
          }

      });
    });
  });