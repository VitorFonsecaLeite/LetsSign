import { useNavigate } from 'react-router';
import logo from '../../../assets/labels/Logo.png';
import CustomButton from '../../Buttom';
import '../index.css';
import { CircleUserRound } from 'lucide-react';

export default function Header() {
  const signPagePath = "assing-document"
  const navigate = useNavigate();
  return (
    <header className="navbar border">
      <img src={logo} alt="Logo" className="logo" />
      <div className="d-none d-md-flex align-items-center header-actions" style={{ gap: '40px' }}>
        <CustomButton
          color="#1FC387"
          width="250px"
          text="Enviar Documentos"
          onClick={() => navigate(signPagePath)}
          hoverColor="#29B984"
          rounded={true}
          textColor="white"
        />
        <CircleUserRound style={{ cursor: 'pointer' }} color="#565656" />
      </div>
    </header>
  );
}
