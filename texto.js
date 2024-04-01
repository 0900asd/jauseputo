const ta = {
    t: 'BY 0900K', ws: 150, es: 100, w: 1000, i: 0, e: false, cv: true, cbi: null,
    uT: function() {
      let ct = this.t.substring(0, this.i);
      document.title = (this.cv || this.e) ? `${ct}|` : ct;
      if (this.e) {
        if (this.i > 0) this.i--; else {
          this.e = false; this.cv = true; clearInterval(this.cbi); this.sCB();
        }
      } else {
        if (this.i < this.t.length) this.i++; else {
          this.e = true; this.cv = false; setTimeout(() => { this.cv = true; }, this.w);
        }
      }
      setTimeout(() => this.uT(), this.e ? this.es : this.i === this.t.length ? this.w : this.ws);
    },
    sCB: function() {
      clearInterval(this.cbi);
      this.cbi = setInterval(() => {
        if (!this.e && this.i === this.t.length) {
          this.cv = !this.cv; document.title = this.cv ? `${this.t}|` : this.t;
        }
      }, 500);
    },
    start: function() {
      clearInterval(this.cbi); this.uT(); this.sCB();
    }
  };
  ta.start();  
