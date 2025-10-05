const PRODUCTS = [
    {
        id: "p-001",
        nombre: "Silla Córdoba",
        categoria: "Sillas",
        imagen: "img/productos/sillas_cordoba.png",
        descripcion: "Set de cuatro sillas apilables en contrachapado moldeado de nogal y estructura tubular pintada en Sage Green. Su diseño ergonómico y materiales de calidad garantizan comodidad y durabilidad en el uso diario, perfectas para comedores contemporáneos.",
        caracteristicas: {
            medidas: "45 × 52 × 80 cm (cada una)",
            materiales: "Contrachapado nogal, tubo de acero",
            acabado: "Laca mate, pintura epoxi",
            apilables: "Hasta 6 sillas",
            incluye: "Set de 4 sillas"
        },
        precio: "$210.000 ARS"
    },
    {
        id: "p-002",
        nombre: "Silla de Trabajo Belgrano",
        categoria: "Sillas",
        imagen: "img/productos/sillas_belgrano.png",
        descripcion: "Silla ergonómica regulable en altura con respaldo de malla transpirable y asiento tapizado en tejido reciclado. Diseñada para largas jornadas de trabajo con máximo confort y apoyo lumbar, ideal para oficinas en casa y espacios de coworking.",
        caracteristicas: {
            medidas: "60 × 60 × 90-100 cm",
            materiales: "Malla técnica, tejido reciclado",
            acabado: "Base cromada, tapizado premium",
            regulacion: "Altura + inclinación respaldo",
            certificacion: "Ergonomía europea EN 1335"
        },
        precio: "$175.000 ARS"
    },
    {
        id: "p-003",
        nombre: "Sillón Copacabana",
        categoria: "Sillones",
        imagen: "img/productos/sillon_copacabana.png",
        descripcion: "Sillón lounge en cuero cognac con base giratoria en acero Burnt Sienna. Inspirado en la estética brasilera moderna de los 60, combina comodidad excepcional con un diseño icónico que trasciende tendencias y épocas.",
        caracteristicas: {
            medidas: "90 × 85 × 95 cm",
            materiales: "Cuero curtido vegetal, acero pintado",
            acabado: "Cuero anilina premium",
            rotacion: "360° silenciosa y suave",
            garantia: "10 años en estructura"
        },
        precio: "$420.000 ARS"
    },
    {
        id: "p-004",
        nombre: "Mesa de Centro Araucaria",
        categoria: "Mesas y escritorios",
        imagen: "img/productos/mesa_ventro_araucaria.png",
        descripcion: "Mesa de centro con sobre circular de mármol Patagonia y base de tres patas en madera de nogal. Su diseño minimalista se convierte en el punto focal perfecto para cualquier sala de estar contemporánea, combinando la frialdad del mármol con la calidez de la madera.",
        caracteristicas: {
            medidas: "90 × 90 × 45 cm",
            materiales: "Sobre de mármol Patagonia, patas de nogal",
            acabado: "Mármol pulido, aceite natural en madera",
            peso: "42 kg",
            carga_maxima: "25 kg distribuidos"
        },
        precio: "$365.000 ARS"
    },
    {
        id: "p-005",
        nombre: "Mesa comedor Pampa",
        categoria: "Mesas y escritorios",
        imagen: "img/productos/mesa_comedor_pampa.png",
        descripcion: "Mesa extensible de roble macizo con tablero biselado y sistema de apertura suave. Su diseño robusto y elegante se adapta perfectamente a reuniones íntimas o grandes celebraciones familiares, extendiéndose de 6 a 10 comensales.",
        caracteristicas: {
            medidas: "160-240 × 90 × 75 cm",
            materiales: "Roble macizo FSC®, mecanismo alemán",
            acabado: "Aceite-cera natural",
            capacidad: "6-10 comensales",
            extension: "Sistema de mariposa central"
        },
        precio: "$590.000 ARS"
    },
    {
        id: "p-006",
        nombre: "Mesa de noche Aconcagua",
        categoria: "Mesas y escritorios",
        imagen: "img/productos/mesa_noche_aconcagua.png",
        descripcion: "Mesa de noche con cajón oculto y repisa inferior en roble certificado FSC®. Su diseño limpio y funcional permite convivir con diferentes estilos de dormitorio, ofreciendo almacenamiento discreto y elegante para objetos personales.",
        caracteristicas: {
            medidas: "45 × 35 × 60 cm",
            materiales: "Roble macizo FSC®, herrajes soft-close",
            acabado: "Barniz mate de poliuretano",
            almacenamiento: "1 cajón + repisa inferior",
            caracteristicas: "Cajón con cierre suave"
        },
        precio: "$160.000 ARS"
    },
    {
        id: "p-007",
        nombre: "Escritorio Costa",
        categoria: "Mesas y escritorios",
        imagen: "img/productos/escritorio_costa.png",
        descripcion: "Escritorio compacto con cajón organizado y tapa pasacables integrada en bambú laminado. Ideal para espacios de trabajo en casa, combina funcionalidad moderna con estética minimalista y sostenible, perfecto para el trabajo remoto.",
        caracteristicas: {
            medidas: "120 × 60 × 75 cm",
            materiales: "Bambú laminado, herrajes ocultos",
            acabado: "Laca mate resistente",
            almacenamiento: "1 cajón con organizador",
            cables: "Pasacables integrado"
        },
        precio: "$280.000 ARS"
    },
    {
        id: "p-008",
        nombre: "Butaca Mendoza",
        categoria: "Sillones",
        imagen: "img/productos/butaca_mendoza.png",
        descripcion: "Butaca tapizada en bouclé Dusty Rose con base de madera de guatambú. El respaldo curvo abraza el cuerpo y ofrece máximo confort, mientras que su diseño orgánico aporta calidez y sofisticación a cualquier ambiente contemporáneo.",
        caracteristicas: {
            medidas: "80 × 75 × 85 cm",
            materiales: "Guatambú macizo, tela bouclé",
            acabado: "Cera vegetal, tapizado premium",
            tapizado: "Repelente al agua y manchas",
            confort: "Espuma alta densidad"
        },
        precio: "$250.000 ARS"
    },
    {
        id: "p-009",
        nombre: "Sofá Patagonia",
        categoria: "Sillones",
        imagen: "img/productos/sofa_patagonia.png",
        descripcion: "Sofá de tres cuerpos tapizado en lino Warm Alabaster con patas cónicas de madera. Los cojines combinan espuma de alta resiliencia con plumón reciclado, ofreciendo comodidad duradera y sostenible para el hogar moderno.",
        caracteristicas: {
            medidas: "220 × 90 × 80 cm",
            estructura: "Madera de eucalipto certificada FSC®",
            tapizado: "Lino 100% natural premium",
            relleno: "Espuma HR + plumón reciclado",
            sostenibilidad: "Materiales 100% reciclables"
        },
        precio: "$720.000 ARS"
    },
    {
        id: "p-010",
        nombre: "Biblioteca Recoleta",
        categoria: "Bibliotecas",
        imagen: "img/productos/biblioteca_recoleta.png",
        descripcion: "Sistema modular de estantes abierto que combina estructura de acero Sage Green y repisas en roble claro. Perfecta para colecciones y objetos de diseño, su diseño versátil se adapta a cualquier espacio contemporáneo con elegancia funcional.",
        caracteristicas: {
            medidas: "100 × 35 × 200 cm",
            materiales: "Estructura de acero, estantes de roble",
            acabado: "Laca mate ecológica",
            capacidad: "45 kg por estante",
            modulares: "5 estantes ajustables"
        },
        precio: "$330.000 ARS"
    },
    {
        id: "p-011",
        nombre: "Aparador Uspallata",
        categoria: "Mesas y escritorios",
        imagen: "img/productos/aparador_uspallata.png",
        descripcion: "Aparador de seis puertas fabricado en nogal sostenible con tiradores metálicos en acabado latón. Su silueta minimalista realza el veteado natural de la madera, creando una pieza que combina funcionalidad y elegancia atemporal para espacios contemporáneos.",
        caracteristicas: {
            medidas: "180 × 45 × 75 cm",
            materiales: "Nogal macizo FSC®, herrajes de latón",
            acabado: "Aceite natural ecológico",
            peso: "68 kg",
            capacidad: "6 compartimentos interiores"
        },
        precio: "$580.000 ARS"
    },
];
