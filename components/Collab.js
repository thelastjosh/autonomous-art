import Image from 'next/image';
import verses from './img_src/verses.png';
import metagov from './img_src/metagov.png';

const Collab = () => <div className="w-full flex items-center justify-end pt-10">
  <a href="https://metagov.org" className="m-4"><Image
    src={metagov}
    alt="Metagov Logo"
    width="85px"
    height="85px"
  /></a>
  <span>&</span>
  <a href="https://verses.xyz" className="m-4"><Image
    src={verses}
    alt="Verses Logo"
    width="75px"
    height="75px"
  /></a>
</div>

export default Collab;
