import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className='flex justify-between items-center bg-pink-500 py-4 w-full text-white'>
      <div className='flex items-center container max-w-7xl px-4'>
        {/* Logo */}
        <Link to='/'>
          <img
            src="https://ik.imagekit.io/w0ctnknwb/Logo.png?updatedAt=1725463898147"
            alt="Logo"
            className='w-40'
          />
        </Link>

        {/* Links e Ícones */}
        <div className='flex items-center gap-4 ml-auto'>
          <Link to='/categorias' className='hover:underline'>Início</Link>
          <Link to='/categorias' className='hover:underline'>Categorias</Link>
          <Link to='/cadcategoria' className='hover:underline'>Cadastrar Categoria</Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;