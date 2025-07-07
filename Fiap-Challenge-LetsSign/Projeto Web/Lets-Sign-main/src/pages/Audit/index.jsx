import React from 'react';
import Table from '../../components/Table';
import CustomButton from '../../components/Buttom';
import './style.css';

export default function Audit() {
  const tableHeaders = [
    'Documentos', 
    'Ultima assinatura', 
    'Grupo', 
    'Status', 
    'Assinatura', 
    'Criado em'
  ];

  const generateTestData = (count) => {
    return Array(count).fill().map(() => (
      ['Contrato para Teste', '27/11/2024', 'RH', 'Finalizado', 'Concluídas', '26/11/2024']
    ));
  };

  const tableData = generateTestData(14);

  const columnWidths = ['25%', '15%', '10%', '15%', '15%', '20%'];

  const handleExport = () => {
    console.log('Exportando dados...');
  };

  return (
    <div className="content">
      <h3>Histórico</h3>
      <h6>Histórico das últimas assinaturas</h6>
      
      <Table
        headers={tableHeaders}
        data={tableData}
        columnWidths={columnWidths}
      />
      
      <div className="Button" style={{ gap: '40px' }}>
        <CustomButton
          color="#1FC387"
          width="250px"
          text="Exportar para CSV"
          onClick={handleExport}
          hoverColor="#29B984"
          rounded={true}
          textColor="white"
        />
      </div>
    </div>
  );
}