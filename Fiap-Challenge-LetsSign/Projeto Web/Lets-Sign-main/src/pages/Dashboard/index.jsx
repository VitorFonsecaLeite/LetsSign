import React from 'react';
import './style.css';
import Table from '../../components/Table';
export default function Dashboard() {

  const tableHeaders = [
    'Documentos', 
    'Origem', 
    'Grupos', 
    'Status', 
    'Assinatura', 
    'Criado em'
  ];

  const generateTestData1 = (count) => {
    return Array(count).fill().map(() => (
      ['Contrato para Teste', 'Importado', 'RH', 'Pronto para assinar', 'Aguardando', '26/11/2024']
    ));
  };
  const tableData1 = generateTestData1(5);

  const generateTestData2 = (count) => {
    return Array(count).fill().map(() => (
      ['Contrato para Teste', 'Importado', 'RH', 'Finalizado', 'Concluídas', '26/11/2024']
    ));
  };
  const tableData2 = generateTestData2(5);

  const columnWidths = ['25%', '15%', '10%', '15%', '15%', '20%'];

  return (
    <div className="content">
      <h3>Dashbord</h3>
      <h6>Controle geral</h6>

      <div id='tosign' className="Table">
        <h4>Esperando assinaturas</h4>
        <Table headers={tableHeaders} data={tableData1} columnWidths={columnWidths}/>
      </div>
      <div id='signed' className="Table">
        <h4>Últimos documentos assinados</h4>
        <Table headers={tableHeaders} data={tableData2} columnWidths={columnWidths}/>
      </div>
    </div>
  );
}
