import "./style.css";
import CustomButton from '../../components/Buttom';

export default function LoadDocuments() {

    return (
        <div className="content">
            <h3>Carregar documento</h3>

            <div className="upload-box">
                <div className="upload-content">
                    <img src="src/assets/labels/pdf-icon.png" className="pdf-icon" alt="ícone PDF" />
                    <CustomButton 
                        color="#1FC387"
                        width="250px"
                        text="Anexar Documentos"
                        onClick={() => console.log(123)}
                        hoverColor="#29B984"
                        rounded={true}
                        textColor="white"
                    />
                    <p className="upload-instruction">Ou solte seu arquivo aqui.</p>
                </div>
            </div>
        </div>
    );

}