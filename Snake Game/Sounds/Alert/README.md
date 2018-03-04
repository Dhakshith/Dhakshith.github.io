ment} current volume or p5.MediaElement
   * @method volume
   */
  p5.MediaElement.prototype.volume = function(val) {
    if (typeof val === 'undefined') {
      return this.elt.volume;
    } else {
      this.elt.volume = val;
    }
  };

  /**
   * If no arguments are given, returns the current playback speed of the
   * element. The speed parameter sets the speed where 2.0 will play the
   * element twice as fast, 0.5 will play at half the speed, and -1 will play
   * the element in normal speed in reverse.(Note that not all browsers support
   * backward playback and even if they do, playback might not be smooth.)
   *
   * @method speed
   * @param {Number} [speed]  speed multiplier for element playback
   * @return {Number|Object|p5.MediaElement} current playback speed or p5.MediaElement
   */
  p5.MediaElement.prototype.speed = function(va