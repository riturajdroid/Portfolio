interface TileProps {
    num: string;
    title: string;
    arr: string[];
}

const Tile = ({ num, title, arr }: TileProps) => {
    // Filter out empty placeholder strings
    const skills = arr.filter(item => item.trim() !== '');

    return (
        <div className='
            group
            w-full
            border-[1.5px] border-[#6763f0]/50
            hover:border-[#6763f0]
            p-5 m-[5px] rounded-2xl
            bg-[#ffffff08]
            hover:bg-[#6763f0]/10
            shadow-[0_0_0px_rgba(103,99,240,0)]
            hover:shadow-[0_0_24px_rgba(103,99,240,0.25)]
            transition-all duration-300
            flex flex-col gap-4
        '>
            {/* Card header */}
            <div className='flex items-start justify-between'>
                <div>
                    {/* Category number */}
                    <span className='text-3xl font-bold tracking-[0.2em] text-[#6763f0] uppercase font-retro'>
                        {num}
                    </span>
                    {/* Title */}
                    <h3 className='text-[#e6e6e6] text-2xl font-bold mt-1 leading-tight'>
                        {title}
                    </h3>
                </div>
                {/* Decorative corner accent */}
                <div className='w-2 h-2 rounded-full bg-[#6763f0] mt-1 opacity-60 group-hover:opacity-100 transition-opacity duration-300' />
            </div>

            {/* Divider */}
            <div className='h-px bg-gradient-to-r from-[#6763f0]/60 via-[#6763f0]/20 to-transparent' />

            {/* Skill chips */}
            <div className='flex flex-col gap-2'>
                {skills.map((item, index) => (
                    <div
                        key={index}
                        className='flex items-center gap-2.5 group/item'
                    >
                        {/* Bullet dot */}
                        <span className='w-1.5 h-1.5 rounded-full bg-[#6763f0]/60 group-hover/item:bg-[#6763f0] flex-shrink-0 transition-colors duration-200' />
                        <span className='text-[#a1a1aa] text-s group-hover/item:text-[#e6e6e6] transition-colors duration-200'>
                            {item}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Tile
