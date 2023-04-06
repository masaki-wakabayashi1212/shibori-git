$(function() {
    // 初期表示
    $('.item').show();
  
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