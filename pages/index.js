import { useState } from 'react';
import { MainGrid } from '../src/components/MainGrid';
import { Box } from '../src/components/Box';
import { 
  AlurakutMenu, 
  OrkutNostalgicIconSet, 
  AlurakutProfileSidebarMenuDefault 
} from '../src/lib/AlurakutCommons';
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations';

function ProfileSideBar({ githubUser }){
  return (
    <Box as="aside">
     <img src={`https://github.com/${githubUser}.png`} style={{ borderRadius: '8px'}}/>

     <hr />

     <a className="boxLink" href={`https://github.com/${githubUser}`}>
       @{githubUser}
     </a>

     <hr />

     <AlurakutProfileSidebarMenuDefault />
    </Box>
  );
}

export default function Home() {
  const githubUser = 'omariosouto';
  const [ comunidades, setComunidades ] = useState([]);
  const pessoasFavoritas = [
    'juunegreiros', 
    'omariosouto', 
    'rafaballerini', 
    'peas',
    'marcobrunodev',
    'felipefialho'
  ]
  return (
    <>
      <AlurakutMenu />
      <MainGrid>
        <div className="profileArea" style={{gridArea: 'profileArea'}}>
          <ProfileSideBar  githubUser={githubUser} />
        </div>
        
        <div className="welcomeArea" style={{gridArea: 'welcomeArea'}}>
          <Box >
            <h1 className="title">Bem Vindo</h1>
            <OrkutNostalgicIconSet />
          </Box>

          <Box>
            <h2 className="subTitle">O que você deseja fazer ?</h2>
            <form onSubmit={ function handleCriarComunidade(e){
                e.preventDefault();
                const dadosDoForm = new FormData(e.target);

                const comunidade = {
                  id: new Date().toISOString(),
                  title: dadosDoForm.get('title'),
                  image: dadosDoForm.get('image')
                }

                setComunidades([...comunidades, comunidade]);
                console.log(comunidades);
            } }>
              <div>
                <input 
                  placeholder="Qual o nome da sua comunidade?" 
                  name="title" 
                  aria-label="Qual o nome da sua comunidade?"
                  type="text"
                />
              </div>

              <div>
                <input 
                  placeholder="Coloque uma url para usarmos de capa" 
                  name="image" 
                  aria-label="Coloque uma url para usarmos de capa"
                  type="text"
                />
              </div>

              <button>
                Criar comunidade
              </button>
            </form>
          </Box>
        </div>

        <div className="profileRelationsArea" style={{gridArea: 'profileRelationsArea'}}>
          <ProfileRelationsBoxWrapper >
            <h2 className="smallTitle">Pessoas da Comunidade ({pessoasFavoritas.length})</h2>
            <ul>
              {pessoasFavoritas.map( pessoa => {
                return (
                  <li key={pessoa}>
                    <a href={`/users/${pessoa}`} >
                      <img src={`https://github.com/${pessoa}.png`}></img>
                      <span>{pessoa}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </ProfileRelationsBoxWrapper>
          <ProfileRelationsBoxWrapper >
            <h2 className="smallTitle">Comunidades ({comunidades.length})</h2>
            <ul>
              {comunidades.map( comunidade => {
                return (
                  <li key={comunidade.id}>
                    <a href={`/community/${comunidade.title}`} >
                      <img src={`https://via.placeholder.com/300x300.png`}></img>
                      <span>{comunidade.title}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </ProfileRelationsBoxWrapper>
        </div>


      </MainGrid>
    </>
  )
}
