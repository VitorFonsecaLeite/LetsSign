import React, { useState } from 'react';
import {
  File as FileIcon,
  Calendar as CalendarIcon,
  Cloud as CloudIcon,
  User as UserIcon,
  Circle as CircleIcon,
  Edit2 as EditIcon,
} from 'lucide-react';
import './style.css';

export default function DocumentViewer() {
  // Dados mockados
  const documentTitle = 'Contrato para teste';
  const createdDate = '01/01/2025';
  const createdBy = 'Fulano';
  const status = 'Pronto para assinar';
  const signInfo = 'Assinatura não configurada';

  const tabs = [
    'DOCUMENTO',
    'INFORMAÇÕES',
    'ASSINATURAS',
    'ANEXOS',
    'LEMBRETES',
    'PERMISSÕES',
    'AUDITORIA',
  ];

  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <div className="content">
      {/* Cabeçalho */}
      <header className="dv-header">
        <h3>
          Documentos <span className="dv-subtitle">/ {documentTitle}</span>
        </h3>
      </header>

      {/* Abas */}
      <nav className="dv-tabs-nav">
        <ul className="dv-tab-list">
          {tabs.map((tab) => (
            <li key={tab} className={`dv-tab-item ${activeTab === tab ? 'active' : ''}`}>
              <button
                type="button"
                className="dv-tab-button"
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <div className="dv-tab-content">
        {activeTab === 'DOCUMENTO' ? (
          <>
            {/* Info rápido */}
            <section className="info-row">
              <div className="info-item">
                <FileIcon className="info-icon" />
                <small>{documentTitle}</small>
              </div>
              <div className="info-item">
                <CalendarIcon className="info-icon" />
                <small>Criado em {createdDate}</small>
              </div>
              <div className="info-item">
                <CloudIcon className="info-icon" />
                <small>Importado</small>
              </div>
              <div className="info-item">
                <UserIcon className="info-icon" />
                <small>Criado por {createdBy}</small>
              </div>
              <div className="info-item">
                <CircleIcon className="info-icon dv-status-icon" />
                <small>{status}</small>
              </div>
              <div className="info-item">
                <EditIcon className="info-icon" />
                <small>{signInfo}</small>
              </div>
            </section>

            {/* Visualizador de documento (mock) */}
            <div className="pdf-viewer">
              <iframe
                src="./fake-pdf.pdf"
                title="PDF Viewer"/>
            </div>
          </>
        ) : (
          <div className="dv-placeholder">
            <p>Conteúdo de <strong>{activeTab}</strong> ainda não implementado.</p>
          </div>
        )}
      </div>
    </div>
  );
}
