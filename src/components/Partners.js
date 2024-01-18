const Partners = () => {
    const members = [
        {
            img: "/smartbia.png",
            name: "Smartbi Oy",
            role: "default",
        }
    ];

    return (
        <div className="py-48 flex flex-wrap justify-between items-center">
            {members.map((member, index) => (
                <div
                    key={index}
                    className="w-full md:w-1/4 p-4 my-12 flex flex-col items-center text-center"
                >
                    {" "}
                    {/* Modified here */}
                    <img
                        src={member.img}
                        alt={member.name}
                        className="w-48 h-48 rounded-full mb-8"
                    />
                    <h2
                        className="text-xl font-bold mb-2"
                        style={{ fontFamily: "CAMechano" }}
                    >
                        {member.name}
                    </h2>
                    <p className="mb-1" style={{ fontFamily: "CAMechano" }}>
                        {member.role}
                    </p>
                    <a
                        href={`mailto:${member.email}`}
                        className="text-gray-400 hover:text-gray-200 mb-1"
                        style={{ fontFamily: "CAMechano" }}
                    >
                        {member.email}
                    </a>
                    <p style={{ fontFamily: "CAMechano" }}>{member.telegram}</p>
                </div>
            ))}
        </div>
    );
};

export default Partners;
