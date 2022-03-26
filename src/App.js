import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Linkbar from "./components/Linkbar";
import Footer from "./components/Footer";
import FooterBottom from "./components/FooterBottom";
import Home from "./components/pages/Home";
import Noticias from "./components/pages/Noticias";
import Vagas from "./components/pages/Vagas";
import Classificados from "./components/pages/Classificados";
import Projetos from "./components/pages/Projetos";
import Login from "./components/pages/Login";
import Signin from "./components/pages/Signin";
import RecuperarSenha from "./components/pages/RecuperarSenha";
import PainelUser from "./components/pages/PainelDoUsuario";
import PainelAdmin from "./components/pages/PainelDoAdministrador";
import EditarInformacoes from "./components/pages/EditarInformacoes";
import PostarNoticia from "./components/pages/PostarNoticia";
import PostarVaga from "./components/pages/PostarVaga";
import PostarClas from "./components/pages/PostarClas";
import PostarProj from "./components/pages/PostarProjeto";
import RemoverUsuarios from "./components/pages/RemoverUsuarios";
import RemoverConteudo from "./components/pages/RemoverConteudo";
import LerNoticia from "./components/pages/LerNoticia";
import LerVagas from "./components/pages/LerVagas";
import LerClassificado from "./components/pages/LerClassificado";
import LerProjeto from "./components/pages/LerProjeto";

function App() {
  return (
    <>
      <Router>
        <Linkbar/>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/noticias' element={<Noticias />} />
          <Route exact path='/vagas' element={<Vagas />} />
          <Route exact path='/classificados' element={<Classificados />} />
          <Route exact path='/projetos' element={<Projetos />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/signin' element={<Signin />} />
          <Route exact path='/recuperarsenha' element={<RecuperarSenha />} />
          <Route exact path='/paineluser' element={<PainelUser />} />
          <Route exact path='/paineladmin' element={<PainelAdmin />} />
          <Route exact path='/editarinfos' element={<EditarInformacoes />} />
          <Route exact path='/postarnoticia' element={<PostarNoticia />} />
          <Route exact path='/postarvaga' element={<PostarVaga />} />
          <Route exact path='/postarclas' element={<PostarClas />} />
          <Route exact path='/postarproj' element={<PostarProj />} />
          <Route exact path='/removerusuarios' element={<RemoverUsuarios />} />
          <Route exact path='/removerconteudo' element={<RemoverConteudo />} />
          <Route exact path='/lernoticia' element={<LerNoticia />} />
          <Route exact path='/lervagas' element={<LerVagas />} />
          <Route exact path='/lerclassificado' element={<LerClassificado />} />
          <Route exact path='/lerprojeto' element={<LerProjeto />} />
        </Routes>
        <Footer />
        <FooterBottom />
      </Router>
    </>
  );
}

export default App;