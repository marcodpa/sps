import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Flame, Cpu, WifiHigh, Broadcast,
  Drop, Thermometer, GasPump, Ruler, Trash, Truck, Wrench,
  Lightning, ArrowRight, ShieldCheck, Headphones, Gauge, X,
  Cloud, Fan, BatteryCharging, Plug, Radio, Circuitry, SolarRoof,
  GearSix, Wind, FireExtinguisher, Monitor,
} from '@phosphor-icons/react'

/* ── Imágenes ── */
const IMG = {
  calderas: 'https://images.unsplash.com/photo-1581092335901-5e50b5e8f3c0?auto=format&fit=crop&w=1400&q=80',
  petroleros: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=1400&q=80',
  automatizacion: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=80',
  pozo: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1000&q=80',
  tanques: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1000&q=80',
}

/* ── Datos completos de servicios petroleros ── */
const serviciosPetroleros = [
  {
    icon: Drop, title: 'Inyección de vapor a pozos',
    desc: 'Servicio de inyección de vapor para recuperación mejorada de crudo en pozos petroleros.',
    detail: {
      fullDesc: 'Servicio especializado de inyección de vapor a pozos petroleros para recuperación térmica de crudo pesado y extrapesado. Utilizamos calderas portátiles de alta capacidad con operadores capacitados y supervisión continua de parámetros críticos.',
      equipos: ['Calderas portátiles hasta 50 MMBTU/h', 'Cabezales de inyección', 'Manifolds de distribución', 'Sistemas de monitoreo de presión y temperatura'],
      aplicaciones: ['Recuperación mejorada de crudo pesado', 'Inyección cíclica de vapor (CSS)', 'Inyección continua (steam flooding)', 'Campos de crudo extrapesado'],
      beneficios: ['Incremento de producción hasta 70%', 'Reducción de viscosidad del crudo', 'Operación 24/7 con personal calificado', 'Monitoreo remoto de parámetros'],
    },
  },
  {
    icon: Tank, title: 'Inyección de vapor para patio de tanques',
    desc: 'Vapor para calentamiento de tanques de almacenamiento en patios y estaciones de flujo.',
    detail: {
      fullDesc: 'Suministro de vapor para calentamiento indirecto de tanques de almacenamiento en patios de tanques y estaciones de flujo. Mantenemos la temperatura óptima del crudo para facilitar su manejo, bombeo y transferencia.',
      equipos: ['Calderas portátiles', 'Serpentines de calentamiento', 'Trazas de vapor', 'Sistemas de control de temperatura'],
      aplicaciones: ['Calentamiento de tanques de almacenamiento', 'Mantenimiento de temperatura de crudo', 'Calentamiento de líneas de transferencia', 'Estaciones de flujo y patios de tanques'],
      beneficios: ['Optimización de bombeo', 'Reducción de tiempos de transferencia', 'Prevención de solidificación del crudo', 'Eficiencia energética'],
    },
  },
  {
    icon: Tank, title: 'Alquiler de Frac Tank 500 bls',
    desc: 'Frac tanks con capacidad de 500 barriles para almacenamiento temporal de fluidos.',
    detail: {
      fullDesc: 'Alquiler de tanques fractura (Frac Tanks) con capacidad de 500 barriles para almacenamiento temporal de crudo, agua de producción, lodos y otros fluidos de proceso. Equipos en óptimas condiciones, listos para despacho inmediato.',
      equipos: ['Frac Tank 500 barriles', 'Válvulas de alivio calibradas', 'Medidores de nivel', 'Sistemas de venteo'],
      aplicaciones: ['Almacenamiento temporal de crudo', 'Contención de aguas de producción', 'Almacenamiento de lodos petrolizados', 'Operaciones de fractura y estimulación'],
      beneficios: ['Disponibilidad inmediata', 'Capacidad certificada', 'Movilización rápida', 'Mantenimiento preventivo incluido'],
    },
  },
  {
    icon: GasPump, title: 'Bombeo de crudo',
    desc: 'Bombeo de crudo para transferencia, carga y descarga en patios de tanques y estaciones.',
    detail: {
      fullDesc: 'Servicio de bombeo de crudo para operaciones de transferencia, carga y descarga en patios de tanques, estaciones de flujo y terminales. Contamos con bombas de diferentes capacidades y configuraciones para adaptarnos a cada necesidad operativa.',
      equipos: ['Bombas centrífugas', 'Bombas de desplazamiento positivo', 'Motores eléctricos y diésel', 'Mangueras y conexiones'],
      aplicaciones: ['Transferencia entre tanques', 'Carga de buques y gandolas', 'Descarga de unidades de transporte', 'Respaldo de bombas fijas'],
      beneficios: ['Movilización rápida', 'Equipos de respaldo en sitio', 'Operadores capacitados', 'Conexión rápida'],
    },
  },
  {
    icon: Drop, title: 'Saneamiento con hidrojet',
    desc: 'Limpieza de áreas contaminadas con petróleo mediante equipo hidrojet de alta presión.',
    detail: {
      fullDesc: 'Servicio de saneamiento ambiental mediante sistema hidrojet de alta presión para limpieza de áreas contaminadas con petróleo, crudo y derivados. Removemos hidrocarburos adheridos a superficies, suelos y estructuras, cumpliendo con normativas ambientales.',
      equipos: ['Unidad hidrojet de alta presión', 'Boquillas rotativas y de chorro plano', 'Tanques de recuperación de residuos', 'Equipos de protección personal'],
      aplicaciones: ['Limpieza de losas y patios', 'Descontaminación de suelos', 'Limpieza de estructuras metálicas', 'Saneamiento de fosas y diques'],
      beneficios: ['Alta eficiencia de limpieza', 'Mínimo uso de químicos', 'Recuperación de residuos', 'Cumplimiento ambiental'],
    },
  },
  {
    icon: Truck, title: 'Trasegado con vacuum 160 bls',
    desc: 'Trasegado de crudo y fluidos con unidad vacuum de 160 barriles para operaciones de campo.',
    detail: {
      fullDesc: 'Servicio de trasegado de crudo, agua y fluidos de proceso utilizando unidades vacuum con capacidad de 160 barriles. Ideales para operaciones de recolección, limpieza y transferencia en locaciones de difícil acceso o sin infraestructura fija.',
      equipos: ['Unidad vacuum 160 barriles', 'Mangueras de succión y descarga', 'Sistema de vacío de alto caudal', 'Válvulas y acoples rápidos'],
      aplicaciones: ['Recolección de crudo en pozos', 'Extracción de fluidos de fosas', 'Limpieza de tanques API', 'Trasiego de emergencia'],
      beneficios: ['Alta capacidad de succión', 'Movilización autónoma', 'Operación en zonas remotas', 'Respuesta inmediata'],
    },
  },
  {
    icon: Wrench, title: 'Camiones con equipos de soldadura',
    desc: 'Unidades móviles con equipos de soldadura para reparaciones en campo.',
    detail: {
      fullDesc: 'Unidades móviles equipadas con soldadoras y equipos de corte para trabajos de reparación, mantenimiento y fabricación en campo. Despliegue inmediato a locaciones remotas con personal calificado en soldadura certificada.',
      equipos: ['Soldadoras inverter y convencionales', 'Equipos de corte por plasma', 'Equipos de oxicorte', 'Generadores eléctricos'],
      aplicaciones: ['Reparación de tuberías', 'Fabricación de estructuras metálicas', 'Mantenimiento de tanques', 'Trabajos en plataformas y locaciones'],
      beneficios: ['Movilización inmediata', 'Personal certificado', 'Equipos autónomos', 'Cobertura nacional'],
    },
  },
  {
    icon: Wind, title: 'Vapor para calentamiento de sellos',
    desc: 'Vapor para calentamiento de sellos de bomba en carga de buques en terminales marítimos.',
    detail: {
      fullDesc: 'Suministro de vapor para calentamiento de sellos mecánicos de bombas durante operaciones de carga y descarga de buques en terminales marítimos y fluviales. Garantizamos la temperatura adecuada para evitar daños en los sellos y asegurar la continuidad operativa.',
      equipos: ['Calderas portátiles', 'Mangueras de vapor aisladas', 'Reguladores de presión y temperatura', 'Trazas de vapor flexibles'],
      aplicaciones: ['Terminales marítimos de carga', 'Muelles de descarga de crudo', 'Sellos de bombas de gran tamaño', 'Calentamiento previo a arranque'],
      beneficios: ['Prevención de daños en sellos', 'Continuidad operativa', 'Reducción de paradas no planificadas', 'Personal especializado'],
    },
  },
  {
    icon: Recycle, title: 'Recuperación de crudo en fosas',
    desc: 'Recuperación de crudo en fosas de pasivos ambientales.',
    detail: {
      fullDesc: 'Servicio de recuperación de crudo en fosas de pasivos ambientales, pozos abandonados y áreas de derrames. Utilizamos equipos especializados para extraer, separar y recuperar el hidrocarburo, minimizando el impacto ambiental y generando valor del crudo recuperado.',
      equipos: ['Unidades vacuum', 'Separadores gas-líquido', 'Bombas neumáticas e hidráulicas', 'Equipos de contención'],
      aplicaciones: ['Fosas de pasivos ambientales', 'Derrames de crudo', 'Pozos abandonados', 'Áreas de antigua producción'],
      beneficios: ['Recuperación de crudo aprovechable', 'Saneamiento ambiental', 'Cumplimiento de normativas', 'Reducción de pasivos'],
    },
  },
  {
    icon: Wrench, title: 'Reparación y mantenimiento a calentadores',
    desc: 'Mantenimiento preventivo y correctivo de calentadores industriales.',
    detail: {
      fullDesc: 'Servicio integral de reparación y mantenimiento de calentadores industriales utilizados en procesos de producción petrolera. Incluye diagnóstico, limpieza, reparación de componentes y pruebas de funcionamiento para asegurar la operación óptima del equipo.',
      equipos: ['Herramientas de diagnóstico', 'Equipos de limpieza de tubos', 'Equipos de pruebas hidrostáticas', 'Instrumentos de medición calibrados'],
      aplicaciones: ['Calentadores de crudo directos e indirectos', 'Intercambiadores de calor', 'Calentadores de tanques', 'Sistemas de calentamiento de procesos'],
      beneficios: ['Extensión de vida útil del equipo', 'Eficiencia térmica mejorada', 'Reducción de paradas', 'Programas de mantenimiento preventivo'],
    },
  },
  {
    icon: Tool, title: 'Reparación y mantenimiento a calderas',
    desc: 'Mantenimiento de calderas portátiles y estacionarias con certificación.',
    detail: {
      fullDesc: 'Mantenimiento preventivo, correctivo y predictivo de calderas portátiles y estacionarias. Realizamos inspección de tubos, pruebas hidrostáticas, calibración de quemadores, revisión de sistemas de seguridad y certificación de equipos según normativa aplicable.',
      equipos: ['Equipos de ultrasonido', 'Cámaras de inspección', 'Equipos de limpieza química', 'Herramientas de calibración'],
      aplicaciones: ['Calderas portátiles de inyección', 'Calderas estacionarias', 'Generadores de vapor', 'Calderas de recuperación de calor'],
      beneficios: ['Certificación de equipos', 'Operación segura y confiable', 'Optimización de consumo de combustible', 'Programas de mantenimiento a medida'],
    },
  },
]

