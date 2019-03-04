    	$(function(){
    		var body = $('body');
    		var btn_tmp = `<button class="copy_img" style="position:fixed; top:20px; right:20px;z-index:99999999; padding:40px; font-size:20px; cursor:pointer;">COPY</button>`;
    		body.append(btn_tmp);

    		body.on('click', '.copy_img', function(){
    			var all_src = [];

		    	$('[data-original]').each(function(){
		    		var this_ = $(this),
		    			src = this_.attr('data-original');

                    var link = document.createElement('a');
                    link.href = src;

                    var local = link.pathname;

		    		all_src.push({'local': local, 'url':src});
		    	});	

		    	console.log(all_src);
		    	$.post('handler.php', {data:all_src});

    		});

    	});