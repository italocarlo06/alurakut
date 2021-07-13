
import { MainGrid } from '../src/components/MainGrid';
import { Box } from '../src/components/Box';
import { AlurakutMenu, OrkutNostalgicIconSet } from '../src/lib/AlurakutCommons';
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations';

function ProfileSideBar({ githubUser }){
  return (
    <Box>
     <img src={`https://github.com/${githubUser}.png`} style={{ borderRadius: '8px'}}/>
    </Box>
  );
}

export default function Home() {
  const githubUser = 'omariosouto';
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
        </div>

        <div className="profileRelationsArea" style={{gridArea: 'profileRelationsArea'}}>
          <ProfileRelationsBoxWrapper >
            <h2 className="smallTitle">Pessoas da Comunidade ({pessoasFavoritas.length})</h2>
            <ul>
              {pessoasFavoritas.map( pessoa => {
                return (
                  <li>
                    <a href={`/users/${pessoa}`} key={pessoa}>
                      <img src={`https://github.com/${pessoa}.png`}></img>
                      <span>{pessoa}</span>
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
