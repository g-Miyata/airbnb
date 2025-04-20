import Link from 'next/link';
import Logo from '@/components/Logo';
import IconButton from '@/components/IconButton';
import {IconUserCircle} from '@/assets/icons/icon'

const Header = () => {
  return (
    <div className="py-6 flex justify-between items-center">
      <Logo />

      <div className="flex gap-6">
        <Link className="font-semibold" href="/">
          Acomodações
        </Link>
        <Link className="opacity-60" href="/">
          Experiências
        </Link>
      </div>
      <IconButton icon={(
        <IconUserCircle size={20} aria-label="User Icon"/>
      )}>
        Entrar
      </IconButton>


    </div>
  );
};

export default Header;
