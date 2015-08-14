function NavMenu()
{
	this._menu = []; // Complete menu structure
	this._items = []; // Completed submenus

	NavMenu.prototype.clear = function()
	{
		this.menu = [];
	};

	NavMenu.prototype.addItem = function(title, href)
	{
		title = title || ("Menu " + this._items.length + 1);
		href = href || "Images/under-construction.jpg";

		// Add the item to the finished items
		this._items.push( {title:title, code:["<li><a onclick='PiwikEvent(\"MenuItem\", \"Click\", \"" + title + "\", \"" + href + "\");' href='" +  href + "'>" + title + "</a></li>"]} );
	};

	NavMenu.prototype.startSubMenu = function(title, href)
	{
		title = title || ("Menu " + this._items.length + 1);
		href = href || "#";

		this._items.push( {title:title, code:["<li><a onclick='PiwikEvent(\"Menu\", \"Click\", \"" + title + "\", \"" + href + "\");' href='" +  href + "'>" + title + "</a><ul>"]} );
	};

	NavMenu.prototype.endSubmenu = function()
	{
		// End unsorted list
		this._items[this._items.length-1].code.push("</ul></li>");
	};

	NavMenu.prototype.assemble = function(MenuID)
	{
		MenuID = MenuID || "NavMenu";

		// Kill any existing menus
		this.clear();

		// Start the menu structure
		this._menu.push("<nav id='" + MenuID +"'><ul>");

		// Add the items we created
		for ( var i=0; i < this._items.length; i++ )
		{
			var item = this._items[i];
			this._menu.push( item.code.join('') );
		}

		// Finish the menu structure
		this._menu.push("</ul></nav>");
	};

	NavMenu.prototype.attach = function(Selector)
	{
		Selector = typeof(Selector) == 'undefined' ? (typeof(Site) == 'undefined' ? document.body : Site ) : Selector;
		// Check if we need to add # for the ID
		Selector = $(Selector).length == 0 ? '#' + Selector : Selector;

		if ( this._items.length == 0 )
		{
			console.log('NavMenu.attach: No items exist. Exiting');
			return;
		}

		if ( this._menu.length == 0 )
			this.assemble(); // named by default

		$(Selector).append( this._menu.join('') );
	};
}