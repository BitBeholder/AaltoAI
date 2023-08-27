const BoardMembers = () => {
  const members = [
    { img: '/profiilikuva.png', name: 'Ernesti Sario', role: 'Chairman', email: 'chairman@aaltoai.com', telegram: '@InternetRookie' },
    { img: '/sampolenkola.png', name: 'Sampo Lenkola', role: 'Vice-chairman & Marketing', email: 'vice-chairman@aaltoai.com', telegram: '@sampolenkola' },
    { img: 'https://media3.giphy.com/media/7LgKUsZiSjcRO/giphy.gif?cid=ecf05e47rgwc68g4xy1rzvhs1l49mo0r68dw3ojam6t08uc0&ep=v1_gifs_search&rid=giphy.gif&ct=g', name: 'Miikkael Tervonen', role: 'Financier', email: 'finances@aaltoai.com', telegram: '@juhomiikkael' },
    { img: '/matiasnieminen.png', name: 'Matias Nieminen', role: 'Event Manager', email: 'events@aaltoai.com', telegram: '@matoskni' },
    { img: '/samulihartikainen.png', name: 'Samuli Hartikainen', role: 'Partnerships manager', email: 'partnerships@aaltoai.com', telegram: '@samuliha' },
    { img: '/ojaswi.png', name: 'Ojaswi Tyagi', role: 'Community Manager', email: 'community@aaltoai.com', telegram: '@ojaswityagi' },
    { img: '/behramulukir.png', name: 'Behram Ulukir', role: 'Research & Education Manager', email: 'research-education@aaltoai.com', telegram: '@behramulukir' },
    { img: '/harshrathee.png', name: 'Harsh rathee', role: 'Relations Manager', email: 'relations@aaltoai.com', telegram: '@HarshRatheee' },
  ];

  return (
    <div className="py-96 flex flex-wrap justify-between items-center">
      {members.map((member, index) => (
        <div key={index} className="w-full md:w-1/4 p-4 my-12 flex flex-col items-center text-center"> {/* Modified here */}
          <img src={member.img} alt={member.name} className="w-48 h-48 rounded-full mb-8" />
          <h2 className="text-xl font-bold mb-2" style={{ fontFamily: 'CAMechano' }}>{member.name}</h2>
          <p className="mb-1" style={{ fontFamily: 'CAMechano' }}>{member.role}</p>
          <a href={`mailto:${member.email}`} className="text-gray-400 hover:text-gray-200 mb-1" style={{ fontFamily: 'CAMechano' }}>{member.email}</a>
          <p style={{ fontFamily: 'CAMechano' }}>{member.telegram}</p>
        </div>
      ))}
    </div>
  );
}

export default BoardMembers;
