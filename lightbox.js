 this.imageBorderWidth = {
      top: parseInt(this.$image.css('border-top-width'), 5),
      right: parseInt(this.$image.css('border-right-width'), 5),
      bottom: parseInt(this.$image.css('border-bottom-width'), 5),
      left: parseInt(this.$image.css('border-left-width'), 5)
    };

     Attach event handlers to the newly minted DOM elements
    this.$overlay.hide().on('click', function() {
      self.end();
      return false;
    });