const Partners = () => {
    const members = [
        {
            img: "/smartbia.png",
            name: "Smartbi Oy",
            role: "default",
            link: "https://smartbi.fi/"
        }
    ];

    return (
        <div>

            <p style={{ fontFamily: "CAMechano", fontSize: 50, width: "100%", textAlign: "center" }}>{"PARTNERSHIPS"}</p>
            <div className="pt-12 pb-48 flex flex-wrap justify-center items-center textAlign-center" >
                {members.map((member, index) => (
                    <div
                        onClick={() => window.open(member.link, '_blank')}
                        key={index}
                        className="w-full md:w-1/4 p-4 my-12 flex flex-col items-center text-center hover:cursor-pointer"
                    >
                        {" "}
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
                    </div>
                ))}
            </div>
        </div >
    );
};

export default Partners;
