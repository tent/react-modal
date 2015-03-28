Modal
=====

[React](http://reactjs.org/) component for when you need a modal.

## Usage

```html
<link href="Modal.css" rel="stylesheet" />
<script src="http://fb.me/react-0.12.2.js" type="application/javascript"></script>
<script src="Modal.js" type="application/javascript"></script>
```

```
<Modal
	visible={ Boolean() }
	onShow={ function(){} }
	onHide={ function(){} }>

	<header>
		<h1>Your Modal</h1>
	</header>

	<p>Hello there</p>
</Modal>
```

```javascript
React.createElement(Modal, {
	visible: Boolean(),
	onShow: function(){},
	onHide: function(){}
},
	React.createElement('header', null, React.createElement('h1', null, "Your Modal")),
	React.createElement('p', null, "Hello there"));
```

- `visible` (Boolean) can be used to toggle visibility of the modal, defaults to `false`.

- `onShow` (function) is called when the modal becomes visible, defaults to an empty function.

- `onHide` (function) is called when the modal becomes not visible, default to an empty function.

## What it does

Displays a modal and prevents the document from scrolling while visible.

The modal contains a close button and clicking on the translucent part of the overlay will also cause the modal to hide.

## Why

Because [React](http://reactjs.org/) is awesome and modals are useful.

## How you can help

File an [issue](https://github.com/cupcake/react-modal/issues) if you find anything isn't working as expected.

Pull requests are always welcome, but you should open an issue before working on a new feature (both to ensure it's within the scope of this project and that it's not already being worked on).

