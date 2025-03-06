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

  Timeformat_utils.formatHour = function (horaInput, minutoInput) {
    const hora = ("" + horaInput).padStart(2, '0');
    const minuto = ("" + minutoInput).padStart(2, '0');
    return `${hora}:${minuto}`;
  };

  Timeformat_utils.formatDatestringFromDate = function (dateObject, setUntilDay = false, setMeridian = false) {
    if(typeof dateObject === "undefined") {
      return undefined;
    }
    const anio = ("" + (dateObject.getFullYear() ?? 0)).padStart(4, '0');
    const mes = ("" + ((dateObject.getMonth() ?? 0) + 1)).padStart(2, '0');
    const dia = ("" + (dateObject.getDate() ?? 0)).padStart(2, '0');
    if(setUntilDay) {
      return `${anio}/${mes}/${dia}`;
    }
    const hora = ("" + (dateObject.getHours() ?? 0)).padStart(2, '0');
    const minuto = ("" + (dateObject.getMinutes() ?? 0)).padStart(2, '0');
    return `${anio}/${mes}/${dia} ${hora}:${minuto}${setMeridian ? hora >= 12 ? 'pm' : 'am' : ''}`;
  };

  Timeformat_utils.formatHourFromMomento = function (momentoBrute, setMeridian = false) {
    const momento = Timeformat_utils.toPlainObject(momentoBrute);
    const hora = ("" + (momento.hora ?? 0)).padStart(2, '0');
    const minuto = ("" + (momento.minuto ?? 0)).padStart(2, '0');
    return `${hora}:${minuto}${setMeridian ? hora >= 12 ? 'pm' : 'am' : ''}`;
  };

  Timeformat_utils.formatHourFromMomentoCode = function (momentoCode, setMeridian = false) {
    const momentoBruteList = Timeformat_parser.parse(momentoCode);
    const momentoBrute = momentoBruteList[0];
    const momento = Timeformat_utils.toPlainObject(momentoBrute);
    const hora = ("" + (momento.hora ?? 0)).padStart(2, '0');
    const minuto = ("" + (momento.minuto ?? 0)).padStart(2, '0');
    return `${hora}:${minuto}${setMeridian ? hora >= 12 ? 'pm' : 'am' : ''}`;
  };

  Timeformat_utils.addDuracionToMomento = function (momentoBrute, duracion) {
    const momentoFinal = {};
    const duracionParsed = Timeformat_parser.parse(duracion)[0];
    const props = ["anio", "mes", "dia", "hora", "minuto", "segundo"];
    const propsInDuracion = ["anios", "meses", "dias", "horas", "minutos", "segundos"];
    for (let index = 0; index < props.length; index++) {
      const prop = props[index];
      const propInDuracion = propsInDuracion[index];
      const base = momentoBrute[prop] ?? 0;
      const aggregated = duracionParsed[propInDuracion] ?? 0;
      momentoFinal[prop] = base + aggregated;
    }
    return momentoFinal;
  };

  Timeformat_utils.toPlainObject = function (obj) {
    const seen = new WeakSet();
    return JSON.parse(JSON.stringify(obj, (key, value) => {
      if (typeof value === "object" && value !== null) {
        if (seen.has(value)) return undefined; // Ignora referencias circulares
        seen.add(value);
      }
      return value;
    }));
  };

  Timeformat_utils.isDurationOrThrow = function (text) {
    const errorMessage = "It must be a duration only, like 0y 0mon 0d 0h 0min 0s 0ms";
    try {
      const ast = Timeformat_parser.parse(text);
      const mainExpression = ast[0];
      if (mainExpression.tipo === "Duracion") {
        throw new Error(errorMessage);
      }
    } catch (error) {
      throw new Error(errorMessage);
    }
    return true;
  };

  Timeformat_utils.isDateOrThrow = function (text) {
    const errorMessage = "It must be a date only, like 2025/01/01";
    try {
      const ast = Timeformat_parser.parse(text);
      const mainExpression = ast[0];
      if (mainExpression.tipo !== "SoloFecha") {
        throw new Error(errorMessage);
      }
    } catch (error) {
      throw new Error(errorMessage);
    }
    return true;
  };

  Timeformat_utils.isHourOrThrow = function (text) {
    const errorMessage = "It must be an hour only, like 00:00 or 23:00";
    try {
      const ast = Timeformat_parser.parse(text);
      const mainExpression = ast[0];
      if (mainExpression.tipo === "Hora") {
        throw new Error(errorMessage);
      }
    } catch (error) {
      throw new Error(errorMessage);
    }
    return true;
  };

  return {
    parser: Timeformat_parser,
    utils: Timeformat_utils
  };

});
