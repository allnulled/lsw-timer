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
  
  const Timeformat_utils = {};

  Timeformat_utils.formatHour = function(horaInput, minutoInput) {
    console.log("momento recibido en formatHour:", horaInput, minutoInput);
    const hora = ("" + horaInput).padStart(2, '0');
    const minuto = ("" + minutoInput).padStart(2, '0');
    return `${hora}:${minuto}`;
  };

  Timeformat_utils.formatHourFromMomento = function(momentoBrute, setMeridian = false) {
    const momento = Timeformat_utils.toPlainObject(momentoBrute);
    console.log("momento recibido en formatHourFromMomento:", momento);
    const hora = ("" + (momento.hora ?? 0)).padStart(2, '0');
    const minuto = ("" + (momento.minuto ?? 0)).padStart(2, '0');
    return `${hora}:${minuto}${setMeridian ? hora >= 12 ? 'pm' : 'am' : ''}`;
  };

  Timeformat_utils.addDuracionToMomento = function(momentoBrute, duracion) {
    console.log(duracion);
    const momentoFinal = {};
    const duracionParsed = Timeformat_parser.parse(duracion)[0];
    console.log(duracionParsed);
    const props = ["anio", "mes", "dia", "hora", "minuto", "segundo"];
    const propsInDuracion = ["anios", "meses", "dias", "horas", "minutos", "segundos"];
    for(let index=0; index<props.length; index++) {
      const prop = props[index];
      const propInDuracion = propsInDuracion[index];
      const base = momentoBrute[prop] ?? 0;
      const aggregated = duracionParsed[propInDuracion] ?? 0;
      momentoFinal[prop] = base + aggregated;
    }
    return momentoFinal;
  };

  Timeformat_utils.toPlainObject = function(obj) {
    const seen = new WeakSet();
    return JSON.parse(JSON.stringify(obj, (key, value) => {
      if (typeof value === "object" && value !== null) {
        if (seen.has(value)) return undefined; // Ignora referencias circulares
        seen.add(value);
      }
      return value;
    }));
  };

  return {
    parser: Timeformat_parser,
    utils: Timeformat_utils
  };
  
});
