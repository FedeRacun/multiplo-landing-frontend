export interface Project {
    codigoOperacion: string,
    fechaInicioInversion: string,
    fechaLimiteInversion: string,
    tasaEfectivaAnual: string,
    tipoInversion: string,
    destinoFinanciamiento: string,
    montoSolicitado: string,
    plazo: number,
    pagoInteres: string,
    pagoCapital: string,
    indicadores: {
        idIndicador: number,
        solvencia: string,
        porcentajeSolvencia: string,
        liquidez: string,
        porcentajeLiquidez: string,
        retornoCapital: string,
        porcentajeRetornoCapital: string,
        garantia: string,
        porcentajeGarantia: string,
        anio: number
    },
    empresa: {
        idEmpresa: number,
        nombre: string,
        actividad: {
            idActividad: number,
            nombre: string,
            estado: string
        },
        antecedente: {
            parrafo: string,
        },
        ventajaCompetitiva: {
            parrafo: string,
            item1: string,
            item2: string,
            item3: string,
            item4: string,
            item5: string,
            item6: string
        },
        pais: {
            idNacionalidad: number,
            pais: string,
            gentilicio: string,
            iso: string,
            estado: string
        },
        fechaCreacion: string,
        usuarioCreacion: string,
        fechaModificacion: null,
        usuarioModificacion: null,
        estado: string
    },
    calificacion: {
        idTipoCalificacion: number,
        nombre: string,
        estado: string
    },
    proyectoRutas: [
        {
            idProyectoRuta: number,
            nombre: string,
            ruta: string,
            estado: string
        },
        {
            idProyectoRuta: number,
            nombre: string,
            ruta: string,
            estado: string
        },
        {
            idProyectoRuta: number,
            nombre: string,
            ruta: string,
            estado: string
        }
    ],
    avanceInversion: {
        codigoOperacion: string,
        valor: string,
        porcentaje: number
    }
  }
  