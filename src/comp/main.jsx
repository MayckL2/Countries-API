import Pais from './pais.jsx'
import lupaClara from  '../img/lupaClara.png'
import lupaEscura from  '../img/lupaEscura.png'

function Main(){

    return(
        <main className='
        bg-slate-800
        p-10
        '>
            <section className='flex justify-between'>

            <div className='
            bg-slate-700
            px-5
            rounded-md
            flex
            justify-around
            w-fit
            h-10
            gap-5
            my-10
            '>

            <img 
            className='
            w-5
            object-contain
            '
            src={lupaClara} alt="" />
            <input 
            className='
            h-full
            bg-transparent
            '
            placeholder='Search for a country...'
            type="text" />
            </div>

            <div className='
            bg-slate-700
            px-5
            rounded-md
            flex
            justify-around
            items-center
            w-fit
            h-10
            gap-5
            my-10
            relative
            '>

            <p className='
            text-white
            cursor-pointer'>Filter by Region</p>
            <img src="" alt="" />
            <ul className='
            absolute
            top-14
            bg-slate-700
            rounded-md
            flex
            flex-col
            gap-2
            py-3'>
                <li className='px-14 text-white cursor-pointer hover:text-slate-950'>Africa</li>
                <li className='px-14 text-white cursor-pointer hover:text-slate-950'>America</li>
                <li className='px-14 text-white cursor-pointer hover:text-slate-950'>Asia</li>
                <li className='px-14 text-white cursor-pointer hover:text-slate-950'>Oceania</li>
                <li className='px-14 text-white cursor-pointer hover:text-slate-950'>Europa</li>    
            </ul>                
            </div>
            </section>

            <h1>main</h1>
            <Pais name='brasil'/>
        </main>
    )
 }

 export default Main