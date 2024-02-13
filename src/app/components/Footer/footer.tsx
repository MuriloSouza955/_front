import "./footer.css";
import Image from "next/image";

export default function Footer(){
    return (
        <main className="container">
            <hr></hr>
            <p className="body">2021 © Controller - Todos os direitos reservados.</p>
            <p className="body"><a href="https://controllersolar.com.br/termos-de-uso/">Termos de Uso</a> e <a href="https://controllersolar.com.br/politica-de-privacidade-2/">Política de Privacidade</a></p>
            <div className="logo">
                <a href="https://api.whatsapp.com/send?phone=5548998220044&text=Ol%C3%A1%2C%20gostaria%20de%20tirar%20uma%20d%C3%BAvida!"><Image src="/icons8-whatsapp-64.png" width={25} height={25} alt="Logo WhatsApp"/></a>
                <a href="https://www.facebook.com/Controller-Monitoramento-Solar-102818388125087/"><Image src="/icons8-facebook-novo-50.png" width={25} height={25} alt="Logo Facebook"/></a>
                <a href="https://www.instagram.com/controller.solar/?hl=pt-br"><Image src="/icons8-instagram-50.png" width={25} height={25} alt="Logo Instagran"/></a>
            </div>
        </main>
    )
}