/* ── Datos completos de automatización ── */
const serviciosAutomatizacion = [
  {
    icon: Radio, title: 'Rehabilitación de telemetría',
    desc: 'Rehabilitación de sistemas de telemetría en pozos y estaciones de producción.',
    detail: {
      fullDesc: 'Diagnóstico, reparación y puesta en marcha de sistemas de telemetría en pozos y estaciones de producción. Restauramos la comunicación remota entre los equipos de campo y la sala de control, permitiendo el monitoreo continuo de variables críticas en tiempo real.',
      equipos: ['RTU', 'Radios UHF/VHF', 'Sensores y transmisores', 'Sistemas de alimentación solar'],
      aplicaciones: ['Pozos de producción', 'Estaciones de flujo', 'Patios de tanques', 'Áreas remotas sin electricidad'],
      beneficios: ['Monitoreo remoto en tiempo real', 'Detección temprana de fallas', 'Reducción de visitas a campo', 'Optimización de producción'],
    },
  },
  {
    icon: Circuitry, title: 'Programación de PLC',
    desc: 'Programación y puesta en marcha de PLC en estaciones de producción.',
    detail: {
      fullDesc: 'Programación, configuración y puesta en marcha de controladores lógicos programables (PLC) para automatización de procesos en estaciones de producción, patios de tanques y plantas de tratamiento.',
      equipos: ['PLC Allen Bradley (ControlLogix, CompactLogix)', 'PLC Siemens (S7-1200, S7-1500)', 'PLC Modicon', 'HMI PanelView, WinCC'],
      aplicaciones: ['Control de estaciones de flujo', 'Automatización de patios de tanques', 'Sistemas de seguridad (ESD)', 'Control de procesos continuos'],
      beneficios: ['Automatización completa de procesos', 'Integración con SCADA', 'Mayor confiabilidad operativa', 'Soporte y actualizaciones'],
    },
  },
  {
    icon: Cpu, title: 'Programación de RTU',
    desc: 'Programación de RTU para pozos de producción e inyección de agua.',
    detail: {
      fullDesc: 'Programación y configuración de Unidades Remotas (RTU) para pozos de producción e inyección de agua. Integramos sensores de campo, actuadores y sistemas de comunicación para el monitoreo y control remoto de pozos.',
      equipos: ['RTU Allen Bradley', 'RTU Siemens', 'RTU Bristol/Emerson', 'Sensores de presión, temperatura y nivel'],
      aplicaciones: ['Pozos de producción de crudo', 'Pozos de inyección de agua', 'Pozos de inyección de vapor', 'Baterías de pozos'],
      beneficios: ['Control remoto de pozos', 'Optimización de producción', 'Reducción de intervenciones', 'Datos en tiempo real al SCADA'],
    },
  },
  {
    icon: Monitor, title: 'Servicio SCADA Wonderware',
    desc: 'Implementación y soporte del sistema SCADA Wonderware CIBO.',
    detail: {
      fullDesc: 'Implementación, configuración y soporte técnico del sistema SCADA Wonderware CIBO para supervisión, control y optimización de procesos industriales. Incluye desarrollo de pantallas, históricos, alarmas y reportes personalizados.',
      equipos: ['Wonderware System Platform', 'Wonderware InTouch', 'Wonderware Historian', 'Servidores de comunicación OPC'],
      aplicaciones: ['Supervisión de estaciones de producción', 'Control de procesos industriales', 'Gestión de alarmas y eventos', 'Reportes de producción diarios'],
      beneficios: ['Visualización centralizada de procesos', 'Históricos de producción', 'Gestión de alarmas inteligente', 'Acceso remoto seguro'],
    },
  },
  {
    icon: Gauge, title: 'Variadores y bombas BCP',
    desc: 'Instalación y programación de variadores en pozos con bombas BCP.',
    detail: {
      fullDesc: 'Instalación, programación y puesta en marcha de variadores de frecuencia (VFD) en pozos equipados con bombas de cavidades progresivas (BCP). Optimizamos la velocidad de la bomba según las condiciones del pozo, maximizando la producción y extendiendo la vida útil del equipo.',
      equipos: ['Variadores Allen Bradley PowerFlex', 'Variadores Siemens Sinamics', 'Bombas BCP', 'RTU integradas'],
      aplicaciones: ['Pozos de crudo pesado con BCP', 'Optimización de producción', 'Control de velocidad variable', 'Protección de equipos de fondo'],
      beneficios: ['Ahorro energético significativo', 'Mayor vida útil de la bomba', 'Optimización de producción', 'Monitoreo remoto del variador'],
    },
  },
  {
    icon: Ruler, title: 'Instrumentación de campo',
    desc: 'Instrumentación de pozos y estaciones: sensores y monitoreo continuo.',
    detail: {
      fullDesc: 'Suministro, instalación y calibración de instrumentos de medición para pozos y estaciones de producción. Incluye sensores de presión, temperatura, flujo y nivel, así como transmisores y sistemas de adquisición de datos.',
      equipos: ['Transmisores de presión Rosemount', 'Sensores de temperatura RTD/termocupla', 'Medidores de flujo másico', 'Sensores de nivel ultrasónicos y radar'],
      aplicaciones: ['Cabezales de pozos', 'Líneas de producción', 'Separadores gas-líquido', 'Tanques de almacenamiento'],
      beneficios: ['Mediciones precisas y confiables', 'Calibración certificada', 'Integración con PLC/SCADA', 'Reducción de incertidumbre operativa'],
    },
  },
  {
    icon: Plug, title: 'Sistemas de puesta a tierra',
    desc: 'Cableado e instalación de sistemas de puesta a tierra y pararrayos.',
    detail: {
      fullDesc: 'Diseño e instalación de sistemas de puesta a tierra y protección contra pararrayos para infraestructura crítica. Garantizamos la protección de equipos electrónicos, seguridad del personal y cumplimiento de normativas eléctricas y de seguridad industrial.',
      equipos: ['Varillas copperweld', 'Cable de cobre desnudo', 'Pararrayos tipo PDC', 'Medidores de resistencia de tierra'],
      aplicaciones: ['Estaciones de producción', 'Patios de tanques', 'Salas de control y equipos electrónicos', 'Torres de telecomunicaciones'],
      beneficios: ['Protección de equipos electrónicos', 'Seguridad del personal', 'Cumplimiento de normativas', 'Reducción de daños por descargas'],
    },
  },
  {
    icon: SolarRoof, title: 'Paneles solares para telemetría',
    desc: 'Instalación de paneles solares para telemetría en pozos sin electricidad.',
    detail: {
      fullDesc: 'Instalación de sistemas de paneles solares para alimentar equipos de telemetría en pozos de inyección de agua y producción que no cuentan con electrificación. Diseñamos sistemas autónomos con baterías y reguladores para operación continua 24/7.',
      equipos: ['Paneles solares fotovoltaicos', 'Reguladores de carga MPPT', 'Baterías de ciclo profundo', 'Gabinete hermético para equipos'],
      aplicaciones: ['Pozos de inyección de agua remotos', 'Telemetría de pozos de producción', 'RTU alimentadas con energía solar', 'Áreas sin tendido eléctrico'],
      beneficios: ['Operación autónoma sin red eléctrica', 'Cero emisiones', 'Mantenimiento mínimo', 'Instalación rápida y modular'],
    },
  },
]

