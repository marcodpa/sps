// Line icons (24x24, currentColor). Purely decorative unless the caller labels them.
const svg = (body, extra = '') => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false" ${extra}>${body}</svg>`

export const icons = {
  arrow: svg('<path d="M4 12h15M13 6l6 6-6 6"/>'),
  chevron: svg('<path d="m9 5 7 7-7 7"/>'),
  mail: svg('<rect x="3" y="5" width="18" height="14" rx="2.5"/><path d="m3.5 7.5 8.5 6 8.5-6"/>'),
  phone: svg('<path d="M6.5 3.5h3l1.6 4-2.1 1.4a11 11 0 0 0 5.1 5.1l1.4-2.1 4 1.6v3a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 4.5 5.7 2 2 0 0 1 6.5 3.5z"/>'),
  mobile: svg('<rect x="7" y="2.5" width="10" height="19" rx="2.4"/><path d="M11 18.5h2"/>'),
  whatsapp: svg('<path d="M12 3.2a8.8 8.8 0 0 0-7.6 13.2L3.2 20.8l4.5-1.2A8.8 8.8 0 1 0 12 3.2z"/><path d="M8.6 8.4c.3 2.9 2.5 5.1 5.4 5.6l1.5-1.4-1.9-1-1 .8a3.9 3.9 0 0 1-1.7-1.7l.8-1-1-1.9z"/>'),
  pin: svg('<path d="M12 21.2s6.8-5.9 6.8-11.4a6.8 6.8 0 0 0-13.6 0c0 5.5 6.8 11.4 6.8 11.4z"/><circle cx="12" cy="9.8" r="2.5"/>'),
  steam: svg('<path d="M7 20c-2.4-2.4 2.4-4.4 0-8-1.2-1.8-.8-3.4 0-4.4M12 20c-2.4-2.4 2.4-4.4 0-8-1.2-1.8-.8-3.4 0-4.4M17 20c-2.4-2.4 2.4-4.4 0-8-1.2-1.8-.8-3.4 0-4.4"/>'),
  drop: svg('<path d="M12 3.2C9.4 7.7 5.5 10.7 5.5 14.8a6.5 6.5 0 0 0 13 0c0-4.1-3.9-7.1-6.5-11.6z"/><path d="M9.2 15.2a3 3 0 0 0 2.6 2.6"/>'),
  gear: svg('<circle cx="12" cy="12" r="3.2"/><path d="M12 2.8v2.4M12 18.8v2.4M4.5 7.4l2.1 1.2M17.4 15.4l2.1 1.2M4.5 16.6l2.1-1.2M17.4 8.6l2.1-1.2M2.8 12h2.4M18.8 12h2.4"/><circle cx="12" cy="12" r="6.6"/>'),
  up: svg('<path d="M12 19V5M6 11l6-6 6 6"/>'),
}

export const icon = name => icons[name] || ''
