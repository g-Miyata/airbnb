import { IconPhoto, IconToolsKitchen2, IconDesk, IconPool, IconBrandCarbon, IconSailboat, IconWifi, IconParking, IconAlarmSmoke, IconDog } from '@/assets/icons/icon';
import { Accommodation } from '@/types/AirbnbData';

interface AccommodationDetailsProps {
  accommodation: Accommodation;
}

const AccommodationDetails = ({ accommodation }: AccommodationDetailsProps) => {
  return (
    <div className="w-full pt-4">
      <h2 className="text-xl font-semibold">{accommodation.title}</h2>
      <ul className="flex gap-2">
        <li>10 hospedes</li>
        <li>&middot;</li>
        <li>5 quartos</li>
        <li>&middot;</li>
        <li>5 camas</li>
        <li>&middot;</li>
        <li>6 banheiros</li>
      </ul>
      <h2 className="text-xl font-semibold py-4">O que esse lugar oferece?</h2>

      <ul className="py-4 grid grid-cols-2 items-center gap-y-6">
        <li className="flex gap-1.5">
          <IconPhoto />
          <span>Visita para as montanhas</span>
        </li>
        <li className="flex gap-1.5">
          <IconToolsKitchen2 />
          <span>Cozinha</span>
        </li>
        <li className="flex gap-1.5">
          <IconDesk />
          <span>Espaço para trabalho exclusivo</span>
        </li>
        <li className="flex gap-1.5">
          <IconBrandCarbon />
          <span>Alarme de segurança para gás</span>
        </li>
        <li className="flex gap-1.5">
          <IconWifi />
          <span>Wi-Fi rápido (83 Mbps)</span>
        </li>
        <li className="flex gap-1.5">
          <IconDog />
          <span>Permitido animais</span>
        </li>
        <li className="flex gap-1.5">
          <IconPool />
          <span>Piscina Privada</span>
        </li>
        <li className="flex gap-1.5">
          <IconSailboat />
          <span>Vista para as águas</span>
        </li>
        <li className="flex gap-1.5">
          <IconParking />
          <span>Estacionamento incluído</span>
        </li>
        <li className="flex gap-1.5">
          <IconAlarmSmoke />
          <span>Detector de fumaça</span>
        </li>
      </ul>
    </div>
  );
};

export default AccommodationDetails;
