import './style.css';
import Table from '../../components/Table'
import CustomButton from '../../components/Buttom';
export default function Documents() {
  
  const tableHeaders = [
    'Documentos', 
    'Origem', 
    'Grupos', 
    'Status', 
    'Assinatura', 
    'Criado em'
  ];

  const generateTestData = (count) => {
    return Array(count).fill().map(() => (
      ['Contrato para Teste', 'Importado', 'RH', 'Pronto para assinar', 'Aguardando', '26/11/2024']
    ));
  };
  const tableData = generateTestData(10);

  const columnWidths = ['25%', '15%', '10%', '15%', '15%', '20%'];
  
  return (
    <div className='content'>
      <div id="table-wrapper">
        <h3>Documentos</h3>
        <h6>Listagem de documentos</h6>
        <section id="buttons">
          <CustomButton 
            color='#1FC387'
            width='250px'
            text='novo documento'
            onClick={() => console.log(123)}
            hoverColor='#29B984'
            rounded={true}
            textColor='white'/>
          <CustomButton 
            color='#1FC387'
            width='250px'
            text='nova pasta'
            onClick={() => console.log(123)}
            hoverColor='#29B984'
            rounded={true}
            textColor='white'/>
          <CustomButton 
            color='#53BFED'
            width='250px'
            text='usar modelo'
            onClick={() => console.log(123)}
            hoverColor='#40A7D3'
            rounded={true}
            textColor='white'/>
          <CustomButton 
            color='#53BFED'
            width='250px'
            text='enviar documento'
            onClick={() => console.log(123)}
            hoverColor='#40A7D3'
            rounded={true}
            textColor='white'/>
        </section>
        <div className="terceira">
          <Table headers={tableHeaders} data={tableData} columnWidths={columnWidths}/>
        </div>
      </div>
    </div>
  );
}
