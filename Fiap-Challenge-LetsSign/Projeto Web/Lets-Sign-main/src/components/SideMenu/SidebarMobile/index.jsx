import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Accordion, AccordionItem, AccordionHeader, AccordionBody } from 'react-bootstrap';
import { House, File, Newspaper, BookOpen, Split, Cog, CircleHelp } from 'lucide-react';
import '../index.css';

export default function SidebarMobile() {
  const location = useLocation();
  const navigate = useNavigate();

  const menuItems = [
    { to: '/', label: 'Acesso Rápido', Icon: House },
    { to: '/documents', label: 'Documentos', Icon: File },
    { to: '/upload-documents', label: 'Carregar Documentos', Icon: Newspaper },
    { to: '/audit', label: 'Histórico', Icon: BookOpen },
    { to: '/integration', label: 'Integrações', Icon: Split },
    { to: '/preferences', label: 'Preferências', Icon: Cog },
    { to: '/help', label: 'Ajuda', Icon: CircleHelp },
  ];

  const liStyle = { paddingLeft: '10px', borderRadius: '10px' };
  const iconStyle = { marginRight: '20px' };

  return (
    <div className="col-12 d-block d-md-none">
      <Accordion className="accordion-custom">
        <AccordionItem eventKey="0" className="accordion-custom">
          <AccordionHeader className="accordion-custom" style={{ display: 'flex' }}>
            Menu
          </AccordionHeader>
          <AccordionBody className="ligth-purple">
            <ul className="nav flex-column ligth-purple">
              {menuItems.map(({ to, label, Icon }) => (
                <button
                  key={to}
                  className={`mb-2 sidemenu-box-text ${location.pathname === to ? 'selected-row' : ''}`}
                  style={liStyle}
                  onClick={() => navigate(to)}
                >
                  <div type="button" className="pad-rem">
                    <Icon style={iconStyle} />
                    {label}
                  </div>
                </button>
              ))}
            </ul>
          </AccordionBody>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
