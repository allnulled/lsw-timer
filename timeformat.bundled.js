/*
 * Generated by PEG.js 0.10.0.
 *
 * http://pegjs.org/
 */
(function(root) {
  "use strict";

  function peg$subclass(child, parent) {
    function ctor() { this.constructor = child; }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor();
  }

  function peg$SyntaxError(message, expected, found, location) {
    this.message  = message;
    this.expected = expected;
    this.found    = found;
    this.location = location;
    this.name     = "SyntaxError";

    if (typeof Error.captureStackTrace === "function") {
      Error.captureStackTrace(this, peg$SyntaxError);
    }
  }

  peg$subclass(peg$SyntaxError, Error);

  peg$SyntaxError.buildMessage = function(expected, found) {
    var DESCRIBE_EXPECTATION_FNS = {
          literal: function(expectation) {
            return "\"" + literalEscape(expectation.text) + "\"";
          },

          "class": function(expectation) {
            var escapedParts = "",
                i;

            for (i = 0; i < expectation.parts.length; i++) {
              escapedParts += expectation.parts[i] instanceof Array
                ? classEscape(expectation.parts[i][0]) + "-" + classEscape(expectation.parts[i][1])
                : classEscape(expectation.parts[i]);
            }

            return "[" + (expectation.inverted ? "^" : "") + escapedParts + "]";
          },

          any: function(expectation) {
            return "any character";
          },

          end: function(expectation) {
            return "end of input";
          },

          other: function(expectation) {
            return expectation.description;
          }
        };

    function hex(ch) {
      return ch.charCodeAt(0).toString(16).toUpperCase();
    }

    function literalEscape(s) {
      return s
        .replace(/\\/g, '\\\\')
        .replace(/"/g,  '\\"')
        .replace(/\0/g, '\\0')
        .replace(/\t/g, '\\t')
        .replace(/\n/g, '\\n')
        .replace(/\r/g, '\\r')
        .replace(/[\x00-\x0F]/g,          function(ch) { return '\\x0' + hex(ch); })
        .replace(/[\x10-\x1F\x7F-\x9F]/g, function(ch) { return '\\x'  + hex(ch); });
    }

    function classEscape(s) {
      return s
        .replace(/\\/g, '\\\\')
        .replace(/\]/g, '\\]')
        .replace(/\^/g, '\\^')
        .replace(/-/g,  '\\-')
        .replace(/\0/g, '\\0')
        .replace(/\t/g, '\\t')
        .replace(/\n/g, '\\n')
        .replace(/\r/g, '\\r')
        .replace(/[\x00-\x0F]/g,          function(ch) { return '\\x0' + hex(ch); })
        .replace(/[\x10-\x1F\x7F-\x9F]/g, function(ch) { return '\\x'  + hex(ch); });
    }

    function describeExpectation(expectation) {
      return DESCRIBE_EXPECTATION_FNS[expectation.type](expectation);
    }

    function describeExpected(expected) {
      var descriptions = new Array(expected.length),
          i, j;

      for (i = 0; i < expected.length; i++) {
        descriptions[i] = describeExpectation(expected[i]);
      }

      descriptions.sort();

      if (descriptions.length > 0) {
        for (i = 1, j = 1; i < descriptions.length; i++) {
          if (descriptions[i - 1] !== descriptions[i]) {
            descriptions[j] = descriptions[i];
            j++;
          }
        }
        descriptions.length = j;
      }

      switch (descriptions.length) {
        case 1:
          return descriptions[0];

        case 2:
          return descriptions[0] + " or " + descriptions[1];

        default:
          return descriptions.slice(0, -1).join(", ")
            + ", or "
            + descriptions[descriptions.length - 1];
      }
    }

    function describeFound(found) {
      return found ? "\"" + literalEscape(found) + "\"" : "end of input";
    }

    return "Expected " + describeExpected(expected) + " but " + describeFound(found) + " found.";
  };

  function peg$parse(input, options) {
    options = options !== void 0 ? options : {};

    var peg$FAILED = {},

        peg$startRuleFunctions = { Inicio: peg$parseInicio },
        peg$startRuleFunction  = peg$parseInicio,

        peg$c0 = function(primero, otras) {
              return [primero].concat(otras || []);
            },
        peg$c1 = ",",
        peg$c2 = peg$literalExpectation(",", false),
        peg$c3 = function(tiempo) {
              return tiempo;
            },
        peg$c4 = "-",
        peg$c5 = peg$literalExpectation("-", false),
        peg$c6 = function(inicio, fin) {
              return { tipo: "Rango", inicio, fin };
            },
        peg$c7 = "+",
        peg$c8 = peg$literalExpectation("+", false),
        peg$c9 = " ",
        peg$c10 = peg$literalExpectation(" ", false),
        peg$c11 = function(fecha, hora) {
              delete fecha.tipo;
              delete hora.tipo;
              return { tipo: "FechaHora", ...fecha, ...hora };
            },
        peg$c12 = "/",
        peg$c13 = peg$literalExpectation("/", false),
        peg$c14 = function(anio, mes, dia) {
              return { tipo: "SoloFecha", anio, mes, dia };
            },
        peg$c15 = ":",
        peg$c16 = peg$literalExpectation(":", false),
        peg$c17 = ".",
        peg$c18 = peg$literalExpectation(".", false),
        peg$c19 = function(hora, minuto, segundo, milisegundo) {
              return { tipo: "Hora", hora, minuto, segundo, milisegundo };
            },
        peg$c20 = function(hora, minuto, segundo) {
              return { tipo: "Hora", hora, minuto, segundo };
            },
        peg$c21 = function(hora, minuto) {
              return { tipo: "Hora", hora, minuto };
            },
        peg$c22 = function(partes) {
              return { tipo: "Duracion", ...recomponer_objeto(partes) };
            },
        peg$c23 = function(valor, unidad) {
              return { valor, unidad };
            },
        peg$c24 = "y",
        peg$c25 = peg$literalExpectation("y", false),
        peg$c26 = function() { return "anios"; },
        peg$c27 = "mon",
        peg$c28 = peg$literalExpectation("mon", false),
        peg$c29 = function() { return "meses"; },
        peg$c30 = "d",
        peg$c31 = peg$literalExpectation("d", false),
        peg$c32 = function() { return "dias"; },
        peg$c33 = "h",
        peg$c34 = peg$literalExpectation("h", false),
        peg$c35 = function() { return "horas"; },
        peg$c36 = "min",
        peg$c37 = peg$literalExpectation("min", false),
        peg$c38 = function() { return "minutos"; },
        peg$c39 = "s",
        peg$c40 = peg$literalExpectation("s", false),
        peg$c41 = function() { return "segundos"; },
        peg$c42 = "ms",
        peg$c43 = peg$literalExpectation("ms", false),
        peg$c44 = function() { return "milisegundos"; },
        peg$c45 = /^[0-9]/,
        peg$c46 = peg$classExpectation([["0", "9"]], false, false),
        peg$c47 = function() { return parseInt(text(), 10); },
        peg$c48 = /^[0-1]/,
        peg$c49 = peg$classExpectation([["0", "1"]], false, false),
        peg$c50 = /^[0-3]/,
        peg$c51 = peg$classExpectation([["0", "3"]], false, false),
        peg$c52 = /^[0-2]/,
        peg$c53 = peg$classExpectation([["0", "2"]], false, false),
        peg$c54 = /^[0-5]/,
        peg$c55 = peg$classExpectation([["0", "5"]], false, false),
        peg$c56 = "\t",
        peg$c57 = peg$literalExpectation("\t", false),

        peg$currPos          = 0,
        peg$savedPos         = 0,
        peg$posDetailsCache  = [{ line: 1, column: 1 }],
        peg$maxFailPos       = 0,
        peg$maxFailExpected  = [],
        peg$silentFails      = 0,

        peg$result;

    if ("startRule" in options) {
      if (!(options.startRule in peg$startRuleFunctions)) {
        throw new Error("Can't start parsing from rule \"" + options.startRule + "\".");
      }

      peg$startRuleFunction = peg$startRuleFunctions[options.startRule];
    }

    function text() {
      return input.substring(peg$savedPos, peg$currPos);
    }

    function location() {
      return peg$computeLocation(peg$savedPos, peg$currPos);
    }

    function expected(description, location) {
      location = location !== void 0 ? location : peg$computeLocation(peg$savedPos, peg$currPos)

      throw peg$buildStructuredError(
        [peg$otherExpectation(description)],
        input.substring(peg$savedPos, peg$currPos),
        location
      );
    }

    function error(message, location) {
      location = location !== void 0 ? location : peg$computeLocation(peg$savedPos, peg$currPos)

      throw peg$buildSimpleError(message, location);
    }

    function peg$literalExpectation(text, ignoreCase) {
      return { type: "literal", text: text, ignoreCase: ignoreCase };
    }

    function peg$classExpectation(parts, inverted, ignoreCase) {
      return { type: "class", parts: parts, inverted: inverted, ignoreCase: ignoreCase };
    }

    function peg$anyExpectation() {
      return { type: "any" };
    }

    function peg$endExpectation() {
      return { type: "end" };
    }

    function peg$otherExpectation(description) {
      return { type: "other", description: description };
    }

    function peg$computePosDetails(pos) {
      var details = peg$posDetailsCache[pos], p;

      if (details) {
        return details;
      } else {
        p = pos - 1;
        while (!peg$posDetailsCache[p]) {
          p--;
        }

        details = peg$posDetailsCache[p];
        details = {
          line:   details.line,
          column: details.column
        };

        while (p < pos) {
          if (input.charCodeAt(p) === 10) {
            details.line++;
            details.column = 1;
          } else {
            details.column++;
          }

          p++;
        }

        peg$posDetailsCache[pos] = details;
        return details;
      }
    }

    function peg$computeLocation(startPos, endPos) {
      var startPosDetails = peg$computePosDetails(startPos),
          endPosDetails   = peg$computePosDetails(endPos);

      return {
        start: {
          offset: startPos,
          line:   startPosDetails.line,
          column: startPosDetails.column
        },
        end: {
          offset: endPos,
          line:   endPosDetails.line,
          column: endPosDetails.column
        }
      };
    }

    function peg$fail(expected) {
      if (peg$currPos < peg$maxFailPos) { return; }

      if (peg$currPos > peg$maxFailPos) {
        peg$maxFailPos = peg$currPos;
        peg$maxFailExpected = [];
      }

      peg$maxFailExpected.push(expected);
    }

    function peg$buildSimpleError(message, location) {
      return new peg$SyntaxError(message, null, null, location);
    }

    function peg$buildStructuredError(expected, found, location) {
      return new peg$SyntaxError(
        peg$SyntaxError.buildMessage(expected, found),
        expected,
        found,
        location
      );
    }

    function peg$parseInicio() {
      var s0;

      s0 = peg$parseLista();

      return s0;
    }

    function peg$parseLista() {
      var s0, s1, s2, s3;

      s0 = peg$currPos;
      s1 = peg$parseUnidadDeTiempo();
      if (s1 !== peg$FAILED) {
        s2 = [];
        s3 = peg$parseOtraUnidadDeTiempo();
        while (s3 !== peg$FAILED) {
          s2.push(s3);
          s3 = peg$parseOtraUnidadDeTiempo();
        }
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c0(s1, s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseOtraUnidadDeTiempo() {
      var s0, s1, s2, s3, s4;

      s0 = peg$currPos;
      s1 = [];
      s2 = peg$parse_();
      while (s2 !== peg$FAILED) {
        s1.push(s2);
        s2 = peg$parse_();
      }
      if (s1 !== peg$FAILED) {
        if (input.charCodeAt(peg$currPos) === 44) {
          s2 = peg$c1;
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c2); }
        }
        if (s2 !== peg$FAILED) {
          s3 = [];
          s4 = peg$parse_();
          while (s4 !== peg$FAILED) {
            s3.push(s4);
            s4 = peg$parse_();
          }
          if (s3 !== peg$FAILED) {
            s4 = peg$parseUnidadDeTiempo();
            if (s4 !== peg$FAILED) {
              peg$savedPos = s0;
              s1 = peg$c3(s4);
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseUnidadDeTiempo() {
      var s0;

      s0 = peg$parseDuracion();
      if (s0 === peg$FAILED) {
        s0 = peg$parseRango();
        if (s0 === peg$FAILED) {
          s0 = peg$parseMomento();
        }
      }

      return s0;
    }

    function peg$parseRango() {
      var s0, s1, s2, s3;

      s0 = peg$currPos;
      s1 = peg$parseMomento();
      if (s1 !== peg$FAILED) {
        if (input.charCodeAt(peg$currPos) === 45) {
          s2 = peg$c4;
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c5); }
        }
        if (s2 !== peg$FAILED) {
          s3 = peg$parseMomento();
          if (s3 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c6(s1, s3);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseMomento() {
      var s0;

      s0 = peg$parseFechaHora();
      if (s0 === peg$FAILED) {
        s0 = peg$parseSoloFecha();
        if (s0 === peg$FAILED) {
          s0 = peg$parseHora();
        }
      }

      return s0;
    }

    function peg$parseFechaHora() {
      var s0, s1, s2, s3;

      s0 = peg$currPos;
      s1 = peg$parseSoloFecha();
      if (s1 !== peg$FAILED) {
        if (input.charCodeAt(peg$currPos) === 43) {
          s2 = peg$c7;
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c8); }
        }
        if (s2 === peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 32) {
            s2 = peg$c9;
            peg$currPos++;
          } else {
            s2 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c10); }
          }
        }
        if (s2 !== peg$FAILED) {
          s3 = peg$parseHora();
          if (s3 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c11(s1, s3);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseSoloFecha() {
      var s0, s1, s2, s3, s4, s5;

      s0 = peg$currPos;
      s1 = peg$parseAnio();
      if (s1 !== peg$FAILED) {
        if (input.charCodeAt(peg$currPos) === 47) {
          s2 = peg$c12;
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c13); }
        }
        if (s2 !== peg$FAILED) {
          s3 = peg$parseMes();
          if (s3 !== peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 47) {
              s4 = peg$c12;
              peg$currPos++;
            } else {
              s4 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c13); }
            }
            if (s4 !== peg$FAILED) {
              s5 = peg$parseDia();
              if (s5 !== peg$FAILED) {
                peg$savedPos = s0;
                s1 = peg$c14(s1, s3, s5);
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseHora() {
      var s0, s1, s2, s3, s4, s5, s6, s7;

      s0 = peg$currPos;
      s1 = peg$parseHoraExacta();
      if (s1 !== peg$FAILED) {
        if (input.charCodeAt(peg$currPos) === 58) {
          s2 = peg$c15;
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c16); }
        }
        if (s2 !== peg$FAILED) {
          s3 = peg$parseMinuto();
          if (s3 !== peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 58) {
              s4 = peg$c15;
              peg$currPos++;
            } else {
              s4 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c16); }
            }
            if (s4 !== peg$FAILED) {
              s5 = peg$parseSegundo();
              if (s5 !== peg$FAILED) {
                if (input.charCodeAt(peg$currPos) === 46) {
                  s6 = peg$c17;
                  peg$currPos++;
                } else {
                  s6 = peg$FAILED;
                  if (peg$silentFails === 0) { peg$fail(peg$c18); }
                }
                if (s6 !== peg$FAILED) {
                  s7 = peg$parseMilisegundo();
                  if (s7 !== peg$FAILED) {
                    peg$savedPos = s0;
                    s1 = peg$c19(s1, s3, s5, s7);
                    s0 = s1;
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        s1 = peg$parseHoraExacta();
        if (s1 !== peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 58) {
            s2 = peg$c15;
            peg$currPos++;
          } else {
            s2 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c16); }
          }
          if (s2 !== peg$FAILED) {
            s3 = peg$parseMinuto();
            if (s3 !== peg$FAILED) {
              if (input.charCodeAt(peg$currPos) === 58) {
                s4 = peg$c15;
                peg$currPos++;
              } else {
                s4 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c16); }
              }
              if (s4 !== peg$FAILED) {
                s5 = peg$parseSegundo();
                if (s5 !== peg$FAILED) {
                  peg$savedPos = s0;
                  s1 = peg$c20(s1, s3, s5);
                  s0 = s1;
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
        if (s0 === peg$FAILED) {
          s0 = peg$currPos;
          s1 = peg$parseHoraExacta();
          if (s1 !== peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 58) {
              s2 = peg$c15;
              peg$currPos++;
            } else {
              s2 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c16); }
            }
            if (s2 !== peg$FAILED) {
              s3 = peg$parseMinuto();
              if (s3 !== peg$FAILED) {
                peg$savedPos = s0;
                s1 = peg$c21(s1, s3);
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        }
      }

      return s0;
    }

    function peg$parseDuracion() {
      var s0, s1, s2;

      s0 = peg$currPos;
      s1 = [];
      s2 = peg$parseParteDuracion();
      if (s2 !== peg$FAILED) {
        while (s2 !== peg$FAILED) {
          s1.push(s2);
          s2 = peg$parseParteDuracion();
        }
      } else {
        s1 = peg$FAILED;
      }
      if (s1 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c22(s1);
      }
      s0 = s1;

      return s0;
    }

    function peg$parseParteDuracion() {
      var s0, s1, s2, s3;

      s0 = peg$currPos;
      s1 = [];
      s2 = peg$parse_();
      while (s2 !== peg$FAILED) {
        s1.push(s2);
        s2 = peg$parse_();
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseNumero();
        if (s2 !== peg$FAILED) {
          s3 = peg$parseUnidad();
          if (s3 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c23(s2, s3);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseUnidad() {
      var s0, s1;

      s0 = peg$currPos;
      if (input.charCodeAt(peg$currPos) === 121) {
        s1 = peg$c24;
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c25); }
      }
      if (s1 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c26();
      }
      s0 = s1;
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        if (input.substr(peg$currPos, 3) === peg$c27) {
          s1 = peg$c27;
          peg$currPos += 3;
        } else {
          s1 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c28); }
        }
        if (s1 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c29();
        }
        s0 = s1;
        if (s0 === peg$FAILED) {
          s0 = peg$currPos;
          if (input.charCodeAt(peg$currPos) === 100) {
            s1 = peg$c30;
            peg$currPos++;
          } else {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c31); }
          }
          if (s1 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c32();
          }
          s0 = s1;
          if (s0 === peg$FAILED) {
            s0 = peg$currPos;
            if (input.charCodeAt(peg$currPos) === 104) {
              s1 = peg$c33;
              peg$currPos++;
            } else {
              s1 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c34); }
            }
            if (s1 !== peg$FAILED) {
              peg$savedPos = s0;
              s1 = peg$c35();
            }
            s0 = s1;
            if (s0 === peg$FAILED) {
              s0 = peg$currPos;
              if (input.substr(peg$currPos, 3) === peg$c36) {
                s1 = peg$c36;
                peg$currPos += 3;
              } else {
                s1 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c37); }
              }
              if (s1 !== peg$FAILED) {
                peg$savedPos = s0;
                s1 = peg$c38();
              }
              s0 = s1;
              if (s0 === peg$FAILED) {
                s0 = peg$currPos;
                if (input.charCodeAt(peg$currPos) === 115) {
                  s1 = peg$c39;
                  peg$currPos++;
                } else {
                  s1 = peg$FAILED;
                  if (peg$silentFails === 0) { peg$fail(peg$c40); }
                }
                if (s1 !== peg$FAILED) {
                  peg$savedPos = s0;
                  s1 = peg$c41();
                }
                s0 = s1;
                if (s0 === peg$FAILED) {
                  s0 = peg$currPos;
                  if (input.substr(peg$currPos, 2) === peg$c42) {
                    s1 = peg$c42;
                    peg$currPos += 2;
                  } else {
                    s1 = peg$FAILED;
                    if (peg$silentFails === 0) { peg$fail(peg$c43); }
                  }
                  if (s1 !== peg$FAILED) {
                    peg$savedPos = s0;
                    s1 = peg$c44();
                  }
                  s0 = s1;
                }
              }
            }
          }
        }
      }

      return s0;
    }

    function peg$parseAnio() {
      var s0, s1, s2, s3, s4;

      s0 = peg$currPos;
      if (peg$c45.test(input.charAt(peg$currPos))) {
        s1 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c46); }
      }
      if (s1 !== peg$FAILED) {
        if (peg$c45.test(input.charAt(peg$currPos))) {
          s2 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c46); }
        }
        if (s2 !== peg$FAILED) {
          if (peg$c45.test(input.charAt(peg$currPos))) {
            s3 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s3 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c46); }
          }
          if (s3 !== peg$FAILED) {
            if (peg$c45.test(input.charAt(peg$currPos))) {
              s4 = input.charAt(peg$currPos);
              peg$currPos++;
            } else {
              s4 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c46); }
            }
            if (s4 !== peg$FAILED) {
              peg$savedPos = s0;
              s1 = peg$c47();
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseMes() {
      var s0, s1, s2;

      s0 = peg$currPos;
      if (peg$c48.test(input.charAt(peg$currPos))) {
        s1 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c49); }
      }
      if (s1 !== peg$FAILED) {
        if (peg$c45.test(input.charAt(peg$currPos))) {
          s2 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c46); }
        }
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c47();
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseDia() {
      var s0, s1, s2;

      s0 = peg$currPos;
      if (peg$c50.test(input.charAt(peg$currPos))) {
        s1 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c51); }
      }
      if (s1 !== peg$FAILED) {
        if (peg$c45.test(input.charAt(peg$currPos))) {
          s2 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c46); }
        }
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c47();
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseHoraExacta() {
      var s0, s1, s2;

      s0 = peg$currPos;
      if (peg$c52.test(input.charAt(peg$currPos))) {
        s1 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c53); }
      }
      if (s1 !== peg$FAILED) {
        if (peg$c45.test(input.charAt(peg$currPos))) {
          s2 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c46); }
        }
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c47();
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseMinuto() {
      var s0, s1, s2;

      s0 = peg$currPos;
      if (peg$c54.test(input.charAt(peg$currPos))) {
        s1 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c55); }
      }
      if (s1 !== peg$FAILED) {
        if (peg$c45.test(input.charAt(peg$currPos))) {
          s2 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c46); }
        }
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c47();
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseSegundo() {
      var s0, s1, s2;

      s0 = peg$currPos;
      if (peg$c54.test(input.charAt(peg$currPos))) {
        s1 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c55); }
      }
      if (s1 !== peg$FAILED) {
        if (peg$c45.test(input.charAt(peg$currPos))) {
          s2 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c46); }
        }
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c47();
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseMilisegundo() {
      var s0, s1, s2, s3;

      s0 = peg$currPos;
      if (peg$c45.test(input.charAt(peg$currPos))) {
        s1 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c46); }
      }
      if (s1 !== peg$FAILED) {
        if (peg$c45.test(input.charAt(peg$currPos))) {
          s2 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c46); }
        }
        if (s2 === peg$FAILED) {
          s2 = null;
        }
        if (s2 !== peg$FAILED) {
          if (peg$c45.test(input.charAt(peg$currPos))) {
            s3 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s3 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c46); }
          }
          if (s3 === peg$FAILED) {
            s3 = null;
          }
          if (s3 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c47();
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseNumero() {
      var s0, s1, s2;

      s0 = peg$currPos;
      s1 = [];
      if (peg$c45.test(input.charAt(peg$currPos))) {
        s2 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c46); }
      }
      if (s2 !== peg$FAILED) {
        while (s2 !== peg$FAILED) {
          s1.push(s2);
          if (peg$c45.test(input.charAt(peg$currPos))) {
            s2 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s2 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c46); }
          }
        }
      } else {
        s1 = peg$FAILED;
      }
      if (s1 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c47();
      }
      s0 = s1;

      return s0;
    }

    function peg$parse_() {
      var s0;

      if (input.charCodeAt(peg$currPos) === 32) {
        s0 = peg$c9;
        peg$currPos++;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c10); }
      }
      if (s0 === peg$FAILED) {
        if (input.charCodeAt(peg$currPos) === 9) {
          s0 = peg$c56;
          peg$currPos++;
        } else {
          s0 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c57); }
        }
      }

      return s0;
    }


      const recomponer_objeto = function(partes) {
        let objeto = {};
        for(let i=0; i<partes.length; i++) {
          const parte = partes[i];
          objeto[parte.unidad] = parte.valor;
        }
        return objeto;
      };


    peg$result = peg$startRuleFunction();

    if (peg$result !== peg$FAILED && peg$currPos === input.length) {
      return peg$result;
    } else {
      if (peg$result !== peg$FAILED && peg$currPos < input.length) {
        peg$fail(peg$endExpectation());
      }

      throw peg$buildStructuredError(
        peg$maxFailExpected,
        peg$maxFailPos < input.length ? input.charAt(peg$maxFailPos) : null,
        peg$maxFailPos < input.length
          ? peg$computeLocation(peg$maxFailPos, peg$maxFailPos + 1)
          : peg$computeLocation(peg$maxFailPos, peg$maxFailPos)
      );
    }
  }

  root.Timeformat_parser = {
    SyntaxError: peg$SyntaxError,
    parse:       peg$parse
  };
})(typeof window === 'undefined' ? global : window);

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
