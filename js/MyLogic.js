var dragview = new DragView($(container));
container.bind("dragstart", $.proxy(dragview.OnDragStart, dragview));
container.bind("drag", $.proxy(dragview.OnDrag, dragview));
container.bind("dragend", $.proxy(dragview.OnDragEnd, dragview));
SetInterval($.proxy(dragview.WatchDrag, dragview), 10);
