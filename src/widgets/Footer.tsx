import Link from 'next/link';

const Footer = () => {
  return (
    <div className="container mx-auto py-5">
      <span className="text-lg font-semibold">&copy; AirBnb INC</span>
      <ul className="flex gap-2">
        <li>
          <Link href="/" className="hover:text-500">
            Privacidade
          </Link>
        </li>
        <li>&middot;</li>
        <li>
          <Link href="/" className="hover:text-500">
            Termos
          </Link>
        </li>
        <li>&middot;</li>
        <li>
          <Link href="/" className="hover:text-500">
            Mapa do site
          </Link>
        </li>
        <li>&middot;</li>
        <li>
          <Link href="/" className="hover:text-500">
            Informações da empresa
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
