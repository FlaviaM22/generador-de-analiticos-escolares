//Objeto alumno de ejemplo
const alumno = {
        apellido: "Pérez",
        nombre: "Juan",
        ciudadNac: "Pilar",
        provNac: "Buenos Aires",
        DNI: 40857921,
        libroMatriz: 5,
        folio: 123,
        serie: 2023,
        anios: [
            {
                nivel: "1", //Equivale a PRIMER AÑO, utilizo números para facilitar el recorrrido futuro con bucles
                materias: [
                    {
                        orden: 1,
                        materia: "Cs Naturales",
                        nota: 5,
                        condicion: "REGULAR",
                        mes: "Diciembre",
                        anio: 2023,
                        establecimiento: "ESTE ESTABLECIMIENTO"
                    },
                    {
                        orden: 2,
                        materia: "Cs Sociales",
                        nota: 8,
                        condicion: "REGULAR",
                        mes: "Diciembre",
                        anio: 2023,
                        establecimiento: "ESTE ESTABLECIMIENTO"
                    }
                ],//Son entre 8 a 10 materias por año, puse dos para ejemplificar
                promedio: 6.5,
                cursada: "COMPLETA"
            },
            {
                nivel: "2",//Son 6 años en total
                materias: [
                    {
                        orden: 1,
                        materia: "Cs Naturales II",
                        nota: 5,
                        condicion: "REGULAR",
                        mes: "Diciembre",
                        anio: 2024,
                        establecimiento: "ESTE ESTABLECIMIENTO"
                    },
                    {
                        orden: 2,
                        materia: "Matemáticas",
                        nota: 8,
                        condicion: "REGULAR",
                        mes: "Diciembre",
                        anio: 2024,
                        establecimiento: "ESTE ESTABLECIMIENTO"
                    }
                ],
                promedio: 6.5,
                cursada: "COMPLETA"
            }
        ]
    };