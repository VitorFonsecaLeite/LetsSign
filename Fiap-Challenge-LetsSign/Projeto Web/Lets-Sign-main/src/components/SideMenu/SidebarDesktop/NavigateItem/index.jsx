import React, { useMemo } from 'react';
import Item from './Item';
import '../../index.css';

export default function NavigateItem() {
  const menuItems = useMemo(
    () => [
      { path: '/', label: 'Acesso Rápido' },
      { path: '/documents', label: 'Documentos' },
      { path: '/upload-documents', label: 'Carregar Documentos' },
      { path: '/audit', label: 'Histórico' },
      { path: '/integration', label: 'Integrações' },
      { path: '/preferences', label: 'Preferências' },
      { path: '/help', label: 'Ajuda' },
    ],
    [],
  );
  return (
    <div className="col-md-9 d-none d-md-block">
      <ul className="nav flex-column py-3 ligth-purple">
        {menuItems.map((item) => (
          <Item key={item.path} path={item.path} label={item.label} />
        ))}
      </ul>
    </div>
  );
}
