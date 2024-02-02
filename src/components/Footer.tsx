interface Props {
  navs: { link: string; name: string }[];
  address: string;
  socials: { link: string; type: string }[];
  phone: string;
  copyright: string;
}

const Footer: React.FC<Props> = ({
  address,
  copyright,
  navs,
  phone,
  socials,
}) => {
  return (
    <footer className='pb-8 pt-16 text-center lg:px-48 bg-ltbg1 dark:bg-dkbg1 text-black dark:text-white'>
      <div className='flex flex-col items-center justify-evenly lg:flex-row lg:justify-between'>
        <div className='hidden lg:block'>
          <p className='text-left'>{address}</p>
          <p className='text-left'>{phone}</p>
        </div>
        <div>
          <nav className='mb-8 flex flex-col items-center gap-2 lg:flex-row lg:justify-end lg:gap-8'>
            {navs.map((nav) => (
              <a className='' href={`${nav.link}`} key={nav.name}>
                {nav.name}
              </a>
            ))}
            <a href='/contact' className=''>
            <button className='transform rounded-xl bg-other px-4 py-2 text-lg transition duration-300 ease-in-out bg-tertiary hover:scale-110 hover:bg-accent'>
              CONTACT US
            </button>
          </a>
          </nav>
          <nav className='mb-8 flex justify-center gap-4 lg:justify-end lg:gap-8'>
            {socials.map((social) => (
              <a className='text-lg' href={`${social.link}`} key={social.type}>
                <i className={`fa-brands fa-${social.type} text-2xl`}></i>
              </a>
            ))}
          </nav>
        </div>
      </div>
      <p className='text-center text-sm text-neutral-400'>{copyright}</p>
    </footer>
  );
};

export default Footer;
