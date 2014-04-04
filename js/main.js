(function($) {

	var NUM_HTML_LINES = 1000;


	$('#btn-insert-at-once').click(function(e) {
		console.time('atonce');
		InsertAllAtOnce(NUM_HTML_LINES);
	});


	$('#btn-insert-looping').click(function(e) {
		console.time('looping');
		InsertLooping(NUM_HTML_LINES);
	});

	$('#btn-insert-at-once-no-css').click(function(e) {
		console.time('atoncenocss');
		InsertAllAtOnceNoCss(NUM_HTML_LINES);
	});


	$('#btn-insert-looping-no-css').click(function(e) {
		console.time('loopingnocss');
		InsertLoopingNoCss(NUM_HTML_LINES);
	});

	function InsertAllAtOnce(count) {
		var el = $('.content');
		var i, html = '';

		el.attr('data-timing', 'atonce');
		for (i = 0; i < count; i++) {
			if (count === NUM_HTML_LINES) {
				html += '<p class="border border-radius box-shadow" data-timing="atonce">Lorem ipsum dolor sit amet.</p>';
			} else {
				html += '<p class="border border-radius box-shadow">Lorem ipsum dolor sit amet.</p>';
			}
		}

		el.empty();

		el.html(html);
	}

	function InsertAllAtOnceNoCss(count) {
		var el = $('.content');
		var i, html = '';

		for (i = 0; i < count; i++) {
			if (count === NUM_HTML_LINES) {
				html += '<p data-timing="atoncenocss">Lorem ipsum dolor sit amet.</p>';
			} else {
				html += '<p>Lorem ipsum dolor sit amet.</p>';
			}
		}

		el.empty();

		el.html(html);
	}


	function InsertLooping(count) {
		var el = $('.content'), i;
		var html = '<p class="border border-radius box-shadow">Lorem ipsum dolor sit amet.</p>';

		el.empty();

		for (i = 0; i < count; i++) {
			if (count === NUM_HTML_LINES) {
				el.append('<p class="border border-radius box-shadow" data-timing="looping">Lorem ipsum dolor sit amet.</p>');
			} else {
				el.append(html);
			}
		}
	}

	function InsertLoopingNoCss(count) {
		var el = $('.content'), i;
		var html = '<p>Lorem ipsum dolor sit amet.</p>';

		el.empty();

		for (i = 0; i < count; i++) {
			if (count === NUM_HTML_LINES) {
				el.append('<p data-timing="loopingnocss">Lorem ipsum dolor sit amet.</p>');
			} else {
				el.append(html);
			}
		}
	}


}) (jQuery);
