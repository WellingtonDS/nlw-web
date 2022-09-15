import { GameController, MagnifyingGlassPlus } from "phosphor-react";
import * as Dialog from '@radix-ui/react-dialog';
import './styles/main.css';
import logoImg from './assets/logo-nlw.svg';
import { GamerBanner } from './components/GamerBanner';
import { CreateAdBanner } from './components/CreateAdBanner';
import { useEffect, useState } from 'react';
import { Input } from "./components/form/input";
interface Game {
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    ads: number;
  }

}
function App() {

  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    fetch('http://localhost:3333/games')
    .then(response => response.json())
    .then(data =>{
      setGames(data)
      
    })
  }, [])
  
  return (
    <div className='max-w-[1344px] mx-auto flex flex-col items-center my-20'>
      <img src={logoImg} alt="" />

      <h1 className='text-6xl text-white font-black mt-20' >
        Seu <span className='text-transparent bg-nlw-gradient bg-clip-text' >duo</span> está aqui.
      </h1>

      <div className='grid grid-cols-6 gap-6 mt-16'>
        {games.map( game => {
          return (
            <GamerBanner
            key={game.id} 
            bannerUrl={game.bannerUrl} 
            title={game.title} 
            adsCount={game._count.ads}/>
          )
        })}
      </div>

      <Dialog.Root>
        <CreateAdBanner/>
        
        <Dialog.Portal>
          <Dialog.Overlay className="bg-black/60 inset-0 fixed"/>
          
          <Dialog.Content className="fixed bg-[#2A2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-lg shadow-black/25">
            <Dialog.Title className="text-3xl font-black"> Publique um anúncio</Dialog.Title>
          
                <form className="mt-8 flex flex-col gap-4">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="game" className="font-semibold"> Qual o game?</label>
                    <Input id="game" placeholder="Selecione o game que deseja jogar"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="name">Seu nome</label>
                    <Input id="name" placeholder="Como te chamam dentro do game?" />
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="yearsPlaying" >Joga há quantos anos?</label>
                      <Input id="yearsPlaying" type="number" placeholder="Tudo bem se for ZERO" />
                    </div>
                  
                    <div className="flex flex-col gap-2">
                      <label htmlFor="discord"> Qual o seu Discord?</label>
                      <Input id="discord" type="text" placeholder="Usuario#0000" />
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="weekDays"> Quando costuma jogar?</label>
                      <div className="grid grid-cols-4 gap-2">
                        <button
                         className="w-8 h-8 rounded bg-zinc-900"
                         title="Domingo"
                         >D
                         </button>
                        
                        <button
                         className="w-8 h-8 rounded bg-zinc-900"
                         title="Segunda"
                         >S
                         </button>
                        
                        <button
                         className="w-8 h-8 rounded bg-zinc-900"
                         title="Terça"
                         >T
                         </button>
                        
                        <button
                         className="w-8 h-8 rounded bg-zinc-900"
                         title="Quarta"
                         >Q
                         </button>
                        
                        <button
                         className="w-8 h-8 rounded bg-zinc-900"
                         title="Quinta"
                         >Q
                         </button>
                        
                        <button
                         className="w-8 h-8 rounded bg-zinc-900"
                         title="Sexta"
                         >S
                         </button>
                        
                        <button
                         className="w-8 h-8 rounded bg-zinc-900"
                         title="Sabado"
                         >S
                         </button>
                      </
                      div>
                    </div>

                    <div className="flex flex-col gap-2 flex-1">
                      <label htmlFor="hourStart"> Qual o horário do dia?</label>
                      <div className="grid grid-cols-2 gap-1 text-indigo-400">
                        <Input id="hourStart" type="time" placeholder="De" />
                        <Input id="hourEnd" type="time" placeholder="Até" />
                      </div>
                    </div>
                  </div>

                  <div className="mt-2 flex gap-2 text-sm">
                    <Input type="checkbox"/>
                    Costumo me conectar ao chat de voz
                  </div>

                  <footer className="mt-4 flex justify-end gap-4">
                    <Dialog.Close type="button" className="bg-zinc-600 px-5 h-12 rounded-md font-semibold hover:bg-zinc-400">Cancelar</Dialog.Close>
                    <button type="submit" className="bg-violet-800 px-5 h-12 rounded-md font-semibold flex items-center gap-3 hover:bg-violet-400">
                      <GameController size={24}/>
                      Encontrar Duo</button>
                  </footer>

                </form>
          </Dialog.Content>
        </Dialog.Portal>
        
      </Dialog.Root>
    </div>
  )
}

export default App