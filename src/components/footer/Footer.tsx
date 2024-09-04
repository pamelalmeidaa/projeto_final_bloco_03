import { FacebookLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className='flex flex-col items-center bg-pink-500 text-white py-6'>
      <p className='text-lg font-bold'>Farmácia Saúde & Vida | Copyright: {year}</p>
      <div className='flex gap-4 mt-2'>
        <a
          href="https://www.facebook.com/itpaam/"  
          rel="noopener noreferrer"
          aria-label="Facebook"
        >
          <FacebookLogo size={24} />
        </a>
        <a
          href="https://www.instagram.com/itpaam/"  
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <InstagramLogo size={24} />
        </a>
        <a
          href="https://www.linkedin.com/in/pamelasalgadoa/" 
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <LinkedinLogo size={24} />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
