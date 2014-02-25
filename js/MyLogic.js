var dragview = new DragView($(container));
container.bind("dragstart", $.proxy(dragview.OnDragStart, dragview));
container.bind("drag", $.proxy(dragview.OnDrag, dragview));
container.bind("dragend", $.proxy(dragview.OnDragEnd, dragview));
setInterval($.proxy(dragview.WatchDrag, dragview), 10);

function DragView(target) {
	this.target = target[0];
	this.drag = [];
	this.lastDrag = {};
}

this.OnDragStart = function(event) {
	var touches = event.originalEvent.touches || [event.originalEvent];
	for(var t=0; t<touches.length; t++) {
		var el = touches[t].target.parentNode;
		if(el.className.search('polaroid') > -1) {
			el = touches[t].target.parentNode.parentNode;
		}
		el.style.zIndex = zIndexBackup + 1;
		zIndexBackup = zIndexBackup + 1;

		if(el && el == this.target) {
			$(el).children().toggleClass('upSky');
			this.lastDrag = {
					el: el,
					pos: event.touches[t]
			};
		return;
		}
	}
}
