(function (factory) {
  const mod = factory();
  if (typeof window !== 'undefined') {
    window['LswTimer'] = mod;
  }
  if (typeof global !== 'undefined') {
    global['LswTimer'] = mod;
  }
  if (typeof module !== 'undefined') {
    module.exports = mod;
  }
})(function () {
  
  return {
    parser: Timeformat_parser
  };
  
});
