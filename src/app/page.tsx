import CadastroCredenciamneto1 from "./components/cadastroCredenciamento1/cadastroCredenciamento1";
import CadastroInicial from "./components/cadastroInicial/CadastroInicial";
import CadastroInversor from "./components/cadastroInversor/cadastroInversor";

export default function Home() {
  return (
    <main>
      <CadastroInicial />
      <CadastroCredenciamneto1 />
      <CadastroInversor />
    </main>
  );
}