import { Text } from './components/Text'
import './styles/global.css'
export function App() {
  return (
    <>
      <h1 className='text-2xl'>Hello world</h1>
      <Text>Faça login para continuar</Text>
      <button type='submit' className='bg-cyan-500 font-semibold text-white rounded px-4 py-2 hover:bg-cyan-700'
      >
        Enviar
      </button>
    </>
  )
}
