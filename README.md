Bootstrap Context Menu
======================

A context menu extension of Bootstrap made for everyone's convenience.

Demo available here: https://rawgit.com/skipperbent/simple-bootstrap-contextmenu/master/index.html

Installation
------------

`bower install simple-bootstrap-contextmenu`

Example
-------

Create context-menu

```html
<ul id="contextMenu" class="dropdown-menu" role="menu" style="display:none" >
    <li><a tabindex="-1" href="#">Action</a></li>
    <li><a tabindex="-1" href="#">Another action</a></li>
    <li><a tabindex="-1" href="#">Something else here</a></li>
    <li class="divider"></li>
    <li><a tabindex="-1" href="#">Separated link</a></li>
</ul>
```

```js
$("#myTable td").contextMenu({
    menuSelector: "#contextMenu",
    menuSelected: function (invokedOn, selectedMenu) {
        var msg = "You selected the menu item '" + selectedMenu.text() +
            "' on the value '" + invokedOn.text() + "'";
        alert(msg);
    }
});
```

### Adding animation

The css attribute `visible` will be added to the context-menu when visible. You can use this class to add CSS animations to the context-menu.

### License
MIT
