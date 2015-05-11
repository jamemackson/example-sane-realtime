<img src="https://camo.githubusercontent.com/b8ecf54b15f51c7c992d6fce003b661c96d8acec/68747470733a2f2f63646e2e7261776769742e636f6d2f6172746966696369616c696f2f73616e652f67682d70616765732f5f696e636c756465732f73616e652d6c6f676f2e737667" width="400"/>

[![Gitter](https://badges.gitter.im/Join+Chat.svg)](https://gitter.im/artificialio/sane?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![Stories in Ready](https://badge.waffle.io/jamemackson/example-sane-realtime.png?label=in%20progress&title=InProgress)](https://waffle.io/jamemackson/example-sane-realtime)
SANE Example on using Realtime socket.io connections
==========================

# How this was built

* create a new sane project

`sane new example-sane-realtime`

* generate the base route and modeling we'll use in this example.

`sane g api activities performedBy:string description:string`

* add semantic UI just to give us some quick styles

`cd client && ember install semantic-ui-ember`

* give our application a title
> client/app/templates/application.hsb
```html
<h2 id="title">SANE Stack Example Series</h2>
<h3>Real time socket.io activity feed</h3>
{{outlet}}
```

* add basic template to view activities
