(function ($, window) {

	$.fn.contextMenu = function (settings) {

		// Open context menu
		$(document).on('contextmenu', this.selector, function (e) {

			$(this).attr('unselectable', 'on').css('user-select', 'none').on('selectstart', false);

			// return native menu if pressing control
			if (e.ctrlKey) return;

			//open menu
			var $menu = $(settings.menuSelector)
				.data('invokedOn', $(e.target))
                .addClass('visible')
				.show()
				.css({
					position: "absolute",
					left: getMenuPosition(e.clientX, 'width', 'scrollLeft'),
					top: getMenuPosition(e.clientY, 'height', 'scrollTop')
				})
				.off('click')
				.on('click', 'a', function (e) {
					$menu.hide();
                    $menu.removeClass('visible');

					var $invokedOn = $menu.data('invokedOn');
					var $selectedMenu = $(e.target);

					settings.menuSelected.call(this, $invokedOn, $selectedMenu);
				});

			return false;
		});

		//make sure menu closes on any click
		$('body').click(function () {
			$(settings.menuSelector).hide();
		});


		function getMenuPosition(mouse, direction, scrollDir) {
			var win = $(window)[direction](),
				scroll = $(window)[scrollDir](),
				menu = $(settings.menuSelector)[direction](),
				position = mouse + scroll;

			// opening menu would pass the side of the page
			if (mouse + menu > win && menu < mouse) {
                position -= $(settings.menuSelector).outerHeight();
            }

            if(direction == 'height') {
                position -= $(settings.menuSelector).outerHeight();
            }

			return position;
		}

	};
})(jQuery, window);