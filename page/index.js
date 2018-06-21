(() => {
  const getMetaContent = function getMetaContent(name) {
    const element = document.querySelector(`meta[name='${name}']`);
    return element.getAttribute('content');
  };
  const cookieName = getMetaContent('local-auth-cookie-name');
  const queryName = getMetaContent('local-auth-query-name');
  const pagePath = `${window.location.origin}${window.location.pathname}`;
  const fetchJson = async function fetchJson(url) {
    const response = await fetch(url);
    const result = await response.json();
    return result;
  };
  const autoFill = (() => {
    const s = window.location.hash.substr(1);
    if (/^\w+$/.test(s)) {
      return s;
    } else {
      return '';
    }
  })();
  new Vue({
    el: '#app',
    data: {
      passcode: autoFill,
      lastValidatePasscode: null,
      validating: false,
      valid: false,
    },
    computed: {
      modified: function() {
        return this.passcode !== this.lastValidatePasscode;
      },
      readOnly: function() {
        return this.validating || this.valid;
      },
      validationUrl: function() {
        return `${pagePath}?${queryName}=${this.passcode}`;
      },
      wrong: function() {
        return !this.modified && !this.validating && !this.valid;
      },
      correct: function() {
        return !this.modified && !this.validating && this.valid;
      },
      qrUrl: function() {
        const url = `${pagePath}#${this.passcode}`;
        return `https://chart.googleapis.com/chart?cht=qr&chs=300x300&chld=L|0&chl=${encodeURIComponent(url)}`;
      },
    },
    methods: {
      submit: async function(event) {
        if (this.validating) {
          return ;
        }
        if (!/^\w+$/.test(this.passcode)) {
          return ;
        }
        if (this.passcode !== this.lastValidatePasscode) {
          this.validating = true;
          this.valid = await fetchJson(this.validationUrl);
          if (this.valid) {
            document.cookie = `${cookieName}=${this.passcode}`;
          }
          this.validating = false;
          this.lastValidatePasscode = this.passcode;
        }
      },
    },
  });
})();