export default function Servicios() {
  const [selected, setSelected] = useState(null)

  const close = () => setSelected(null)

  /* ── Detail panel ── */
  const renderDetail = (s) => {
    if (!s) return null
    return (
      <div className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-ink-950/80 backdrop-blur-sm py-10 px-4"
        onClick={close}>
        <div className="relative w-full max-w-4xl rounded-2xl border border-white/10 bg-ink-900 shadow-2xl"
          onClick={(e) => e.stopPropagation()}>
          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/10 px-6 py-5 sm:px-8">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-blue/15 text-brand-blueLight">
                <s.icon size={24} weight="bold" />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-white">{s.title}</h3>
                <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-steel-500">Detalle del servicio</span>
              </div>
            </div>
            <button onClick={close}
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-steel-400 transition-all duration-200 hover:border-white/30 hover:text-white">
              <X size={18} />
            </button>
          </div>

          <div className="px-6 py-6 sm:px-8 sm:py-8">
            <p className="text-steel-300 leading-relaxed mb-8">{s.detail.fullDesc}</p>

            <div className="grid sm:grid-cols-2 gap-6">
              {/* Equipos */}
              <div className="rounded-xl border border-white/10 bg-ink-950/50 p-5">
                <h4 className="flex items-center gap-2 font-display text-sm font-bold text-white mb-4">
                  <span className="flex h-6 w-6 items-center justify-center rounded bg-brand-blue/20 text-brand-blueLight text-xs">E</span>
                  Equipos utilizados
                </h4>
                <ul className="space-y-2">
                  {s.detail.equipos.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-steel-400">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brand-blue" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Aplicaciones */}
              <div className="rounded-xl border border-white/10 bg-ink-950/50 p-5">
                <h4 className="flex items-center gap-2 font-display text-sm font-bold text-white mb-4">
                  <span className="flex h-6 w-6 items-center justify-center rounded bg-brand-blue/20 text-brand-blueLight text-xs">A</span>
                  Aplicaciones
                </h4>
                <ul className="space-y-2">
                  {s.detail.aplicaciones.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-steel-400">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-emerald-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Beneficios */}
              <div className="sm:col-span-2 rounded-xl border border-white/10 bg-ink-950/50 p-5">
                <h4 className="flex items-center gap-2 font-display text-sm font-bold text-white mb-4">
                  <span className="flex h-6 w-6 items-center justify-center rounded bg-emerald-500/20 text-emerald-400 text-xs">B</span>
                  Beneficios
                </h4>
                <div className="grid sm:grid-cols-2 gap-3">
                  {s.detail.beneficios.map((item) => (
                    <div key={item} className="flex items-center gap-3 rounded-lg border border-white/5 bg-white/[0.03] p-3">
                      <ShieldCheck size={16} className="text-emerald-400 shrink-0" />
                      <span className="text-sm text-steel-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-8 flex justify-center">
              <Link to="/contacto"
                className="inline-flex items-center gap-2 rounded-xl bg-brand-blue px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-brand-blue/90">
                Solicitar este servicio <ArrowRight size={18} weight="bold" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
      {/* ═══════════════ HERO ─────────────────── */}
      <section className="relative min-h-[60dvh] flex items-center overflow-hidden bg-ink-950" aria-label="Servicios">
        <div className="absolute inset-0">
          <img src={IMG.petroleros} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink-950/90 via-ink-950/60 to-ink-950/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-950/60 via-transparent to-transparent" />
        </div>

        <div className="relative w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-1.5 mb-5">
              <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.5)]" />
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-steel-300">
                Lo que ofrecemos
              </span>
            </div>

            <h1 className="font-display font-bold text-white leading-[1.05] mb-6"
              style={{ fontSize: 'clamp(2.2rem, 1.3rem + 4vw, 4.2rem)' }}>
              Servicios petroleros{' '}
              <span className="text-brand-blueLight">e industriales</span>
              <br />especializados.
            </h1>

            <p className="text-steel-300 text-base sm:text-lg leading-relaxed max-w-2xl mb-8">
              Desde inyección de vapor y alquiler de calderas hasta automatización SCADA —
              ofrecemos soluciones integrales con más de 7 años de experiencia en campo.
            </p>

            <div className="flex flex-wrap gap-2.5">
              {[
                { l: 'Calderas portátiles', h: '#calderas' },
                { l: 'Servicios petroleros', h: '#petroleros' },
                { l: 'Automatización', h: '#automatizacion' },
              ].map(({ l, h }) => (
                <a key={h} href={h}
                  className="rounded-lg border border-white/20 bg-white/[0.06] px-4 py-2 text-sm text-steel-200 transition-all duration-200 hover:border-brand-blue/50 hover:bg-brand-blue/10 hover:text-white">
                  {l}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ CALDERAS ─────────────── */}
      <section id="calderas" className="scroll-mt-20 relative overflow-hidden bg-ink-950" aria-labelledby="calderas-h">
        <div className="absolute inset-0">
          <img src={IMG.calderas} alt="" className="h-full w-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink-950/85 via-ink-950/60 to-ink-950/70" />
        </div>
        <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-brand-red mb-4">
                &lt; Alquiler de equipos /&gt;
              </p>
              <h2 id="calderas-h"
                className="font-display font-bold text-white leading-[1.05] tracking-tightest mb-6"
                style={{ fontSize: 'clamp(1.75rem, 1.1rem + 2.4vw, 2.9rem)' }}>
                Alquiler de calderas portátiles
              </h2>
              <p className="text-steel-300 leading-relaxed max-w-xl mb-8">
                Contamos con calderas portátiles de alta capacidad para proyectos de inyección
                de vapor y calentamiento de procesos. Equipos certificados, con mantenimiento
                preventivo incluido y operadores capacitados.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'Capacidad', value: 'Hasta 50 MMBTU/h' },
                  { label: 'Presión', value: 'Hasta 1.500 PSI' },
                  { label: 'Disponibilidad', value: 'Inmediata' },
                  { label: 'Operación', value: '24/7' },
                ].map((s) => (
                  <div key={s.label} className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
                    <p className="font-mono text-[9px] uppercase tracking-[0.15em] text-steel-500 mb-1">{s.label}</p>
                    <p className="font-display text-lg font-bold text-white">{s.value}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="relative rounded-2xl overflow-hidden">
                <img src={IMG.pozo} alt="Caldera portátil en operación" className="w-full aspect-[4/3] object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950/50 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.5)]" />
                  <span className="font-mono text-[10px] text-white/60">Equipos certificados — Disponibles</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ SERVICIOS PETROLEROS ─── */}
      <section id="petroleros" className="scroll-mt-20 bg-white py-24 lg:py-28" aria-labelledby="petroleros-h">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-brand-red mb-3">
              &lt; Manejo, tratamiento y disposición /&gt;
            </p>
            <h2 id="petroleros-h"
              className="font-display font-bold text-ink-900 leading-[1.05] tracking-tightest mb-4"
              style={{ fontSize: 'clamp(1.75rem, 1.1rem + 2.4vw, 2.9rem)' }}>
              Servicios petroleros
            </h2>
            <p className="text-steel-500 leading-relaxed max-w-2xl">
              Soluciones integrales para la industria petrolera. Haz clic en cada servicio
              para ver su información detallada.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {serviciosPetroleros.map((s, i) => (
              <button key={i} onClick={() => setSelected(s)}
                className="group relative flex flex-col rounded-2xl border border-steel-200 bg-white p-6 text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-brand-blue/20 cursor-pointer">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue mb-4 transition-all duration-200 group-hover:bg-brand-blue group-hover:text-white">
                  <s.icon size={22} weight="bold" />
                </div>
                <h3 className="font-display text-base font-bold text-ink-900 mb-2">{s.title}</h3>
                <p className="text-sm text-steel-500 leading-relaxed flex-1">{s.desc}</p>
                <div className="mt-4 flex items-center gap-1.5 text-sm font-semibold text-brand-blue opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  Ver detalle <ArrowRight size={14} weight="bold" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-0.5 rounded-b-2xl bg-brand-blue scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ AUTOMATIZACIÓN ───────── */}
      <section id="automatizacion" className="scroll-mt-20 relative overflow-hidden bg-ink-950 py-24 lg:py-28" aria-labelledby="auto-h">
        <div className="absolute inset-0">
          <img src={IMG.automatizacion} alt="" className="h-full w-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-l from-ink-950/90 via-ink-950/70 to-ink-950/85" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-950/60 via-transparent to-transparent" />
        </div>

        <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-brand-blueLight mb-3">
              &lt; Automatización y control /&gt;
            </p>
            <h2 id="auto-h"
              className="font-display font-bold text-white leading-[1.05] tracking-tightest mb-4"
              style={{ fontSize: 'clamp(1.75rem, 1.1rem + 2.4vw, 2.9rem)' }}>
              Automatización industrial
            </h2>
            <p className="text-steel-300 leading-relaxed max-w-2xl">
              Soluciones de automatización, telemetría y control para pozos, estaciones y plantas.
              Haz clic en cada servicio para ver su información detallada.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {serviciosAutomatizacion.map((s, i) => (
              <button key={i} onClick={() => setSelected(s)}
                className="group relative flex flex-col rounded-2xl border border-white/10 bg-ink-900/70 backdrop-blur-sm p-6 text-left transition-all duration-300 hover:-translate-y-1 hover:border-brand-blue/30 hover:shadow-2xl hover:shadow-brand-blue/5 cursor-pointer">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-blue/15 text-brand-blueLight mb-4 transition-all duration-200 group-hover:bg-brand-blue group-hover:text-white">
                  <s.icon size={20} weight="bold" />
                </div>
                <h3 className="font-display text-base font-bold text-white mb-2">{s.title}</h3>
                <p className="text-sm text-steel-400 leading-relaxed flex-1">{s.desc}</p>
                <div className="mt-4 flex items-center gap-1.5 text-sm font-semibold text-brand-blueLight opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  Ver detalle <ArrowRight size={14} weight="bold" />
                </div>
              </button>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            {['Allen Bradley', 'Wonderware', 'Siemens', 'Modicon', 'Omron', 'Fanuc'].map((t) => (
              <span key={t}
                className="rounded-lg border border-white/10 bg-white/[0.04] px-3.5 py-1.5 font-mono text-[11px] text-steel-400 transition-colors duration-200 hover:border-brand-blue/30 hover:text-brand-blueLight">
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ BENEFICIOS ──────────── */}
      <section className="bg-white py-20" aria-label="Beneficios">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { icon: ShieldCheck, t: 'Seguridad industrial', d: 'Cumplimiento estricto de normas de seguridad en todas nuestras operaciones.' },
              { icon: Headphones, t: 'Soporte 24/7', d: 'Respuesta inmediata ante emergencias. Personal técnico disponible en todo momento.' },
              { icon: Gauge, t: 'Excelencia operacional', d: 'Optimización continua de procesos con estándares internacionales de calidad.' },
            ].map(({ icon: I, t, d }) => (
              <div key={t}
                className="flex items-start gap-5 rounded-2xl border border-steel-200 bg-white p-6 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue">
                  <I size={24} weight="bold" />
                </div>
                <div>
                  <h3 className="font-display text-base font-bold text-ink-900">{t}</h3>
                  <p className="mt-1 text-sm text-steel-500 leading-relaxed">{d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ CTA ─────────────────── */}
      <section className="relative overflow-hidden bg-ink-950 py-24 lg:py-28" aria-labelledby="cta-serv-h">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/5 via-transparent to-transparent" />
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-blue/8 blur-[140px]" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="relative rounded-2xl border border-white/10 bg-ink-900/50 backdrop-blur-sm p-8 sm:p-12 lg:p-14">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-brand-blueLight mb-4">
              &lt; Contactanos /&gt;
            </p>
            <h2 id="cta-serv-h"
              className="font-display text-3xl md:text-4xl font-bold text-white tracking-tightest leading-[1.05] mb-4">
              Necesitas alguno de estos servicios?
            </h2>
            <p className="text-steel-300 leading-relaxed mb-9 max-w-xl mx-auto">
              Analizamos tu proyecto y te proponemos la solución más adecuada para tu industria.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link to="/contacto"
                className="inline-flex items-center gap-2 rounded-xl bg-brand-red px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-brand-red/90 hover:-translate-y-0.5">
                Solicitar cotización <ArrowRight size={18} weight="bold" />
              </Link>
              <Link to="/proyectos"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-white/10 hover:-translate-y-0.5">
                Ver proyectos
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ MODAL DE DETALLE ─────── */}
      {selected && renderDetail(selected)}
    </>
  )
}

/* ── SVG custom ── */
function Tank({ size, weight, className, style }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className} style={style} xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="8" width="24" height="18" rx="3" stroke="currentColor" strokeWidth="2" fill="none" />
      <rect x="10" y="11" width="12" height="12" rx="1" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.5" />
      <line x1="4" y1="14" x2="28" y2="14" stroke="currentColor" strokeWidth="1" opacity="0.3" />
      <line x1="4" y1="20" x2="28" y2="20" stroke="currentColor" strokeWidth="1" opacity="0.3" />
      <circle cx="26" cy="13" r="1.5" fill="currentColor" opacity="0.6" />
      <circle cx="26" cy="17" r="1.5" fill="currentColor" opacity="0.6" />
      <line x1="28" y1="11" x2="31" y2="11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="28" y1="15" x2="31" y2="15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="28" y1="19" x2="31" y2="19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <polyline points="4,26 4,30 28,30 28,26" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
    </svg>
  )
}

function Recycle({ size, weight, className, style }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className} style={style} xmlns="http://www.w3.org/2000/svg">
      <path d="M16 4 L22 14 L10 14 Z" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinejoin="round" />
      <path d="M22 14 L28 26 L16 26 Z" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinejoin="round" />
      <path d="M10 14 L16 26 L4 26 Z" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinejoin="round" />
      <circle cx="16" cy="14" r="1.5" fill="currentColor" />
      <path d="M16 19 L16 23" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M13 21 L16 23 L19 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function Tool({ size, weight, className, style }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className} style={style} xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="11" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <path d="M16 5 L16 27" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M5 16 L27 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="16" cy="16" r="4" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <circle cx="16" cy="16" r="1.5" fill="currentColor" />
    </svg>
  )
}