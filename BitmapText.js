fabric.BitmapText = fabric.util.createClass(fabric.Image, {
  type: 'bitmaptext',

  chars: '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
  text: '',
  charWidth: 0,
  charHeight: 0,

  initialize: function (element, options) {
    options = options || {};

    this.callSuper('initialize', element, options);

    this._setWidthHeight();
  },

  _setWidthHeight: function () {
    if (!this.getElement()) return;
    if (this.chars.length === 0) return;

    this.charWidth = this.getElement().width / this.chars.length;
    this.charHeight = this.getElement().height;

    this.width = this.charWidth * this.text.length;
    this.height = this.charHeight;
  },

  _renderChar: function (ctx, char, x, y) {
    var charIndex = this.chars.indexOf(char);

    ctx.drawImage(
      this.getElement(),
      charIndex * this.charWidth, 0, this.charWidth, this.charHeight,
      x, y, this.charWidth, this.charHeight);
  },

  _render: function (ctx) {
    this._setWidthHeight();

    var x = -this.width / 2;
    var y = -this.height / 2;

    Array.prototype.forEach.call(this.text, function (char, index) {
      this._renderChar(ctx, char, x + (index * this.charWidth), y);
    }, this);
  }
});

var canvas = new fabric.Canvas('canvas');

fabric.BitmapText.fromURL('https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png', function (text) {
  canvas.add(text);
}, {
  text: 'Example text'
});
