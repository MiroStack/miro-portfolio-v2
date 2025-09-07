import Logo from '../../asset/images/mylogo-nobg.png'
export const Nav=()=>{
  return(

      <nav className="flex items-center w-[70%] fixed top-5 left-[50%] translate-x-[-50%] bg-white200 p-2 rounded-sm">
        <div className="flex items-center hover:cursor-pointer">
            <img src={Logo} alt="logo" className='h-10 w-12'/>
            <h2 className="font-jersey text-2xl text-red200 tracking-wider" >MIRO</h2>
        </div>
        <ul className="flex gap-5 text-red200 font-semibold ml-auto">
            <li className='cursor-pointer hover:text-black'>
                home
            </li>
            <li className='cursor-pointer hover:text-black'>
                about
            </li>
             <li className='cursor-pointer hover:text-black'>
                projects
            </li>
             <li className='cursor-pointer hover:text-black'>
                contacts
            </li>
        </ul>
      </nav>
   
  )    
}